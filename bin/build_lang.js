// src/args.ts
import { access } from "fs/promises";

// src/lang_code_utils.ts
var RESERVED_THREE_LETTER_BASENAMES = /* @__PURE__ */ new Set(["con", "prn", "aux", "nul"]);
function langCodeToFileBase(langCode) {
  if (langCode.length !== 3) return langCode;
  return RESERVED_THREE_LETTER_BASENAMES.has(langCode) ? `${langCode}_` : langCode;
}

// src/args.ts
function readOptionValue(args, index) {
  return String(args[index + 1] ?? "");
}
function parseMergeMode(value) {
  if (value !== "smart" && value !== "append") {
    throw new Error(`Invalid merge mode: ${value}. Expected "smart" or "append".`);
  }
  return value;
}
function validateCrossModeArgs(outputLang2, langs2, positional) {
  if (positional.length > 0) {
    throw new Error(`In cross mode, language codes must follow --cross. Unexpected positional args: ${positional.join(", ")}`);
  }
  if (!outputLang2) {
    throw new Error("Cross-language builds require an output code: --out <code>");
  }
  if (outputLang2.length === 3) {
    throw new Error(`Cross-language output code must not be 3 characters: ${outputLang2}`);
  }
  if (!/^[a-zA-Z0-9_]+$/.test(outputLang2)) {
    throw new Error(`Invalid output code: ${outputLang2}`);
  }
  if (langs2.length < 2) {
    throw new Error("Cross-language builds require at least two input languages.");
  }
}
async function getLanguageArgs(langDir2) {
  const args = structuredClone(process.argv);
  args.shift();
  args.shift();
  const langs2 = [];
  const positional = [];
  let cross = false;
  let outputLang2 = "";
  let mergeMode = "append";
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--cross") {
      cross = true;
      while (i + 1 < args.length && !String(args[i + 1]).startsWith("-")) {
        langs2.push(String(args[i + 1]));
        i += 1;
      }
      continue;
    }
    if (arg === "--out" || arg === "-o") {
      outputLang2 = readOptionValue(args, i);
      i += 1;
      continue;
    }
    if (arg === "--merge-mode") {
      mergeMode = parseMergeMode(readOptionValue(args, i));
      i += 1;
      continue;
    }
    if (arg.startsWith("-")) {
      throw new Error(`Unknown option: ${arg}`);
    }
    positional.push(arg);
  }
  if (!cross) {
    langs2.push(...positional);
  }
  if (langs2.length === 0) {
    throw new Error("Please add at least one language code as an argument. For example: `node build_lang.ts eng`.");
  }
  for (const lang of langs2) {
    await doesFileExist(`${langDir2}/${langCodeToFileBase(lang)}.yaml`);
  }
  if (cross) {
    validateCrossModeArgs(outputLang2, langs2, positional);
  } else {
    outputLang2 = outputLang2 || langs2[0];
  }
  return { langs: langs2, outputLang: outputLang2, cross, mergeMode };
}
async function doesFileExist(path) {
  try {
    await access(path);
  } catch {
    throw new Error(`${path} does not exist as a valid language file`);
  }
  return true;
}

// src/yaml_files.ts
import { readFile } from "fs/promises";
import YAML from "yaml";
function dedupeArrayItems(items) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const item of items) {
    const key = JSON.stringify(item);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}
function mergeVariables(base, incoming) {
  for (const [key, incomingValue] of Object.entries(incoming)) {
    if (!(key in base)) {
      base[key] = incomingValue;
      continue;
    }
    const baseValue = base[key];
    if (Array.isArray(baseValue) && Array.isArray(incomingValue)) {
      base[key] = dedupeArrayItems([...baseValue, ...incomingValue]);
      continue;
    }
    base[key] = incomingValue;
  }
}
function mergeCrossOptions(base, incoming) {
  if (!incoming) return;
  const additiveKeys = /* @__PURE__ */ new Set([
    "expand_characters",
    "alternate_straight_apostrophe_characters"
  ]);
  for (const [key, incomingValue] of Object.entries(incoming)) {
    if (!additiveKeys.has(key)) {
      continue;
    }
    if (!Array.isArray(incomingValue)) {
      continue;
    }
    const current = Array.isArray(base[key]) ? base[key] : [];
    base[key] = dedupeArrayItems([...current, ...incomingValue]);
  }
}
async function getYamlData(langs2, langDir2, config = {}) {
  let result = {
    variables: {},
    options: {},
    books: [],
    translations: []
  };
  const isCross = Boolean(config.cross);
  try {
    const defaultContent = await getFileContent(`${langDir2}/_defaults.yaml`);
    const defaultData = YAML.parse(defaultContent);
    if (defaultData.variables) {
      result.variables = { ...defaultData.variables };
    }
    if (defaultData.options) {
      result.options = { ...defaultData.options };
    }
  } catch {
    throw new Error(`Error loading _defaults.yaml from ${langDir2}/_defaults.yaml. This file is required.`);
  }
  for (let i = 0; i < langs2.length; i++) {
    const lang = langs2[i];
    const fileContent = await getFileContent(`${langDir2}/${langCodeToFileBase(lang)}.yaml`);
    const parsed = YAML.parse(fileContent);
    const data = parsed && typeof parsed === "object" ? parsed : {};
    if (i === 0) {
      if (data.variables) {
        result.variables = { ...result.variables, ...data.variables };
      }
      if (data.options) {
        result.options = { ...result.options, ...data.options };
      }
      if (data.ordinals) {
        result.ordinals = data.ordinals;
      }
      if (data.translations) {
        result.translations = data.translations;
      }
    } else if (isCross) {
      if (data.variables) {
        mergeVariables(result.variables, data.variables);
      }
      if (data.options) {
        mergeCrossOptions(result.options, data.options);
      }
      if (data.ordinals) {
        const current = Array.isArray(result.ordinals) ? result.ordinals : [];
        const incoming = Array.isArray(data.ordinals) ? data.ordinals : [];
        result.ordinals = dedupeArrayItems([...current, ...incoming]);
      }
      if (data.translations) {
        const current = Array.isArray(result.translations) ? result.translations : [];
        result.translations = dedupeArrayItems([...current, ...data.translations]);
      }
    }
    if (data.books) {
      const currentOptions = i === 0 ? { ...result.options, ...data.options || {} } : result.options;
      result.books = [...result.books, { start_language: lang, options: currentOptions }, ...data.books];
    }
  }
  return result;
}
async function getFileContent(path) {
  try {
    const content = await readFile(path, "utf8");
    return content;
  } catch {
    throw new Error(`Error reading ${path}`);
  }
}

// src/books.ts
function isRecord(value) {
  return Boolean(value) && typeof value === "object";
}
function normalizeBookTextItem(item) {
  if (typeof item === "string" || typeof item === "number") {
    return { text: String(item) };
  }
  if (isRecord(item) && "text" in item) {
    const text = String(item.text);
    const keys = Object.keys(item);
    const extraKeys = keys.filter((k) => k !== "text" && k !== "normalize");
    if (extraKeys.length > 0) {
      throw new Error(`Unsupported book text item: ${JSON.stringify(item)}`);
    }
    const normalize = item.normalize;
    if (normalize == null) {
      return { text };
    }
    if (normalize !== "none") {
      throw new Error(`Unsupported book text item: ${JSON.stringify(item)}`);
    }
    return { text, normalize: "none" };
  }
  throw new Error(`Invalid book text item: ${JSON.stringify(item)}`);
}
function normalizeBookTexts(raw) {
  if (!Array.isArray(raw)) {
    throw new Error(`Invalid book texts: ${JSON.stringify(raw)}`);
  }
  return raw.map((item) => normalizeBookTextItem(item));
}
function textSpecKey(spec) {
  return `${spec.text}\0${spec.normalize ?? ""}`;
}
function addTextSpec(map, spec) {
  const key = textSpecKey(spec);
  if (!map.has(key)) map.set(key, spec);
}
function normalizeBookEntry(raw) {
  if (!isRecord(raw)) return null;
  const rawTexts = raw.texts ?? raw.names;
  if (rawTexts == null) {
    throw new Error("Book entry missing texts");
  }
  const texts = normalizeBookTexts(rawTexts);
  const osis = raw.osis;
  if (!Array.isArray(osis) && typeof osis !== "string") {
    throw new Error(`Invalid book osis: ${JSON.stringify(osis)}`);
  }
  return {
    osis,
    texts,
    combine: raw.combine === false ? false : true
  };
}
function expandBookNames(book, sourceId, trailingDotsMode2) {
  const expandedBooks = [];
  const combine = book.combine !== false;
  const texts = book.texts;
  if (typeof book.osis === "string") {
    expandedBooks.push({
      osis: book.osis,
      texts,
      combine,
      groupKey: "",
      sourceId,
      hasBefore: false
    });
  } else if (Array.isArray(book.osis)) {
    if (book.osis.length > 0 && typeof book.osis[0] === "string") {
      expandedBooks.push({
        osis: book.osis,
        texts,
        combine,
        groupKey: "",
        sourceId,
        hasBefore: false
      });
    } else {
      const osisObjects = book.osis;
      const groupMap = /* @__PURE__ */ new Map();
      const orderedGroups = [];
      const withAffix = osisObjects.filter((osisObj) => osisObj.before || osisObj.after);
      const withoutAffix = osisObjects.filter((osisObj) => !osisObj.before && !osisObj.after);
      for (const osisObj of [...withAffix, ...withoutAffix]) {
        let finalNames = [];
        const hasBefore = Boolean(osisObj.before);
        if (osisObj.before) {
          const joinStr = typeof osisObj.join === "string" ? osisObj.join : " ";
          const beforeValues = expandTrailingDotVariants(
            Array.isArray(osisObj.before) ? osisObj.before : [osisObj.before],
            trailingDotsMode2
          );
          for (const beforeValue of beforeValues) {
            for (const spec of texts) {
              finalNames.push({ text: `${beforeValue}${joinStr}${spec.text}`, normalize: spec.normalize });
            }
          }
        } else if (osisObj.after) {
          const joinStr = typeof osisObj.join === "string" ? osisObj.join : " ";
          const afterValues = expandTrailingDotVariants(
            Array.isArray(osisObj.after) ? osisObj.after : [osisObj.after],
            trailingDotsMode2
          );
          for (const afterValue of afterValues) {
            for (const spec of texts) {
              finalNames.push({ text: `${spec.text}${joinStr}${afterValue}`, normalize: spec.normalize });
            }
          }
        } else {
          finalNames = texts.map((spec) => ({ ...spec }));
        }
        const key = `${osisObj.before ?? ""}|${osisObj.after ?? ""}|${osisObj.join ?? ""}`;
        const existing = groupMap.get(key);
        if (!existing) {
          const entry = { osis: [osisObj.osis], texts: /* @__PURE__ */ new Map(), groupKey: key, hasBefore };
          for (const spec of finalNames) addTextSpec(entry.texts, spec);
          groupMap.set(key, entry);
          orderedGroups.push(entry);
        } else {
          if (!existing.osis.includes(osisObj.osis)) {
            existing.osis.push(osisObj.osis);
          }
          for (const spec of finalNames) addTextSpec(existing.texts, spec);
        }
      }
      for (const group of orderedGroups) {
        expandedBooks.push({
          osis: group.osis.length === 1 ? group.osis[0] : group.osis,
          texts: [...group.texts.values()],
          combine,
          groupKey: group.groupKey,
          sourceId,
          hasBefore: group.hasBefore
        });
      }
    }
  }
  return expandedBooks;
}
function mergeBooks(yamlData2) {
  const expandedBooks = [];
  const trailingDotsMode2 = yamlData2.options?.trailing_dots_in_variables ?? "as_is";
  let sourceId = 0;
  for (const bookEntryRaw of yamlData2.books) {
    if (isRecord(bookEntryRaw) && bookEntryRaw.start_language) {
      continue;
    }
    const book = normalizeBookEntry(bookEntryRaw);
    if (!book) continue;
    const expanded = expandBookNames(book, sourceId, trailingDotsMode2);
    expandedBooks.push(...expanded);
    sourceId += 1;
  }
  const processedBooks2 = [];
  const groupIndex = /* @__PURE__ */ new Map();
  for (const expandedBook of expandedBooks) {
    const osisList = Array.isArray(expandedBook.osis) ? expandedBook.osis : [expandedBook.osis];
    const groupKey = `${expandedBook.sourceId}|${expandedBook.groupKey}|${osisList.join("|")}`;
    const existingIndex = groupIndex.get(groupKey);
    if (existingIndex == null) {
      groupIndex.set(groupKey, processedBooks2.length);
      processedBooks2.push({
        osis: expandedBook.osis,
        texts: [...expandedBook.texts],
        groupKey: expandedBook.groupKey,
        sourceId: expandedBook.sourceId,
        hasBefore: expandedBook.hasBefore
      });
    } else {
      const entry = processedBooks2[existingIndex];
      const existing = new Map(entry.texts.map((spec) => [textSpecKey(spec), spec]));
      for (const spec of expandedBook.texts) {
        addTextSpec(existing, spec);
      }
      entry.texts = [...existing.values()];
      entry.hasBefore = entry.hasBefore || expandedBook.hasBefore;
    }
  }
  return processedBooks2;
}
function expandTrailingDotVariants(values, mode) {
  if (mode !== "optional") return values;
  const out = /* @__PURE__ */ new Set();
  for (const value of values) {
    out.add(value);
    if (value.endsWith(".") || value.length === 0) continue;
    out.add(`${value}.`);
  }
  return [...out];
}

// src/regexps.ts
import { createRequire } from "node:module";
var require2 = createRequire(import.meta.url);
var { RegExpBuilder } = require2("@pemistahl/grex");
var maxRecurseLevel = 5;
var spacePlaceholder = "\0";
var escapeRegex = (value) => value.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
function expandNormalizedStrings(strings, normalize) {
  if (normalize === "none") return strings;
  const out = /* @__PURE__ */ new Set();
  for (const str of strings) {
    out.add(str);
    const nfd = str.normalize("NFD");
    const stripped = nfd.replace(/\p{M}+/gu, "");
    out.add(stripped);
    out.add(nfd.normalize("NFC"));
    for (const variant of expandAccentVariants(str)) {
      out.add(variant);
    }
  }
  return [...out];
}
function expandAccentVariants(str, maxVariants = 256) {
  const choices = [];
  for (const ch of str) {
    const nfd = ch.normalize("NFD");
    const base = nfd.replace(/\p{M}+/gu, "");
    if (base !== ch) {
      choices.push([ch, base]);
    } else {
      choices.push([ch]);
    }
  }
  let variants = [""];
  for (const opts of choices) {
    const next = [];
    for (const v of variants) {
      for (const opt of opts) {
        next.push(v + opt);
        if (next.length > maxVariants) return [];
      }
    }
    variants = next;
  }
  return variants;
}
function applyReplaceSpaces(strings, replaceSpacesWith2) {
  if (!replaceSpacesWith2) return strings;
  const matcher = new RegExp(replaceSpacesWith2.regexp, "gu");
  return strings.map((str) => str.replace(matcher, spacePlaceholder));
}
function replacePlaceholderInPattern(pattern, replaceSpacesWith2) {
  if (!replaceSpacesWith2) return pattern;
  const replacement = replaceSpacesWith2.replacement;
  let out = pattern.replace(/\\x00/g, replacement);
  out = out.replace(/\x00/g, replacement);
  return out;
}
function unescapeHyphenOutsideCharClass(pattern) {
  let out = "";
  let inClass = false;
  let escaped = false;
  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    if (escaped) {
      if (ch === "-" && !inClass) {
        out += "-";
      } else {
        out += `\\${ch}`;
      }
      escaped = false;
      continue;
    }
    if (ch === "\\") {
      escaped = true;
      continue;
    }
    if (ch === "[" && !inClass) {
      inClass = true;
      out += ch;
      continue;
    }
    if (ch === "]" && inClass) {
      inClass = false;
      out += ch;
      continue;
    }
    out += ch;
  }
  if (escaped) {
    out += "\\";
  }
  return out;
}
function normalizePattern(pattern, replaceSpacesWith2) {
  return unescapeHyphenOutsideCharClass(replacePlaceholderInPattern(pattern, replaceSpacesWith2));
}
function buildRecursive(strings, level = 1, normalize = "combining_characters", replaceSpacesWith2 = null) {
  if (level > maxRecurseLevel) {
    throw new Error(`Maximum recursion level (${maxRecurseLevel}) exceeded while building regexp pattern`);
  }
  const normalizedStrings = expandNormalizedStrings(strings, normalize);
  const patternStrings = applyReplaceSpaces(normalizedStrings, replaceSpacesWith2);
  const testStrings = normalizedStrings;
  const pattern = buildPattern(patternStrings, replaceSpacesWith2);
  const failures = [];
  const fullMatchRegexp = new RegExp(`^${pattern}$`);
  for (let i = 0; i < normalizedStrings.length; i++) {
    if (!fullMatchRegexp.test(testStrings[i])) {
      failures.push(normalizedStrings[i]);
    }
  }
  if (failures.length === 0) {
    return pattern;
  }
  if (process.env.GREX_DEBUG) {
    console.log(`Level ${level}: ${failures.length} failures out of ${normalizedStrings.length} strings`);
  }
  const failurePattern = buildRecursive(failures, level + 1, normalize, replaceSpacesWith2);
  const combinedSource = `${failurePattern}|${pattern}`;
  const finalTestStrings = normalizedStrings;
  const finalFullMatchRegexp = new RegExp(`^${combinedSource}$`);
  const finalFailures = [];
  for (let i = 0; i < normalizedStrings.length; i++) {
    if (!finalFullMatchRegexp.test(finalTestStrings[i])) {
      finalFailures.push(normalizedStrings[i]);
    }
  }
  if (finalFailures.length > 0) {
    throw new Error(`Final validation failed for ${finalFailures.length} strings: ${finalFailures.slice(0, 5).join(", ")}${finalFailures.length > 5 ? "..." : ""}`);
  }
  return combinedSource;
}
function buildPattern(strings, replaceSpacesWith2) {
  if (strings.length === 0) {
    throw new Error("Cannot build pattern from empty string array");
  }
  const pattern = RegExpBuilder.from(strings).withMinimumSubstringLength(3).withoutAnchors().build();
  return normalizePattern(pattern, replaceSpacesWith2);
}
function normalizeVariableItems(variable) {
  return variable.map((item) => {
    if (typeof item === "string") {
      return { text: item };
    }
    return item;
  });
}
function applyTrailingDotsMode(items, mode) {
  if (mode !== "optional") return items;
  return items.map((item) => {
    if (!item.text || item.regexp) return item;
    let text = item.text;
    if (text.endsWith(".") && text.length > 1) {
      text = text.slice(0, -1);
    }
    const suffix = "\\.?\\s*";
    const regexp_after = item.regexp_after ? `${suffix}${item.regexp_after}` : suffix;
    return { ...item, text, regexp_after };
  });
}
function buildVariablePattern(variable, normalize = "combining_characters", replaceSpacesWith2 = null, trailingDotsMode2 = "as_is") {
  if (!variable || variable.length === 0) return "";
  const complexItems = applyTrailingDotsMode(normalizeVariableItems(variable), trailingDotsMode2);
  const regexpItems = complexItems.filter((item) => item.regexp).map((item) => {
    const content = item.regexp;
    return item.regexp_after ? `${content}${item.regexp_after}` : content;
  });
  const textItemsWithRegexpAfter = complexItems.filter((item) => item.text && !item.regexp && item.regexp_after).flatMap((item) => {
    const mode = item.normalize === "none" ? "none" : normalize;
    const texts = applyReplaceSpaces(expandNormalizedStrings([item.text], mode), replaceSpacesWith2);
    return texts.map((text) => `${escapeRegex(text)}${item.regexp_after}`);
  });
  let pattern;
  const allParts = [];
  const textOnlyItems = complexItems.filter((item) => item.text && !item.regexp && !item.regexp_after);
  if (textOnlyItems.length > 0) {
    const textValues = textOnlyItems.flatMap((item) => {
      const mode = item.normalize === "none" ? "none" : normalize;
      return applyReplaceSpaces(expandNormalizedStrings([item.text], mode), replaceSpacesWith2);
    });
    const textPattern = RegExpBuilder.from(textValues).withMinimumSubstringLength(3).withoutAnchors().build();
    allParts.push(unescapeHyphenOutsideCharClass(textPattern));
  }
  allParts.push(...textItemsWithRegexpAfter);
  allParts.push(...regexpItems);
  if (allParts.length === 1) {
    pattern = allParts[0];
  } else if (allParts.length > 1) {
    pattern = `(?:${allParts.join("|")})`;
  } else {
    pattern = "";
  }
  return normalizePattern(pattern, replaceSpacesWith2);
}
function buildVariablePatternsForRegexp(variable, normalize = "combining_characters", replaceSpacesWith2 = null, trailingDotsMode2 = "as_is") {
  if (!variable || variable.length === 0) return "";
  const complexItems = applyTrailingDotsMode(normalizeVariableItems(variable), trailingDotsMode2);
  const firstRegexpAfter = complexItems[0].regexp_after;
  const allSameRegexpAfter = complexItems.every((item) => item.regexp_after === firstRegexpAfter);
  if (allSameRegexpAfter && firstRegexpAfter) {
    const textItems = complexItems.filter((item) => item.text && !item.regexp).map((item) => item.text);
    const regexpItems = complexItems.filter((item) => item.regexp).map((item) => item.regexp);
    let basePattern;
    if (textItems.length > 0 && regexpItems.length > 0) {
      const textValues = complexItems.filter((item) => item.text && !item.regexp).flatMap((item) => {
        const mode = item.normalize === "none" ? "none" : normalize;
        return applyReplaceSpaces(expandNormalizedStrings([item.text], mode), replaceSpacesWith2);
      });
      const textPattern = RegExpBuilder.from(textValues).withMinimumSubstringLength(1).withoutAnchors().build();
      basePattern = `(?:${unescapeHyphenOutsideCharClass(textPattern)}|${regexpItems.join("|")})`;
    } else if (textItems.length > 0) {
      const textValues = complexItems.filter((item) => item.text && !item.regexp).flatMap((item) => {
        const mode = item.normalize === "none" ? "none" : normalize;
        return applyReplaceSpaces(expandNormalizedStrings([item.text], mode), replaceSpacesWith2);
      });
      basePattern = unescapeHyphenOutsideCharClass(
        RegExpBuilder.from(textValues).withMinimumSubstringLength(1).withoutAnchors().build()
      );
    } else {
      basePattern = regexpItems.length === 1 ? regexpItems[0] : `(?:${regexpItems.join("|")})`;
    }
    return normalizePattern(`(?:${basePattern}${firstRegexpAfter})`, replaceSpacesWith2);
  }
  const parts = complexItems.flatMap((item) => {
    if (item.regexp) {
      const content = item.regexp;
      return item.regexp_after ? [`${content}${item.regexp_after}`] : [content];
    }
    const mode = item.normalize === "none" ? "none" : normalize;
    const texts = applyReplaceSpaces(expandNormalizedStrings([item.text || ""], mode), replaceSpacesWith2);
    return texts.map((text) => {
      const content = escapeRegex(text);
      return item.regexp_after ? `${content}${item.regexp_after}` : content;
    });
  });
  if (parts.length === 1) {
    return normalizePattern(parts[0], replaceSpacesWith2);
  }
  return normalizePattern(`(?:${parts.join("|")})`, replaceSpacesWith2);
}
function buildTranslationPattern(strings, normalize = "combining_characters", replaceSpacesWith2 = null) {
  if (!strings || strings.length === 0) return "";
  const values = applyReplaceSpaces(expandNormalizedStrings(strings, normalize), replaceSpacesWith2);
  const pattern = RegExpBuilder.from(values).withMinimumSubstringLength(1).withoutAnchors().build();
  return normalizePattern(pattern, replaceSpacesWith2);
}

// src/book_regexps.ts
var testamentMap = makeValidOsises();
function normalizeExpandCharacters(options) {
  const out = {};
  if (!options) return out;
  const entries = Array.isArray(options.expand_characters) ? options.expand_characters : [];
  for (const entry of entries) {
    if (!entry || typeof entry !== "object") continue;
    const key = String(entry.character ?? "");
    const values = Array.isArray(entry.expand) ? entry.expand.map((v) => String(v)) : [];
    if (!key || values.length === 0) continue;
    const set = new Set(values);
    set.add(key);
    out[key] = Array.from(set);
  }
  const alternateApostrophes = Array.isArray(options.alternate_straight_apostrophe_characters) ? options.alternate_straight_apostrophe_characters.map((v) => String(v)) : [];
  if (alternateApostrophes.length > 0) {
    const set = new Set(out["'"] ?? ["'"]);
    for (const alt of alternateApostrophes) set.add(alt);
    out["'"] = Array.from(set);
  }
  return out;
}
function buildBookRegexps(processedBooks2, options = {}, normalize = "combining_characters", replaceSpacesWith2 = null, strictLiterals = false) {
  const bookRegexps2 = [];
  const expandCharacters2 = normalizeExpandCharacters(options);
  const orderedBooks = reorderNumberedBooks(processedBooks2);
  for (const book of orderedBooks) {
    const normalNames = [];
    const noNormalizeNames = [];
    for (const spec of book.texts) {
      if (spec.normalize === "none") {
        noNormalizeNames.push(spec.text);
      } else {
        normalNames.push(spec.text);
      }
    }
    const expand = (names) => {
      if (Object.keys(expandCharacters2).length === 0) return names;
      return expandCharacterVariants(names, expandCharacters2);
    };
    const expandedNormal = expand(normalNames);
    const expandedNoNormalize = expand(noNormalizeNames);
    const namesArray = [...expandedNormal, ...expandedNoNormalize];
    const strictSpaces = replaceSpacesWith2 ? {
      regexp: replaceSpacesWith2.regexp,
      replacement: replaceSpacesWith2.replacement.replace("\\s*", "\\s+")
    } : null;
    if (namesArray.length === 0) {
      const osisDisplay = Array.isArray(book.osis) ? book.osis.join(", ") : book.osis;
      console.warn(`Skipping book ${osisDisplay}: no texts found`);
      continue;
    }
    let patternString = "";
    if (strictLiterals) {
      patternString = buildLiteralAlternation(namesArray, replaceSpacesWith2);
    } else {
      const parts = [];
      if (expandedNoNormalize.length > 0) {
        parts.push(buildBookPattern(expandedNoNormalize, options, "none", strictSpaces));
      }
      if (expandedNormal.length > 0) {
        parts.push(buildBookPattern(expandedNormal, options, normalize, replaceSpacesWith2));
      }
      if (parts.length === 1) {
        patternString = parts[0];
      } else {
        patternString = `(?:${parts.join("|")})`;
      }
      const shadowed = findShadowedNames(namesArray, patternString, options.after_book_allowed_characters?.regexp);
      if (shadowed.length > 0 && shadowed.length < namesArray.length) {
        const literal = buildLiteralAlternation(shadowed, replaceSpacesWith2);
        patternString = `(?:${literal}|${patternString})`;
      }
    }
    const osisArray = Array.isArray(book.osis) ? book.osis : [book.osis];
    const testaments = /* @__PURE__ */ new Set();
    const testamentBooks = {};
    for (const osis of osisArray) {
      const testament = testamentMap[osis] || "o";
      testaments.add(testament);
      testamentBooks[osis] = testament;
    }
    const testamentString = Array.from(testaments).sort().join("");
    const beforeChars = options.before_book_allowed_characters.regexp;
    const afterChars = options.after_book_allowed_characters.regexp;
    const beforeEveryBook = options.before_every_book.regexp;
    const afterEveryBook = options.after_every_book.regexp;
    const isNumberedOsis = osisArray.some((osis) => /^\d/.test(osis));
    const preBookPattern = buildPreBookPattern(beforeChars, isNumberedOsis);
    const regexPattern = `${preBookPattern}${beforeEveryBook}(${patternString})${afterEveryBook}(?:(?=${afterChars})|$)`;
    const regexp = new RegExp(regexPattern, "giu");
    const regexpObject = {
      osis: osisArray,
      testament: testamentString,
      regexp
    };
    if (testaments.size > 1) {
      regexpObject.testament_books = testamentBooks;
    }
    bookRegexps2.push(regexpObject);
  }
  return bookRegexps2;
}
function expandCharacterVariants(names, expandCharacters2) {
  const out = /* @__PURE__ */ new Set();
  const keys = Object.keys(expandCharacters2);
  for (const name of names) {
    if (keys.length === 0) {
      out.add(name);
      continue;
    }
    let variants = [""];
    for (const ch of name) {
      const alternates = expandCharacters2[ch];
      const next = [];
      if (alternates && alternates.length > 0) {
        for (const v of variants) {
          for (const alt of alternates) {
            next.push(v + alt);
          }
        }
      } else {
        for (const v of variants) next.push(v + ch);
      }
      variants = next;
    }
    for (const v of variants) out.add(v);
  }
  return [...out];
}
function buildLiteralAlternation(names, replaceSpacesWith2) {
  const escaped = names.slice().sort((a, b) => b.length - a.length).map((name) => escapeBookLiteral(name, replaceSpacesWith2));
  return escaped.length === 1 ? escaped[0] : `(?:${escaped.join("|")})`;
}
function escapeBookLiteral(text, replaceSpacesWith2) {
  const escapeRegex2 = (value) => value.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  let out = "";
  for (const ch of text) {
    if (ch === " " && replaceSpacesWith2) {
      out += replaceSpacesWith2.replacement;
    } else {
      out += escapeRegex2(ch);
    }
  }
  return out;
}
function buildBookPattern(names, options, normalize, replaceSpacesWith2) {
  const patternString = buildRecursive(names, 1, normalize, replaceSpacesWith2);
  const bad = findShadowedNames(names, patternString, options.after_book_allowed_characters?.regexp);
  if (bad.length === 0 || bad.length === names.length) {
    return patternString;
  }
  const good = names.filter((name) => !bad.includes(name));
  return `(?:${buildLiteralAlternation(bad, replaceSpacesWith2)}|${buildBookPattern(good, options, normalize, replaceSpacesWith2)})`;
}
function findShadowedNames(names, patternString, afterCharsPattern) {
  if (!afterCharsPattern) return [];
  let afterChars = null;
  try {
    afterChars = new RegExp(afterCharsPattern, "u");
  } catch {
    return [];
  }
  const bad = /* @__PURE__ */ new Set();
  const candidates = [" ", "-", "–", "—", ".", ":", ";", "/", "؟"];
  const suffixes = candidates.filter((ch) => afterChars.test(ch));
  const testRegexp = new RegExp(`^(${patternString})(?:(?=${afterCharsPattern})|$)`, "iu");
  for (const name of names) {
    let matchedFull = false;
    const trySuffixes = suffixes.length > 0 ? suffixes : [" "];
    for (const suffix of trySuffixes) {
      const testStr = `${name}${suffix}`;
      const match = testRegexp.exec(testStr);
      if (match && match[1] === name) {
        matchedFull = true;
        break;
      }
    }
    if (!matchedFull) bad.add(name);
  }
  return [...bad];
}
function buildPreBookPattern(beforeChars, usePreNumberBook) {
  if (!usePreNumberBook) return `(?:^|(?<=${beforeChars}))`;
  const needsLookbehind = /\p\{L\}/.test(beforeChars);
  const expanded = expandNegatedCharClass(beforeChars, needsLookbehind);
  const lookbehind = needsLookbehind ? `(?<!\\d:(?=\\d))` : "";
  return `(?:^|(?<=${expanded})${lookbehind})`;
}
function expandNegatedCharClass(base, useUnicodeNumbers) {
  const match = base.match(/^\[\^([^\]]+)\]$/);
  if (!match) return base;
  const chars = match[1];
  if (useUnicodeNumbers && chars.includes("\\p{N}")) return base;
  if (!useUnicodeNumbers && chars.includes("0-9")) return base;
  const numberClass = useUnicodeNumbers ? "\\p{N}" : "0-9";
  return `[^${chars}${numberClass}]`;
}
function reorderNumberedBooks(books) {
  const entries = books.map((book, index) => {
    const osisArray = Array.isArray(book.osis) ? book.osis : [book.osis];
    const baseKeys = osisArray.map((osis) => osis.replace(/^\d+/, ""));
    const textValues = book.texts.map((spec) => spec.text);
    const textSet = new Set(textValues);
    const maxTextLength = textValues.reduce((max, text) => Math.max(max, text.length), 0);
    return {
      book,
      index,
      osisArray,
      baseKeys,
      hasNumberedOsis: osisArray.some((osis) => /^\d/.test(osis)),
      texts: textValues,
      textSet,
      sourceId: book.sourceId,
      maxTextLength
    };
  });
  entries.sort((a, b) => {
    if (a.sourceId !== b.sourceId) {
      return a.index - b.index;
    }
    if (a.sourceId === b.sourceId && a.book.hasBefore !== b.book.hasBefore) {
      return a.book.hasBefore ? -1 : 1;
    }
    const sharesText = a.textSet && b.textSet && a.texts.some((text) => b.textSet.has(text));
    if (sharesText && a.maxTextLength !== b.maxTextLength) {
      return b.maxTextLength - a.maxTextLength;
    }
    const sharesBaseKey = a.baseKeys.some((key) => b.baseKeys.includes(key));
    const sameOsisList = a.osisArray.join("|") === b.osisArray.join("|");
    if (sameOsisList && a.book.hasBefore !== b.book.hasBefore) {
      return a.book.hasBefore ? -1 : 1;
    }
    if (sharesBaseKey && a.book.hasBefore !== b.book.hasBefore) {
      return a.book.hasBefore ? -1 : 1;
    }
    if (sharesText && a.hasNumberedOsis !== b.hasNumberedOsis) {
      return a.hasNumberedOsis ? -1 : 1;
    }
    if (a.hasNumberedOsis !== b.hasNumberedOsis) {
      const aBefore = a.hasNumberedOsis && a.baseKeys.some((key) => b.osisArray.includes(key));
      const bBefore = b.hasNumberedOsis && b.baseKeys.some((key) => a.osisArray.includes(key));
      if (aBefore || bBefore) return aBefore ? -1 : 1;
    }
    return a.index - b.index;
  });
  return entries.map((entry) => entry.book);
}
function makeValidOsises() {
  const validOsises = [
    "Gen",
    "Exod",
    "Lev",
    "Num",
    "Deut",
    "Josh",
    "Judg",
    "Ruth",
    "1Sam",
    "2Sam",
    "1Kgs",
    "2Kgs",
    "1Chr",
    "2Chr",
    "Ezra",
    "Neh",
    "Esth",
    "Job",
    "Ps",
    "Prov",
    "Eccl",
    "Song",
    "Isa",
    "Jer",
    "Lam",
    "Ezek",
    "Dan",
    "Hos",
    "Joel",
    "Amos",
    "Obad",
    "Jonah",
    "Mic",
    "Nah",
    "Hab",
    "Zeph",
    "Hag",
    "Zech",
    "Mal",
    "Matt",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Rom",
    "1Cor",
    "2Cor",
    "Gal",
    "Eph",
    "Phil",
    "Col",
    "1Thess",
    "2Thess",
    "1Tim",
    "2Tim",
    "Titus",
    "Phlm",
    "Heb",
    "Jas",
    "1Pet",
    "2Pet",
    "1John",
    "2John",
    "3John",
    "Jude",
    "Rev",
    "Tob",
    "Jdt",
    "GkEsth",
    "Wis",
    "Sir",
    "Bar",
    "PrAzar",
    "Sus",
    "Bel",
    "SgThree",
    "EpJer",
    "1Macc",
    "2Macc",
    "3Macc",
    "4Macc",
    "1Esd",
    "2Esd",
    "PrMan",
    "AddEsth",
    "AddDan"
  ];
  const out = {};
  let type = "o";
  for (const osis of validOsises) {
    if (osis === "Matt") type = "n";
    if (osis === "Tob") type = "a";
    out[osis] = type;
  }
  return out;
}

// src/translations.ts
import { parse as parseYaml } from "yaml";
function parseRow(row) {
  if (typeof row === "string") {
    if (!row) return null;
    const parts = row.split(",");
    const text = (parts[0] || "").trim();
    if (!text) return null;
    const osis = (parts[1] || "").trim();
    const system = (parts[2] || "").trim();
    const out = { text };
    if (osis) out.osis = osis;
    if (system) out.system = system;
    return out;
  }
  if (!row || !row.text) return null;
  return {
    text: row.text,
    osis: row.osis,
    system: row.system
  };
}
function parseTranslationRows(rows = []) {
  const texts = [];
  const aliases = {};
  for (const row of rows) {
    const parsed = parseRow(row);
    if (!parsed) continue;
    const text = parsed.text;
    const osis = (parsed.osis || "").trim();
    const system = (parsed.system || "").trim();
    texts.push(text);
    if (osis || system) {
      const key = text.toLowerCase();
      const alias = {
        system: system || "default"
      };
      if (osis) {
        alias.osis = osis;
      }
      aliases[key] = alias;
    }
  }
  return { texts, aliases };
}
function parseTranslationSystemsYaml(source) {
  const trimmed = source.trim();
  if (!trimmed) return {};
  return parseYaml(trimmed) ?? {};
}

// src/build_lang.ts
import { mkdir, readFile as readFile2, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import YAML2 from "yaml";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var langDir = resolve(__dirname, "../data");
var translationsDir = resolve(__dirname, "../translation_systems");
var namesDir = resolve(__dirname, "../book_names/all");
var langOutputDir = resolve(__dirname, "../lang");
var buildArgs = await getLanguageArgs(langDir);
var langs = buildArgs.langs;
var yamlData = await getYamlData(langs, langDir, { cross: buildArgs.cross });
function isRecord2(value) {
  return Boolean(value) && typeof value === "object";
}
var rawOptions = isRecord2(yamlData.options) ? yamlData.options : {};
var rawVariables = isRecord2(yamlData.variables) ? yamlData.variables : {};
var translationRows = Array.isArray(yamlData.translations) ? yamlData.translations : [];
var normalizeMode = rawOptions.normalize ?? "combining_characters";
var trailingDotsMode = rawOptions.trailing_dots_in_variables ?? "as_is";
var getVariable = (name) => {
  const value = rawVariables[name];
  return Array.isArray(value) ? value : [];
};
var getOptionRegexp = (name) => {
  const value = rawOptions[name];
  if (isRecord2(value) && typeof value.regexp === "string") return value.regexp;
  throw new Error(`Missing required option regexp: ${name}`);
};
var replaceSpacesWith = (() => {
  const value = rawOptions.replace_characters_with;
  if (!value) return null;
  if (Array.isArray(value)) {
    const first = value[0];
    const regexp = isRecord2(first) ? first.regexp : first;
    const replacement = value[1];
    if (typeof regexp === "string" && typeof replacement === "string") {
      return { regexp, replacement };
    }
    return null;
  }
  if (isRecord2(value)) {
    const regexp = value.regexp;
    const replacement = value.replacement;
    if (typeof regexp === "string" && typeof replacement === "string") {
      return { regexp, replacement };
    }
  }
  return null;
})();
function expandNegatedCharClass2(base, useUnicodeNumbers) {
  const match = base.match(/^\[\^([^\]]+)\]$/);
  if (!match) return base;
  const chars = match[1];
  if (useUnicodeNumbers && chars.includes("\\p{N}")) return base;
  if (!useUnicodeNumbers && chars.includes("0-9")) return base;
  const numberClass = useUnicodeNumbers ? "\\p{N}" : "0-9";
  return `[^${chars}${numberClass}]`;
}
function buildPreBook(beforeChars) {
  return new RegExp(`(?:^|(?<=${beforeChars}))`, "gu");
}
function buildPreNumberBook(beforeChars) {
  const needsLookbehind = /\p\{L\}/.test(beforeChars);
  const expanded = expandNegatedCharClass2(beforeChars, needsLookbehind);
  const lookbehind = needsLookbehind ? `(?<!\\d:(?=\\d))` : "";
  return new RegExp(`(?:^|(?<=${expanded})${lookbehind})`, "gu");
}
function buildPostBook(afterChars) {
  return new RegExp(`(?:(?=${afterChars})|$)`, "gu");
}
function normalizeExpandCharacters2(options) {
  const out = {};
  if (!options) return out;
  const entries = Array.isArray(options.expand_characters) ? options.expand_characters : [];
  for (const entry of entries) {
    if (!entry || typeof entry !== "object") continue;
    const key = String(entry.character ?? "");
    const values = Array.isArray(entry.expand) ? entry.expand.map((v) => String(v)) : [];
    if (!key || values.length === 0) continue;
    const set = new Set(values);
    set.add(key);
    out[key] = Array.from(set);
  }
  const alternateApostrophes = Array.isArray(options.alternate_straight_apostrophe_characters) ? options.alternate_straight_apostrophe_characters.map((v) => String(v)) : [];
  if (alternateApostrophes.length > 0) {
    const set = new Set(out["'"] ?? ["'"]);
    for (const alt of alternateApostrophes) set.add(alt);
    out["'"] = Array.from(set);
  }
  return out;
}
var expandCharacters = normalizeExpandCharacters2(rawOptions);
function expandTextVariantsForYaml(text, allowOptionalSpaces2, allowOptionalDots, expandCharacters2 = {}, maxVariants = 4096) {
  const dotChars = /* @__PURE__ */ new Set([".", "۔", "．"]);
  let variants = [""];
  for (const ch of text) {
    const next = [];
    const isSpace = ch === " ";
    const isDot = dotChars.has(ch);
    const alternates = expandCharacters2[ch];
    for (const v of variants) {
      next.push(v + ch);
      if (isSpace && allowOptionalSpaces2) {
        next.push(v);
      }
      if (isDot && allowOptionalDots) {
        next.push(v);
      }
      if (alternates && alternates.length > 0) {
        for (const alt of alternates) {
          if (alt !== ch) {
            next.push(v + alt);
          }
        }
      }
      if (next.length >= maxVariants) break;
    }
    variants = next;
    if (variants.length >= maxVariants) break;
  }
  return variants;
}
function normalizeVariableItems2(variable) {
  return variable.map((item) => {
    if (typeof item === "string") return { text: item };
    return item;
  });
}
function expandVariableCharacters(variable) {
  if (!variable || variable.length === 0) return variable;
  const items = normalizeVariableItems2(variable);
  const out = [];
  for (const item of items) {
    if (!item.text) {
      out.push(item);
      continue;
    }
    for (const text of expandTextVariantsForYaml(String(item.text), false, false, expandCharacters)) {
      out.push({ ...item, text });
    }
  }
  return out;
}
function canonicalOsisOrder() {
  return [
    "Gen",
    "Exod",
    "Lev",
    "Num",
    "Deut",
    "Josh",
    "Judg",
    "Ruth",
    "1Sam",
    "2Sam",
    "1Kgs",
    "2Kgs",
    "1Chr",
    "2Chr",
    "Ezra",
    "Neh",
    "Esth",
    "Job",
    "Ps",
    "Prov",
    "Eccl",
    "Song",
    "Isa",
    "Jer",
    "Lam",
    "Ezek",
    "Dan",
    "Hos",
    "Joel",
    "Amos",
    "Obad",
    "Jonah",
    "Mic",
    "Nah",
    "Hab",
    "Zeph",
    "Hag",
    "Zech",
    "Mal",
    "Matt",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Rom",
    "1Cor",
    "2Cor",
    "Gal",
    "Eph",
    "Phil",
    "Col",
    "1Thess",
    "2Thess",
    "1Tim",
    "2Tim",
    "Titus",
    "Phlm",
    "Heb",
    "Jas",
    "1Pet",
    "2Pet",
    "1John",
    "2John",
    "3John",
    "Jude",
    "Rev",
    "Tob",
    "Jdt",
    "GkEsth",
    "Wis",
    "Sir",
    "Bar",
    "PrAzar",
    "Sus",
    "Bel",
    "SgThree",
    "EpJer",
    "1Macc",
    "2Macc",
    "3Macc",
    "4Macc",
    "1Esd",
    "2Esd",
    "PrMan",
    "AddEsth",
    "AddDan"
  ];
}
function collapseCrossLanguageBooks(books) {
  const osisOrder = canonicalOsisOrder();
  const osisRank = /* @__PURE__ */ new Map();
  for (let i = 0; i < osisOrder.length; i += 1) {
    osisRank.set(osisOrder[i], i);
  }
  const tokenOwners = /* @__PURE__ */ new Map();
  for (const book of books) {
    const osisList = Array.isArray(book.osis) ? book.osis : [book.osis];
    for (const spec of book.texts) {
      const key = `${spec.text}\0${spec.normalize ?? ""}`;
      const row = tokenOwners.get(key) ?? [];
      row.push({
        osis: osisList,
        sourceId: book.sourceId,
        hasBefore: book.hasBefore,
        spec
      });
      tokenOwners.set(key, row);
    }
  }
  const buckets = /* @__PURE__ */ new Map();
  for (const owners of tokenOwners.values()) {
    const osisSource = /* @__PURE__ */ new Map();
    let hasBefore = false;
    let firstSource = Number.MAX_SAFE_INTEGER;
    const spec = owners[0].spec;
    for (const owner of owners) {
      hasBefore = hasBefore || owner.hasBefore;
      firstSource = Math.min(firstSource, owner.sourceId);
      for (const osis of owner.osis) {
        const current = osisSource.get(osis);
        if (current == null || owner.sourceId < current) {
          osisSource.set(osis, owner.sourceId);
        }
      }
    }
    const sortedOsis = [...osisSource.keys()].sort((a, b) => {
      const sourceA = osisSource.get(a) ?? Number.MAX_SAFE_INTEGER;
      const sourceB = osisSource.get(b) ?? Number.MAX_SAFE_INTEGER;
      if (sourceA !== sourceB) return sourceA - sourceB;
      const rankA = osisRank.get(a) ?? Number.MAX_SAFE_INTEGER;
      const rankB = osisRank.get(b) ?? Number.MAX_SAFE_INTEGER;
      if (rankA !== rankB) return rankA - rankB;
      return a.localeCompare(b);
    });
    const bucketKey = `${sortedOsis.join("|")}\0${spec.normalize ?? ""}`;
    const bucket = buckets.get(bucketKey);
    if (!bucket) {
      buckets.set(bucketKey, {
        osis: sortedOsis,
        texts: [spec],
        sourceId: firstSource,
        hasBefore
      });
    } else {
      bucket.sourceId = Math.min(bucket.sourceId, firstSource);
      bucket.hasBefore = bucket.hasBefore || hasBefore;
      bucket.texts.push(spec);
    }
  }
  const out = [...buckets.values()].map((bucket) => {
    const unique = /* @__PURE__ */ new Map();
    for (const spec of bucket.texts) {
      unique.set(`${spec.text}\0${spec.normalize ?? ""}`, spec);
    }
    return {
      osis: bucket.osis,
      texts: [...unique.values()],
      groupKey: "",
      sourceId: bucket.sourceId,
      hasBefore: bucket.hasBefore
    };
  });
  return out;
}
var mergedBooks = mergeBooks(yamlData);
var processedBooks = buildArgs.cross && buildArgs.mergeMode === "smart" ? collapseCrossLanguageBooks(mergedBooks) : mergedBooks;
var bookRegexps = buildBookRegexps(
  processedBooks,
  rawOptions,
  normalizeMode,
  replaceSpacesWith,
  buildArgs.cross
);
var { texts: translationTexts } = parseTranslationRows(translationRows);
var translationPattern = buildTranslationPattern(translationTexts, normalizeMode, replaceSpacesWith);
var translationsRegexps = translationPattern ? [new RegExp(`${translationPattern}\\b`, "gi")] : [];
async function loadTranslationSystems() {
  const systems = {};
  const defaultPath = resolve(translationsDir, "default.yaml");
  const defaultSource = await readFile2(defaultPath, "utf8");
  const defaultObj = parseTranslationSystemsYaml(defaultSource);
  if (defaultObj?.default) {
    systems.default = defaultObj.default;
  }
  const neededSystems = /* @__PURE__ */ new Set();
  for (const row of translationRows) {
    if (!row) continue;
    if (typeof row === "string") {
      const parts = row.split(",");
      const system = (parts[2] || "").trim();
      if (system) neededSystems.add(system);
      continue;
    }
    if (typeof row === "object") {
      const system = row.system?.trim();
      if (system) neededSystems.add(system);
    }
  }
  for (const system of neededSystems) {
    if (system === "default" || system === "current") continue;
    const systemPath = resolve(translationsDir, `${system}.yaml`);
    try {
      const systemSource = await readFile2(systemPath, "utf8");
      const systemObj = parseTranslationSystemsYaml(systemSource);
      if (!systemObj || typeof systemObj !== "object" || !(system in systemObj)) {
        throw new Error(`Missing translation system "${system}" in ${systemPath}`);
      }
      Object.assign(systems, systemObj);
    } catch (err) {
      if (err?.code === "ENOENT") {
        throw new Error(`Missing translation system file for "${system}" at ${systemPath}`);
      }
      throw err;
    }
  }
  return systems;
}
var translationSystems = await loadTranslationSystems();
var translationAliases = parseTranslationRows(translationRows).aliases;
var translationsClass = {
  aliases: {
    ...translationAliases,
    current: { system: "current", osis: "" },
    default: { system: "default", osis: "" }
  },
  current_system: "default",
  systems: {
    current: {},
    ...translationSystems
  }
};
var nextVariable = getVariable("next");
var nextPattern = nextVariable.length > 0 ? buildVariablePatternsForRegexp(
  expandVariableCharacters(nextVariable),
  normalizeMode,
  replaceSpacesWith,
  trailingDotsMode
) : "";
function buildMatchEndSplitPattern() {
  const matchEndMode = "as_is";
  const title = buildVariablePattern(
    expandVariableCharacters(getVariable("title")),
    normalizeMode,
    replaceSpacesWith,
    matchEndMode
  );
  const ff = buildVariablePatternsForRegexp(
    expandVariableCharacters(getVariable("ff")),
    normalizeMode,
    replaceSpacesWith,
    matchEndMode
  );
  const ab = buildVariablePatternsForRegexp(
    expandVariableCharacters(getVariable("ab")),
    normalizeMode,
    replaceSpacesWith,
    matchEndMode
  );
  const control = buildVariablePatternsForRegexp(
    expandVariableCharacters(getVariable("match_end_split_control")),
    normalizeMode,
    replaceSpacesWith,
    matchEndMode
  );
  const final = buildVariablePatternsForRegexp(
    expandVariableCharacters(getVariable("match_end_split_final")),
    normalizeMode,
    replaceSpacesWith,
    matchEndMode
  );
  const parts = [
    `\\d\\W*(?:${title})`
  ];
  if (nextPattern) {
    parts.push(`\\d\\W*(?:${nextPattern})(?:[\\s*]*\\.)?`);
  }
  parts.push(
    `\\d\\W*(?:${ff})(?:[\\s*]*\\.)?`,
    `\\d[\\s*]*(?:${ab})`,
    control,
    final
  );
  return parts.join("|");
}
function buildBookRegexpFromPattern(patternString) {
  const beforeChars = getOptionRegexp("before_book_allowed_characters");
  const afterChars = getOptionRegexp("after_book_allowed_characters");
  const beforeEveryBook = getOptionRegexp("before_every_book");
  const afterEveryBook = getOptionRegexp("after_every_book");
  const regexPattern = `(?:^|(?<=${beforeChars}))${beforeEveryBook}(${patternString})${afterEveryBook}(?:(?=${afterChars})|$)`;
  return new RegExp(regexPattern, "giu");
}
function buildOrdinalPsalmsRegexp() {
  const ordinals = Array.isArray(yamlData.ordinals) ? yamlData.ordinals : [];
  let texts = [];
  let betweenRegexp = "\\s+";
  const ordinalSpecs = [];
  let defaultAfter = [];
  for (const item of ordinals) {
    if (!isRecord2(item)) continue;
    const textsRaw = item.texts;
    if (Array.isArray(textsRaw)) {
      texts = textsRaw.map((text) => String(text));
    }
    const between = item.between;
    if (isRecord2(between) && typeof between.regexp === "string") {
      betweenRegexp = between.regexp;
    }
    const afterRaw = item.after;
    if (afterRaw != null) {
      const after = (Array.isArray(afterRaw) ? afterRaw : [afterRaw]).map((v) => String(v));
      const numbersRaw = item.numbers;
      if (numbersRaw != null) {
        const numbers = (Array.isArray(numbersRaw) ? numbersRaw : [numbersRaw]).map((v) => Number(v));
        ordinalSpecs.push({ numbers, after });
      } else {
        defaultAfter = after;
      }
    }
  }
  if (!texts.length || ordinalSpecs.length === 0 && defaultAfter.length === 0) return null;
  const numberSuffixes = /* @__PURE__ */ new Map();
  for (const spec of ordinalSpecs) {
    for (const num of spec.numbers) {
      numberSuffixes.set(num, spec.after);
    }
  }
  const digitRules = /* @__PURE__ */ new Map();
  for (const spec of ordinalSpecs) {
    const digits = new Set(spec.numbers.map((num) => Math.abs(num) % 10));
    if (digits.size !== 1) continue;
    const [digit] = digits;
    if (digit !== 1 && digit !== 2 && digit !== 3) continue;
    const teen = digit === 1 ? 11 : digit === 2 ? 12 : 13;
    if (spec.numbers.includes(teen)) continue;
    if (!digitRules.has(digit)) {
      digitRules.set(digit, spec.after);
    }
  }
  const ordinalStrings = [];
  for (let i = 1; i <= 151; i += 1) {
    let suffixes = numberSuffixes.get(i);
    if (!suffixes) {
      const mod100 = i % 100;
      const isTeen = mod100 === 11 || mod100 === 12 || mod100 === 13;
      const digitRule = !isTeen ? digitRules.get(i % 10) : void 0;
      suffixes = digitRule ?? defaultAfter;
    }
    if (!suffixes || suffixes.length === 0) continue;
    for (const suffix of suffixes) {
      ordinalStrings.push(`${i} ${suffix}`);
    }
  }
  if (ordinalStrings.length === 0) return null;
  const ordinalPattern = buildRecursive(ordinalStrings, 1, normalizeMode, replaceSpacesWith);
  const textPattern = buildRecursive(texts, 1, normalizeMode, replaceSpacesWith);
  const patternString = `${ordinalPattern}${betweenRegexp}${textPattern}`;
  return buildBookRegexpFromPattern(patternString);
}
function buildPassageComponentsPattern() {
  const parts = [];
  const add = (pattern) => {
    if (pattern) parts.push(pattern);
  };
  add(buildVariablePatternsForRegexp(
    expandVariableCharacters(getVariable("chapter")),
    normalizeMode,
    replaceSpacesWith,
    trailingDotsMode
  ));
  add(buildVariablePatternsForRegexp(
    expandVariableCharacters(getVariable("verse")),
    normalizeMode,
    replaceSpacesWith,
    trailingDotsMode
  ));
  add(buildVariablePatternsForRegexp(
    expandVariableCharacters(getVariable("ff")),
    normalizeMode,
    replaceSpacesWith,
    trailingDotsMode
  ));
  if (nextPattern) {
    add(nextPattern);
  }
  add(buildVariablePatternsForRegexp(
    expandVariableCharacters(getVariable("and")),
    normalizeMode,
    replaceSpacesWith,
    trailingDotsMode
  ));
  add(buildVariablePatternsForRegexp(
    expandVariableCharacters(getVariable("to")),
    normalizeMode,
    replaceSpacesWith,
    trailingDotsMode
  ));
  if (parts.length === 0) return "";
  return `(?:${parts.join("|")})`;
}
function buildEscapedPassagePattern() {
  const prePassageAllowed = "[^\\x1e\\x1f\\p{L}\\p{N}]";
  const validCharacters = getOptionRegexp("after_book_allowed_characters");
  const title = buildVariablePattern(
    expandVariableCharacters(getVariable("title")),
    normalizeMode,
    replaceSpacesWith,
    trailingDotsMode
  );
  const ab = buildVariablePatternsForRegexp(
    expandVariableCharacters(getVariable("ab")),
    normalizeMode,
    replaceSpacesWith,
    trailingDotsMode
  );
  const passageComponents = buildPassageComponentsPattern();
  const pattern = String.raw`
	(?:^|${prePassageAllowed})
		(
			(?:
				  (?: ch (?: apters? | a?pts?\.? | a?p?s?\.? )? \s*
					\d+ \s* (?: [\u2013\u2014\-] | through | thru | to) \s* \d+ \s*
					(?: from | of | in ) (?: \s+ the \s+ book \s+ of )?\s* )
				| (?: ch (?: apters? | a?pts?\.? | a?p?s?\.? )? \s*
					\d+ \s*
					(?: from | of | in ) (?: \s+ the \s+ book \s+ of )?\s* )
				| (?: \d+ (?: th | nd | st ) \s*
					ch (?: apter | a?pt\.? | a?p?\.? )? \s*
					(?: from | of | in ) (?: \s+ the \s+ book \s+ of )? \s* )
			)?
			\x1f(\d+)(?:/\d+)?\x1f
				(?:
				    /\d+\x1f
				  | ${validCharacters}
				  | ${title} (?![a-z])
				  | ${passageComponents}
				  | ${ab} (?!\w)
				  | $
				 )+
		)
	`.replace(/\s+/g, "");
  return decodeAsciiHex(pattern);
}
var psOrdinalRegexp = buildOrdinalPsalmsRegexp();
var firstPattern = decodeAsciiHex(buildVariablePattern(
  expandVariableCharacters(getVariable("first")),
  normalizeMode,
  replaceSpacesWith,
  trailingDotsMode
));
var secondPattern = decodeAsciiHex(buildVariablePattern(
  expandVariableCharacters(getVariable("second")),
  normalizeMode,
  replaceSpacesWith,
  trailingDotsMode
));
var thirdPattern = decodeAsciiHex(buildVariablePattern(
  expandVariableCharacters(getVariable("third")),
  normalizeMode,
  replaceSpacesWith,
  trailingDotsMode
));
var andPattern = decodeAsciiHex(buildVariablePattern(
  expandVariableCharacters(getVariable("and")),
  normalizeMode,
  replaceSpacesWith,
  trailingDotsMode
));
var toPatternRegexp = decodeAsciiHex(buildVariablePattern(
  expandVariableCharacters(getVariable("to")),
  normalizeMode,
  replaceSpacesWith,
  trailingDotsMode
));
var regexClass = {
  languages: langs,
  translations: translationsRegexps,
  first: new RegExp(`${firstPattern}`),
  second: new RegExp(`${secondPattern}`),
  third: new RegExp(`${thirdPattern}`),
  range_and: new RegExp(
    `(?:[&\\u2013\\u2014-]|${andPattern}|${toPatternRegexp})`
  ),
  range_only: new RegExp(
    `(?:[\\u2013\\u2014-]|${toPatternRegexp})`
  ),
  match_end_split: new RegExp(decodeAsciiHex(buildMatchEndSplitPattern()), "gi"),
  control: /[\x1e\x1f]/g,
  escaped_passage: new RegExp(buildEscapedPassagePattern(), "giu"),
  pre_book: buildPreBook(getOptionRegexp("before_book_allowed_characters")),
  pre_number_book: buildPreNumberBook(getOptionRegexp("before_book_allowed_characters")),
  post_book: buildPostBook(getOptionRegexp("after_book_allowed_characters")),
  all_books: [
    {
      osis: ["Ps"],
      testament: "a",
      extra: "2",
      regexp: /\b(Ps151)(?=\.1\b)/g
    },
    ...(() => {
      const ordered = [];
      for (const book of bookRegexps) {
        const osis = Array.isArray(book.osis) ? book.osis : [book.osis];
        if (osis.includes("Ps")) {
          if (psOrdinalRegexp) {
            ordered.push({
              osis: ["Ps"],
              testament: "oa",
              testament_books: { Ps: "oa" },
              extra: "1",
              regexp: psOrdinalRegexp
            });
          }
          ordered.push({
            osis: ["Ps"],
            testament: "oa",
            testament_books: { Ps: "oa" },
            regexp: book.regexp
          });
          continue;
        }
        ordered.push(book);
      }
      return ordered;
    })()
  ]
};
function expandTrailingDotVariants2(variable) {
  if (!variable || variable.length === 0) return variable;
  const items = normalizeVariableItems2(variable);
  const out = [];
  for (const item of items) {
    out.push(item);
    if (item.text) {
      const value = String(item.text);
      if (value.endsWith(".")) {
        out.push({ ...item, text: value.slice(0, -1) });
      }
    }
  }
  return out;
}
function stripRegexpAfter(variable) {
  if (!variable || variable.length === 0) return variable;
  return normalizeVariableItems2(variable).map((item) => {
    const { regexp_after, ...rest } = item;
    return rest;
  });
}
var grammarSpaces = { regexp: " ", replacement: "\\s+" };
function buildGrammarPattern(variable, includeTrailingDotVariants = false, includeRegexpAfter = true) {
  let normalized = variable;
  if (includeTrailingDotVariants) {
    normalized = expandTrailingDotVariants2(normalized);
  }
  if (!includeRegexpAfter) {
    normalized = stripRegexpAfter(normalized);
  }
  return buildVariablePatternsForRegexp(
    expandVariableCharacters(normalized),
    normalizeMode,
    grammarSpaces,
    trailingDotsMode
  );
}
function decodeAsciiHex(pattern) {
  return pattern.replace(/\\x([0-9a-fA-F]{2})/g, (match, hex) => {
    const code = Number.parseInt(hex, 16);
    const isDigit = code >= 48 && code <= 57;
    const isUpper = code >= 65 && code <= 90;
    const isLower = code >= 97 && code <= 122;
    if (isDigit || isUpper || isLower) {
      return String.fromCharCode(code);
    }
    return match;
  });
}
var andPatternBase = decodeAsciiHex(buildGrammarPattern(getVariable("and"), true));
var andPatternWithAmp = andPatternBase ? `(?:${andPatternBase}|&)` : "&";
var chapterPattern = decodeAsciiHex(buildGrammarPattern(getVariable("chapter"), true) || "chapter");
var versePattern = decodeAsciiHex(buildGrammarPattern(getVariable("verse"), true) || "verse");
var ffPattern = decodeAsciiHex(buildGrammarPattern(getVariable("ff")) || "ff");
var titlePattern = decodeAsciiHex(buildGrammarPattern(getVariable("title")) || "title");
var toPattern = decodeAsciiHex(buildGrammarPattern(getVariable("to")) || "-");
var nextPatternGrammar = nextVariable.length > 0 ? decodeAsciiHex(buildGrammarPattern(nextVariable)) : "\\x1f\\x1f\\x1f";
var abPatternRaw = decodeAsciiHex(
  buildVariablePatternsForRegexp(
    expandVariableCharacters(stripRegexpAfter(getVariable("ab"))),
    normalizeMode,
    grammarSpaces,
    "as_is"
  ) || "[a-e]"
);
var grammarOptions = {
  ab: new RegExp(`^(?:${abPatternRaw})(?!\\p{L})`, "iu"),
  and: new RegExp(`^(?:${andPatternWithAmp})`, "i"),
  c_explicit: new RegExp(`^[\\s*]*(?:${chapterPattern})[\\s*]*`, "i"),
  c_sep_eu: /^\x1f\x1f\x1f/i,
  c_sep_us: /^\x1f\x1f\x1f/i,
  cv_sep_weak: /^(?:[\s*]*["'][\s*]*|[\s*])+/i,
  cv_sep_eu: /^[\s*]*,+[\s*]*/i,
  cv_sep_us: /^[\s*]*(?::+|\.(?!\s*\.\s*\.))[\s*]*/i,
  ff: new RegExp(`^[\\s*]*(?:${ffPattern})(?![\\p{L}\\p{N}])(?:\\.(?!\\s*\\.))?`, "iu"),
  in_book_of: /^[\s*]*(?:from|of|in)[\s*]*(?:the[\s*]*book[\s*]*of[\s*]*)?/i,
  next: new RegExp(`^(?:${nextPatternGrammar})`, "i"),
  ordinal: /^(?:th|st|nd|rd)/i,
  range: new RegExp(`^[\\s*]*(?:[\\-–—]|${toPattern})+[\\s*]*`, "i"),
  sequence_eu: new RegExp(
    `^(?:[;/:&\\-–—~\\s*]|\\.(?!\\s*\\.\\s*\\.)${andPatternBase ? `|${andPatternBase}` : ""})+`,
    "i"
  ),
  sequence_us: new RegExp(
    `^(?:[,;/:&\\-–—~\\s*]|\\.(?!\\s*\\.\\s*\\.)${andPatternBase ? `|${andPatternBase}` : ""})+`,
    "i"
  ),
  space: /^[\s*]+/,
  title: new RegExp(`^[\\s*]*(?:${titlePattern})(?!\\p{L})[\\s*]*`, "iu"),
  v_explicit: new RegExp(`^[\\s*]*(?:${versePattern})[\\s*]*(?!\\p{L})`, "iu")
};
function formatValue(value, indentLevel = 0) {
  const indent = "  ".repeat(indentLevel);
  const nextIndent = "  ".repeat(indentLevel + 1);
  if (value instanceof RegExp) {
    return value.toString();
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value.map((item) => formatValue(item, indentLevel + 1));
    if (items.every((item) => !item.includes("\n"))) {
      return `[${items.join(", ")}]`;
    }
    return `[
${nextIndent}${items.join(`,
${nextIndent}`)}
${indent}]`;
  }
  if (typeof value === "object" && value !== null) {
    const entries = Object.entries(value);
    if (entries.length === 0) return "{}";
    const lines = entries.map(([key, val]) => {
      const safeKey = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
      return `${nextIndent}${safeKey}: ${formatValue(val, indentLevel + 1)}`;
    });
    if (entries.length <= 2 && lines.every((line) => !line.includes("\n"))) {
      const inlineLines = lines.map((line) => line.trim());
      return `{ ${inlineLines.join(", ")} }`;
    }
    return `{
${lines.join(",\n")}
${indent}}`;
  }
  if (typeof value === "string") {
    return JSON.stringify(value);
  }
  return String(value);
}
function formatClass(className, props, postInitLines = []) {
  const lines = [];
  lines.push(`var ${className} = class {`);
  lines.push("  constructor() {");
  for (const [key, value] of Object.entries(props)) {
    const formatted = formatValue(value, 2);
    const formattedLines = formatted.split("\n");
    if (formattedLines.length === 1) {
      lines.push(`    this.${key} = ${formattedLines[0]};`);
    } else {
      lines.push(`    this.${key} = ${formattedLines[0]}`);
      for (let i = 1; i < formattedLines.length; i++) {
        lines.push(`    ${formattedLines[i]}`);
      }
      lines[lines.length - 1] = `${lines[lines.length - 1]};`;
    }
  }
  for (const line of postInitLines) {
    lines.push(`    ${line}`);
  }
  lines.push("  }");
  lines.push("};");
  return lines.join("\n");
}
var regexpsClassOutput = formatClass("bcv_regexps", {
  books: [],
  ...regexClass
});
var translationsClassOutput = formatClass("bcv_translations", translationsClass, [
  "this.systems.current = structuredClone(this.systems.default);"
]);
var grammarOptionsOutput = `var bcv_grammar_options_default = ${formatValue(grammarOptions, 0)};
`;
var bundleOutput = `var regexps = bcv_regexps;
var translations = bcv_translations;
var grammar_options = bcv_grammar_options_default;
export {
  grammar_options,
  regexps,
  translations
};`;
var allowOptionalSpaces = Boolean(replaceSpacesWith?.replacement?.includes("\\s*"));
var outputNormalizeWhitespace = (value) => value.replace(/\s+/gu, " ").trim();
var normalizeComposed = (value) => value.normalize("NFC");
var bookVariants = processedBooks.map((book) => {
  const seen = /* @__PURE__ */ new Set();
  const texts = [];
  for (const item of book.texts) {
    const base = outputNormalizeWhitespace(normalizeComposed(String(item.text)));
    if (seen.has(base)) continue;
    seen.add(base);
    texts.push(base);
  }
  return {
    osis: book.osis,
    texts
  };
});
var yamlOutput = YAML2.stringify(bookVariants, { lineWidth: 0 });
var outputLang = buildArgs.outputLang;
var outputFileBase = langCodeToFileBase(outputLang);
var jsOutput = `${regexpsClassOutput}

${translationsClassOutput}

${grammarOptionsOutput}${bundleOutput}`;
await mkdir(namesDir, { recursive: true });
await mkdir(langOutputDir, { recursive: true });
await writeFile(resolve(namesDir, `${outputFileBase}.yaml`), yamlOutput, "utf8");
await writeFile(resolve(langOutputDir, `${outputFileBase}.js`), jsOutput, "utf8");

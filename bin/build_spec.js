#!/usr/bin/env node

// src/build_spec.ts
import fs from "fs/promises";
import path from "path";
import YAML from "yaml";
import { fileURLToPath } from "url";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";

// src/lang_filenames.ts
var RESERVED_THREE_LETTER_BASENAMES = /* @__PURE__ */ new Set(["con", "prn", "aux", "nul"]);
function langCodeToFileBase(langCode) {
  if (langCode.length !== 3) return langCode;
  return RESERVED_THREE_LETTER_BASENAMES.has(langCode.toLowerCase()) ? `${langCode}_` : langCode;
}
function fileBaseToLangCode(fileBase) {
  if (!fileBase.endsWith("_")) return fileBase;
  const base = fileBase.slice(0, -1);
  if (base.length !== 3) return fileBase;
  return RESERVED_THREE_LETTER_BASENAMES.has(base.toLowerCase()) ? base : fileBase;
}

// src/build_spec.ts
var BASE_PARSER_OPTIONS = {
  book_alone_strategy: "ignore",
  book_sequence_strategy: "ignore",
  osis_compaction_strategy: "bc",
  captive_end_digits_strategy: "delete",
  testaments: "ona"
};
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var repoRoot = path.resolve(__dirname, "..");
var namesDir = path.join(repoRoot, "book_names", "all");
var preferredDir = path.join(repoRoot, "book_names", "preferred");
var testDir = path.join(repoRoot, "test");
var translationsPath = path.join(repoRoot, "translation_systems", "default.yaml");
var dataDir = path.join(repoRoot, "data");
function isRecord(value) {
  return Boolean(value) && typeof value === "object";
}
function isBookNameEntry(value) {
  if (!isRecord(value)) return false;
  if (!("osis" in value) || !("texts" in value)) return false;
  const osis = value.osis;
  const texts = value.texts;
  const hasValidOsis = typeof osis === "string" || Array.isArray(osis);
  return hasValidOsis && Array.isArray(texts);
}
function addParserBoilerplate(lines) {
  lines.push("	let p = {}");
  lines.push("	beforeEach(() => {");
  lines.push("		p = new bcv_parser(lang);");
  lines.push(`		p.set_options(${JSON.stringify(BASE_PARSER_OPTIONS)});`);
  lines.push("	});");
}
function addExpectation(lines, sample, expected) {
  lines.push(`		expect(p.parse(${JSON.stringify(sample)}).osis()).toEqual(${JSON.stringify(expected)});`);
}
function addExpectationMethod(lines, sample, method, expectedLiteral) {
  lines.push(`		expect(p.parse(${JSON.stringify(sample)}).${method}()).toEqual(${expectedLiteral});`);
}
function buildBookBlock(langCode, osisList, texts, shouldIncludeSample = null) {
  const label = osisList.join(",");
  const expected = `${osisList[0]}.1.1`;
  const lines = [];
  let assertionCount = 0;
  lines.push(`describe("Localized book ${label} (${langCode})", () => {`);
  addParserBoilerplate(lines);
  lines.push(`	it("should handle book: ${label} (${langCode})", () => {`);
  const seen = /* @__PURE__ */ new Set();
  for (const rawText of texts) {
    if (rawText == null) continue;
    const text = String(rawText);
    if (text.length === 0) continue;
    const variants = [text];
    for (const variant of variants) {
      const sample = `${variant} 1:1`;
      if (shouldIncludeSample && !shouldIncludeSample(sample, osisList)) {
        continue;
      }
      const key = `${sample}\0${expected}`;
      if (seen.has(key)) continue;
      seen.add(key);
      addExpectation(lines, sample, expected);
      assertionCount += 1;
    }
  }
  if (assertionCount === 0) {
    return [];
  }
  lines.push("	});");
  lines.push("});");
  return lines;
}
function toCustomTests(value) {
  if (!Array.isArray(value)) return [];
  const out = [];
  for (const row of value) {
    if (!isRecord(row)) continue;
    if (typeof row.text !== "string" || typeof row.osis !== "string") continue;
    const item = {
      text: row.text,
      osis: row.osis
    };
    if (typeof row.it === "string") {
      item.it = row.it;
    }
    out.push(item);
  }
  return out;
}
function addCustomTests(lines, langCode, customTests) {
  if (!customTests || customTests.length === 0) return;
  const grouped = [];
  for (const test of customTests) {
    if (test.it && typeof test.it === "string") {
      lines.push(`describe("Custom tests (${langCode})", () => {`);
      addParserBoilerplate(lines);
      lines.push(`	it(${JSON.stringify(test.it)}, () => {`);
      addExpectation(lines, test.text, test.osis);
      lines.push("	});");
      lines.push("});");
    } else {
      grouped.push(test);
    }
  }
  if (grouped.length > 0) {
    lines.push(`describe("Custom tests (${langCode})", () => {`);
    addParserBoilerplate(lines);
    lines.push('	it("should handle custom tests", () => {');
    for (const test of grouped) {
      addExpectation(lines, test.text, test.osis);
    }
    lines.push("	});");
    lines.push("});");
  }
}
function getVariableTexts(value) {
  if (!Array.isArray(value)) return [];
  const out = [];
  for (const item of value) {
    if (typeof item === "string" && item.length > 0) {
      out.push(item);
      continue;
    }
    if (isRecord(item) && typeof item.text === "string" && item.text.length > 0) {
      out.push(item.text);
    }
  }
  return [...new Set(out)];
}
function parseTranslationRows(rows = []) {
  const out = [];
  for (const row of rows) {
    if (typeof row === "string") {
      const parts = row.split(",");
      const text = String(parts[0] ?? "").trim();
      const osis = String(parts[1] ?? "").trim();
      if (!text) continue;
      out.push({ text, osis: osis || text });
      continue;
    }
    if (isRecord(row) && typeof row.text === "string") {
      const text = row.text.trim();
      const osis = typeof row.osis === "string" ? row.osis.trim() : "";
      if (!text) continue;
      out.push({ text, osis: osis || text });
    }
  }
  return out;
}
function getFirstBookTextByOsis(data, osis) {
  if (!Array.isArray(data)) return "";
  for (const entry of data) {
    if (!isBookNameEntry(entry)) continue;
    const osisList = Array.isArray(entry.osis) ? entry.osis.map(String) : [String(entry.osis)];
    if (!osisList.includes(osis)) continue;
    if (!Array.isArray(entry.texts) || entry.texts.length === 0) continue;
    const text = String(entry.texts[0] ?? "");
    if (text) return text;
  }
  return "";
}
function addMiscTests(lines, langCode, mergedData, namesData, supports) {
  const vars = mergedData.variables ?? {};
  const to = getVariableTexts(vars.to).slice(0, 6);
  const chapter = getVariableTexts(vars.chapter).slice(0, 6);
  const verse = getVariableTexts(vars.verse).slice(0, 6);
  const and = getVariableTexts(vars.and).slice(0, 6);
  const title = getVariableTexts(vars.title).slice(0, 6);
  const ff = getVariableTexts(vars.ff).slice(0, 6);
  const next = getVariableTexts(vars.next).slice(0, 6);
  const translations = parseTranslationRows(mergedData.translations ?? []).slice(0, 20);
  const addSection = (label, candidates) => {
    if (!candidates || candidates.length === 0) return;
    const valid = candidates.filter((candidate) => supports(candidate));
    if (valid.length === 0) return;
    lines.push(`describe(${JSON.stringify(`Parser helper ${label}`)}, () => {`);
    addParserBoilerplate(lines);
    lines.push(`	it(${JSON.stringify(label)}, () => {`);
    for (const candidate of valid) {
      if (candidate.setup) {
        lines.push(`		p.set_options(${JSON.stringify({ ...BASE_PARSER_OPTIONS, ...candidate.setup })});`);
      }
      if (candidate.method === "osis_and_translations") {
        addExpectationMethod(lines, candidate.sample, "osis_and_translations", candidate.expectedLiteral);
      } else {
        addExpectation(lines, candidate.sample, candidate.expected);
      }
    }
    lines.push("	});");
    lines.push("});");
  };
  addSection(`should handle ranges (${langCode})`, to.flatMap((token) => [
    { sample: `Titus 1:1 ${token} 2`, expected: "Titus.1.1-Titus.1.2" },
    { sample: `Matt 1${token}2`, expected: "Matt.1-Matt.2" },
    { sample: `Phlm 2 ${token} 3`, expected: "Phlm.1.2-Phlm.1.3" }
  ]));
  addSection(`should handle chapters (${langCode})`, chapter.flatMap((token) => [
    { sample: `Titus 1:1, ${token} 2`, expected: "Titus.1.1,Titus.2" },
    { sample: `Matt 3:4 ${token} 6`, expected: "Matt.3.4,Matt.6" }
  ]));
  addSection(`should handle verses (${langCode})`, verse.flatMap((token) => [
    { sample: `Exod 1:1 ${token} 3`, expected: "Exod.1.1,Exod.1.3" },
    { sample: `Phlm ${token} 6`, expected: "Phlm.1.6" }
  ]));
  addSection(`should handle 'and' (${langCode})`, and.flatMap((token) => [
    { sample: `Exod 1:1 ${token} 3`, expected: "Exod.1.1,Exod.1.3" },
    { sample: `Phlm 2 ${token} 6`, expected: "Phlm.1.2,Phlm.1.6" }
  ]));
  addSection(`should handle titles (${langCode})`, title.flatMap((token) => [
    { sample: `Ps 3 ${token}, 4:2, 5:${token}`, expected: "Ps.3.1,Ps.4.2,Ps.5.1" }
  ]));
  addSection(`should handle 'ff' (${langCode})`, ff.flatMap((token) => [
    { sample: `Rev 3${token}, 4:2${token}`, expected: "Rev.3-Rev.22,Rev.4.2-Rev.4.11" }
  ]));
  addSection(`should handle 'next' (${langCode})`, next.flatMap((token) => [
    { sample: `Rev 3:1${token}, 4:2${token}`, expected: "Rev.3.1-Rev.3.2,Rev.4.2-Rev.4.3" },
    { sample: `Jude 1${token}, 2${token}`, expected: "Jude.1.1-Jude.1.2,Jude.1.2-Jude.1.3" },
    { sample: `Gen 1:31${token}`, expected: "Gen.1.31-Gen.2.1" }
  ]));
  addSection(`should handle translations (${langCode})`, translations.map((tr) => ({
    sample: `Lev 1 (${tr.text})`,
    method: "osis_and_translations",
    expectedLiteral: JSON.stringify([["Lev.1", tr.osis]])
  })));
  const oneJohn = getFirstBookTextByOsis(namesData, "1John");
  const threeJohn = getFirstBookTextByOsis(namesData, "3John");
  if (oneJohn && threeJohn) {
    addSection(`should handle book ranges (${langCode})`, to.slice(0, 3).map((token) => ({
      sample: `${oneJohn} ${token} ${threeJohn}`,
      expected: "1John.1-3John.1",
      setup: { book_alone_strategy: "full", book_range_strategy: "include" }
    })));
  }
  addSection(`should handle boundaries (${langCode})`, [
    { sample: "—Matt—", expected: "Matt.1-Matt.28", setup: { book_alone_strategy: "full" } },
    { sample: "“Matt 1:1”", expected: "Matt.1.1", setup: { book_alone_strategy: "full" } }
  ]);
}
function collectPreferredNames(preferredYaml) {
  const out = /* @__PURE__ */ new Map();
  if (!isRecord(preferredYaml)) return out;
  const addEntry = (osis, names) => {
    if (!osis || !isRecord(names)) return;
    const set = out.get(osis) ?? /* @__PURE__ */ new Set();
    for (const value of Object.values(names)) {
      if (typeof value === "string" && value.length > 0) {
        set.add(value);
      }
    }
    out.set(osis, set);
  };
  const defaults = isRecord(preferredYaml.default) ? preferredYaml.default : {};
  for (const [osis, names] of Object.entries(defaults)) {
    addEntry(osis, names);
  }
  const translations = isRecord(preferredYaml.translations) ? preferredYaml.translations : {};
  for (const system of Object.values(translations)) {
    if (!isRecord(system)) continue;
    for (const [osis, names] of Object.entries(system)) {
      addEntry(osis, names);
    }
  }
  return out;
}
function addPreferredTests(lines, langCode, preferredNames, existingNamesByOsis, allowedOsis) {
  if (!preferredNames || preferredNames.size === 0) return;
  const entries = [];
  for (const [osis, names] of preferredNames.entries()) {
    if (!allowedOsis.has(osis)) continue;
    const existing = existingNamesByOsis.get(osis) ?? /* @__PURE__ */ new Set();
    for (const name of names) {
      if (!existing.has(name)) {
        entries.push({ osis, name });
      }
    }
  }
  if (entries.length === 0) return;
  lines.push(`describe("Preferred book names (${langCode})", () => {`);
  addParserBoilerplate(lines);
  lines.push(`	it("should handle preferred book names (${langCode})", () => {`);
  for (const entry of entries) {
    addExpectation(lines, `${entry.name} 1:1`, `${entry.osis}.1.1`);
  }
  lines.push("	});");
  lines.push("});");
}
function getAllowedOsis(translationsYaml) {
  if (!isRecord(translationsYaml)) return /* @__PURE__ */ new Set();
  const defaultEntry = isRecord(translationsYaml.default) ? translationsYaml.default : {};
  const order = isRecord(defaultEntry.order) ? defaultEntry.order : {};
  return new Set(Object.keys(order));
}
function getExistingNamesByOsis(data, allowedOsis) {
  const existingNamesByOsis = /* @__PURE__ */ new Map();
  if (!Array.isArray(data)) return existingNamesByOsis;
  for (const entry of data) {
    if (!isBookNameEntry(entry)) continue;
    const osisList = Array.isArray(entry.osis) ? entry.osis.map(String) : [String(entry.osis)];
    const texts = Array.isArray(entry.texts) ? entry.texts : [];
    for (const osis of osisList) {
      if (!allowedOsis.has(osis)) continue;
      const set = existingNamesByOsis.get(osis) ?? /* @__PURE__ */ new Set();
      for (const text of texts) {
        if (text == null) continue;
        const value = String(text);
        if (value.length > 0) set.add(value);
      }
      existingNamesByOsis.set(osis, set);
    }
  }
  return existingNamesByOsis;
}
function getMergedData(defaultsYaml, langYaml) {
  const defaultVariables = isRecord(defaultsYaml.variables) ? defaultsYaml.variables : {};
  const langVariables = isRecord(langYaml.variables) ? langYaml.variables : {};
  const defaultOptions = isRecord(defaultsYaml.options) ? defaultsYaml.options : {};
  const langOptions = isRecord(langYaml.options) ? langYaml.options : {};
  const translations = Array.isArray(langYaml.translations) ? langYaml.translations : [];
  return {
    variables: { ...defaultVariables, ...langVariables },
    options: { ...defaultOptions, ...langOptions },
    translations
  };
}
async function loadLangYaml(dataPath) {
  try {
    const dataRaw = await fs.readFile(dataPath, "utf8");
    const parsed = YAML.parse(dataRaw);
    const langYaml = isRecord(parsed) ? parsed : {};
    return {
      dataFileExists: true,
      customTests: toCustomTests(langYaml.tests),
      langYaml
    };
  } catch {
    return { dataFileExists: false, customTests: [], langYaml: {} };
  }
}
async function loadPreferredNames(fileBase) {
  try {
    const preferredRaw = await fs.readFile(path.join(preferredDir, `${fileBase}.yaml`), "utf8");
    return collectPreferredNames(YAML.parse(preferredRaw));
  } catch {
    return /* @__PURE__ */ new Map();
  }
}
async function loadLangModule(fileBase) {
  try {
    return await import(path.join(repoRoot, "lang", `${fileBase}.js`));
  } catch {
    return null;
  }
}
function makeSupportCheck(langModule) {
  const probe = new bcv_parser(langModule);
  probe.set_options(BASE_PARSER_OPTIONS);
  return (candidate) => {
    try {
      probe.set_options(candidate.setup ? { ...BASE_PARSER_OPTIONS, ...candidate.setup } : BASE_PARSER_OPTIONS);
      if (candidate.method === "osis_and_translations") {
        const actual = probe.parse(candidate.sample).osis_and_translations();
        return JSON.stringify(actual) === candidate.expectedLiteral;
      }
      return probe.parse(candidate.sample).osis() === candidate.expected;
    } catch {
      return false;
    }
  };
}
function makeCrossSampleFilter(langModule) {
  try {
    const probe = new bcv_parser(langModule);
    probe.set_options(BASE_PARSER_OPTIONS);
    return (sample, osisList) => {
      try {
        const parsed = probe.parse(sample).osis();
        if (!parsed) return false;
        return osisList.some((osis) => parsed === `${osis}.1.1`);
      } catch {
        return false;
      }
    };
  } catch {
    return null;
  }
}
async function main() {
  const translationsRaw = await fs.readFile(translationsPath, "utf8");
  const translations = YAML.parse(translationsRaw);
  const allowedOsis = getAllowedOsis(translations);
  const argLang = process.argv[2];
  let files = (await fs.readdir(namesDir)).filter((f) => f.endsWith(".yaml")).sort();
  if (argLang) {
    const fileBase = langCodeToFileBase(argLang);
    files = files.filter((f) => path.basename(f, ".yaml") === fileBase);
    if (files.length === 0) {
      throw new Error(`No language yaml found for ${argLang}`);
    }
  }
  await fs.mkdir(testDir, { recursive: true });
  const defaultsRaw = await fs.readFile(path.join(dataDir, "_defaults.yaml"), "utf8");
  const defaultsParsed = YAML.parse(defaultsRaw);
  const defaultsYaml = isRecord(defaultsParsed) ? defaultsParsed : {};
  const total = files.length;
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    const fileBase = path.basename(file, ".yaml");
    const langCode = fileBaseToLangCode(fileBase);
    if (!argLang) {
      console.log(`[${i + 1} / ${total}] ${langCode}`);
    }
    const yamlPath = path.join(namesDir, file);
    const outPath = path.join(testDir, `${fileBase}.spec.js`);
    const raw = await fs.readFile(yamlPath, "utf8");
    const data = YAML.parse(raw);
    const existingNamesByOsis = getExistingNamesByOsis(data, allowedOsis);
    const dataPath = path.join(dataDir, `${fileBase}.yaml`);
    const { dataFileExists, customTests, langYaml } = await loadLangYaml(dataPath);
    const mergedData = getMergedData(defaultsYaml, langYaml);
    const langModule = await loadLangModule(fileBase);
    const isCrossLike = langCode.length !== 3 || !dataFileExists;
    const shouldIncludeSample = isCrossLike && langModule ? makeCrossSampleFilter(langModule) : null;
    const lines = [];
    lines.push('"use strict";');
    lines.push('import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";');
    lines.push(`import * as lang from "../lang/${fileBase}.js";`);
    lines.push("");
    if (Array.isArray(data)) {
      for (const entry of data) {
        if (!isBookNameEntry(entry)) continue;
        const osisList = Array.isArray(entry.osis) ? entry.osis.map(String) : [String(entry.osis)];
        if (!osisList.every((osis) => allowedOsis.has(osis))) {
          continue;
        }
        const texts = Array.isArray(entry.texts) ? entry.texts : [];
        const block = buildBookBlock(langCode, osisList, texts, shouldIncludeSample);
        lines.push(...block);
      }
    }
    const preferredNames = await loadPreferredNames(fileBase);
    addPreferredTests(lines, langCode, preferredNames, existingNamesByOsis, allowedOsis);
    if (!isCrossLike && langModule) {
      addMiscTests(lines, langCode, mergedData, data, makeSupportCheck(langModule));
    }
    addCustomTests(lines, langCode, customTests);
    lines.push("");
    await fs.writeFile(outPath, lines.join("\n"), "utf8");
  }
}
main().catch((err) => {
  console.error(err);
  process.exit(1);
});

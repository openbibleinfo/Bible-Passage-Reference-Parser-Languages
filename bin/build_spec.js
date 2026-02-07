#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import YAML from "yaml";
import { fileURLToPath } from "url";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "..");
const namesDir = path.join(repoRoot, "book_names", "all");
const preferredDir = path.join(repoRoot, "book_names", "preferred");
const testDir = path.join(repoRoot, "test");
const translationsPath = path.join(repoRoot, "translation_systems", "default.yaml");
const dataDir = path.join(repoRoot, "data");

function addExpectation(lines, sample, expected) {
  lines.push(`\t\texpect(p.parse(${JSON.stringify(sample)}).osis()).toEqual(${JSON.stringify(expected)});`);
}

function addExpectationMethod(lines, sample, method, expectedLiteral) {
  lines.push(`\t\texpect(p.parse(${JSON.stringify(sample)}).${method}()).toEqual(${expectedLiteral});`);
}

function buildBookBlock(langCode, osisList, texts, shouldIncludeSample = null) {
  const label = osisList.join(",");
  const expected = `${osisList[0]}.1.1`;
  const lines = [];
  let assertionCount = 0;
  lines.push(`describe("Localized book ${label} (${langCode})", () => {`);
  lines.push("\tlet p = {}");
  lines.push("\tbeforeEach(() => {");
  lines.push("\t\tp = new bcv_parser(lang);");
  lines.push("\t\tp.set_options({ book_alone_strategy: \"ignore\", book_sequence_strategy: \"ignore\", osis_compaction_strategy: \"bc\", captive_end_digits_strategy: \"delete\", testaments: \"ona\" });");
  lines.push("\t});");
  lines.push(`\tit("should handle book: ${label} (${langCode})", () => {`);

  const seen = new Set();
  for (const rawText of texts) {
    if (rawText == null) continue;
    const text = String(rawText);
    if (text.length === 0) continue;
    // const upper = text.toUpperCase();
    // const variants = upper === text ? [text] : [text, upper];
    const variants = [text];
    for (const variant of variants) {
      const sample = `${variant} 1:1`;
      if (shouldIncludeSample && !shouldIncludeSample(sample, osisList)) {
        continue;
      }
      const key = `${sample}\u0000${expected}`;
      if (seen.has(key)) continue;
      seen.add(key);
      addExpectation(lines, sample, expected);
      assertionCount += 1;
    }
  }

  if (assertionCount === 0) {
    return [];
  }

  lines.push("\t});");
  lines.push("});");
  return lines;
}

function addCustomTests(lines, langCode, customTests) {
  if (!customTests || customTests.length === 0) return;
  const grouped = [];
  for (const test of customTests) {
    if (!test || typeof test.text !== "string" || typeof test.osis !== "string") continue;
    if (test.it && typeof test.it === "string") {
      lines.push(`describe("Custom tests (${langCode})", () => {`);
      lines.push("\tlet p = {}");
      lines.push("\tbeforeEach(() => {");
      lines.push("\t\tp = new bcv_parser(lang);");
      lines.push("\t\tp.set_options({ book_alone_strategy: \"ignore\", book_sequence_strategy: \"ignore\", osis_compaction_strategy: \"bc\", captive_end_digits_strategy: \"delete\", testaments: \"ona\" });");
      lines.push("\t});");
      lines.push(`\tit(${JSON.stringify(test.it)}, () => {`);
      addExpectation(lines, test.text, test.osis);
      lines.push("\t});");
      lines.push("});");
    } else {
      grouped.push(test);
    }
  }
  if (grouped.length > 0) {
    lines.push(`describe("Custom tests (${langCode})", () => {`);
    lines.push("\tlet p = {}");
    lines.push("\tbeforeEach(() => {");
    lines.push("\t\tp = new bcv_parser(lang);");
    lines.push("\t\tp.set_options({ book_alone_strategy: \"ignore\", book_sequence_strategy: \"ignore\", osis_compaction_strategy: \"bc\", captive_end_digits_strategy: \"delete\", testaments: \"ona\" });");
    lines.push("\t});");
    lines.push(`\tit("should handle custom tests", () => {`);
    for (const test of grouped) {
      addExpectation(lines, test.text, test.osis);
    }
    lines.push("\t});");
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
    if (item && typeof item === "object" && typeof item.text === "string" && item.text.length > 0) {
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
    if (row && typeof row === "object" && typeof row.text === "string") {
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
    if (!entry || !entry.osis || !entry.texts) continue;
    const osisList = Array.isArray(entry.osis) ? entry.osis.map(String) : [String(entry.osis)];
    if (!osisList.includes(osis)) continue;
    if (!Array.isArray(entry.texts) || entry.texts.length === 0) continue;
    const text = String(entry.texts[0] ?? "");
    if (text) return text;
  }
  return "";
}

function addMiscTests(lines, langCode, mergedData, namesData, supports) {
  const vars = mergedData?.variables ?? {};
  const to = getVariableTexts(vars.to).slice(0, 6);
  const chapter = getVariableTexts(vars.chapter).slice(0, 6);
  const verse = getVariableTexts(vars.verse).slice(0, 6);
  const and = getVariableTexts(vars.and).slice(0, 6);
  const title = getVariableTexts(vars.title).slice(0, 6);
  const ff = getVariableTexts(vars.ff).slice(0, 6);
  const next = getVariableTexts(vars.next).slice(0, 6);
  const translations = parseTranslationRows(mergedData?.translations ?? []).slice(0, 20);

  const addSection = (label, candidates) => {
    if (!candidates || candidates.length === 0) return;
    const valid = candidates.filter((c) => supports(c));
    if (valid.length === 0) return;
    lines.push(`describe(${JSON.stringify(`Parser helper ${label}`)}, () => {`);
    lines.push("\tlet p = {}");
    lines.push("\tbeforeEach(() => {");
    lines.push("\t\tp = new bcv_parser(lang);");
    lines.push("\t\tp.set_options({ book_alone_strategy: \"ignore\", book_sequence_strategy: \"ignore\", osis_compaction_strategy: \"bc\", captive_end_digits_strategy: \"delete\", testaments: \"ona\" });");
    lines.push("\t});");
    lines.push(`\tit(${JSON.stringify(label)}, () => {`);
    for (const candidate of valid) {
      if (candidate.setup) {
        lines.push(`\t\tp.set_options(${JSON.stringify({
          book_alone_strategy: "ignore",
          book_sequence_strategy: "ignore",
          osis_compaction_strategy: "bc",
          captive_end_digits_strategy: "delete",
          testaments: "ona",
          ...candidate.setup
        })});`);
      }
      if (candidate.method === "osis_and_translations") {
        addExpectationMethod(lines, candidate.sample, "osis_and_translations", candidate.expectedLiteral);
      } else {
        addExpectation(lines, candidate.sample, candidate.expected);
      }
    }
    lines.push("\t});");
    lines.push("});");
  };

  addSection(`should handle ranges (${langCode})`, to.flatMap((token) => ([
    { sample: `Titus 1:1 ${token} 2`, expected: "Titus.1.1-Titus.1.2" },
    { sample: `Matt 1${token}2`, expected: "Matt.1-Matt.2" },
    { sample: `Phlm 2 ${token} 3`, expected: "Phlm.1.2-Phlm.1.3" }
  ])));

  addSection(`should handle chapters (${langCode})`, chapter.flatMap((token) => ([
    { sample: `Titus 1:1, ${token} 2`, expected: "Titus.1.1,Titus.2" },
    { sample: `Matt 3:4 ${token} 6`, expected: "Matt.3.4,Matt.6" }
  ])));

  addSection(`should handle verses (${langCode})`, verse.flatMap((token) => ([
    { sample: `Exod 1:1 ${token} 3`, expected: "Exod.1.1,Exod.1.3" },
    { sample: `Phlm ${token} 6`, expected: "Phlm.1.6" }
  ])));

  addSection(`should handle 'and' (${langCode})`, and.flatMap((token) => ([
    { sample: `Exod 1:1 ${token} 3`, expected: "Exod.1.1,Exod.1.3" },
    { sample: `Phlm 2 ${token} 6`, expected: "Phlm.1.2,Phlm.1.6" }
  ])));

  addSection(`should handle titles (${langCode})`, title.flatMap((token) => ([
    { sample: `Ps 3 ${token}, 4:2, 5:${token}`, expected: "Ps.3.1,Ps.4.2,Ps.5.1" }
  ])));

  addSection(`should handle 'ff' (${langCode})`, ff.flatMap((token) => ([
    { sample: `Rev 3${token}, 4:2${token}`, expected: "Rev.3-Rev.22,Rev.4.2-Rev.4.11" }
  ])));

  addSection(`should handle 'next' (${langCode})`, next.flatMap((token) => ([
    { sample: `Rev 3:1${token}, 4:2${token}`, expected: "Rev.3.1-Rev.3.2,Rev.4.2-Rev.4.3" },
    { sample: `Jude 1${token}, 2${token}`, expected: "Jude.1.1-Jude.1.2,Jude.1.2-Jude.1.3" },
    { sample: `Gen 1:31${token}`, expected: "Gen.1.31-Gen.2.1" }
  ])));

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
    { sample: "\u2014Matt\u2014", expected: "Matt.1-Matt.28", setup: { book_alone_strategy: "full" } },
    { sample: "\u201cMatt 1:1\u201d", expected: "Matt.1.1", setup: { book_alone_strategy: "full" } }
  ]);
}

function collectPreferredNames(preferredYaml) {
  const out = new Map();
  if (!preferredYaml || typeof preferredYaml !== "object") return out;

  const addEntry = (osis, names) => {
    if (!osis || !names) return;
    const set = out.get(osis) ?? new Set();
    for (const value of Object.values(names)) {
      if (typeof value === "string" && value.length > 0) {
        set.add(value);
      }
    }
    out.set(osis, set);
  };

  const defaults = preferredYaml.default && typeof preferredYaml.default === "object"
    ? preferredYaml.default
    : {};
  for (const [osis, names] of Object.entries(defaults)) {
    addEntry(osis, names);
  }

  const translations = preferredYaml.translations && typeof preferredYaml.translations === "object"
    ? preferredYaml.translations
    : {};
  for (const system of Object.values(translations)) {
    if (!system || typeof system !== "object") continue;
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
    const existing = existingNamesByOsis.get(osis) ?? new Set();
    for (const name of names) {
      if (!existing.has(name)) {
        entries.push({ osis, name });
      }
    }
  }
  if (entries.length === 0) return;

  lines.push(`describe("Preferred book names (${langCode})", () => {`);
  lines.push("\tlet p = {}");
  lines.push("\tbeforeEach(() => {");
  lines.push("\t\tp = new bcv_parser(lang);");
  lines.push("\t\tp.set_options({ book_alone_strategy: \"ignore\", book_sequence_strategy: \"ignore\", osis_compaction_strategy: \"bc\", captive_end_digits_strategy: \"delete\", testaments: \"ona\" });");
  lines.push("\t});");
  lines.push(`\tit("should handle preferred book names (${langCode})", () => {`);
  for (const entry of entries) {
    addExpectation(lines, `${entry.name} 1:1`, `${entry.osis}.1.1`);
  }
  lines.push("\t});");
  lines.push("});");
}

async function main() {
  const translationsRaw = await fs.readFile(translationsPath, "utf8");
  const translations = YAML.parse(translationsRaw);
  const allowedOsis = new Set(Object.keys(translations?.default?.order ?? {}));

  const argLang = process.argv[2];
  let files = (await fs.readdir(namesDir)).filter((f) => f.endsWith(".yaml")).sort();
  if (argLang) {
    files = files.filter((f) => path.basename(f, ".yaml") === argLang);
    if (files.length === 0) {
      throw new Error(`No language yaml found for ${argLang}`);
    }
  }
  await fs.mkdir(testDir, { recursive: true });

  const total = files.length;
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    const langCode = path.basename(file, ".yaml");
    if (!argLang) {
      console.log(`[${i + 1} / ${total}] ${langCode}`);
    }
    const yamlPath = path.join(namesDir, file);
    const outPath = path.join(testDir, `${langCode}.spec.js`);
    const raw = await fs.readFile(yamlPath, "utf8");
    const data = YAML.parse(raw);
    const defaultsRaw = await fs.readFile(path.join(dataDir, "_defaults.yaml"), "utf8");
    const defaultsYaml = YAML.parse(defaultsRaw) ?? {};
    const existingNamesByOsis = new Map();
    if (Array.isArray(data)) {
      for (const entry of data) {
        if (!entry || !entry.osis || !entry.texts) continue;
        const osisList = Array.isArray(entry.osis) ? entry.osis.map(String) : [String(entry.osis)];
        const texts = Array.isArray(entry.texts) ? entry.texts : [];
        for (const osis of osisList) {
          if (!allowedOsis.has(osis)) continue;
          const set = existingNamesByOsis.get(osis) ?? new Set();
          for (const text of texts) {
            if (text == null) continue;
            const value = String(text);
            if (value.length > 0) set.add(value);
          }
          existingNamesByOsis.set(osis, set);
        }
      }
    }
    const dataPath = path.join(dataDir, `${langCode}.yaml`);
    let dataFileExists = true;
    let customTests = [];
    let langYaml = {};
    try {
      const dataRaw = await fs.readFile(dataPath, "utf8");
      langYaml = YAML.parse(dataRaw) ?? {};
      if (Array.isArray(langYaml?.tests)) {
        customTests = langYaml.tests;
      }
    } catch {
      dataFileExists = false;
      customTests = [];
      langYaml = {};
    }

    const mergedData = {
      variables: { ...(defaultsYaml.variables ?? {}), ...(langYaml.variables ?? {}) },
      options: { ...(defaultsYaml.options ?? {}), ...(langYaml.options ?? {}) },
      translations: Array.isArray(langYaml.translations) ? langYaml.translations : []
    };
    let langModule = null;
    try {
      langModule = await import(path.join(repoRoot, "lang", `${langCode}.js`));
    } catch {
      langModule = null;
    }

    const isCrossLike = langCode.length !== 3 || !dataFileExists;
    let shouldIncludeSample = null;
    if (isCrossLike && langModule) {
      try {
        const probe = new bcv_parser(langModule);
        probe.set_options({
          book_alone_strategy: "ignore",
          book_sequence_strategy: "ignore",
          osis_compaction_strategy: "bc",
          captive_end_digits_strategy: "delete",
          testaments: "ona"
        });
        shouldIncludeSample = (sample, osisList) => {
          try {
            const parsed = probe.parse(sample).osis();
            if (!parsed) return false;
            return osisList.some((osis) => parsed === `${osis}.1.1`);
          } catch {
            return false;
          }
        };
      } catch {
        shouldIncludeSample = null;
      }
    }
    const lines = [];
    lines.push("\"use strict\";");
    lines.push(`import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";`);
    lines.push(`import * as lang from "../lang/${langCode}.js";`);
    lines.push("");

    if (Array.isArray(data)) {
      for (const entry of data) {
        if (!entry || !entry.osis || !entry.texts) continue;
        const osisList = Array.isArray(entry.osis) ? entry.osis.map(String) : [String(entry.osis)];
        if (!osisList.every((osis) => allowedOsis.has(osis))) {
          continue;
        }
        const texts = Array.isArray(entry.texts) ? entry.texts : [];
        const block = buildBookBlock(langCode, osisList, texts, shouldIncludeSample);
        lines.push(...block);
      }
    }

    let preferredNames = new Map();
    try {
      const preferredRaw = await fs.readFile(path.join(preferredDir, `${langCode}.yaml`), "utf8");
      preferredNames = collectPreferredNames(YAML.parse(preferredRaw));
    } catch {
      preferredNames = new Map();
    }
    addPreferredTests(lines, langCode, preferredNames, existingNamesByOsis, allowedOsis);

    if (!isCrossLike && langModule) {
      const probe = new bcv_parser(langModule);
      probe.set_options({
        book_alone_strategy: "ignore",
        book_sequence_strategy: "ignore",
        osis_compaction_strategy: "bc",
        captive_end_digits_strategy: "delete",
        testaments: "ona"
      });
      const supportCheck = (candidate) => {
        try {
          if (candidate.setup) {
            probe.set_options({
              book_alone_strategy: "ignore",
              book_sequence_strategy: "ignore",
              osis_compaction_strategy: "bc",
              captive_end_digits_strategy: "delete",
              testaments: "ona",
              ...candidate.setup
            });
          } else {
            probe.set_options({
              book_alone_strategy: "ignore",
              book_sequence_strategy: "ignore",
              osis_compaction_strategy: "bc",
              captive_end_digits_strategy: "delete",
              testaments: "ona"
            });
          }
          if (candidate.method === "osis_and_translations") {
            const actual = probe.parse(candidate.sample).osis_and_translations();
            return JSON.stringify(actual) === candidate.expectedLiteral;
          }
          return probe.parse(candidate.sample).osis() === candidate.expected;
        } catch {
          return false;
        }
      };
      addMiscTests(lines, langCode, mergedData, data, supportCheck);
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

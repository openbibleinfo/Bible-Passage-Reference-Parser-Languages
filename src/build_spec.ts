#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import YAML from "yaml";
import { fileURLToPath } from "url";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import { fileBaseToLangCode, langCodeToFileBase } from "./lang_filenames";

type UnknownRecord = Record<string, unknown>;
type Lines = string[];
type ShouldIncludeSample = (sample: string, osisList: string[]) => boolean;
type ParserSetup = Record<string, unknown>;
type ParserLangModule = ConstructorParameters<typeof bcv_parser>[0];

type CustomTest = {
  text: string;
  osis: string;
  it?: string;
};

type TranslationRow = {
  text: string;
  osis: string;
};

type CandidateBase = {
  sample: string;
  setup?: ParserSetup;
};

type StandardCandidate = CandidateBase & {
  expected: string;
  method?: undefined;
  expectedLiteral?: undefined;
};

type TranslationCandidate = CandidateBase & {
  method: "osis_and_translations";
  expectedLiteral: string;
};

type Candidate = StandardCandidate | TranslationCandidate;

type SupportsCandidate = (candidate: Candidate) => boolean;

type BookNameEntry = {
  osis: string | string[];
  texts: unknown[];
};

type MergedData = {
  variables: UnknownRecord;
  options: UnknownRecord;
  translations: unknown[];
};

const BASE_PARSER_OPTIONS = {
  book_alone_strategy: "ignore",
  book_sequence_strategy: "ignore",
  osis_compaction_strategy: "bc",
  captive_end_digits_strategy: "delete",
  testaments: "ona"
} as const;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "..");
const namesDir = path.join(repoRoot, "book_names", "all");
const preferredDir = path.join(repoRoot, "book_names", "preferred");
const testDir = path.join(repoRoot, "test");
const translationsPath = path.join(repoRoot, "translation_systems", "default.yaml");
const dataDir = path.join(repoRoot, "data");

function isRecord(value: unknown): value is UnknownRecord {
  return Boolean(value) && typeof value === "object";
}

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item));
}

function isBookNameEntry(value: unknown): value is BookNameEntry {
  if (!isRecord(value)) return false;
  if (!("osis" in value) || !("texts" in value)) return false;
  const osis = value.osis;
  const texts = value.texts;
  const hasValidOsis = typeof osis === "string" || Array.isArray(osis);
  return hasValidOsis && Array.isArray(texts);
}

function addParserBoilerplate(lines: Lines): void {
  lines.push("\tlet p = {}");
  lines.push("\tbeforeEach(() => {");
  lines.push("\t\tp = new bcv_parser(lang);");
  lines.push(`\t\tp.set_options(${JSON.stringify(BASE_PARSER_OPTIONS)});`);
  lines.push("\t});");
}

function addExpectation(lines: Lines, sample: string, expected: string): void {
  lines.push(`\t\texpect(p.parse(${JSON.stringify(sample)}).osis()).toEqual(${JSON.stringify(expected)});`);
}

function addExpectationMethod(lines: Lines, sample: string, method: string, expectedLiteral: string): void {
  lines.push(`\t\texpect(p.parse(${JSON.stringify(sample)}).${method}()).toEqual(${expectedLiteral});`);
}

function buildBookBlock(
  langCode: string,
  osisList: string[],
  texts: unknown[],
  shouldIncludeSample: ShouldIncludeSample | null = null
): Lines {
  const label = osisList.join(",");
  const expected = `${osisList[0]}.1.1`;
  const lines: Lines = [];
  let assertionCount = 0;
  lines.push(`describe("Localized book ${label} (${langCode})", () => {`);
  addParserBoilerplate(lines);
  lines.push(`\tit("should handle book: ${label} (${langCode})", () => {`);

  const seen = new Set<string>();
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

function toCustomTests(value: unknown): CustomTest[] {
  if (!Array.isArray(value)) return [];
  const out: CustomTest[] = [];
  for (const row of value) {
    if (!isRecord(row)) continue;
    if (typeof row.text !== "string" || typeof row.osis !== "string") continue;
    const item: CustomTest = {
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

function addCustomTests(lines: Lines, langCode: string, customTests: CustomTest[]): void {
  if (!customTests || customTests.length === 0) return;
  const grouped: CustomTest[] = [];
  for (const test of customTests) {
    if (test.it && typeof test.it === "string") {
      lines.push(`describe("Custom tests (${langCode})", () => {`);
      addParserBoilerplate(lines);
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
    addParserBoilerplate(lines);
    lines.push("\tit(\"should handle custom tests\", () => {");
    for (const test of grouped) {
      addExpectation(lines, test.text, test.osis);
    }
    lines.push("\t});");
    lines.push("});");
  }
}

function getVariableTexts(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const out: string[] = [];
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

function parseTranslationRows(rows: unknown[] = []): TranslationRow[] {
  const out: TranslationRow[] = [];
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

function getFirstBookTextByOsis(data: unknown, osis: string): string {
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

function addMiscTests(
  lines: Lines,
  langCode: string,
  mergedData: MergedData,
  namesData: unknown,
  supports: SupportsCandidate
): void {
  const vars = mergedData.variables ?? {};
  const to = getVariableTexts(vars.to).slice(0, 6);
  const chapter = getVariableTexts(vars.chapter).slice(0, 6);
  const verse = getVariableTexts(vars.verse).slice(0, 6);
  const and = getVariableTexts(vars.and).slice(0, 6);
  const title = getVariableTexts(vars.title).slice(0, 6);
  const ff = getVariableTexts(vars.ff).slice(0, 6);
  const next = getVariableTexts(vars.next).slice(0, 6);
  const translations = parseTranslationRows(mergedData.translations ?? []).slice(0, 20);

  const addSection = (label: string, candidates: Candidate[]): void => {
    if (!candidates || candidates.length === 0) return;
    const valid = candidates.filter((candidate) => supports(candidate));
    if (valid.length === 0) return;
    lines.push(`describe(${JSON.stringify(`Parser helper ${label}`)}, () => {`);
    addParserBoilerplate(lines);
    lines.push(`\tit(${JSON.stringify(label)}, () => {`);
    for (const candidate of valid) {
      if (candidate.setup) {
        lines.push(`\t\tp.set_options(${JSON.stringify({ ...BASE_PARSER_OPTIONS, ...candidate.setup })});`);
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

  addSection(`should handle ranges (${langCode})`, to.flatMap((token): StandardCandidate[] => ([
    { sample: `Titus 1:1 ${token} 2`, expected: "Titus.1.1-Titus.1.2" },
    { sample: `Matt 1${token}2`, expected: "Matt.1-Matt.2" },
    { sample: `Phlm 2 ${token} 3`, expected: "Phlm.1.2-Phlm.1.3" }
  ])));

  addSection(`should handle chapters (${langCode})`, chapter.flatMap((token): StandardCandidate[] => ([
    { sample: `Titus 1:1, ${token} 2`, expected: "Titus.1.1,Titus.2" },
    { sample: `Matt 3:4 ${token} 6`, expected: "Matt.3.4,Matt.6" }
  ])));

  addSection(`should handle verses (${langCode})`, verse.flatMap((token): StandardCandidate[] => ([
    { sample: `Exod 1:1 ${token} 3`, expected: "Exod.1.1,Exod.1.3" },
    { sample: `Phlm ${token} 6`, expected: "Phlm.1.6" }
  ])));

  addSection(`should handle 'and' (${langCode})`, and.flatMap((token): StandardCandidate[] => ([
    { sample: `Exod 1:1 ${token} 3`, expected: "Exod.1.1,Exod.1.3" },
    { sample: `Phlm 2 ${token} 6`, expected: "Phlm.1.2,Phlm.1.6" }
  ])));

  addSection(`should handle titles (${langCode})`, title.flatMap((token): StandardCandidate[] => ([
    { sample: `Ps 3 ${token}, 4:2, 5:${token}`, expected: "Ps.3.1,Ps.4.2,Ps.5.1" }
  ])));

  addSection(`should handle 'ff' (${langCode})`, ff.flatMap((token): StandardCandidate[] => ([
    { sample: `Rev 3${token}, 4:2${token}`, expected: "Rev.3-Rev.22,Rev.4.2-Rev.4.11" }
  ])));

  addSection(`should handle 'next' (${langCode})`, next.flatMap((token): StandardCandidate[] => ([
    { sample: `Rev 3:1${token}, 4:2${token}`, expected: "Rev.3.1-Rev.3.2,Rev.4.2-Rev.4.3" },
    { sample: `Jude 1${token}, 2${token}`, expected: "Jude.1.1-Jude.1.2,Jude.1.2-Jude.1.3" },
    { sample: `Gen 1:31${token}`, expected: "Gen.1.31-Gen.2.1" }
  ])));

  addSection(`should handle translations (${langCode})`, translations.map((tr): TranslationCandidate => ({
    sample: `Lev 1 (${tr.text})`,
    method: "osis_and_translations",
    expectedLiteral: JSON.stringify([["Lev.1", tr.osis]])
  })));

  const oneJohn = getFirstBookTextByOsis(namesData, "1John");
  const threeJohn = getFirstBookTextByOsis(namesData, "3John");
  if (oneJohn && threeJohn) {
    addSection(`should handle book ranges (${langCode})`, to.slice(0, 3).map((token): StandardCandidate => ({
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

function collectPreferredNames(preferredYaml: unknown): Map<string, Set<string>> {
  const out = new Map<string, Set<string>>();
  if (!isRecord(preferredYaml)) return out;

  const addEntry = (osis: string, names: unknown): void => {
    if (!osis || !isRecord(names)) return;
    const set = out.get(osis) ?? new Set<string>();
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

function addPreferredTests(
  lines: Lines,
  langCode: string,
  preferredNames: Map<string, Set<string>>,
  existingNamesByOsis: Map<string, Set<string>>,
  allowedOsis: Set<string>
): void {
  if (!preferredNames || preferredNames.size === 0) return;
  const entries: Array<{ osis: string; name: string }> = [];
  for (const [osis, names] of preferredNames.entries()) {
    if (!allowedOsis.has(osis)) continue;
    const existing = existingNamesByOsis.get(osis) ?? new Set<string>();
    for (const name of names) {
      if (!existing.has(name)) {
        entries.push({ osis, name });
      }
    }
  }
  if (entries.length === 0) return;

  lines.push(`describe("Preferred book names (${langCode})", () => {`);
  addParserBoilerplate(lines);
  lines.push(`\tit("should handle preferred book names (${langCode})", () => {`);
  for (const entry of entries) {
    addExpectation(lines, `${entry.name} 1:1`, `${entry.osis}.1.1`);
  }
  lines.push("\t});");
  lines.push("});");
}

function getAllowedOsis(translationsYaml: unknown): Set<string> {
  if (!isRecord(translationsYaml)) return new Set<string>();
  const defaultEntry = isRecord(translationsYaml.default) ? translationsYaml.default : {};
  const order = isRecord(defaultEntry.order) ? defaultEntry.order : {};
  return new Set<string>(Object.keys(order));
}

function getExistingNamesByOsis(data: unknown, allowedOsis: Set<string>): Map<string, Set<string>> {
  const existingNamesByOsis = new Map<string, Set<string>>();
  if (!Array.isArray(data)) return existingNamesByOsis;

  for (const entry of data) {
    if (!isBookNameEntry(entry)) continue;
    const osisList = Array.isArray(entry.osis) ? entry.osis.map(String) : [String(entry.osis)];
    const texts = Array.isArray(entry.texts) ? entry.texts : [];
    for (const osis of osisList) {
      if (!allowedOsis.has(osis)) continue;
      const set = existingNamesByOsis.get(osis) ?? new Set<string>();
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

function getMergedData(defaultsYaml: UnknownRecord, langYaml: UnknownRecord): MergedData {
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

async function loadLangYaml(dataPath: string): Promise<{ dataFileExists: boolean; customTests: CustomTest[]; langYaml: UnknownRecord }> {
  try {
    const dataRaw = await fs.readFile(dataPath, "utf8");
    const parsed = YAML.parse(dataRaw) as unknown;
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

async function loadPreferredNames(fileBase: string): Promise<Map<string, Set<string>>> {
  try {
    const preferredRaw = await fs.readFile(path.join(preferredDir, `${fileBase}.yaml`), "utf8");
    return collectPreferredNames(YAML.parse(preferredRaw));
  } catch {
    return new Map<string, Set<string>>();
  }
}

async function loadLangModule(fileBase: string): Promise<ParserLangModule | null> {
  try {
    return await import(path.join(repoRoot, "lang", `${fileBase}.js`)) as ParserLangModule;
  } catch {
    return null;
  }
}

function makeSupportCheck(langModule: ParserLangModule): SupportsCandidate {
  const probe = new bcv_parser(langModule);
  probe.set_options(BASE_PARSER_OPTIONS);
  return (candidate: Candidate): boolean => {
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

function makeCrossSampleFilter(langModule: ParserLangModule): ShouldIncludeSample | null {
  try {
    const probe = new bcv_parser(langModule);
    probe.set_options(BASE_PARSER_OPTIONS);
    return (sample: string, osisList: string[]): boolean => {
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

async function main(): Promise<void> {
  const translationsRaw = await fs.readFile(translationsPath, "utf8");
  const translations = YAML.parse(translationsRaw) as unknown;
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
  const defaultsParsed = YAML.parse(defaultsRaw) as unknown;
  const defaultsYaml: UnknownRecord = isRecord(defaultsParsed) ? defaultsParsed : {};

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
    const data = YAML.parse(raw) as unknown;
    const existingNamesByOsis = getExistingNamesByOsis(data, allowedOsis);

    const dataPath = path.join(dataDir, `${fileBase}.yaml`);
    const { dataFileExists, customTests, langYaml } = await loadLangYaml(dataPath);
    const mergedData = getMergedData(defaultsYaml, langYaml);
    const langModule = await loadLangModule(fileBase);

    const isCrossLike = langCode.length !== 3 || !dataFileExists;
    const shouldIncludeSample = isCrossLike && langModule ? makeCrossSampleFilter(langModule) : null;

    const lines: Lines = [];
    lines.push("\"use strict\";");
    lines.push("import { bcv_parser } from \"bible-passage-reference-parser/esm/bcv_parser.js\";");
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

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});

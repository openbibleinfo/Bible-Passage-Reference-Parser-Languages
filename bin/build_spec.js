#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import YAML from "yaml";
import { fileURLToPath } from "url";

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

function buildBookBlock(langCode, osisList, texts) {
  const label = osisList.join(",");
  const expected = `${osisList[0]}.1.1`;
  const lines = [];
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
      const key = `${sample}\u0000${expected}`;
      if (seen.has(key)) continue;
      seen.add(key);
      addExpectation(lines, sample, expected);
    }
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
    let customTests = [];
    try {
      const dataRaw = await fs.readFile(dataPath, "utf8");
      const dataYaml = YAML.parse(dataRaw);
      if (Array.isArray(dataYaml?.tests)) {
        customTests = dataYaml.tests;
      }
    } catch {
      customTests = [];
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
        const block = buildBookBlock(langCode, osisList, texts);
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

    addCustomTests(lines, langCode, customTests);

    lines.push("");
    await fs.writeFile(outPath, lines.join("\n"), "utf8");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

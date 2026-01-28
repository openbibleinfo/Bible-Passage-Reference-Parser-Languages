#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import YAML from "yaml";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "..");
const namesDir = path.join(repoRoot, "names");
const testDir = path.join(repoRoot, "test");
const translationsPath = path.join(repoRoot, "translations", "default.yaml");

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

    const lines = [];
    lines.push("\"use strict\";");
    lines.push(`import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";`);
    lines.push(`import * as lang from \"../lang/${langCode}.js\";`);
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

    lines.push("");
    await fs.writeFile(outPath, lines.join("\n"), "utf8");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

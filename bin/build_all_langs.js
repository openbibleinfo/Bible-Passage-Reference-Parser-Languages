#!/usr/bin/env node

// src/build_all_langs.ts
import { readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { cpus } from "node:os";
var execFileAsync = promisify(execFile);
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var repoRoot = resolve(__dirname, "..");
var dataDir = resolve(repoRoot, "data");
var buildLangPath = resolve(__dirname, "build_lang.js");
var buildSpecPath = resolve(__dirname, "build_spec.js");
var entries = await readdir(dataDir, { withFileTypes: true });
var langFiles = entries.filter((entry) => entry.isFile()).map((entry) => entry.name).filter((name) => /^\w{3}\.yaml$/i.test(name));
if (langFiles.length === 0) {
  console.error(`No language files matching /\\w{3}\\.yaml/ found in ${dataDir}`);
  process.exit(1);
}
function parseJobs(argv) {
  const idx = argv.findIndex((arg) => arg === "--jobs" || arg === "-j");
  if (idx === -1) return null;
  const value = argv[idx + 1];
  if (!value) return null;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}
function parseArgs(argv, cpuCount = cpus().length) {
  const jobs2 = parseJobs(argv) ?? Math.max(1, Math.min(4, cpuCount));
  const testOnly = argv.includes("--test-only");
  return { jobs: jobs2, testOnly };
}
var args = parseArgs(process.argv.slice(2));
var jobs = args.jobs;
var hadError = false;
var nextIndex = 0;
var completedCount = 0;
var total = langFiles.length;
function nextStatus() {
  completedCount += 1;
  return `${completedCount} / ${total}`;
}
function toError(error) {
  if (error instanceof Error) return error;
  return new Error(String(error));
}
async function runNext() {
  const index = nextIndex;
  nextIndex += 1;
  if (index >= total) return;
  const file = langFiles[index];
  const lang = file.slice(0, 3);
  let runError = null;
  try {
    if (!args.testOnly) {
      await execFileAsync("node", [buildLangPath, lang], {
        maxBuffer: 50 * 1024 * 1024
      });
    }
    await execFileAsync("node", [buildSpecPath, lang], {
      maxBuffer: 50 * 1024 * 1024
    });
    await execFileAsync("npx", ["jasmine", resolve(repoRoot, "test", `${lang}.spec.js`), "--random=false"], {
      maxBuffer: 50 * 1024 * 1024
    });
  } catch (error) {
    runError = toError(error);
    hadError = true;
  } finally {
    const status = nextStatus();
    if (runError) {
      console.error(`[${status}] Failed for ${lang}:`, runError);
    } else {
      const mode = args.testOnly ? "Built spec + tested" : "Built + tested";
      console.log(`[${status}] ${mode} ${lang}`);
    }
  }
  await runNext();
}
var workers = Array.from({ length: Math.min(jobs, total) }, () => runNext());
await Promise.all(workers);
if (hadError) {
  process.exitCode = 1;
}

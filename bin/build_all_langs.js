#!/usr/bin/env node
import { readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { cpus } from "node:os";

const execFileAsync = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const repoRoot = resolve(__dirname, "..");
const dataDir = resolve(repoRoot, "data");
const buildLangPath = resolve(__dirname, "build_lang.js");
const buildSpecPath = resolve(__dirname, "build_spec.js");

const entries = await readdir(dataDir, { withFileTypes: true });
const langFiles = entries
	.filter((entry) => entry.isFile())
	.map((entry) => entry.name)
	.filter((name) => /^\w{3}\.yaml$/i.test(name));

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

function parseArgs(argv) {
	const jobs = parseJobs(argv) ?? Math.max(1, Math.min(4, cpus().length));
	const testOnly = argv.includes("--test-only");
	return { jobs, testOnly };
}

const args = parseArgs(process.argv.slice(2));
const jobs = args.jobs;
let hadError = false;
let nextIndex = 0;
let completedCount = 0;
const total = langFiles.length;

function nextStatus() {
	completedCount += 1;
	return `${completedCount} / ${total}`;
}

async function runNext() {
	const index = nextIndex;
	nextIndex += 1;
	if (index >= total) return;
	const file = langFiles[index];
	const lang = file.slice(0, 3);
	let error = null;
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
		error = error ?? new Error("Unknown error");
		hadError = true;
	} finally {
		const status = nextStatus();
		if (error) {
			console.error(`[${status}] Failed for ${lang}:`, error);
		} else {
			const mode = args.testOnly ? "Built spec + tested" : "Built + tested";
			console.log(`[${status}] ${mode} ${lang}`);
		}
	}
	await runNext();
}

const workers = Array.from({ length: Math.min(jobs, total) }, () => runNext());
await Promise.all(workers);

if (hadError) {
	process.exitCode = 1;
}

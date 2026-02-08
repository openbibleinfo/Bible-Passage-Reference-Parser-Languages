#!/usr/bin/env node
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import yaml from "yaml";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import { langCodeToFileBase } from "./lang_filenames";

type FuzzArgs = {
	lang: string;
	iterations: number;
	maxTokens: number;
	progressEvery: number;
	seed: number;
};

type RandFn = () => number;
type TokenMap = Record<string, string[]>;
type ParserOptions = Record<string, unknown>;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = resolve(__dirname, "..");

function parseArgs(argv: string[]): FuzzArgs {
	const args: FuzzArgs = {
		lang: "",
		iterations: 5000,
		maxTokens: 100,
		progressEvery: 1000,
		seed: Date.now() >>> 0
	};
	const positionals: string[] = [];
	for (let i = 0; i < argv.length; i += 1) {
		const arg = argv[i];
		if (arg === "--iterations" || arg === "-n") {
			args.iterations = Number.parseInt(String(argv[i + 1]), 10);
			i += 1;
		} else if (arg === "--max-tokens" || arg === "-m") {
			args.maxTokens = Number.parseInt(String(argv[i + 1]), 10);
			i += 1;
		} else if (arg === "--progress-every" || arg === "-p") {
			args.progressEvery = Number.parseInt(String(argv[i + 1]), 10);
			i += 1;
		} else if (arg === "--seed" || arg === "-s") {
			args.seed = Number.parseInt(String(argv[i + 1]), 10) >>> 0;
			i += 1;
		} else if (arg === "--help" || arg === "-h") {
			printHelp();
			process.exit(0);
		} else if (arg.startsWith("-")) {
			throw new Error(`Unknown option: ${arg}`);
		} else {
			positionals.push(arg);
		}
	}
	args.lang = positionals[0] ?? "";
	if (!args.lang) {
		throw new Error("Missing language code.");
	}
	if (!/^[A-Za-z0-9_]{3}$/.test(args.lang)) {
		throw new Error(`Invalid language code: ${args.lang}`);
	}
	if (!Number.isFinite(args.iterations) || args.iterations <= 0) {
		throw new Error(`Invalid --iterations value: ${args.iterations}`);
	}
	if (!Number.isFinite(args.maxTokens) || args.maxTokens <= 0) {
		throw new Error(`Invalid --max-tokens value: ${args.maxTokens}`);
	}
	if (!Number.isFinite(args.progressEvery) || args.progressEvery <= 0) {
		throw new Error(`Invalid --progress-every value: ${args.progressEvery}`);
	}
	return args;
}

function printHelp(): void {
	console.log("Usage: node bin/fuzz_lang.js <lang> [options]");
	console.log("");
	console.log("Options:");
	console.log("  -n, --iterations <n>       Number of fuzz iterations (default: 5000)");
	console.log("  -m, --max-tokens <n>       Maximum tokens in generated text (default: 100)");
	console.log("  -p, --progress-every <n>   Print progress every n iterations (default: 1000)");
	console.log("  -s, --seed <n>             RNG seed for reproducible runs (default: current time)");
	console.log("  -h, --help                 Show this help");
}

function mulberry32(seed: number): RandFn {
	let t = seed >>> 0;
	return function rand() {
		t += 0x6d2b79f5;
		let r = Math.imul(t ^ (t >>> 15), 1 | t);
		r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
		return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
	};
}

function pick<T>(rand: RandFn, arr: readonly T[]): T {
	return arr[Math.floor(rand() * arr.length)];
}

function randomInt(rand: RandFn, maxInclusive: number): number {
	return Math.floor(rand() * (maxInclusive + 1));
}

function randomAsciiWord(rand: RandFn): string {
	const chars = "abcdefghijklmnopqrstuvwxyz";
	const len = 1 + randomInt(rand, 11);
	let out = "";
	for (let i = 0; i < len; i += 1) {
		out += chars.charAt(randomInt(rand, chars.length - 1));
	}
	return out;
}

function randomUnicodeChar(rand: RandFn): string {
	while (true) {
		const cp = 128 + randomInt(rand, 32000 - 128);
		if (cp >= 0xd800 && cp <= 0xdfff) {
			continue;
		}
		return String.fromCodePoint(cp);
	}
}

async function loadBookTokens(lang: string): Promise<string[]> {
	const fileBase = langCodeToFileBase(lang);
	const yamlPath = resolve(repoRoot, "book_names", "all", `${fileBase}.yaml`);
	if (!existsSync(yamlPath)) {
		return [];
	}
	const content = await readFile(yamlPath, "utf8");
	const data = yaml.parse(content) as unknown;
	if (!Array.isArray(data)) {
		return [];
	}
	const out: string[] = [];
	for (const row of data) {
		if (!row || typeof row !== "object" || !Array.isArray((row as { texts?: unknown }).texts)) {
			continue;
		}
		for (const text of (row as { texts: unknown[] }).texts) {
			if (typeof text === "string" && text.length > 0) {
				out.push(text);
			}
		}
	}
	return out;
}

function makeFuzzer(lang: string, books: string[], rand: RandFn): (maxTokens: number) => string {
	const translations = [
		"AMP", "ASV", "CEB", "CEV", "CSB", "ERV", "ESV", "HCSB", "KJV", "LXX", "MSG",
		"NAB", "NABRE", "NASB", "NIRV", "NIV", "NKJV", "NLT", "NRSV", "NRSVUE", "RSV", "TNIV"
	];
	const possible: TokenMap = {
		book: books.length > 0 ? books : [lang.toUpperCase()],
		translation: translations,
		number: Array.from({ length: 1101 }, (_, i) => `${i}`),
		chapter: Array.from({ length: 153 }, (_, i) => `${i}`),
		verse: Array.from({ length: 177 }, (_, i) => `${i}`),
		cv_sep: [":", ".", "\"", "'", " "],
		range_sep: ["-", "–", "—", "through", "thru", "to"],
		sequence_sep: [",", ";", "/", ":", "&", "-", "–", "—", "~", "and", "compare", "cf", "cf.", "see also", "also", "see"],
		title: ["title"],
		in_book_of: ["from", "of", "in", "from the book of", "of the book of", "in the book of"],
		c_explicit: ["chapters", "chapter", "chaps", "chap", "ch", "chs"],
		v_explicit: ["verses", "verse", "vss", "vs", "vv", "v"],
		v_letter: ["a", "b", "c", "d", "e"],
		ff: ["ff", "ff."],
		ordinal: ["th", "nd", "st", "rd"],
		space: [" ", "\t", "\n", "\u00a0"],
		punctuation: [",", ".", "!", "?", "-", "'", "\"", "’"],
		parentheses: ["(", ")", "[", "]", "{", "}"],
		letter: ["f", "g", "h", "n", "x"],
		word: ["$ascii_word", "$ascii_word", "$ascii_word", "$unicode_char"],
		ascii_word: ["ascii_word"],
		unicode_char: ["unicode_char"],
		bcv: ["$book$space$chapter$cv_sep$verse"],
		b_range: ["$book$range_sep$book"],
		translation_sequence: ["$translation$sequence_sep$translation"],
		bc: ["$book$space$chapter"],
		bc_range: ["$book$space$chapter$range_sep$chapter"],
		cb: ["$c_explicit$space$chapter$space$in_book_of$space$book"],
		c_psalm: ["$chapter$ordinal$space$book"],
		cv_psalm: ["$chapter$ordinal$space$book$space$v_explicit$space$verse"]
	};
	const keys = Object.keys(possible);

	function makeToken(type: string): string {
		if (type === "ascii_word") {
			return randomAsciiWord(rand);
		}
		if (type === "unicode_char") {
			return randomUnicodeChar(rand);
		}
		const values = possible[type];
		if (!values || values.length === 0) {
			return type;
		}
		const chosen = pick(rand, values);
		return chosen.replace(/\$(\w+)/g, (_match, subType) => makeToken(subType));
	}

	return function buildText(maxTokens: number): string {
		const out: string[] = [];
		const count = 1 + randomInt(rand, maxTokens - 1);
		for (let i = 0; i < count; i += 1) {
			const key = pick(rand, keys);
			out.push(makeToken(key));
			if (rand() >= 0.35) {
				out.push(pick(rand, possible.space));
			}
		}
		return out.join("");
	};
}

const args = parseArgs(process.argv.slice(2));
const langPath = resolve(repoRoot, "lang", `${langCodeToFileBase(args.lang)}.js`);
if (!existsSync(langPath)) {
	console.error(`Language output file does not exist: ${langPath}`);
	console.error(`Build it first with: node bin/build_lang.js ${args.lang}`);
	process.exit(1);
}

const langData = await import(pathToFileURL(langPath).href);
const books = await loadBookTokens(args.lang);
const rand = mulberry32(args.seed);
const buildText = makeFuzzer(args.lang, books, rand);
const parser = new bcv_parser(langData);

const optionSets: ParserOptions[] = [
	{},
	{ include_apocrypha: true },
	{ include_apocrypha: false },
	{
		book_alone_strategy: "ignore",
		book_sequence_strategy: "ignore",
		osis_compaction_strategy: "bc",
		captive_end_digits_strategy: "delete",
		testaments: "ona"
	}
];

const startMs = Date.now();
let totalLength = 0;

for (let i = 1; i <= args.iterations; i += 1) {
	const myOptions = pick(rand, optionSets);
	parser.set_options(myOptions);
	const text = buildText(args.maxTokens);
	totalLength += text.length;
	try {
		const results = parser.parse(text).osis_and_indices();
		for (const result of results) {
			if (!Array.isArray(result.indices) || result.indices.length !== 2) {
				throw new Error(`Bad indices shape: ${JSON.stringify(result)}`);
			}
			if (result.indices[0] > result.indices[1]) {
				throw new Error(`Bad indices ordering: ${JSON.stringify(result)}`);
			}
		}
		parser.parsed_entities();
	} catch (error: unknown) {
		console.error(`Fuzz failed at iteration ${i}/${args.iterations}`);
		console.error(`lang=${args.lang} seed=${args.seed}`);
		console.error(`options=${JSON.stringify(myOptions)}`);
		console.error(`text=${JSON.stringify(text)}`);
		console.error(error instanceof Error ? error.stack ?? error.message : String(error));
		process.exit(1);
	}

	if (i % args.progressEvery === 0 || i === args.iterations) {
		const elapsedSec = Math.max(1, Math.round((Date.now() - startMs) / 1000));
		const kb = Math.round(totalLength / 1000);
		const bps = Math.round(totalLength / elapsedSec);
		console.log(`[${i}/${args.iterations}] ${elapsedSec}s ${kb}kb ${bps}bps`);
	}
}

const elapsedSec = ((Date.now() - startMs) / 1000).toFixed(2);
console.log(`Fuzz OK for ${args.lang} (${args.iterations} iterations, seed=${args.seed}, ${elapsedSec}s).`);

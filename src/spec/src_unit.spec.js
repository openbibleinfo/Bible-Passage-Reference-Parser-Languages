"use strict";
import { copyFile, mkdtemp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const repoRoot = resolve(".");

async function compileModule(srcRelPath, outDir, external = []) {
	const srcPath = resolve(repoRoot, srcRelPath);
	const outPath = join(outDir, srcRelPath.replace(/^src\//, "").replace(/\.ts$/, ".mjs"));
	await execFileAsync("npx", [
		"esbuild",
		srcPath,
		"--bundle",
		"--target=es2022",
		"--platform=node",
		"--format=esm",
		...external.flatMap((e) => [`--external:${e}`]),
		`--outfile=${outPath}`
	], {
		maxBuffer: 50 * 1024 * 1024
	});
	return outPath;
}

describe("src contracts", () => {
	let tempDir = "";
	let books = null;
	let regexps = null;
	let bookRegexps = null;
	let translations = null;
	let args = null;
	let loader = null;

	beforeAll(async () => {
		const tempRoot = join(repoRoot, ".tmp");
		await mkdir(tempRoot, { recursive: true });
		tempDir = await mkdtemp(join(tempRoot, "bprp-src-unit-"));
		const booksPath = await compileModule("src/books.ts", tempDir);
		const regexpsPath = await compileModule("src/regexps.ts", tempDir);
		const bookRegexpsPath = await compileModule("src/book_regexps.ts", tempDir);
		const translationsPath = await compileModule("src/translations.ts", tempDir, ["yaml"]);
		const argsPath = await compileModule("src/args.ts", tempDir);
		const loaderPath = await compileModule("src/loader.ts", tempDir);
		await mkdir(join(tempDir, "lang"), { recursive: true });
		await copyFile(resolve(repoRoot, "lang", "eng.js"), join(tempDir, "lang", "eng.js"));
		await copyFile(resolve(repoRoot, "lang", "spa.js"), join(tempDir, "lang", "spa.js"));
		await copyFile(resolve(repoRoot, "lang", "con_.js"), join(tempDir, "lang", "con_.js"));
		books = await import(pathToFileURL(booksPath).href);
		regexps = await import(pathToFileURL(regexpsPath).href);
		bookRegexps = await import(pathToFileURL(bookRegexpsPath).href);
		translations = await import(pathToFileURL(translationsPath).href);
		args = await import(pathToFileURL(argsPath).href);
		loader = await import(pathToFileURL(loaderPath).href);
	});

	afterAll(async () => {
		if (tempDir && existsSync(tempDir)) {
			await rm(tempDir, { recursive: true, force: true });
		}
	});

	it("parseTranslationRows handles string/object rows and aliases", () => {
		const parsed = translations.parseTranslationRows([
			"NIV,",
			"ESV,ESV,default",
			{ text: "NRSV", osis: "NRSV", system: "default" }
		]);
		expect(parsed.texts.includes("NIV")).toBeTrue();
		expect(parsed.texts.includes("ESV")).toBeTrue();
		expect(parsed.aliases.esv.system).toEqual("default");
		expect(parsed.aliases.esv.osis).toEqual("ESV");
		expect(parsed.aliases.nrsv.osis).toEqual("NRSV");
	});

	it("expandBookNames expands before-affixed numbered books", () => {
		const expanded = books.expandBookNames({
			osis: [
				{ osis: "1John", before: "1" },
				{ osis: "2John", before: "2" }
			],
			texts: [{ text: "John" }]
		}, 0, "as_is");
		const names = expanded.flatMap((row) => row.texts.map((t) => t.text));
		expect(names.includes("1 John")).toBeTrue();
		expect(names.includes("2 John")).toBeTrue();
	});

	it("mergeBooks deduplicates text variants per grouped book", () => {
		const merged = books.mergeBooks({
			variables: {},
			options: {},
			books: [
				{ osis: "Gen", texts: ["Genesis", "Gen"] },
				{ osis: "Gen", texts: ["Genesis"] }
			]
		});
		const gen = merged.find((row) => row.osis === "Gen");
		expect(gen).toBeDefined();
		const texts = gen.texts.map((t) => t.text);
		expect(texts.includes("Genesis")).toBeTrue();
		expect(texts.includes("Gen")).toBeTrue();
		expect(texts.filter((t) => t === "Genesis").length).toEqual(1);
	});

	it("buildVariablePattern supports regexp_after and plain text", () => {
		const pattern = regexps.buildVariablePattern([
			{ text: "cf", regexp_after: "(?!\\w)" },
			{ text: "compare" }
		]);
		const re = new RegExp(`^(?:${pattern})$`, "u");
		expect(re.test("cf")).toBeTrue();
		expect(re.test("compare")).toBeTrue();
		expect(re.test("cfa")).toBeFalse();
	});

	it("buildRecursive covers all input strings", () => {
		const values = ["Juan", "John", "Johannes"];
		const pattern = regexps.buildRecursive(values);
		const re = new RegExp(`^(?:${pattern})$`, "u");
		for (const value of values) {
			expect(re.test(value)).toBeTrue();
		}
	});

	it("buildBookRegexps preserves numbered-before-base precedence", () => {
		const options = {
			before_book_allowed_characters: { regexp: "[^\\p{L}]" },
			after_book_allowed_characters: { regexp: "[\\d\\s\\.:,;\\x1e\\x1f&\\(\\)\\[\\]/\"'\\*=~\\-–—]" },
			before_every_book: { regexp: "" },
			after_every_book: { regexp: "" }
		};
		const entries = [
			{
				osis: "John",
				texts: [{ text: "John" }],
				hasBefore: false,
				groupKey: "",
				sourceId: 0
			},
			{
				osis: "1John",
				texts: [{ text: "1 John" }],
				hasBefore: true,
				groupKey: "",
				sourceId: 0
			}
		];
		const built = bookRegexps.buildBookRegexps(entries, options, "none", null, true);
		expect(Array.isArray(built)).toBeTrue();
		expect(built[0].osis.includes("1John")).toBeTrue();
		expect(built[1].osis.includes("John")).toBeTrue();
	});

	it("getLanguageArgs defaults outputLang to first language when not cross", async () => {
		const originalArgv = process.argv.slice();
		try {
			process.argv = ["node", "script", "eng"];
			const parsed = await args.getLanguageArgs(resolve(repoRoot, "data"));
			expect(parsed.langs).toEqual(["eng"]);
			expect(parsed.outputLang).toEqual("eng");
			expect(parsed.cross).toBeFalse();
			expect(parsed.mergeMode).toEqual("append");
		} finally {
			process.argv = originalArgv;
		}
	});

	it("getLanguageArgs enforces cross output length rule", async () => {
		const originalArgv = process.argv.slice();
		try {
			process.argv = ["node", "script", "--cross", "eng", "spa", "--out", "mix"];
			await expectAsync(args.getLanguageArgs(resolve(repoRoot, "data"))).toBeRejectedWithError(
				"Cross-language output code must not be 3 characters: mix"
			);
		} finally {
			process.argv = originalArgv;
		}
	});

	it("load_language_code loads mapped and unmapped language modules", async () => {
		const eng = await loader.load_language_code("eng");
		expect(typeof eng.regexps).toEqual("function");
		const con = await loader.load_language_code("con");
		expect(typeof con.regexps).toEqual("function");
		await expectAsync(loader.load_language_code("en")).toBeRejected();
		await expectAsync(loader.load_language_code("ENG")).toBeRejected();
		await expectAsync(loader.load_language_code(" eng ")).toBeRejected();
	});
});

"use strict";
import { rm, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { pathToFileURL } from "node:url";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";

const execFileAsync = promisify(execFile);
const repoRoot = resolve(".");
const buildLangPath = resolve(repoRoot, "bin", "build_lang.js");
const buildSpecPath = resolve(repoRoot, "bin", "build_spec.js");
const fuzzLangPath = resolve(repoRoot, "bin", "fuzz_lang.js");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

function parserFor(langModule) {
	const p = new bcv_parser(langModule);
	p.set_options({
		book_alone_strategy: "ignore",
		book_sequence_strategy: "ignore",
		osis_compaction_strategy: "bc",
		captive_end_digits_strategy: "delete",
		testaments: "ona"
	});
	return p;
}

async function removeIfExists(path) {
	if (existsSync(path)) {
		await rm(path, { force: true });
	}
}

describe("Build tooling (cross append)", () => {
	const tempPrefix = `tmp_append_${Date.now().toString(36)}`;
	const langOut = resolve(repoRoot, "lang", `${tempPrefix}.js`);
	const namesOut = resolve(repoRoot, "book_names", "all", `${tempPrefix}.yaml`);
	const specOut = resolve(repoRoot, "test", `${tempPrefix}.spec.js`);
	let langModule = null;
	let p = null;

	beforeAll(async () => {
		await execFileAsync("node", [buildLangPath, "--cross", "eng", "spa", "--out", tempPrefix], {
			maxBuffer: 50 * 1024 * 1024
		});
		await execFileAsync("node", [buildSpecPath, tempPrefix], {
			maxBuffer: 50 * 1024 * 1024
		});
		langModule = await import(pathToFileURL(langOut).href);
		p = parserFor(langModule);
	});

	afterAll(async () => {
		await removeIfExists(langOut);
		await removeIfExists(namesOut);
		await removeIfExists(specOut);
	});

	it("writes language and names outputs", async () => {
		expect(existsSync(langOut)).toBeTrue();
		expect(existsSync(namesOut)).toBeTrue();
		expect(existsSync(specOut)).toBeTrue();
	});

	it("includes both language ids in regex metadata", async () => {
		const r = new langModule.regexps();
		expect(r.languages.includes("eng")).toBeTrue();
		expect(r.languages.includes("spa")).toBeTrue();
	});

	it("parses English and Spanish forms", async () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Juan 1:1").osis()).toEqual("John.1.1");
	});

	it("preserves numbered precedence for Johannine books", async () => {
		expect(p.parse("1 John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});

	it("preserves numbered precedence for Samuel and Kings", async () => {
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("1 Kings 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("2 Kings 1:1").osis()).toEqual("2Kgs.1.1");
	});

	it("cross spec generation does not emit duplicate generic helper heading", async () => {
		const spec = await readFile(specOut, "utf8");
		expect(spec.includes(`describe("Parser helpers (${tempPrefix})"`)).toBeFalse();
		expect(spec.includes(`describe("Localized book Gen (${tempPrefix})"`)).toBeTrue();
	});
});

describe("Build tooling (cross smart)", () => {
	const tempPrefix = `tmp_smart_${Date.now().toString(36)}`;
	const langOut = resolve(repoRoot, "lang", `${tempPrefix}.js`);
	const namesOut = resolve(repoRoot, "book_names", "all", `${tempPrefix}.yaml`);
	let p = null;

	beforeAll(async () => {
		await execFileAsync("node", [buildLangPath, "--cross", "eng", "spa", "--merge-mode", "smart", "--out", tempPrefix], {
			maxBuffer: 50 * 1024 * 1024
		});
		const langModule = await import(pathToFileURL(langOut).href);
		p = parserFor(langModule);
	});

	afterAll(async () => {
		await removeIfExists(langOut);
		await removeIfExists(namesOut);
		await removeIfExists(resolve(repoRoot, "test", `${tempPrefix}.spec.js`));
	});

	it("writes output files", async () => {
		expect(existsSync(langOut)).toBeTrue();
		expect(existsSync(namesOut)).toBeTrue();
	});

	it("parses English and Spanish forms", async () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Génesis 1:1").osis()).toEqual("Gen.1.1");
	});

	it("keeps numbered precedence in smart mode", async () => {
		expect(p.parse("1 John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});

describe("Build tooling (spec generation)", () => {
	beforeAll(async () => {
		await execFileAsync("node", [buildLangPath, "eng"], { maxBuffer: 50 * 1024 * 1024 });
		await execFileAsync("node", [buildSpecPath, "eng"], { maxBuffer: 50 * 1024 * 1024 });
	});

	it("includes helper sections when language data supports them", async () => {
		const engSpec = await readFile(resolve(repoRoot, "test", "eng.spec.js"), "utf8");
		expect(engSpec.includes('Parser helper should handle ranges (eng)')).toBeTrue();
		expect(engSpec.includes('Parser helper should handle chapters (eng)')).toBeTrue();
		expect(engSpec.includes('Parser helper should handle verses (eng)')).toBeTrue();
		expect(engSpec.includes('Parser helper should handle boundaries (eng)')).toBeTrue();
	});

	it("does not emit duplicate helper describe headings", async () => {
		const engSpec = await readFile(resolve(repoRoot, "test", "eng.spec.js"), "utf8");
		const matches = engSpec.match(/describe\("Parser helper [^"]+"\)/g) ?? [];
		const unique = new Set(matches);
		expect(matches.length).toEqual(unique.size);
	});

	it("keeps legacy localized-book blocks", async () => {
		const engSpec = await readFile(resolve(repoRoot, "test", "eng.spec.js"), "utf8");
		expect(engSpec.includes('describe("Localized book Gen (eng)"')).toBeTrue();
	});
});

describe("Build tooling (cli validation)", () => {
	it("rejects cross output code with length 3", async () => {
		let failed = false;
		try {
			await execFileAsync("node", [buildLangPath, "--cross", "eng", "spa", "--out", "xyz"]);
		} catch (error) {
			failed = true;
		}
		expect(failed).toBeTrue();
	});

	it("runs fuzz command with a fixed seed", async () => {
		await execFileAsync("node", [fuzzLangPath, "eng", "-n", "10", "-p", "5", "-s", "42"], {
			maxBuffer: 50 * 1024 * 1024
		});
	});
});

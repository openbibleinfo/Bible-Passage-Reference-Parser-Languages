"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import load_language_code, { load_language_code as named_load_language_code } from "../../loader.js";

describe("loader integration", () => {
	it("loads eng and parses an English reference", async () => {
		const lang = await load_language_code("eng");
		const p = new bcv_parser(lang);
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});

	it("supports inline await in parser construction", async () => {
		const p = new bcv_parser(await load_language_code("eng"));
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});

	it("maps reserved language code to disk filename and parses", async () => {
		const p = new bcv_parser(await load_language_code("con"));
		expect(p.parse("Gn 1:1").osis()).toEqual("Gen.1.1");
	});

	it("enforces strict lowercase ISO 639-3 code inputs", async () => {
		await expectAsync(load_language_code("")).toBeRejectedWithError(
			"Language code must be a non-empty lowercase ISO 639-3 code."
		);
		await expectAsync(load_language_code("ENG")).toBeRejectedWithError(
			"Language code must be exactly three lowercase letters: ENG"
		);
		await expectAsync(load_language_code(" en ")).toBeRejectedWithError(
			"Language code must be exactly three lowercase letters:  en "
		);
		await expectAsync(load_language_code("en")).toBeRejectedWithError(
			"Language code must be exactly three lowercase letters: en"
		);
		await expectAsync(load_language_code("engg")).toBeRejectedWithError(
			"Language code must be exactly three lowercase letters: engg"
		);
	});

	it("returns a clear error for missing language files", async () => {
		await expectAsync(load_language_code("zzz")).toBeRejectedWithError(/Unable to load language "zzz"/);
	});

	it("named export behaves the same as default export", async () => {
		const lang = await named_load_language_code("eng");
		const p = new bcv_parser(lang);
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});

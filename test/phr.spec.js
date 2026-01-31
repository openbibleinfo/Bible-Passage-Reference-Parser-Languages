"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/phr.js";

describe("Localized book Gen (phr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (phr)", () => {
		expect(p.parse("توریت شریف: پَیدایش 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("پَیدایش 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Jonah (phr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (phr)", () => {
		expect(p.parse("یُونس 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Luke (phr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (phr)", () => {
		expect(p.parse("اِنجِیل شریف 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لُوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Preferred book names (phr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (phr)", () => {
		expect(p.parse("اِنجِیل شریف (لُوقا) 1:1").osis()).toEqual("Luke.1.1");
	});
});

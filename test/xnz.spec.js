"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xnz.js";

describe("Localized book Matt (xnz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xnz)", () => {
		expect(p.parse("Matana Enjil 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mata 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xnz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xnz)", () => {
		expect(p.parse("Markusna Enjil 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xnz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xnz)", () => {
		expect(p.parse("Luka Enjil 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (xnz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xnz)", () => {
		expect(p.parse("Hanana Enjil 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Hana 1:1").osis()).toEqual("John.1.1");
	});
});

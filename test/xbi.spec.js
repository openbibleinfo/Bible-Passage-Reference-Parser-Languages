"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xbi.js";

describe("Localized book Ruth (xbi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (xbi)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (xbi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (xbi)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (xbi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xbi)", () => {
		expect(p.parse("Matyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book 1Thess (xbi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xbi)", () => {
		expect(p.parse("1 Tesalonaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xbi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xbi)", () => {
		expect(p.parse("2 Tesalonaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});

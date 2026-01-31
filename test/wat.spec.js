"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/wat.js";

describe("Localized book Gen (wat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (wat)", () => {
		expect(p.parse("Kabikona 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (wat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (wat)", () => {
		expect(p.parse("Yauna 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Jonah (wat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (wat)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mark (wat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (wat)", () => {
		expect(p.parse("Maka 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Acts (wat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (wat)", () => {
		expect(p.parse("Bunanige 1:1").osis()).toEqual("Acts.1.1");
	});
});

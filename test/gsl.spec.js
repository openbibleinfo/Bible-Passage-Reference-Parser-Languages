"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gsl.js";

describe("Localized book Gen (gsl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gsl)", () => {
		expect(p.parse("Fúcihum 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Fúci 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Ruth (gsl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gsl)", () => {
		expect(p.parse("Rúut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Mark (gsl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gsl)", () => {
		expect(p.parse("Maruk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Preferred book names (gsl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (gsl)", () => {
		expect(p.parse("Fúcihum 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Fúci 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Rúut 1:1").osis()).toEqual("Ruth.1.1");
	});
});

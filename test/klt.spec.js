"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/klt.js";

describe("Localized book Ruth (klt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (klt)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Mark (klt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (klt)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (klt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (klt)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Acts (klt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (klt)", () => {
		expect(p.parse("Aposel 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apo 1:1").osis()).toEqual("Acts.1.1");
	});
});

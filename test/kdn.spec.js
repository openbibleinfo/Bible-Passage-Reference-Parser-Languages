"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kdn.js";

describe("Localized book Gen (kdn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kdn)", () => {
		expect(p.parse("Kuyamba 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kuya 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Josh (kdn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kdn)", () => {
		expect(p.parse("Joshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Ps (kdn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kdn)", () => {
		expect(p.parse("Nyimbo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Nyi 1:1").osis()).toEqual("Ps.1.1");
	});
});

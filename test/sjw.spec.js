"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sjw.js";

describe("Localized book Matt (sjw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sjw)", () => {
		expect(p.parse("Hini Uwasi-biadrcimowa ya-sfadoci Mafiyo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sjw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sjw)", () => {
		expect(p.parse("Ya-sfadoci Mrkv 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sjw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sjw)", () => {
		expect(p.parse("Yasfadoci Loku 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (sjw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sjw)", () => {
		expect(p.parse("Ya-sfadoci Jrne 1:1").osis()).toEqual("John.1.1");
	});
});

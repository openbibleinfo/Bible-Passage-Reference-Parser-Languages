"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/afb.js";

describe("Localized book Matt (afb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (afb)", () => {
		expect(p.parse("الإنجيل زي ما كتبه مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتَّى 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (afb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (afb)", () => {
		expect(p.parse("إنجيل مرقس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرقس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Acts (afb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (afb)", () => {
		expect(p.parse("أعمال 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("أع 1:1").osis()).toEqual("Acts.1.1");
	});
});

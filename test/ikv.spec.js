"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ikv.js";

describe("Localized book Mark (ikv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ikv)", () => {
		expect(p.parse("Ẹmarkus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ẹmar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ikv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ikv)", () => {
		expect(p.parse("Iluka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("iLuk 1:1").osis()).toEqual("Luke.1.1");
	});
});

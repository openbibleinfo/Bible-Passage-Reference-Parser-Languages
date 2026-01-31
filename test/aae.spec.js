"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/aae.js";

describe("Localized book Matt (aae)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (aae)", () => {
		expect(p.parse("Š. Matéu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("S. Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matéu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});

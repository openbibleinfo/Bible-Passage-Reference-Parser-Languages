"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fur.js";

describe("Localized book Matt (fur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fur)", () => {
		expect(p.parse("Seònd Matìe 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matìe 1:1").osis()).toEqual("Matt.1.1");
	});
});

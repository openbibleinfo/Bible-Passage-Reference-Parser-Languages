"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kiw.js";

describe("Localized book Luke (kiw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kiw)", () => {
		expect(p.parse("Ruka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Rk 1:1").osis()).toEqual("Luke.1.1");
	});
});

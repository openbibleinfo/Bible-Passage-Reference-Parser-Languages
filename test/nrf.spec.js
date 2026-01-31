"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nrf.js";

describe("Localized book Matt (nrf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nrf)", () => {
		expect(p.parse("Sâint Makyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Makyu 1:1").osis()).toEqual("Matt.1.1");
	});
});

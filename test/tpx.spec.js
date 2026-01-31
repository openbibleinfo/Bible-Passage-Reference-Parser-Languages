"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tpx.js";

describe("Localized book Jonah (tpx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tpx)", () => {
		expect(p.parse("Jonáa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Preferred book names (tpx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (tpx)", () => {
		expect(p.parse("Jonáa 1:1").osis()).toEqual("Jonah.1.1");
	});
});

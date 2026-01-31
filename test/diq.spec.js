"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/diq.js";

describe("Localized book Ps (diq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (diq)", () => {
		expect(p.parse("Mezmûrî 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mez. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Luke (diq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (diq)", () => {
		expect(p.parse("Lûq. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lûqa 1:1").osis()).toEqual("Luke.1.1");
	});
});

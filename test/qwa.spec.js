"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/qwa.js";

describe("Localized book Ruth (qwa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (qwa)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Luke (qwa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (qwa)", () => {
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc. 1:1").osis()).toEqual("Luke.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ney.js";

describe("Localized book Matt (ney)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ney)", () => {
		expect(p.parse("Matíe 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ney)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ney)", () => {
		expect(p.parse("Málɩ́kɩ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ney)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ney)", () => {
		expect(p.parse("Lúkɩ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (ney)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ney)", () => {
		expect(p.parse("Záan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Preferred book names (ney)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (ney)", () => {
		expect(p.parse("Záan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Lúkɩ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Málɩ́kɩ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Matíe 1:1").osis()).toEqual("Matt.1.1");
	});
});

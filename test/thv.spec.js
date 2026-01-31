"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/thv.js";

describe("Localized book Gen (thv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (thv)", () => {
		expect(p.parse("Tizaret 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tiz 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Ruth (thv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (thv)", () => {
		expect(p.parse("Raɣut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Raɣ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (thv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (thv)", () => {
		expect(p.parse("Yunan 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Luke (thv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (thv)", () => {
		expect(p.parse("Luqa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luq 1:1").osis()).toEqual("Luke.1.1");
	});
});

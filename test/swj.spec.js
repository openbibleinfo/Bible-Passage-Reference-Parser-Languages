"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/swj.js";

describe("Localized book Luke (swj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (swj)", () => {
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Acts (swj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (swj)", () => {
		expect(p.parse("Actes 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bid 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Tim (swj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (swj)", () => {
		expect(p.parse("1 Timothée 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Jas (swj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (swj)", () => {
		expect(p.parse("Jacques 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sake 1:1").osis()).toEqual("Jas.1.1");
	});
});

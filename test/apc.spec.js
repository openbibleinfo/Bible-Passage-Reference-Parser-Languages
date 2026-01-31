"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/apc.js";

describe("Localized book Ps (apc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (apc)", () => {
		expect(p.parse("مقتطفات من الزبور 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("من الزبور. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("من الزبور 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jonah (apc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (apc)", () => {
		expect(p.parse("قصّة النبي يونس. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("قصّة النبي يونس 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("قصة النبي يونس 1:1").osis()).toEqual("Jonah.1.1");
	});
});

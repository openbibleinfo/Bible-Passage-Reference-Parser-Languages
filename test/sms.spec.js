"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sms.js";

describe("Localized book Matt (sms)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sms)", () => {
		expect(p.parse("Матъвеестъ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матъ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book John (sms)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sms)", () => {
		expect(p.parse("Evvan 1:1").osis()).toEqual("John.1.1");
	});
});

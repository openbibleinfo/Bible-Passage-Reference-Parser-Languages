"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dwz.js";

describe("Localized book Mark (dwz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dwz)", () => {
		expect(p.parse("मर्कुस 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dwz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dwz)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Acts (dwz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dwz)", () => {
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Thess (dwz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dwz)", () => {
		expect(p.parse("१ थेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dwz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dwz)", () => {
		expect(p.parse("२ थेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dwz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dwz)", () => {
		expect(p.parse("१ तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dwz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dwz)", () => {
		expect(p.parse("२ तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dwz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dwz)", () => {
		expect(p.parse("तितस 1:1").osis()).toEqual("Titus.1.1");
	});
});

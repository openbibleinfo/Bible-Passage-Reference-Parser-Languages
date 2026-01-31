"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dry.js";

describe("Localized book Mark (dry)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dry)", () => {
		expect(p.parse("मर्‌कुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्‌कु 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dry)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dry)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लुक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Acts (dry)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dry)", () => {
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रे 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Thess (dry)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dry)", () => {
		expect(p.parse("१ थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dry)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dry)", () => {
		expect(p.parse("२ थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dry)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dry)", () => {
		expect(p.parse("१ तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dry)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dry)", () => {
		expect(p.parse("२ तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dry)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dry)", () => {
		expect(p.parse("तित 1:1").osis()).toEqual("Titus.1.1");
	});
});

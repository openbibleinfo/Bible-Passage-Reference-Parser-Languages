"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/alu.js";

describe("Localized book Ruth (alu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (alu)", () => {
		expect(p.parse("Rutu 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (alu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (alu)", () => {
		expect(p.parse("Tiona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mark (alu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (alu)", () => {
		expect(p.parse("Maki 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book 1John (alu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (alu)", () => {
		expect(p.parse("1 Tione 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Tione 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (alu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (alu)", () => {
		expect(p.parse("2 Tione 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Tione 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (alu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (alu)", () => {
		expect(p.parse("3 Tione 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Tione 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Col (alu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (alu)", () => {
		expect(p.parse("Korosae 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Eph (alu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (alu)", () => {
		expect(p.parse("Episasi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (alu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (alu)", () => {
		expect(p.parse("Piripae 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (alu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (alu)", () => {
		expect(p.parse("1 Tesaronaeka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaronaeka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (alu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (alu)", () => {
		expect(p.parse("2 Tesaronaeka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaronaeka 1:1").osis()).toEqual("2Thess.1.1");
	});
});

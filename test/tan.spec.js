"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tan.js";

describe("Localized book Ruth (tan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tan)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (tan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tan)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (tan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tan)", () => {
		expect(p.parse("Mattayọ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Luke (tan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tan)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Acts (tan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tan)", () => {
		expect(p.parse("Wotẹn 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tan)", () => {
		expect(p.parse("Romẹ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tan)", () => {
		expect(p.parse("1 Kọrintọ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kọr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tan)", () => {
		expect(p.parse("2 Kọrintọ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kọr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Gal (tan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tan)", () => {
		expect(p.parse("Galatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galat 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tan)", () => {
		expect(p.parse("Ẹpẹsọ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ẹpẹs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tan)", () => {
		expect(p.parse("Pilippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilip 1:1").osis()).toEqual("Phil.1.1");
	});
});

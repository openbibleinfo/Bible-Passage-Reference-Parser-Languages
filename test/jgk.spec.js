"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/jgk.js";

describe("Localized book Mark (jgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (jgk)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book John (jgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (jgk)", () => {
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (jgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (jgk)", () => {
		expect(p.parse("Gaan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gmy 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Cor (jgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jgk)", () => {
		expect(p.parse("1 Ɓoɓa Korinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ɓkor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ɓoɓa Korinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ɓkor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (jgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jgk)", () => {
		expect(p.parse("2 Ɓoɓa Korinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ɓkor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ɓoɓa Korinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ɓkor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Gal (jgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (jgk)", () => {
		expect(p.parse("Ɓoɓa Galatiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book 1Tim (jgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jgk)", () => {
		expect(p.parse("1 Timotawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (jgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jgk)", () => {
		expect(p.parse("2 Timotawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Jas (jgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (jgk)", () => {
		expect(p.parse("Yakubu 1:1").osis()).toEqual("Jas.1.1");
	});
});

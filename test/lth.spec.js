"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lth.js";

describe("Localized book Gen (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lth)", () => {
		expect(p.parse("Acaki 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Acak 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Deut (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lth)", () => {
		expect(p.parse("Nwönö Cïk 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Nwö 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Matt (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lth)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lth)", () => {
		expect(p.parse("Marako 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Acts (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lth)", () => {
		expect(p.parse("Tic k'Ëkwëna 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Cor (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lth)", () => {
		expect(p.parse("1 Jö Korinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Jö Korinti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lth)", () => {
		expect(p.parse("2 Jö Korinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Jö Korinti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Gal (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lth)", () => {
		expect(p.parse("Jö Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Jö Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lth)", () => {
		expect(p.parse("Jö Epeco 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Jö Epe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book 1Thess (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lth)", () => {
		expect(p.parse("1 Jö Tecalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Jö Tec 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Jö Tecalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Jö Tec 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lth)", () => {
		expect(p.parse("2 Jö Tecalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Jö Tec 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Jö Tecalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Jö Tec 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lth)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lth)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Jas (lth)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lth)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});

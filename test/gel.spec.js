"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gel.js";

describe("Localized book Gen (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gel)", () => {
		expect(p.parse("U̱r-Taku̱n 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Taku̱ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gel)", () => {
		expect(p.parse("Hyan-u 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Hyan 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Esth (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (gel)", () => {
		expect(p.parse("Esta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Jonah (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gel)", () => {
		expect(p.parse("Yunana 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yuna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gel)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mati 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Acts (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gel)", () => {
		expect(p.parse("Pama-u̱ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Pama 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gel)", () => {
		expect(p.parse("Roma-ne̱ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book Gal (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gel)", () => {
		expect(p.parse("Garatiya-ne̱ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gara 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gel)", () => {
		expect(p.parse("Afisa-ne̱ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afisa 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gel)", () => {
		expect(p.parse("Firipi-ne̱ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Firi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Tim (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gel)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gel)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});

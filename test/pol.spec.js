"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pol.js";

describe("Localized book Gen (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pol)", () => {
		expect(p.parse("Księga Rodzaju 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Księga. Rodzaju 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Księgi Rodzaju 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Księgi. Rodzaju 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ks. Rodzaju 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ks Rodzaju 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Gen (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pol)", () => {
		expect(p.parse("Pierwsza Księga Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza Księga. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza Księgi Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza Księgi. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza Ks. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza Ks Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Księga Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Księga. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Księgi Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Księgi. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Ks. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Ks Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Księga Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Księga. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Księgi Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Księgi. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Ks. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Ks Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Księga Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Księga. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Księga Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Księga. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Księgi Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Księgi. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Księgi Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Księgi. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Ks. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Ks Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Ks. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Ks Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Księga Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Księga. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Księga Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Księga. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Księgi Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Księgi. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Księgi Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Księgi. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Ks. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Ks Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Ks. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Ks Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Gen (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pol)", () => {
		expect(p.parse("Pierwsza Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Mojżeszowa 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pol)", () => {
		expect(p.parse("Druga Księga Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druga Księga. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druga Księgi Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druga Księgi. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druga Ks. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druga Ks Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Drugi Księga Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Drugi Księga. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Drugi Księgi Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Drugi Księgi. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Drugi Ks. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Drugi Ks Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Księga Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Księga. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Księga Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Księga. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Księgi Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Księgi. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Księgi Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Księgi. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Ks. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Ks Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Ks. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Ks Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Księga Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Księga. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Księga Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Księga. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Księgi Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Księgi. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Księgi Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Księgi. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Ks. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Ks Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Ks. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Ks Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Exod (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pol)", () => {
		expect(p.parse("Druga Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druga. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Drugi Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Drugi. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Mojżeszowa 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pol)", () => {
		expect(p.parse("Trzecia Księga Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzecia Księga. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzecia Księgi Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzecia Księgi. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzecia Ks. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzecia Ks Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzeci Księga Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzeci Księga. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzeci Księgi Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzeci Księgi. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzeci Ks. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzeci Ks Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Księga Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Księga. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Księga Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Księga. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Księgi Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Księgi. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Księgi Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Księgi. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Ks. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Ks Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Ks. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Ks Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Księga Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Księga. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Księga Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Księga. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Księgi Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Księgi. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Księgi Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Księgi. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Ks. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Ks Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Ks. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Ks Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Lev (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pol)", () => {
		expect(p.parse("Trzecia Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzecia. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzeci Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzeci. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Mojżeszowa 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pol)", () => {
		expect(p.parse("Czwarta Księga Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Czwarta Księga. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Czwarta Księgi Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Czwarta Księgi. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Czwarta Ks. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Czwarta Ks Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Księga Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Księga. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Księga Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Księga. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Księgi Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Księgi. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Księgi Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Księgi. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Ks. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Ks Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Ks. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Ks Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Księga Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Księga. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Księga Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Księga. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Księgi Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Księgi. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Księgi Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Księgi. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Ks. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Ks Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Ks. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Ks Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Num (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pol)", () => {
		expect(p.parse("Czwarta Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Czwarta. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Mojżeszowa 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pol)", () => {
		expect(p.parse("Piąta Księga Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Piąta Księga. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Piąta Księgi Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Piąta Księgi. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Piąta Ks. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Piąta Ks Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Księga Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Księga. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Księga Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Księga. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Księgi Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Księgi. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Księgi Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Księgi. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Ks. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Ks Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Ks. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Ks Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Księga Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Księga. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Księga Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Księga. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Księgi Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Księgi. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Księgi Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Księgi. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Ks. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Ks Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Ks. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Ks Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Deut (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pol)", () => {
		expect(p.parse("Piąta Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Piąta. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Mojżeszowa 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pol)", () => {
		expect(p.parse("Pierwsza Księga Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza Księga. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza Księgi Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza Księgi. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza Ks. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza Ks Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Księga Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Księga. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Księgi Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Księgi. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Ks. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Ks Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Księga Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Księga. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Księgi Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Księgi. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Ks. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Ks Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Księga Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Księga. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Księga Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Księga. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Księgi Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Księgi. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Księgi Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Księgi. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Ks. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Ks Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Ks. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Ks Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Księga Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Księga. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Księga Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Księga. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Księgi Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Księgi. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Księgi Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Księgi. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Ks. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Ks Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Ks. Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Ks Moyżeszowe 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Gen (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pol)", () => {
		expect(p.parse("Pierwsza Mojż 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsza. Mojż 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze Mojż 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwsze. Mojż 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy Mojż 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Pierwszy. Mojż 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mojż 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mojż 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Mojż 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Mojż 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pol)", () => {
		expect(p.parse("Druga Mojż 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druga. Mojż 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Drugi Mojż 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Drugi. Mojż 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mojż 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mojż 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Mojż 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Mojż 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pol)", () => {
		expect(p.parse("Trzecia Mojż 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzecia. Mojż 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzeci Mojż 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Trzeci. Mojż 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mojż 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mojż 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Mojż 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Mojż 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pol)", () => {
		expect(p.parse("Czwarta Mojż 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Czwarta. Mojż 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mojż 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mojż 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Mojż 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Mojż 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pol)", () => {
		expect(p.parse("Piąta Mojż 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Piąta. Mojż 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mojż 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mojż 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Mojż 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Mojż 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pol)", () => {
		expect(p.parse("Księga Rodzaju 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genezis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Moj 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Moj 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Rodz 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 M 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Rdz 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pol)", () => {
		expect(p.parse("Księga Wyjścia 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Księga. Wyjścia 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Księgi Wyjścia 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Księgi. Wyjścia 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ks. Wyjścia 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ks Wyjścia 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Exod (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pol)", () => {
		expect(p.parse("Księga Wyjścia 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Moj 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Moj 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 M 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Wyj 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Wj 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (pol)", () => {
		expect(p.parse("Opowiadaniem o Belu i wężu 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bela i węża 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pol)", () => {
		expect(p.parse("Księga Kapłańska 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Księga. Kapłańska 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Księgi Kapłańska 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Księgi. Kapłańska 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ks. Kapłańska 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ks Kapłańska 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Lev (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pol)", () => {
		expect(p.parse("Księga Kapłańska 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Moj 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Moj 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Kapl 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Kapł 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 M 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Kpl 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Kpł 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pol)", () => {
		expect(p.parse("Księga Liczb 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Księga. Liczb 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Księgi Liczb 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Księgi. Liczb 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ks. Liczb 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ks Liczb 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Num (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pol)", () => {
		expect(p.parse("Liczb 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Num (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pol)", () => {
		expect(p.parse("Księga Liczb 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Moj 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Moj 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 M 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Lb 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (pol)", () => {
		expect(p.parse("Mądrość Syracha 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Eklezjastyka 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Eklezjastyk 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Syracha 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ekli 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Syr 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (pol)", () => {
		expect(p.parse("Księga Mądrości 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Księga. Mądrości 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Księgi Mądrości 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Księgi. Mądrości 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Ks. Mądrości 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Ks Mądrości 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Wis (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (pol)", () => {
		expect(p.parse("Mądrość Salomona 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Księga Mądrości 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Mądr 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Mdr 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (pol)", () => {
		expect(p.parse("Księga Lamentacji 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Księga. Lamentacji 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Księgi Lamentacji 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Księgi. Lamentacji 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ks. Lamentacji 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ks Lamentacji 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Lam (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (pol)", () => {
		expect(p.parse("Lamentacje Jeremiasza 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Treny Jeremiasza 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lamentacje 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Treny 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("La 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lm 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Tr 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (pol)", () => {
		expect(p.parse("List Jeremiasza 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book PrMan (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (pol)", () => {
		expect(p.parse("Modlitwa Manassesa 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pol)", () => {
		expect(p.parse("Księga Powtórzonego Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Księga Powt Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Księga. Powtórzonego Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Księga. Powt Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Księgi Powtórzonego Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Księgi Powt Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Księgi. Powtórzonego Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Księgi. Powt Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ks. Powtórzonego Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ks. Powt Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ks Powtórzonego Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ks Powt Prawa 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Deut (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pol)", () => {
		expect(p.parse("Księga Powtórzonego Prawa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Moj 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Moj 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 M 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Pwt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (pol)", () => {
		expect(p.parse("Księga Jozuego 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Księga. Jozuego 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Księgi Jozuego 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Księgi. Jozuego 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ks. Jozuego 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ks Jozuego 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Josh (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (pol)", () => {
		expect(p.parse("Jozuego 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Josh (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (pol)", () => {
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (pol)", () => {
		expect(p.parse("Księga Sędziów 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Księga. Sędziów 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Księgi Sędziów 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Księgi. Sędziów 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ks. Sędziów 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ks Sędziów 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Judg (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (pol)", () => {
		expect(p.parse("Sędziów 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Judg (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (pol)", () => {
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sędz 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sdz 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pol)", () => {
		expect(p.parse("Księga Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Księga. Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Księgi Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Księgi. Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ks. Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ks Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Ruth (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pol)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Ruth (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pol)", () => {
		expect(p.parse("Księga Ruthy 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Księga. Ruthy 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Księgi Ruthy 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Księgi. Ruthy 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ks. Ruthy 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ks Ruthy 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Ruth (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pol)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (pol)", () => {
		expect(p.parse("1 Księga Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (pol)", () => {
		expect(p.parse("2 Księga Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (pol)", () => {
		expect(p.parse("Pierwsza Księga Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsza Księga. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsza Księgi Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsza Księgi. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsza Ks. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsza Ks Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsze Księga Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsze Księga. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsze Księgi Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsze Księgi. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsze Ks. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsze Ks Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwszy Księga Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwszy Księga. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwszy Księgi Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwszy Księgi. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwszy Ks. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwszy Ks Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Księga Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Księga. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Księga Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Księga. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Księgi Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Księgi. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Księgi Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Księgi. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ks. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ks Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ks. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ks Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Księga Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Księga. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Księga Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Księga. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Księgi Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Księgi. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Księgi Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Księgi. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ks. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ks Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ks. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ks Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (pol)", () => {
		expect(p.parse("Pierwsza Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsza. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsze Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwsze. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwszy Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Pierwszy. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ezdrasza 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (pol)", () => {
		expect(p.parse("Druga Księga Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druga Księga. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druga Księgi Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druga Księgi. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druga Ks. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druga Ks Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Drugi Księga Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Drugi Księga. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Drugi Księgi Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Drugi Księgi. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Drugi Ks. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Drugi Ks Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Księga Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Księga. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Księga Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Księga. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Księgi Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Księgi. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Księgi Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Księgi. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ks. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ks Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ks. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ks Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Księga Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Księga. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Księga Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Księga. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Księgi Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Księgi. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Księgi Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Księgi. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ks. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ks Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ks. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ks Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 2Esd (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (pol)", () => {
		expect(p.parse("Druga Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druga. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Drugi Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Drugi. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ezdrasza 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (pol)", () => {
		expect(p.parse("Księga Ezdrasza 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Księga. Ezdrasza 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Księgi Ezdrasza 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Księgi. Ezdrasza 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ks. Ezdrasza 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ks Ezdrasza 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Ezra (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (pol)", () => {
		expect(p.parse("Ezdrasza 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pol)", () => {
		expect(p.parse("Księga Izajasza 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Księga. Izajasza 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Księgi Izajasza 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Księgi. Izajasza 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ks. Izajasza 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ks Izajasza 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book Isa (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pol)", () => {
		expect(p.parse("Izajasza 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book Isa (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pol)", () => {
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pol)", () => {
		expect(p.parse("Pierwsza Księga Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsza Księga. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsza Księgi Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsza Księgi. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsza Ks. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsza Ks Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Księga Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Księga. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Księgi Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Księgi. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Ks. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Ks Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Księga Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Księga. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Księgi Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Księgi. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Ks. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Ks Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Księga Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Księga. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Księga Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Księga. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Księgi Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Księgi. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Księgi Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Księgi. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Ks. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Ks Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Ks. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Ks Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Księga Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Księga. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Księga Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Księga. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Księgi Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Księgi. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Księgi Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Księgi. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Ks. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Ks Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Ks. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Ks Samuela 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pol)", () => {
		expect(p.parse("Druga Księga Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga Księga. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga Księgi Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga Księgi. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga Ks. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga Ks Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Księga Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Księga. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Księgi Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Księgi. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Ks. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Ks Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Księga Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Księga. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Księga Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Księga. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Księgi Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Księgi. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Księgi Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Księgi. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Ks. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Ks Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Ks. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Ks Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Księga Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Księga. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Księga Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Księga. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Księgi Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Księgi. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Księgi Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Księgi. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Ks. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Ks Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Ks. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Ks Samuela 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pol)", () => {
		expect(p.parse("Pierwsza Księga Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsza Księga. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsza Księgi Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsza Księgi. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsza Ks. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsza Ks Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Księga Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Księga. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Księgi Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Księgi. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Ks. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Ks Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Księga Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Księga. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Księgi Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Księgi. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Ks. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Ks Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Księga Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Księga. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Księga Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Księga. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Księgi Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Księgi. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Księgi Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Księgi. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Ks. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Ks Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Ks. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Ks Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Księga Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Księga. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Księga Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Księga. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Księgi Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Księgi. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Księgi Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Księgi. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Ks. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Ks Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Ks. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Ks Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pol)", () => {
		expect(p.parse("Pierwsza Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsza. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwsze. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Pierwszy. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pol)", () => {
		expect(p.parse("Druga Księga Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga Księga. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga Księgi Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga Księgi. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga Ks. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga Ks Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Księga Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Księga. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Księgi Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Księgi. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Ks. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Ks Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Księga Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Księga. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Księga Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Księga. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Księgi Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Księgi. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Księgi Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Księgi. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Ks. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Ks Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Ks. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Ks Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Księga Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Księga. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Księga Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Księga. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Księgi Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Księgi. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Księgi Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Księgi. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Ks. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Ks Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Ks. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Ks Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pol)", () => {
		expect(p.parse("Druga Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Drugi. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pol)", () => {
		expect(p.parse("2 Samuelowa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sm 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pol)", () => {
		expect(p.parse("1 Samuelowa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sm 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pol)", () => {
		expect(p.parse("Pierwsza Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsza Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsza Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsza Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsza Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsza Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pol)", () => {
		expect(p.parse("Pierwsza Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsza. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pol)", () => {
		expect(p.parse("Trzecia Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Trzecia Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Trzecia Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Trzecia Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Trzecia Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Trzecia Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Trzeci Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Trzeci Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Trzeci Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Trzeci Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Trzeci Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Trzeci Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Księga Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Księga. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Księgi Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Księgi. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Ks. Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Ks Królewska 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pol)", () => {
		expect(p.parse("Czwarta Księga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Czwarta Księga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Czwarta Księgi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Czwarta Księgi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Czwarta Ks. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Czwarta Ks Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Księga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Księga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Księga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Księga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Księgi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Księgi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Księgi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Księgi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Ks. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Ks Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Ks. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Ks Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Księga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Księga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Księga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Księga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Księgi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Księgi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Księgi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Księgi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Ks. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Ks Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Ks. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Ks Królewska 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pol)", () => {
		expect(p.parse("Druga Księga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga Księga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga Księgi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga Księgi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga Ks. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga Ks Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Księga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Księga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Księgi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Księgi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Ks. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Ks Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Księga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Księga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Księga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Księga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Księgi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Księgi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Księgi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Księgi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ks. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ks Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ks. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ks Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Księga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Księga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Księga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Księga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Księgi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Księgi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Księgi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Księgi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Ks. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Ks Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ks. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ks Królewska 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pol)", () => {
		expect(p.parse("Druga Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Królewska 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pol)", () => {
		expect(p.parse("Pierwsza Księga Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsza Księga. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsza Księgi Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsza Księgi. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsza Ks. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsza Ks Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Księga Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Księga. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Księgi Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Księgi. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Ks. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwsze Ks Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Księga Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Księga. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Księgi Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Księgi. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Ks. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Pierwszy Ks Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Księga Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Księga. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Księga Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Księga. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Księgi Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Księgi. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Księgi Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Księgi. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ks. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ks Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ks. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ks Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Księga Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Księga. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Księga Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Księga. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Księgi Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Księgi. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Księgi Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Księgi. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Ks. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Ks Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ks. Królów 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ks Królów 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pol)", () => {
		expect(p.parse("Druga Księga Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga Księga. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga Księgi Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga Księgi. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga Ks. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga Ks Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Księga Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Księga. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Księgi Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Księgi. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Ks. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Drugi Ks Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Księga Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Księga. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Księga Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Księga. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Księgi Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Księgi. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Księgi Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Księgi. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ks. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ks Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ks. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ks Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Księga Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Księga. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Księga Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Księga. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Księgi Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Księgi. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Księgi Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Księgi. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Ks. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Ks Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ks. Królów 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ks Królów 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pol)", () => {
		expect(p.parse("2 Królewska 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Król 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Krl 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pol)", () => {
		expect(p.parse("1 Królewska 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Król 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Krl 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pol)", () => {
		expect(p.parse("Pierwsza Księga Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsza Księga. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsza Księgi Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsza Księgi. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsza Ks. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsza Ks Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsze Księga Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsze Księga. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsze Księgi Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsze Księgi. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsze Ks. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsze Ks Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwszy Księga Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwszy Księga. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwszy Księgi Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwszy Księgi. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwszy Ks. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwszy Ks Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Księga Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Księga. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Księga Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Księga. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Księgi Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Księgi. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Księgi Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Księgi. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ks. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ks Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ks. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ks Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Księga Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Księga. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Księga Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Księga. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Księgi Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Księgi. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Księgi Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Księgi. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Ks. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Ks Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Ks. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Ks Kronik 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pol)", () => {
		expect(p.parse("Pierwsza Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsza. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsze Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwsze. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwszy Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Pierwszy. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kronik 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pol)", () => {
		expect(p.parse("Druga Księga Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druga Księga. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druga Księgi Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druga Księgi. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druga Ks. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druga Ks Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Drugi Księga Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Drugi Księga. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Drugi Księgi Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Drugi Księgi. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Drugi Ks. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Drugi Ks Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Księga Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Księga. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Księga Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Księga. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Księgi Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Księgi. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Księgi Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Księgi. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ks. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ks Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ks. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ks Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Księga Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Księga. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Księga Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Księga. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Księgi Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Księgi. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Księgi Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Księgi. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Ks. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Ks Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Ks. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Ks Kronik 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pol)", () => {
		expect(p.parse("Druga Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druga. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Drugi Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Drugi. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kronik 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pol)", () => {
		expect(p.parse("2 Kronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pol)", () => {
		expect(p.parse("1 Kronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (pol)", () => {
		expect(p.parse("Ezdr 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezd 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pol)", () => {
		expect(p.parse("Księga Nehemiasza 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Księga. Nehemiasza 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Księgi Nehemiasza 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Księgi. Nehemiasza 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ks. Nehemiasza 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ks Nehemiasza 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Neh (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pol)", () => {
		expect(p.parse("Nehemiasza 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Neh (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pol)", () => {
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ne 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (pol)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pol)", () => {
		expect(p.parse("Księga Estery 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Księga. Estery 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Księgi Estery 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Księgi. Estery 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ks. Estery 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ks Estery 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Esth (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pol)", () => {
		expect(p.parse("Estery 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Esth (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pol)", () => {
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pol)", () => {
		expect(p.parse("Księga Hioba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Księga Joba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Księga. Hioba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Księga. Joba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Księgi Hioba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Księgi Joba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Księgi. Hioba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Księgi. Joba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ks. Hioba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ks. Joba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ks Hioba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ks Joba 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Job (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pol)", () => {
		expect(p.parse("Hioba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Joba 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Job (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pol)", () => {
		expect(p.parse("Księga Ijoba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Księga. Ijoba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Księgi Ijoba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Księgi. Ijoba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ks. Ijoba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ks Ijoba 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Job (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pol)", () => {
		expect(p.parse("Hiob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Hi 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (pol)", () => {
		expect(p.parse("Księga Psalmów 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Księga. Psalmów 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Księgi Psalmów 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Księgi. Psalmów 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ks. Psalmów 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ks Psalmów 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Ps (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (pol)", () => {
		expect(p.parse("Psalmy 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (pol)", () => {
		expect(p.parse("Modlitwą Azariasza 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Pieśń Azariasza 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (pol)", () => {
		expect(p.parse("Księga Przypowieści Salomona 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Księga Przysłów 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Księga. Przypowieści Salomona 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Księga. Przysłów 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Księgi Przypowieści Salomona 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Księgi Przysłów 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Księgi. Przypowieści Salomona 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Księgi. Przysłów 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ks. Przypowieści Salomona 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ks. Przysłów 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ks Przypowieści Salomona 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ks Przysłów 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Prov (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (pol)", () => {
		expect(p.parse("Przypowieści Salomonowych 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Księga Przysłów 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Przyp 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Przy 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prz 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pr 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (pol)", () => {
		expect(p.parse("Księga Kaznodziei Salomona 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księga Eklezjastesa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księga Koheleta 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księga. Kaznodziei Salomona 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księga. Eklezjastesa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księga. Koheleta 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księgi Kaznodziei Salomona 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księgi Eklezjastesa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księgi Koheleta 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księgi. Kaznodziei Salomona 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księgi. Eklezjastesa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księgi. Koheleta 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ks. Kaznodziei Salomona 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ks. Eklezjastesa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ks. Koheleta 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ks Kaznodziei Salomona 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ks Eklezjastesa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ks Koheleta 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Eccl (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (pol)", () => {
		expect(p.parse("Kaznodziei Salomonowego 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Księga Koheleta 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kazn 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ekl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Koh 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (pol)", () => {
		expect(p.parse("Pieśnią trzech młodzieńców 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Pieśń trzech młodzieńców 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (pol)", () => {
		expect(p.parse("Pieśń nad Pieśniami 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pieśń Salomona 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("PNP 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pnp 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (pol)", () => {
		expect(p.parse("Księga Jeremiasza 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Księga. Jeremiasza 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Księgi Jeremiasza 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Księgi. Jeremiasza 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ks. Jeremiasza 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ks Jeremiasza 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Jer (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (pol)", () => {
		expect(p.parse("Jeremiasza 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Jer (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (pol)", () => {
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pol)", () => {
		expect(p.parse("Księga Ezechiela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Księga. Ezechiela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Księgi Ezechiela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Księgi. Ezechiela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ks. Ezechiela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ks Ezechiela 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Ezek (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pol)", () => {
		expect(p.parse("Ezechiela 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Ezek (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pol)", () => {
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pol)", () => {
		expect(p.parse("Księga Daniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Księga. Daniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Księgi Daniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Księgi. Daniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Ks. Daniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Ks Daniela 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Dan (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pol)", () => {
		expect(p.parse("Daniela 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Dan (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pol)", () => {
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Da 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (pol)", () => {
		expect(p.parse("Księga Ozeasza 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Księga. Ozeasza 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Księgi Ozeasza 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Księgi. Ozeasza 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ks. Ozeasza 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ks Ozeasza 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Hos (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (pol)", () => {
		expect(p.parse("Ozeasza 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Hos (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (pol)", () => {
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pol)", () => {
		expect(p.parse("Księga Joela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Księga. Joela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Księgi Joela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Księgi. Joela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ks. Joela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ks Joela 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Joel (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pol)", () => {
		expect(p.parse("Joela 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Joel (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pol)", () => {
		expect(p.parse("Proroctwo Ioelowe 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pol)", () => {
		expect(p.parse("Księga Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Księga. Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Księgi Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Księgi. Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ks. Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ks Amosa 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Amos (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pol)", () => {
		expect(p.parse("Amosa 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Amos (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pol)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (pol)", () => {
		expect(p.parse("Księga Abdiasza 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Księga. Abdiasza 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Księgi Abdiasza 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Księgi. Abdiasza 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ks. Abdiasza 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ks Abdiasza 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Obad (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (pol)", () => {
		expect(p.parse("Abdiasza 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Obad (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (pol)", () => {
		expect(p.parse("Proroctwo Abdyaszowe 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ab 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pol)", () => {
		expect(p.parse("Księga Jonasza 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Księga. Jonasza 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Księgi Jonasza 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Księgi. Jonasza 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ks. Jonasza 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ks Jonasza 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Jonah (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pol)", () => {
		expect(p.parse("Jonasza 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Jonah (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pol)", () => {
		expect(p.parse("Proroctwo Ionaszowe 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pol)", () => {
		expect(p.parse("Księga Micheasza 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Księga. Micheasza 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Księgi Micheasza 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Księgi. Micheasza 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Ks. Micheasza 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Ks Micheasza 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Mic (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pol)", () => {
		expect(p.parse("Micheasza 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Mic (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pol)", () => {
		expect(p.parse("Mich 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (pol)", () => {
		expect(p.parse("Księga Nahuma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Księga. Nahuma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Księgi Nahuma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Księgi. Nahuma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Ks. Nahuma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Ks Nahuma 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Nah (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (pol)", () => {
		expect(p.parse("Nahuma 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Nah (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (pol)", () => {
		expect(p.parse("Proroctwo Nahumowe 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nach 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (pol)", () => {
		expect(p.parse("Księga Habakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Księga. Habakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Księgi Habakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Księgi. Habakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ks. Habakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ks Habakuka 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Hab (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (pol)", () => {
		expect(p.parse("Habakuka 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Hab (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (pol)", () => {
		expect(p.parse("Proroctwo Abakukowe 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ha 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (pol)", () => {
		expect(p.parse("Księga Sofoniasza 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Księga. Sofoniasza 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Księgi Sofoniasza 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Księgi. Sofoniasza 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Ks. Sofoniasza 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Ks Sofoniasza 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Zeph (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (pol)", () => {
		expect(p.parse("Sofoniasza 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Zeph (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (pol)", () => {
		expect(p.parse("Proroctwo Sofoniaszowe 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("So 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pol)", () => {
		expect(p.parse("Księga Aggeusza 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Księga. Aggeusza 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Księgi Aggeusza 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Księgi. Aggeusza 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ks. Aggeusza 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ks Aggeusza 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Hag (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pol)", () => {
		expect(p.parse("Aggeusza 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Hag (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pol)", () => {
		expect(p.parse("Proroctwo Aggieuszowe 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (pol)", () => {
		expect(p.parse("Księga Zachariasza 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Księga. Zachariasza 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Księgi Zachariasza 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Księgi. Zachariasza 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Ks. Zachariasza 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Ks Zachariasza 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Zech (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (pol)", () => {
		expect(p.parse("Zachariasza 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Zech (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (pol)", () => {
		expect(p.parse("Zach 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Za 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pol)", () => {
		expect(p.parse("Księga Malachiasza 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Księga. Malachiasza 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Księgi Malachiasza 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Księgi. Malachiasza 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ks. Malachiasza 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ks Malachiasza 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Mal (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pol)", () => {
		expect(p.parse("Malachiasza 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Mal (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pol)", () => {
		expect(p.parse("Proroctwo Malachyaszowe 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ml 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pol)", () => {
		expect(p.parse("Ewangelia według św. Mateusza 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ewangelia według św Mateusza 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ewangelia wg św. Mateusza 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ewangelia wg św Mateusza 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ewangelia Mateusza 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ew. Mateusza 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ew Mateusza 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateusza 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateusz 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Ew Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pol)", () => {
		expect(p.parse("Ewangelia według św. Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ewangelia według św Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ewangelia wg św. Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ewangelia wg św Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ewangelia Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ew. Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ew Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Ew Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marek 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pol)", () => {
		expect(p.parse("Ewangelia według św. Łukasza 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ewangelia według św Łukasza 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ewangelia wg św. Łukasza 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ewangelia wg św Łukasza 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ewangelia Łukasza 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ew. Łukasza 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ew Łukasza 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Łukasza 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ew Łuk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Łukasz 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Łuk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Łk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Acts (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pol)", () => {
		expect(p.parse("Dziejach Apostolskich 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dzieje Apostolskie 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dzieje Apost. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dzieje Apost 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dzieje 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dz Ap 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dz 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rev (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pol)", () => {
		expect(p.parse("Księga Apokalipsy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Księga Objawienia 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Księga. Apokalipsy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Księga. Objawienia 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Księgi Apokalipsy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Księgi Objawienia 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Księgi. Apokalipsy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Księgi. Objawienia 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ks. Apokalipsy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ks. Objawienia 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ks Apokalipsy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ks Objawienia 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Rev (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pol)", () => {
		expect(p.parse("Apokalipsa Świętego Jana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalipsa św. Jana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Objawienie św. Jana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalipsa św Jana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Objawienie św Jana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Objawienie Jana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalipsa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Objawienie 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Obj 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book 1John (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pol)", () => {
		expect(p.parse("Pierwsza List św. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsza List św Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsza List Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsza. List św. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsza. List św Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsza. List Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsze List św. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsze List św Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsze List Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsze. List św. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsze. List św Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsze. List Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwszy List św. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwszy List św Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwszy List Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwszy. List św. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwszy. List św Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwszy. List Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 List św. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 List św Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 List Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. List św. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. List św Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. List Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I List św. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I List św Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I List Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. List św. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. List św Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. List Jana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pol)", () => {
		expect(p.parse("Druga List św. Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druga List św Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druga List Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druga. List św. Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druga. List św Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druga. List Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Drugi List św. Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Drugi List św Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Drugi List Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Drugi. List św. Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Drugi. List św Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Drugi. List Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 List św. Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 List św Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 List Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. List św. Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. List św Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. List Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II List św. Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II List św Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II List Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. List św. Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. List św Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. List Jana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pol)", () => {
		expect(p.parse("Trzecia List św. Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzecia List św Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzecia List Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzecia. List św. Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzecia. List św Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzecia. List Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzeci List św. Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzeci List św Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzeci List Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzeci. List św. Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzeci. List św Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzeci. List Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 List św. Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 List św Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 List Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. List św. Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. List św Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. List Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III List św. Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III List św Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III List Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. List św. Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. List św Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. List Jana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pol)", () => {
		expect(p.parse("1 Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 J 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pol)", () => {
		expect(p.parse("2 Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 J 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pol)", () => {
		expect(p.parse("3 Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 J 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pol)", () => {
		expect(p.parse("Pierwsza Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsza. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsze Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwsze. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwszy Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Pierwszy. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pol)", () => {
		expect(p.parse("Druga Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druga. Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Drugi Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Drugi. Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pol)", () => {
		expect(p.parse("Trzecia Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzecia. Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzeci Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Trzeci. Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Jana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pol)", () => {
		expect(p.parse("Jana 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pol)", () => {
		expect(p.parse("Ewangelia według św. Jana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ewangelia według św Jana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ewangelia wg św. Jana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ewangelia wg św Jana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ewangelia Jana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ew. Jana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ew Jana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ew Jan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("J 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Rom (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pol)", () => {
		expect(p.parse("List św. Pawła do Rzymian 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("List św Pawła do Rzymian 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("List do Rzymian 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rzymian 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rzym 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rz 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pol)", () => {
		expect(p.parse("Pierwsza List św. Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsza List św Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsza list do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsza Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsza Koryntów 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsza. List św. Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsza. List św Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsza. list do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsza. Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsza. Koryntów 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsze List św. Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsze List św Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsze list do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsze Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsze Koryntów 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsze. List św. Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsze. List św Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsze. list do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsze. Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwsze. Koryntów 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwszy List św. Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwszy List św Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwszy list do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwszy Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwszy Koryntów 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwszy. List św. Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwszy. List św Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwszy. list do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwszy. Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Pierwszy. Koryntów 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 List św. Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 List św Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 list do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Koryntów 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. List św. Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. List św Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. list do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koryntów 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I List św. Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I List św Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I list do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Koryntów 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. List św. Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. List św Pawła do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. list do Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Koryntian 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Koryntów 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pol)", () => {
		expect(p.parse("Druga List św. Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga List św Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga list do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga Koryntów 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga. List św. Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga. List św Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga. list do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga. Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga. Koryntów 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Drugi List św. Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Drugi List św Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Drugi list do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Drugi Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Drugi Koryntów 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Drugi. List św. Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Drugi. List św Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Drugi. list do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Drugi. Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Drugi. Koryntów 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 List św. Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 List św Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 list do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Koryntów 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. List św. Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. List św Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. list do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koryntów 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II List św. Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II List św Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II list do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Koryntów 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. List św. Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. List św Pawła do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. list do Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Koryntian 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Koryntów 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pol)", () => {
		expect(p.parse("2 Koryntów 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pol)", () => {
		expect(p.parse("1 Koryntów 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pol)", () => {
		expect(p.parse("List św. Pawła do Galacjan 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("List św Pawła do Galacjan 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("List do Galacjan 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("List do Galatów 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galacjan 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatów 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pol)", () => {
		expect(p.parse("List Świętego Pawła Apostoła do Efezów 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("List św. Pawła do Efezjan 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("List św Pawła do Efezjan 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("List do Efezjan 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efezjan 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efezów 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efez 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pol)", () => {
		expect(p.parse("List św. Pawła do Filipian 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("List św Pawła do Filipian 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("List do Filipian 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipensów 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipian 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pol)", () => {
		expect(p.parse("List św. Pawła do Kolosan 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("List św Pawła do Kolosan 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("List do Kolosan 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosensów 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosan 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pol)", () => {
		expect(p.parse("Pierwsza List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsza List św Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsza List do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsza Tesalonicensów 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsza Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsza. List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsza. List św Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsza. List do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsza. Tesalonicensów 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsza. Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsze List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsze List św Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsze List do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsze Tesalonicensów 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsze Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsze. List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsze. List św Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsze. List do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsze. Tesalonicensów 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwsze. Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwszy List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwszy List św Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwszy List do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwszy Tesalonicensów 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwszy Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwszy. List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwszy. List św Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwszy. List do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwszy. Tesalonicensów 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Pierwszy. Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 List św Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 List do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonicensów 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. List św Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. List do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonicensów 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I List św Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I List do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonicensów 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. List św Pawła do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. List do Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonicensów 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesaloniczan 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pol)", () => {
		expect(p.parse("Druga List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga List św Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga List do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga Tesalonicensów 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga. List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga. List św Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga. List do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga. Tesalonicensów 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga. Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Drugi List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Drugi List św Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Drugi List do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Drugi Tesalonicensów 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Drugi Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Drugi. List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Drugi. List św Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Drugi. List do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Drugi. Tesalonicensów 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Drugi. Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 List św Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 List do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonicensów 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. List św Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. List do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonicensów 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II List św Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II List do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonicensów 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. List św. Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. List św Pawła do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. List do Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonicensów 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesaloniczan 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pol)", () => {
		expect(p.parse("2 Tesalonicensów 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pol)", () => {
		expect(p.parse("1 Tesalonicensów 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pol)", () => {
		expect(p.parse("Pierwsza List św. Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsza List św Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsza List do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsza Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsza. List św. Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsza. List św Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsza. List do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsza. Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsze List św. Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsze List św Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsze List do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsze Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsze. List św. Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsze. List św Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsze. List do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsze. Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwszy List św. Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwszy List św Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwszy List do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwszy Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwszy. List św. Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwszy. List św Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwszy. List do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwszy. Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 List św. Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 List św Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 List do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. List św. Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. List św Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. List do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I List św. Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I List św Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I List do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. List św. Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. List św Pawła do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. List do Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pol)", () => {
		expect(p.parse("Druga List św. Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druga List św Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druga List do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druga Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druga. List św. Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druga. List św Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druga. List do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druga. Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Drugi List św. Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Drugi List św Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Drugi List do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Drugi Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Drugi. List św. Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Drugi. List św Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Drugi. List do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Drugi. Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 List św. Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 List św Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 List do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. List św. Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. List św Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. List do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II List św. Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II List św Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II List do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. List św. Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. List św Pawła do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. List do Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pol)", () => {
		expect(p.parse("2 Tymoteusza 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tym 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pol)", () => {
		expect(p.parse("Pierwsza Tym 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsza. Tym 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsze Tym 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwsze. Tym 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwszy Tym 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Pierwszy. Tym 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tym 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tym 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tym 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tym 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pol)", () => {
		expect(p.parse("1 Tymoteusza 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pol)", () => {
		expect(p.parse("List św. Pawła do Tytusa 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("List św Pawła do Tytusa 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("List do Tytusa 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tytusa 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tyt 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pol)", () => {
		expect(p.parse("List św. Pawła do Filemona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("List św Pawła do Filemona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("List do Filemona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pol)", () => {
		expect(p.parse("List do Hebrajczyków 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("List do Żydów 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrajczyków 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Żydów 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hbr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Żyd 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pol)", () => {
		expect(p.parse("List powszechny Świętego Iakuba Apostoła 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("List św. Jakuba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("List św Jakuba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("List Jakuba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakuba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pol)", () => {
		expect(p.parse("Pierwsza List św. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsza List św Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsza List Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsza Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsza Piotr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsza. List św. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsza. List św Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsza. List Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsza. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsza. Piotr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsze List św. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsze List św Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsze List Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsze Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsze Piotr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsze. List św. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsze. List św Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsze. List Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsze. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwsze. Piotr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwszy List św. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwszy List św Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwszy List Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwszy Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwszy Piotr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwszy. List św. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwszy. List św Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwszy. List Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwszy. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pierwszy. Piotr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 List św. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 List św Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 List Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Piotr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. List św. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. List św Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. List Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piotr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I List św. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I List św Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I List Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Piotr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. List św. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. List św Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. List Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Piotr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pol)", () => {
		expect(p.parse("Druga List św. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga List św Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga List Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga Piotr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga. List św. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga. List św Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga. List Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga. Piotr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Drugi List św. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Drugi List św Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Drugi List Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Drugi Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Drugi Piotr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Drugi. List św. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Drugi. List św Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Drugi. List Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Drugi. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Drugi. Piotr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 List św. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 List św Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 List Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Piotr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. List św. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. List św Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. List Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piotr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II List św. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II List św Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II List Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Piotr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. List św. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. List św Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. List Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Piotr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pol)", () => {
		expect(p.parse("2 Piotra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pol)", () => {
		expect(p.parse("1 Piotra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pol)", () => {
		expect(p.parse("List powszechny Świętego Iudasa Apostoła 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("List św. Judy 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("List św Judy 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("List Judy 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judy 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (pol)", () => {
		expect(p.parse("Księga Tobiasza 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Księga Tobita 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Księga. Tobiasza 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Księga. Tobita 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Księgi Tobiasza 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Księgi Tobita 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Księgi. Tobiasza 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Księgi. Tobita 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Ks. Tobiasza 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Ks. Tobita 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Ks Tobiasza 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Ks Tobita 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Tob (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (pol)", () => {
		expect(p.parse("Księga Tobiasza 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tb 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (pol)", () => {
		expect(p.parse("Księga Judyty 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Księga. Judyty 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Księgi Judyty 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Księgi. Judyty 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Ks. Judyty 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Ks Judyty 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Jdt (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (pol)", () => {
		expect(p.parse("Judyty 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Jdt (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (pol)", () => {
		expect(p.parse("Księga Judyty 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (pol)", () => {
		expect(p.parse("Księga Barucha 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Księga. Barucha 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Księgi Barucha 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Księgi. Barucha 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Ks. Barucha 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Ks Barucha 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Bar (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (pol)", () => {
		expect(p.parse("Barucha 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Bar (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (pol)", () => {
		expect(p.parse("Księga Barucha 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Ba 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (pol)", () => {
		expect(p.parse("Opowiadaniem o Zuzannie 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Zuzanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (pol)", () => {
		expect(p.parse("Pierwsza Księga Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwsza Księga. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwsza Księgi Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwsza Księgi. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwsza Ks. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwsza Ks Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwsze Księga Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwsze Księga. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwsze Księgi Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwsze Księgi. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwsze Ks. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwsze Ks Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwszy Księga Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwszy Księga. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwszy Księgi Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwszy Księgi. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwszy Ks. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Pierwszy Ks Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Księga Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Księga. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Księga Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Księga. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Księgi Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Księgi. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Księgi Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Księgi. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Ks. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Ks Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Ks. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Ks Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Księga Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Księga. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Księga Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Księga. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Księgi Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Księgi. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Księgi Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Księgi. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Ks. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Ks Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Ks. Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Ks Machabejska 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (pol)", () => {
		expect(p.parse("Druga Księga Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druga Księga. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druga Księgi Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druga Księgi. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druga Ks. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druga Ks Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Drugi Księga Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Drugi Księga. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Drugi Księgi Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Drugi Księgi. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Drugi Ks. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Drugi Ks Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Księga Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Księga. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Księga Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Księga. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Księgi Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Księgi. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Księgi Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Księgi. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Ks. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Ks Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Ks. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Ks Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Księga Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Księga. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Księga Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Księga. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Księgi Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Księgi. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Księgi Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Księgi. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Ks. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Ks Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Ks. Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Ks Machabejska 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (pol)", () => {
		expect(p.parse("Trzecia Księga Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Trzecia Księga. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Trzecia Księgi Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Trzecia Księgi. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Trzecia Ks. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Trzecia Ks Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Trzeci Księga Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Trzeci Księga. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Trzeci Księgi Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Trzeci Księgi. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Trzeci Ks. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Trzeci Ks Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Księga Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Księga. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Księga Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Księga. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Księgi Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Księgi. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Księgi Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Księgi. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Ks. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Ks Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Ks. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Ks Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Księga Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Księga. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Księga Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Księga. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Księgi Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Księgi. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Księgi Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Księgi. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Ks. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Ks Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Ks. Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Ks Machabejska 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (pol)", () => {
		expect(p.parse("Czwarta Księga Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Czwarta Księga. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Czwarta Księgi Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Czwarta Księgi. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Czwarta Ks. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Czwarta Ks Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Księga Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Księga. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Księga Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Księga. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Księgi Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Księgi. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Księgi Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Księgi. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Ks. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Ks Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Ks. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Ks Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Księga Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Księga. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Księga Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Księga. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Księgi Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Księgi. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Księgi Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Księgi. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Ks. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Ks Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Ks. Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Ks Machabejska 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (pol)", () => {
		expect(p.parse("2 Księga Machabejska 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mach 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mch 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (pol)", () => {
		expect(p.parse("3 Księga Machabejska 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mach 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mch 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (pol)", () => {
		expect(p.parse("4 Księga Machabejska 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mach 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mch 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (pol)", () => {
		expect(p.parse("1 Księga Machabejska 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mach 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mch 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (pol)", () => {
		expect(p.parse("Titus 1:1 do 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1do2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 do 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (pol)", () => {
		expect(p.parse("Titus 1:1, rozdziały 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 rozdziały 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, rozdziałów 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 rozdziałów 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, rozdział 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 rozdział 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, rozdz 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 rozdz 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, rr. 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 rr. 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, rr 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 rr 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (pol)", () => {
		expect(p.parse("Exod 1:1 wersetów 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm wersetów 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 wersety 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm wersety 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 werset 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm werset 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 wers. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm wers. 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 wers 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm wers 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 w. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm w. 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (pol)", () => {
		expect(p.parse("Exod 1:1 oraz 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 oraz 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 por 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 por 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 i 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 i 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (pol)", () => {
		expect(p.parse("Ps 3 tytuł, 4:2, 5:tytuł").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'next' (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'next' (pol)", () => {
		expect(p.parse("Rev 3:1n, 4:2n").osis()).toEqual("Rev.3.1-Rev.3.2,Rev.4.2-Rev.4.3");
		expect(p.parse("Jude 1n, 2n").osis()).toEqual("Jude.1.1-Jude.1.2,Jude.1.2-Jude.1.3");
		expect(p.parse("Gen 1:31n").osis()).toEqual("Gen.1.31-Gen.2.1");
	});
});
describe("Parser helper should handle translations (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (pol)", () => {
		expect(p.parse("Lev 1 (NP)").osis_and_translations()).toEqual([["Lev.1","NP"]]);
	});
});
describe("Parser helper should handle book ranges (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (pol)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Pierwsza List św. Jana do Trzecia List św. Jana").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (pol)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});
describe("Custom tests (pol)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should parse `next` correctly when followed by a word", () => {
		expect(p.parse("za Jan 7:36, 7:44, 21:25 nebo za Luk 21:38").osis()).toEqual("John.7.36,John.7.44,John.21.25,Luke.21.38");
	});
});

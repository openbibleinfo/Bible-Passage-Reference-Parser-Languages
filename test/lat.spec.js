"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lat.js";

describe("Localized book Gen (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lat)", () => {
		expect(p.parse("Liber Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lat)", () => {
		expect(p.parse("Liber Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (lat)", () => {
		expect(p.parse("Histoia Beli et draconis 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel et draconis 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lat)", () => {
		expect(p.parse("Liber Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lat)", () => {
		expect(p.parse("Liber Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (lat)", () => {
		expect(p.parse("Oratio Iesu filii Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Liber Ecclesiasticus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclesiasticus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (lat)", () => {
		expect(p.parse("Sapientia Salomonis 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Liber Sapientiae 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sapientia 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sapient 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sap 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lat)", () => {
		expect(p.parse("Lamentationes 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (lat)", () => {
		expect(p.parse("Oratio Ieremiae 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Or. Ier 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Or Ier 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lat)", () => {
		expect(p.parse("Apocalypsis Ioannis Apostoli 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalypsis Ioannis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalypsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apoc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (lat)", () => {
		expect(p.parse("Oratio regis Manassae 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Oratio Manassae 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Or. Man 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Or Man 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lat)", () => {
		expect(p.parse("Liber Deuteronomii 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronomium 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lat)", () => {
		expect(p.parse("Liber Iosue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iosue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ios 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lat)", () => {
		expect(p.parse("Liber Iudicum 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Iudicum 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Iud 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lat)", () => {
		expect(p.parse("Liber Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (lat)", () => {
		expect(p.parse("Liber Esdrae I 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Liber I Esdrae 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esdrae 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (lat)", () => {
		expect(p.parse("Liber Esdrae II 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Liber II Esdrae 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esdrae 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (lat)", () => {
		expect(p.parse("I Esdrae 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esdrae 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdrae 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdrae 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (lat)", () => {
		expect(p.parse("II Esdrae 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esdrae 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdrae 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdrae 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lat)", () => {
		expect(p.parse("Esdrae 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esdra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lat)", () => {
		expect(p.parse("Liber Isaiae 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaias 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lat)", () => {
		expect(p.parse("I Regnorum 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Regnorum 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Regnorum 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Regnorum 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lat)", () => {
		expect(p.parse("II Regnorum 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Regnorum 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Regnorum 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Regnorum 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lat)", () => {
		expect(p.parse("III Regnorum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Regnorum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Regnorum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Regnorum 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lat)", () => {
		expect(p.parse("IV Regnorum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Regnorum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Regnorum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Regnorum 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lat)", () => {
		expect(p.parse("I Samuelis 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuelis 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelis 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelis 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lat)", () => {
		expect(p.parse("II Samuelis 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuelis 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelis 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelis 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lat)", () => {
		expect(p.parse("Liber II Samuelis 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Samuelis II 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuelis 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lat)", () => {
		expect(p.parse("Liber I Samuelis 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Samuelis I 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuelis 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lat)", () => {
		expect(p.parse("I Regum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Reg 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Regum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Reg 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Regum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Reg 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Regum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Reg 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lat)", () => {
		expect(p.parse("II Regum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Reg 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Regum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Reg 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Regum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Reg 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Regum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Reg 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lat)", () => {
		expect(p.parse("Liber II Regum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Regum II 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Regum 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Reg 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lat)", () => {
		expect(p.parse("Liber I Regum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Regum I 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Regum 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Reg 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lat)", () => {
		expect(p.parse("I Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Par 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Par 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Par 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Par 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lat)", () => {
		expect(p.parse("II Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Par 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Par 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Par 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Par 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lat)", () => {
		expect(p.parse("Liber II Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Paralipomenon II 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Par 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lat)", () => {
		expect(p.parse("Liber I Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Paralipomenon I 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Par 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lat)", () => {
		expect(p.parse("Liber Esdrae 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esdr 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lat)", () => {
		expect(p.parse("Liber Nehemiae 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemiae 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (lat)", () => {
		expect(p.parse("Esther graeca 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Graeca Esther 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lat)", () => {
		expect(p.parse("Liber Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lat)", () => {
		expect(p.parse("Liber Iob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lat)", () => {
		expect(p.parse("Liber Psalmorum 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmus 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psa 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (lat)", () => {
		expect(p.parse("Oratio Azariae 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Or. Azar 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Or Azar 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lat)", () => {
		expect(p.parse("Liber Proverbiorum 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Proverbia 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pro 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lat)", () => {
		expect(p.parse("Liber Ecclesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Liber Qoelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ec 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qo 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (lat)", () => {
		expect(p.parse("Hymnus trium puerorum 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lat)", () => {
		expect(p.parse("Canticum Canticorum 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cant. Cantic 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cant Cantic 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Can 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lat)", () => {
		expect(p.parse("Liber Ieremiae 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ieremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ier 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lat)", () => {
		expect(p.parse("Prophetia Ezechielis 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezechiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lat)", () => {
		expect(p.parse("Prophetia Danielis 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lat)", () => {
		expect(p.parse("Prophetia Osee 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osee 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lat)", () => {
		expect(p.parse("Prophetia Ioel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ioel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lat)", () => {
		expect(p.parse("Prophetia Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lat)", () => {
		expect(p.parse("Prophetia Abdiae 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lat)", () => {
		expect(p.parse("Prophetia Ionae 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ionas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Iona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lat)", () => {
		expect(p.parse("Prophetia Michaeae 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Michaeas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lat)", () => {
		expect(p.parse("Prophetia Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lat)", () => {
		expect(p.parse("Prophetia Habacuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habacuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lat)", () => {
		expect(p.parse("Prophetia Sophoniae 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sophonias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Soph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lat)", () => {
		expect(p.parse("Prophetia Aggaei 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aggaeus 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lat)", () => {
		expect(p.parse("Prophetia Zachariae 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zacharias 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zac 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lat)", () => {
		expect(p.parse("Prophetia Malachiae 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malachias 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lat)", () => {
		expect(p.parse("Evangelium secundum Matthaeum 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matthaeus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lat)", () => {
		expect(p.parse("Evangelium secundum Marcum 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marcus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lat)", () => {
		expect(p.parse("Evangelium secundum Lucam 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lat)", () => {
		expect(p.parse("I Ioannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Ioannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ioannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioannis 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lat)", () => {
		expect(p.parse("II Ioannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Ioannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ioannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioannis 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lat)", () => {
		expect(p.parse("III Ioannis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Ioannis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ioannis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ioannis 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lat)", () => {
		expect(p.parse("Epistula I Ioannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Epistula Ioannis I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ioannis I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Ioannis 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I In 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lat)", () => {
		expect(p.parse("Epistula II Ioannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Epistula Ioannis II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ioannis II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Ioannis 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II In 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lat)", () => {
		expect(p.parse("Epistula III Ioannis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Epistula Ioannis III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Ioannis III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Ioannis 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III In 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lat)", () => {
		expect(p.parse("I In 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. In 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 In 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. In 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lat)", () => {
		expect(p.parse("II In 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. In 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 In 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. In 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lat)", () => {
		expect(p.parse("III In 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. In 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 In 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. In 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lat)", () => {
		expect(p.parse("In 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lat)", () => {
		expect(p.parse("Evangelium secundum Ioannem 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ioannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ioan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lat)", () => {
		expect(p.parse("Actus Apostolorum 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Actus 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lat)", () => {
		expect(p.parse("Epistula ad Romanos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ad Romanos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romanos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lat)", () => {
		expect(p.parse("I Corinthios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corinthios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinthios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lat)", () => {
		expect(p.parse("II Corinthios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corinthios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinthios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lat)", () => {
		expect(p.parse("Epistula II ad Corinthios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Epistula ad Corinthios II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("ad Corinthios II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Corinthios II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corinthios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lat)", () => {
		expect(p.parse("Epistula I ad Corinthios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Epistula ad Corinthios I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ad Corinthios I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Corinthios I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corinthios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lat)", () => {
		expect(p.parse("Epistula ad Galatas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ad Galatas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lat)", () => {
		expect(p.parse("Epistula ad Ephesios 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ad Ephesios 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ephesios 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lat)", () => {
		expect(p.parse("Epistula ad Philippenses 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ad Philippenses 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philippenses 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lat)", () => {
		expect(p.parse("Epistula ad Colossenses 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ad Colossenses 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colossenses 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lat)", () => {
		expect(p.parse("I Thessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lat)", () => {
		expect(p.parse("II Thessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lat)", () => {
		expect(p.parse("Epistula II ad Thessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Epistula ad Thessalonicenses II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ad Thessalonicenses II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Thessalonicenses II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lat)", () => {
		expect(p.parse("Epistula I ad Thessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Epistula ad Thessalonicenses I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ad Thessalonicenses I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Thessalonicenses I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lat)", () => {
		expect(p.parse("I Timotheum 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotheum 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotheum 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotheum 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lat)", () => {
		expect(p.parse("II Timotheum 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotheum 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotheum 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotheum 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lat)", () => {
		expect(p.parse("Epistula II ad Timotheum 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Epistula ad Timotheum II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ad Timotheum II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Timotheum II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timotheum 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lat)", () => {
		expect(p.parse("Epistula I ad Timotheum 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Epistula ad Timotheum I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ad Timotheum I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Timotheum I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timotheum 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lat)", () => {
		expect(p.parse("Epistula ad Titum 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ad Titum 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titum 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lat)", () => {
		expect(p.parse("Epistulam ad Philemonem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Epistula ad Philemonem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ad Philemonem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philemonem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phmn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lat)", () => {
		expect(p.parse("Epistula ad Hebraeos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ad Hebraeos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebraeos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lat)", () => {
		expect(p.parse("Epistula Iacobi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iacobi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lat)", () => {
		expect(p.parse("I Petri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lat)", () => {
		expect(p.parse("II Petri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lat)", () => {
		expect(p.parse("Epistula II Petri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Epistula Petri II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Petri II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lat)", () => {
		expect(p.parse("Epistula I Petri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Epistula Petri I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Petri I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lat)", () => {
		expect(p.parse("Epistula Iudae 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iudae 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (lat)", () => {
		expect(p.parse("Liber Thobis 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Liber Tobiae 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobiae 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobias 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tho 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (lat)", () => {
		expect(p.parse("Liber Iudith 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Iudith 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Idt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (lat)", () => {
		expect(p.parse("Liber Baruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (lat)", () => {
		expect(p.parse("Historia Susannae 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susannae 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (lat)", () => {
		expect(p.parse("I Machabaeorum 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabaeorum 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Mac 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Machabaeorum 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabaeorum 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Mac 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Machabaeorum 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabaeorum 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mac 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Machabaeorum 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabaeorum 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mac 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (lat)", () => {
		expect(p.parse("II Machabaeorum 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabaeorum 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Mac 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Machabaeorum 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabaeorum 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Mac 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Machabaeorum 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabaeorum 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mac 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Machabaeorum 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabaeorum 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mac 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (lat)", () => {
		expect(p.parse("III Machabaeorum 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabaeorum 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Mac 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Machabaeorum 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabaeorum 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Mac 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Machabaeorum 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabaeorum 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mac 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Machabaeorum 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabaeorum 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Mac 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (lat)", () => {
		expect(p.parse("IV Machabaeorum 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabaeorum 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Mac 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Machabaeorum 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabaeorum 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Mac 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Machabaeorum 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabaeorum 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mac 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Machabaeorum 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabaeorum 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Mac 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (lat)", () => {
		expect(p.parse("Liber II Maccabaeorum 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Liber Maccabaeorum II 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Machabaeorum II 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabaeorum 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Mac 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (lat)", () => {
		expect(p.parse("Liber III Maccabaeorum 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Liber Maccabaeorum III 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Machabaeorum III 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabaeorum 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Mac 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (lat)", () => {
		expect(p.parse("Liber IV Maccabaeorum 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Liber Maccabaeorum IV 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Machabaeorum IV 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabaeorum 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Mac 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (lat)", () => {
		expect(p.parse("Liber I Maccabaeorum 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Liber Maccabaeorum I 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Machabaeorum I 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabaeorum 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Mac 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (lat)", () => {
		expect(p.parse("Titus 1:1 ad 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1ad2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 ad 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (lat)", () => {
		expect(p.parse("Titus 1:1, caput 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 caput 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, cap. 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 cap. 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, cap 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 cap 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (lat)", () => {
		expect(p.parse("Exod 1:1 versus 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm versus 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 vers. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm vers. 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 vers 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm vers 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 ver. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm ver. 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 ver 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm ver 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 v. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm v. 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (lat)", () => {
		expect(p.parse("Exod 1:1 et 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 et 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (lat)", () => {
		expect(p.parse("Ps 3 titulus, 4:2, 5:titulus").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (lat)", () => {
		expect(p.parse("Rev 3et sequentes, 4:2et sequentes").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
		expect(p.parse("Rev 3et seq., 4:2et seq.").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
		expect(p.parse("Rev 3et seq, 4:2et seq").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (lat)", () => {
		expect(p.parse("Lev 1 (VULG)").osis_and_translations()).toEqual([["Lev.1","VULG"]]);
		expect(p.parse("Lev 1 (VG)").osis_and_translations()).toEqual([["Lev.1","VG"]]);
	});
});
describe("Parser helper should handle book ranges (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lat)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Ioannis ad III Ioannis").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (lat)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (lat)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

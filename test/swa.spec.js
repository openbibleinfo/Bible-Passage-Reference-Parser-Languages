"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/swa.js";

describe("Localized book Gen (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (swa)", () => {
		expect(p.parse("Kitabu cha Kwanza cha Musa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mwanzo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mwa 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (swa)", () => {
		expect(p.parse("Kitabu cha Pili cha Musa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kutoka 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kut 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (swa)", () => {
		expect(p.parse("Danieli na Makuhani wa Beli 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (swa)", () => {
		expect(p.parse("Kitabu cha Tatu cha Musa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Mambo ya Walawi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Walawi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Law 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Wal 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (swa)", () => {
		expect(p.parse("Kitabu cha Nne cha Musa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Hesabu 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Hes 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (swa)", () => {
		expect(p.parse("Yoshua bin Sira 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sira 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("YbS 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (swa)", () => {
		expect(p.parse("Hekima ya Solomoni 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Hekima 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Hek 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (swa)", () => {
		expect(p.parse("Maombolezo ya Yeremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Maombolezo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mao 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Omb 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (swa)", () => {
		expect(p.parse("Barua ya Yeremia 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (swa)", () => {
		expect(p.parse("Ufunua wa Yohana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ufunuo wa Yohana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ufunuo wa Yohane 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ufunuo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ufu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Uf 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (swa)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (swa)", () => {
		expect(p.parse("Kitabu cha Tano cha Musa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kumbukumbu la Sheria 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kumbukumbu la Torati 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kumbukumbu 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kumb 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kum 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (swa)", () => {
		expect(p.parse("Yoshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (swa)", () => {
		expect(p.parse("Waamuzi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Waam 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Amu 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (swa)", () => {
		expect(p.parse("Kitabu cha Ruthi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Kitabu cha Ruthu 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruthi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruthu 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (swa)", () => {
		expect(p.parse("Kitabu cha Kwanza cha Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (swa)", () => {
		expect(p.parse("Kitabu cha Pili cha Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (swa)", () => {
		expect(p.parse("Kwanza Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Kwanza. Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ezra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (swa)", () => {
		expect(p.parse("Pili Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Pili. Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ezra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (swa)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (swa)", () => {
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (swa)", () => {
		expect(p.parse("Kwanza Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kwanza Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kwanza Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kwanza. Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kwanza. Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Kwanza. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (swa)", () => {
		expect(p.parse("Pili Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Pili Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Pili Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Pili. Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Pili. Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Pili. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (swa)", () => {
		expect(p.parse("Kitabu cha Pili cha Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Samueli II 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (swa)", () => {
		expect(p.parse("Kitabu cha Kwanza cha Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Samueli I 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (swa)", () => {
		expect(p.parse("Kwanza Wafalme 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Kwanza Fal 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Kwanza. Wafalme 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Kwanza. Fal 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Wafalme 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Fal 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Wafalme 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Fal 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Wafalme 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Fal 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Wafalme 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Fal 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (swa)", () => {
		expect(p.parse("Pili Wafalme 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Pili Fal 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Pili. Wafalme 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Pili. Fal 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Wafalme 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Fal 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Wafalme 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Fal 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Wafalme 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Fal 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Wafalme 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Fal 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (swa)", () => {
		expect(p.parse("Kitabu cha Pili cha Wafalme 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Wafalme II 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Wafalme 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Fal 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (swa)", () => {
		expect(p.parse("Kitabu cha Kwanza cha Wafalme 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Wafalme I 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Wafalme 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Fal 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (swa)", () => {
		expect(p.parse("Kwanza Mambo ya Nyakati 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kwanza Nya 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kwanza. Mambo ya Nyakati 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kwanza. Nya 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Mambo ya Nyakati 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Nya 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Mambo ya Nyakati 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Nya 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Mambo ya Nyakati 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Nya 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Mambo ya Nyakati 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Nya 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (swa)", () => {
		expect(p.parse("Pili Mambo ya Nyakati 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Pili Nya 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Pili. Mambo ya Nyakati 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Pili. Nya 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Mambo ya Nyakati 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Nya 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Mambo ya Nyakati 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Nya 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Mambo ya Nyakati 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Nya 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Mambo ya Nyakati 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Nya 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (swa)", () => {
		expect(p.parse("Mambo ya Nyakati II 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Mambo ya Nyakati 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Nya 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (swa)", () => {
		expect(p.parse("Mambo ya Nyakati I 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Mambo ya Nyakati 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Nya 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (swa)", () => {
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (swa)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (swa)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (swa)", () => {
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (swa)", () => {
		expect(p.parse("Kitabu cha Ayubu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Kitabu cha Yobu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayubu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yobu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (swa)", () => {
		expect(p.parse("Zaburi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zab 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (swa)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (swa)", () => {
		expect(p.parse("Methali 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mithali 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Meth 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mith 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mit 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (swa)", () => {
		expect(p.parse("Mhubiri 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mhu 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (swa)", () => {
		expect(p.parse("Wimbo wa Vijana Watatu 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (swa)", () => {
		expect(p.parse("Wimbo Ulio Bora 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Wimbo Bora 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Wim 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (swa)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (swa)", () => {
		expect(p.parse("Ezekieli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (swa)", () => {
		expect(p.parse("Danieli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (swa)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (swa)", () => {
		expect(p.parse("Yoeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (swa)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (swa)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (swa)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (swa)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (swa)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (swa)", () => {
		expect(p.parse("Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (swa)", () => {
		expect(p.parse("Sefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (swa)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (swa)", () => {
		expect(p.parse("Zekaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (swa)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (swa)", () => {
		expect(p.parse("Injili ya Mathayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mathayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Math 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (swa)", () => {
		expect(p.parse("Injili ya Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (swa)", () => {
		expect(p.parse("Injili ya Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (swa)", () => {
		expect(p.parse("Waraka wa Kwanza wa Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Barua ya Kwanza ya Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yohane I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (swa)", () => {
		expect(p.parse("Waraka wa Pili wa Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Barua ya Pili ya Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yohane II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (swa)", () => {
		expect(p.parse("Waraka wa Tatu wa Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Barua ya Tatu ya Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yohane III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (swa)", () => {
		expect(p.parse("Kwanza Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kwanza Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kwanza Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kwanza. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kwanza. Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Kwanza. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (swa)", () => {
		expect(p.parse("Pili Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pili Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pili Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pili. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pili. Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Pili. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (swa)", () => {
		expect(p.parse("Tatu Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tatu Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tatu Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tatu. Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tatu. Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tatu. Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (swa)", () => {
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (swa)", () => {
		expect(p.parse("Injili ya Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Injili ya Yohane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (swa)", () => {
		expect(p.parse("Matendo ya Mitume 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Matendo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mdo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (swa)", () => {
		expect(p.parse("Waraka kwa Waroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Waraka kwa Warumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Barua kwa Waroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Waroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Warumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (swa)", () => {
		expect(p.parse("Kwanza Wakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kwanza Wakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kwanza Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kwanza. Wakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kwanza. Wakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kwanza. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Wakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Wakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Wakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Wakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Wakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Wakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Wakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Wakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (swa)", () => {
		expect(p.parse("Pili Wakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pili Wakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pili Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pili. Wakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pili. Wakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Pili. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Wakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Wakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Wakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Wakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Wakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Wakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Wakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Wakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (swa)", () => {
		expect(p.parse("Waraka wa Pili kwa Wakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Barua ya Pili kwa Wakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Waraka wa Pili kwa Wakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Wakorintho II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Wakorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (swa)", () => {
		expect(p.parse("Waraka wa Kwanza kwa Wakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Barua ya Kwanza kwa Wakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Waraka wa Kwanza kwa Wakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Wakorintho I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Wakorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (swa)", () => {
		expect(p.parse("Barua kwa Wagalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Wagalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (swa)", () => {
		expect(p.parse("Waraka kwa Waefeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Barua kwa Waefeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Waefeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (swa)", () => {
		expect(p.parse("Waraka kwa Wafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Barua kwa Wafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Wafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (swa)", () => {
		expect(p.parse("Waraka kwa Wakolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Barua kwa Wakolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Wakolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (swa)", () => {
		expect(p.parse("Kwanza Wathesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kwanza Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kwanza The 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kwanza Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kwanza. Wathesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kwanza. Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kwanza. The 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Kwanza. Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Wathesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I The 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Wathesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. The 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Wathesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 The 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Wathesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. The 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (swa)", () => {
		expect(p.parse("Pili Wathesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pili Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pili The 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pili Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pili. Wathesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pili. Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pili. The 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Pili. Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Wathesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II The 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Wathesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. The 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Wathesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 The 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Wathesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. The 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (swa)", () => {
		expect(p.parse("Waraka wa Pili kwa Wathesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Waraka wa Pili kwa Wathesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Barua ya Pili kwa Wathesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Wathesalonike II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Wathesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (swa)", () => {
		expect(p.parse("Waraka wa Kwanza kwa Wathesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Waraka wa Kwanza kwa Wathesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Barua ya Kwanza kwa Wathesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Wathesalonike I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Wathesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (swa)", () => {
		expect(p.parse("Kwanza Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kwanza Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kwanza. Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Kwanza. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (swa)", () => {
		expect(p.parse("Pili Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pili Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pili. Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Pili. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (swa)", () => {
		expect(p.parse("Waraka wa Pili kwa Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Barua ya Pili kwa Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Timotheo II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (swa)", () => {
		expect(p.parse("Waraka wa Kwanza kwa Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Barua ya Kwanza kwa Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Timotheo I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (swa)", () => {
		expect(p.parse("Waraka kwa Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Barua kwa Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (swa)", () => {
		expect(p.parse("Waraka kwa Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Barua kwa Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (swa)", () => {
		expect(p.parse("Waraka kwa Waebrania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Barua kwa Waebrania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Waebrania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (swa)", () => {
		expect(p.parse("Waraka wa Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Barua ya Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (swa)", () => {
		expect(p.parse("Kwanza Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kwanza Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kwanza. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Kwanza. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (swa)", () => {
		expect(p.parse("Pili Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pili Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pili. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pili. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (swa)", () => {
		expect(p.parse("Waraka wa Pili wa Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Barua ya Pili ya Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Petro II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (swa)", () => {
		expect(p.parse("Waraka wa Kwanza wa Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Barua ya Kwanza ya Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Petro I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (swa)", () => {
		expect(p.parse("Barua ya Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (swa)", () => {
		expect(p.parse("Tobiti 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (swa)", () => {
		expect(p.parse("Yudithi 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yudith 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yuditi 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yudit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yudt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (swa)", () => {
		expect(p.parse("Baruku 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (swa)", () => {
		expect(p.parse("Susana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (swa)", () => {
		expect(p.parse("Kwanza Wamakabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Kwanza Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Kwanza. Wamakabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Kwanza. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Wamakabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Wamakabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Wamakabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Wamakabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (swa)", () => {
		expect(p.parse("Pili Wamakabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Pili Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Pili. Wamakabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Pili. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Wamakabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Wamakabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Wamakabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Wamakabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (swa)", () => {
		expect(p.parse("Tatu Wamakabayo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tatu Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tatu. Wamakabayo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tatu. Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Wamakabayo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Wamakabayo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Wamakabayo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Wamakabayo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Mak 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (swa)", () => {
		expect(p.parse("Nne Wamakabayo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Nne Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Nne. Wamakabayo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Nne. Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Wamakabayo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Wamakabayo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Wamakabayo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Wamakabayo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Mak 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (swa)", () => {
		expect(p.parse("Kitabu cha Wamakabayo II 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Wamakabayo II 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Wamakabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (swa)", () => {
		expect(p.parse("Kitabu cha Wamakabayo III 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Wamakabayo III 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Wamakabayo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mak 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (swa)", () => {
		expect(p.parse("Kitabu cha Wamakabayo IV 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Wamakabayo IV 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Wamakabayo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mak 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (swa)", () => {
		expect(p.parse("Kitabu cha Wamakabayo I 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Wamakabayo I 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Wamakabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book John,Jonah (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John,Jonah (swa)", () => {
		expect(p.parse("Yn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Parser helper should handle ranges (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (swa)", () => {
		expect(p.parse("Titus 1:1 hadi 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1hadi2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 hadi 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (swa)", () => {
		expect(p.parse("Titus 1:1, sura 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 sura 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (swa)", () => {
		expect(p.parse("Exod 1:1 mistari 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm mistari 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (swa)", () => {
		expect(p.parse("Exod 1:1 taz. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 taz. 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 taz 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 taz 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 na 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 na 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (swa)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (swa)", () => {
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (swa)", () => {
		expect(p.parse("Lev 1 (SUV)").osis_and_translations()).toEqual([["Lev.1","SUV"]]);
		expect(p.parse("Lev 1 (HN)").osis_and_translations()).toEqual([["Lev.1","HN"]]);
	});
});
describe("Parser helper should handle book ranges (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (swa)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Waraka wa Kwanza wa Yohane hadi Waraka wa Tatu wa Yohane").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (swa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (swa)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/isl.js";

describe("Localized book Gen (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (isl)", () => {
		expect(p.parse("1 Mósebók 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mós 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mósebók 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mós 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Mósebók 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Mós 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Mósebók 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Mós 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (isl)", () => {
		expect(p.parse("2 Mósebók 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mós 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mósebók 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mós 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Mósebók 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Mós 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Mósebók 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Mós 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (isl)", () => {
		expect(p.parse("3 Mósebók 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mós 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mósebók 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mós 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Mósebók 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Mós 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Mósebók 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Mós 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (isl)", () => {
		expect(p.parse("4 Mósebók 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mós 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mósebók 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mós 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Mósebók 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Mós 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Mósebók 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Mós 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (isl)", () => {
		expect(p.parse("5 Mósebók 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mós 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mósebók 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mós 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Mósebók 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Mós 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Mósebók 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Mós 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (isl)", () => {
		expect(p.parse("Fyrsta bók Móse 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Fyrsta Mósebók 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1Mós 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (isl)", () => {
		expect(p.parse("Önnur bók Móse 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Önnur Mósebók 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2Mós 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (isl)", () => {
		expect(p.parse("Bel og drekinn 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (isl)", () => {
		expect(p.parse("Þriðja bók Móse 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Þriðja Mósebók 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3Mós 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (isl)", () => {
		expect(p.parse("Fjórða bók Móse 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Fjórða Mósebók 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4Mós 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (isl)", () => {
		expect(p.parse("Síraksbók 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sír 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (isl)", () => {
		expect(p.parse("Speki Salómons 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("SSal 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (isl)", () => {
		expect(p.parse("Harmljóðin 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Hlj 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (isl)", () => {
		expect(p.parse("Bréf Jeremía 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("BJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (isl)", () => {
		expect(p.parse("Opinberunarbók Jóhannesar 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Opinberun Jóhannesar 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Opinberunarbókin 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Opb 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (isl)", () => {
		expect(p.parse("Bæn Manasse 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("BMn 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (isl)", () => {
		expect(p.parse("Fimmta bók Móse 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Fimmta Mósebók 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronomium 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5Mós 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (isl)", () => {
		expect(p.parse("Jósuabók 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jósúabók 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jós 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (isl)", () => {
		expect(p.parse("Dómarabókin 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dómarabók 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dóm 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (isl)", () => {
		expect(p.parse("Rutarbók 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (isl)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (isl)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (isl)", () => {
		expect(p.parse("Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (isl)", () => {
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (isl)", () => {
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (isl)", () => {
		expect(p.parse("Síðari Samúelsbók 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (isl)", () => {
		expect(p.parse("Fyrri Samúelsbók 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (isl)", () => {
		expect(p.parse("1 Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kon 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (isl)", () => {
		expect(p.parse("2 Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kon 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (isl)", () => {
		expect(p.parse("Síðari bók konunganna 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Síðari Konungabók 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Síðari konungabók 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (isl)", () => {
		expect(p.parse("Fyrri bók konunganna 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fyrri Konungabók 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fyrri konungabók 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (isl)", () => {
		expect(p.parse("1 Kro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kro 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (isl)", () => {
		expect(p.parse("2 Kro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kro 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (isl)", () => {
		expect(p.parse("Síðari Kroníkubók 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Síðari kroníkubók 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (isl)", () => {
		expect(p.parse("Fyrri Kroníkubók 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Fyrri kroníkubók 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (isl)", () => {
		expect(p.parse("Esrabók 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (isl)", () => {
		expect(p.parse("Nehemíabók 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (isl)", () => {
		expect(p.parse("Esterarbók hin gríska 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (isl)", () => {
		expect(p.parse("Esterarbók 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (isl)", () => {
		expect(p.parse("Jobsbók 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (isl)", () => {
		expect(p.parse("Sálmarnir 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Slm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (isl)", () => {
		expect(p.parse("Bæn Asarja 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (isl)", () => {
		expect(p.parse("Orðskviðirnir 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Okv 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (isl)", () => {
		expect(p.parse("Prédikarinn 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Préd 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (isl)", () => {
		expect(p.parse("Lofsöngur ungmennanna þriggja 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (isl)", () => {
		expect(p.parse("Ljóðaljóðin 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ljl 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (isl)", () => {
		expect(p.parse("Jeremía 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (isl)", () => {
		expect(p.parse("Esekíel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (isl)", () => {
		expect(p.parse("Daníel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (isl)", () => {
		expect(p.parse("Hósea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hós 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (isl)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jóel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (isl)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (isl)", () => {
		expect(p.parse("Óbadía 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ób 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (isl)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jónas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jón 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (isl)", () => {
		expect(p.parse("Míka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mík 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (isl)", () => {
		expect(p.parse("Nahúm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (isl)", () => {
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (isl)", () => {
		expect(p.parse("Sefanía 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (isl)", () => {
		expect(p.parse("Haggaí 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (isl)", () => {
		expect(p.parse("Sakaría 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (isl)", () => {
		expect(p.parse("Malakí 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (isl)", () => {
		expect(p.parse("Matteusarguðspjall 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (isl)", () => {
		expect(p.parse("Markúsarguðspjall 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (isl)", () => {
		expect(p.parse("Lúkasarguðspjall 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lúk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (isl)", () => {
		expect(p.parse("Fyrsta bréf Jóhannesar hið almenna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Fyrsta bréf Jóhannesar 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Fyrsta Jóhannesarbréf 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jóh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (isl)", () => {
		expect(p.parse("Annað bréf Jóhannesar 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Annað Jóhannesarbréf 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jóh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (isl)", () => {
		expect(p.parse("Þriðja bréf Jóhannesar 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Þriðja Jóhannesarbréf 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jóh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (isl)", () => {
		expect(p.parse("1 Jóh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jóh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jóh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jóh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (isl)", () => {
		expect(p.parse("2 Jóh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jóh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jóh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jóh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (isl)", () => {
		expect(p.parse("3 Jóh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jóh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Jóh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jóh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (isl)", () => {
		expect(p.parse("Jóh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (isl)", () => {
		expect(p.parse("Jóhannesarguðspjall 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (isl)", () => {
		expect(p.parse("Postulasagan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Post 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (isl)", () => {
		expect(p.parse("Bréf Páls til Rómverja 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rómverjabréfið 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Róm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (isl)", () => {
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (isl)", () => {
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (isl)", () => {
		expect(p.parse("Síðara bréf Páls til Korintumanna 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Síðara bréf Páls til Kori 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Síðara Korintubréf 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Síðara Kórintubréf 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (isl)", () => {
		expect(p.parse("Fyrra bréf Páls til Korintumanna 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fyrra bréf Páls til Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Fyrra Korintubréf 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (isl)", () => {
		expect(p.parse("Bréf Páls til Galatamanna 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatabréfið 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (isl)", () => {
		expect(p.parse("Bréf Páls til Efesusmanna 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesusbréfið 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (isl)", () => {
		expect(p.parse("Bréf Páls til Filippímanna 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bréf Páls til Filippímann 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filippíbréfið 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (isl)", () => {
		expect(p.parse("Bréf Páls til Kólossumanna 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Bréf Páls til Kólossumann 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kólossubréfið 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kólussubréfið 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kól 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (isl)", () => {
		expect(p.parse("1 Þess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Þess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Þess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Þess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (isl)", () => {
		expect(p.parse("2 Þess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Þess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Þess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Þess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (isl)", () => {
		expect(p.parse("Síðara bréf Páls til Þessaloníkumanna 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Síðara bréf Páls til Þess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Síðara Þessaloníkubréf 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Þess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (isl)", () => {
		expect(p.parse("Fyrra bréf Páls til Þessaloníkumanna 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fyrra bréf Páls til Þessa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Fyrra Þessaloníkubréf 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Þess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (isl)", () => {
		expect(p.parse("1 Tím 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tím 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tím 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tím 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (isl)", () => {
		expect(p.parse("2 Tím 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tím 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tím 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tím 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (isl)", () => {
		expect(p.parse("Síðara bréf Páls til Tímóteusar 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Síðara bréf Páls til Tímó 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Síðara Tímóteusarbréf 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tím 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (isl)", () => {
		expect(p.parse("Fyrra bréf Páls til Tímóteusar 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fyrra bréf Páls til Tímót 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Fyrra Tímóteusarbréf 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tím 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (isl)", () => {
		expect(p.parse("Bréf Páls til Títusar 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Títusarbréfið 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Títusarbréf 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (isl)", () => {
		expect(p.parse("Bréf Páls til Fílemons 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fílemonsbréfið 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fílm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (isl)", () => {
		expect(p.parse("Bréfið til Hebrea 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebreabréfið 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (isl)", () => {
		expect(p.parse("Hið almenna bréf Jakobs 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakobsbréfið 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (isl)", () => {
		expect(p.parse("1 Pét 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pét 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pét 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pét 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (isl)", () => {
		expect(p.parse("2 Pét 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pét 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pét 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pét 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (isl)", () => {
		expect(p.parse("Síðara almenna bréf Péturs 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Síðara Pétursbréf 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pét 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (isl)", () => {
		expect(p.parse("Fyrra almenna bréf Péturs 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Fyrra Pétursbréf 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pét 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (isl)", () => {
		expect(p.parse("Hið almenna bréf Júdasar 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Júdasarbréfið 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Júdasarbréf 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Júd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (isl)", () => {
		expect(p.parse("Tóbítsbók 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (isl)", () => {
		expect(p.parse("Júdítarbók 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Júdt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (isl)", () => {
		expect(p.parse("Barúksbók 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (isl)", () => {
		expect(p.parse("Súsanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (isl)", () => {
		expect(p.parse("1 Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Makk 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (isl)", () => {
		expect(p.parse("2 Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Makk 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (isl)", () => {
		expect(p.parse("3 Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Makk 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (isl)", () => {
		expect(p.parse("4 Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Makk 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (isl)", () => {
		expect(p.parse("Önnur Makkabeabók 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (isl)", () => {
		expect(p.parse("Þriðja Makkabeabók 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (isl)", () => {
		expect(p.parse("Fjórða Makkabeabók 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (isl)", () => {
		expect(p.parse("Fyrsta Makkabeabók 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (isl)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1-2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 - 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1–2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 – 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1—2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 — 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (isl)", () => {
		expect(p.parse("Titus 1:1, kafli 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kafli 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, kafla 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kafla 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, kapítuli 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 kapítuli 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (isl)", () => {
		expect(p.parse("Exod 1:1 vers 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm vers 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (isl)", () => {
		expect(p.parse("Exod 1:1 og 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 og 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (isl)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (isl)", () => {
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (isl)", () => {
		expect(p.parse("Lev 1 (B20)").osis_and_translations()).toEqual([["Lev.1","B20"]]);
	});
});
describe("Parser helper should handle book ranges (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (isl)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Fyrsta bréf Jóhannesar hið almenna - Þriðja bréf Jóhannesar").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Fyrsta bréf Jóhannesar hið almenna – Þriðja bréf Jóhannesar").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Fyrsta bréf Jóhannesar hið almenna — Þriðja bréf Jóhannesar").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (isl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (isl)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

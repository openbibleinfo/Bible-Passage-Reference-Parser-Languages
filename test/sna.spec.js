"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sna.js";

describe("Localized book Gen (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sna)", () => {
		expect(p.parse("Genesisi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mavambo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gene 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mav 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (sna)", () => {
		expect(p.parse("Ekisodho 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eksodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kubuda 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ekis 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eki 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kub 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (sna)", () => {
		expect(p.parse("Revhitiko 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Revitiko 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Mupiro 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Revhi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Mup 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (sna)", () => {
		expect(p.parse("Kuverengwa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kuve 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nu 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (sna)", () => {
		expect(p.parse("Sira 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (sna)", () => {
		expect(p.parse("Ungwaru 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Ungwa 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (sna)", () => {
		expect(p.parse("Kuungudza KwaJeremiya 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kuungudza kwaJeremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mariro aJeremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kuungudza 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kuungu 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kuung 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kuu 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sna)", () => {
		expect(p.parse("Zvakaratidzwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zvakazarurwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ɀakazarurwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zvakaz 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zvak 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zva 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (sna)", () => {
		expect(p.parse("Kutsinhira Mutemo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronomio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dhuteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dhute 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dhut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (sna)", () => {
		expect(p.parse("Joshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (sna)", () => {
		expect(p.parse("Vatongi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ʋatoŋgi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Vato 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Vat 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (sna)", () => {
		expect(p.parse("Rute 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (sna)", () => {
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (sna)", () => {
		expect(p.parse("1 Samueri 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samueri 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samueri 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samueri 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (sna)", () => {
		expect(p.parse("2 Samueri 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samueri 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samueri 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samueri 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (sna)", () => {
		expect(p.parse("1 Madzimambo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Madzi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Madzimambo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Madzi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Madzimambo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Madzi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Madzimambo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Madzi 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (sna)", () => {
		expect(p.parse("2 Madzimambo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Madzi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Mad 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Madzimambo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Madzi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mad 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Madzimambo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Madzi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Mad 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Madzimambo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Madzi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Mad 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (sna)", () => {
		expect(p.parse("1 Makoronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Nhoroondo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Makoro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Makor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Nhor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Makoronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Nhoroondo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Makoro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Makor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Nhor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Makoronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Nhoroondo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Makoro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Makor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Nhor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Mak 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Makoronike 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Nhoroondo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Makoro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Makor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Nhor 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Mak 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (sna)", () => {
		expect(p.parse("2 Makoronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Nhoroondo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Makoro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Makor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Nhor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Makoronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Nhoroondo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Makoro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Makor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Nhor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Makoronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Nhoroondo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Makoro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Makor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Nhor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Mak 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Makoronike 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Nhoroondo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Makoro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Makor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Nhor 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Mak 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (sna)", () => {
		expect(p.parse("Ezira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (sna)", () => {
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehe 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (sna)", () => {
		expect(p.parse("Jobho 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jobhu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jobo 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (sna)", () => {
		expect(p.parse("Mapisarema 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mapis 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Nziyo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mapi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Nzi 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (sna)", () => {
		expect(p.parse("Zvirevo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ɀireʋo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Tsumo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Zvir 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Tsu 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Zvi 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (sna)", () => {
		expect(p.parse("Muparidzi 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mupar 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mupa 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (sna)", () => {
		expect(p.parse("Rwiyo Rukuru rwaSoromoni 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Rwiyo Rukuru 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Rwiyo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Rwi 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (sna)", () => {
		expect(p.parse("Jeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jere 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (sna)", () => {
		expect(p.parse("Ezekieri 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (sna)", () => {
		expect(p.parse("Hosiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hose 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (sna)", () => {
		expect(p.parse("Joere 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joeri 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (sna)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (sna)", () => {
		expect(p.parse("Obhadhiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obhadhia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obhad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obha 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (sna)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (sna)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (sna)", () => {
		expect(p.parse("Nahumi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (sna)", () => {
		expect(p.parse("Habhakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habhakuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habha 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habh 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (sna)", () => {
		expect(p.parse("Zefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefan 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefa 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (sna)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haga 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (sna)", () => {
		expect(p.parse("Zekariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekar 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zeka 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (sna)", () => {
		expect(p.parse("Maraki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Marak 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mara 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sna)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mate 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sna)", () => {
		expect(p.parse("Mariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sna)", () => {
		expect(p.parse("Ruka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sna)", () => {
		expect(p.parse("1Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sna)", () => {
		expect(p.parse("2Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sna)", () => {
		expect(p.parse("III Johane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joha 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Joh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sna)", () => {
		expect(p.parse("1 Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joha 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joha 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Johan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Joha 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Joha 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sna)", () => {
		expect(p.parse("2 Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joha 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joha 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Johan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Joha 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Joha 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sna)", () => {
		expect(p.parse("Johane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joha 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sna)", () => {
		expect(p.parse("Maɓasa Aʋaapostora 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mabasa aVapostori 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mabasa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Maɓasa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Maba 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mab 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sna)", () => {
		expect(p.parse("VaRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ƲaRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("VaRom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("VaRo 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Var 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sna)", () => {
		expect(p.parse("1 Vakorinde 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ƲaKorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 VaKori 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Vakor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Vak 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vakorinde 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ƲaKorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. VaKori 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vakor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vak 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Vakorinde 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I ƲaKorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I VaKori 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Vakor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Vak 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Vakorinde 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. ƲaKorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. VaKori 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Vakor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Vak 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sna)", () => {
		expect(p.parse("2 Vakorinde 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ƲaKorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 VaKori 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Vakor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Vak 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vakorinde 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ƲaKorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. VaKori 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vakor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vak 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Vakorinde 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II ƲaKorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II VaKori 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Vakor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Vak 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Vakorinde 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. ƲaKorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. VaKori 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Vakor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Vak 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sna)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sna)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sna)", () => {
		expect(p.parse("VaKorose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ƲaKorose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Korose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("VaKoro 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Vako 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sna)", () => {
		expect(p.parse("Vagaratiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("VaGaratia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ƲaGaratia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("VaGar 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("VaGa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gar 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Vag 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sna)", () => {
		expect(p.parse("VaEfeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ƲaEfeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("VaEfe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efes 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Vaef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sna)", () => {
		expect(p.parse("VaFiripi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ƲaFiripi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Firip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("VaFir 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("VaFi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sna)", () => {
		expect(p.parse("1 Vatesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ƲaTesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 VaTesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Vates 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vatesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ƲaTesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. VaTesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vates 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Vatesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I ƲaTesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I VaTesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Vates 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Vatesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. ƲaTesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. VaTesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Vates 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sna)", () => {
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sna)", () => {
		expect(p.parse("2 Vatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ʋatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 VaTesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Vates 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ʋatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. VaTesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vates 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Vatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Ʋatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II VaTesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Vates 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Vatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Ʋatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. VaTesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Vates 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sna)", () => {
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sna)", () => {
		expect(p.parse("1 Timotio 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotio 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timotio 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotio 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sna)", () => {
		expect(p.parse("2 Timotio 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotio 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timotio 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotio 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sna)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sna)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sna)", () => {
		expect(p.parse("Titosi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sna)", () => {
		expect(p.parse("Firemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Firimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Firim 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Firi 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fir 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sna)", () => {
		expect(p.parse("VaHebheru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ƲaHeberu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("VaHeb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("VaHe 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sna)", () => {
		expect(p.parse("Jakobho 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jemusi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jako 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sna)", () => {
		expect(p.parse("1 Petirosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petirosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petirosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petirosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sna)", () => {
		expect(p.parse("2 Petirosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petirosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petirosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petirosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sna)", () => {
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sna)", () => {
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sna)", () => {
		expect(p.parse("Judhasi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judasi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judha 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judh 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (sna)", () => {
		expect(p.parse("Tobhiti 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (sna)", () => {
		expect(p.parse("Judhisi 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (sna)", () => {
		expect(p.parse("Bharuku 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bha 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (sna)", () => {
		expect(p.parse("1 Vanamakabhi 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Vanamakabhi 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Vanamakabhi 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Vanamakabhi 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (sna)", () => {
		expect(p.parse("2 Vanamakabhi 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Vanamakabhi 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Vanamakabhi 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Vanamakabhi 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Dan (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (sna)", () => {
		expect(p.parse("Dhanieri 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danieri 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dhan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dha 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Esth (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (sna)", () => {
		expect(p.parse("Esiteri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Estere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esteri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esita 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esit 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Este 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (sna)", () => {
		expect(p.parse("Dhanierig 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Dhag 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Parser helper should handle book ranges (sna)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (sna)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Joh - III Johane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Joh – III Johane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Joh — III Johane").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hrv.js";

describe("Localized book Gen (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hrv)", () => {
		expect(p.parse("Knjiga Postanka 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Postanak 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Post 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hrv)", () => {
		expect(p.parse("Knjiga Izlaska 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Egzodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Izlazak 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Izl 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (hrv)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hrv)", () => {
		expect(p.parse("Levitski zakonik 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hrv)", () => {
		expect(p.parse("Knjiga Brojeva 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Brojevi 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Br 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (hrv)", () => {
		expect(p.parse("Knjiga Sirahova 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (hrv)", () => {
		expect(p.parse("Knjiga Mudrosti 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Mudr 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hrv)", () => {
		expect(p.parse("Jeremijine tužaljke 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lamentacije 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Tužaljke 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Tuž 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (hrv)", () => {
		expect(p.parse("Pismo Jeremije proroka 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Jeremijino pismo 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hrv)", () => {
		expect(p.parse("Otkrivenje Ivanovo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalipsa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Otkrivenje 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Otk 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (hrv)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hrv)", () => {
		expect(p.parse("Ponovljeni zakon 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Pnz 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hrv)", () => {
		expect(p.parse("Jošua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jš 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hrv)", () => {
		expect(p.parse("Knjiga o Sucima 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Suci 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hrv)", () => {
		expect(p.parse("Knjiga o Ruti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruta 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (hrv)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (hrv)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hrv)", () => {
		expect(p.parse("Izaija 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 2Sam (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hrv)", () => {
		expect(p.parse("Druga Samuelova knjiga 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga knjiga o Samuelu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hrv)", () => {
		expect(p.parse("Prva Samuelova knjiga 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Prva knjiga o Samuelu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hrv)", () => {
		expect(p.parse("Prva Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Prva. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hrv)", () => {
		expect(p.parse("Druga Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druga. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hrv)", () => {
		expect(p.parse("Prva Kraljevima 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Prva. Kraljevima 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kraljevima 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kraljevima 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kraljevima 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kraljevima 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hrv)", () => {
		expect(p.parse("Druga Kraljevima 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druga. Kraljevima 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kraljevima 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kraljevima 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kraljevima 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kraljevima 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hrv)", () => {
		expect(p.parse("Druga knjiga o Kraljevima 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hrv)", () => {
		expect(p.parse("Prva knjiga o Kraljevima 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hrv)", () => {
		expect(p.parse("Prva Ljetopisa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prva. Ljetopisa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ljetopisa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ljetopisa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Ljetopisa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Ljetopisa 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hrv)", () => {
		expect(p.parse("Druga Ljetopisa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druga. Ljetopisa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ljetopisa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ljetopisa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Ljetopisa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Ljetopisa 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hrv)", () => {
		expect(p.parse("Druga knjiga Ljetopisa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ljet 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hrv)", () => {
		expect(p.parse("Prva knjiga Ljetopisa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ljet 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hrv)", () => {
		expect(p.parse("Knjiga Ezrina 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hrv)", () => {
		expect(p.parse("Knjiga Nehemijina 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemija 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (hrv)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hrv)", () => {
		expect(p.parse("Estera 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hrv)", () => {
		expect(p.parse("Knjiga o Jobu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hrv)", () => {
		expect(p.parse("Psalam 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalme 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (hrv)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hrv)", () => {
		expect(p.parse("Mudre izreke 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Poslovice 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Izr 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hrv)", () => {
		expect(p.parse("Propovjednik 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Prop 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (hrv)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hrv)", () => {
		expect(p.parse("Pjesma nad pjesmama 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pj 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hrv)", () => {
		expect(p.parse("Jeremija 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hrv)", () => {
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hrv)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hrv)", () => {
		expect(p.parse("Hošea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoš 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hrv)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hrv)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hrv)", () => {
		expect(p.parse("Obadija 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hrv)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hrv)", () => {
		expect(p.parse("Mihej 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mih 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hrv)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hrv)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hrv)", () => {
		expect(p.parse("Sefanija 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofonije 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hrv)", () => {
		expect(p.parse("Hagaj 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagej 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Agej 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hrv)", () => {
		expect(p.parse("Zaharija 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zah 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hrv)", () => {
		expect(p.parse("Malahija 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hrv)", () => {
		expect(p.parse("Jevanđelje po Mateju 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Evanðelje po Mateju 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Evanđelje po Mateju 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matej 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hrv)", () => {
		expect(p.parse("Jevanđelje po Marku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Evanðelje po Marku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Evanđelje po Marku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hrv)", () => {
		expect(p.parse("Jevanđelje po Luki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Evanðelje po Luki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Evanđelje po Luki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hrv)", () => {
		expect(p.parse("Prva Ivanova Poslanica 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prva Ivanova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prva. Ivanova Poslanica 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prva. Ivanova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ivanova Poslanica 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ivanova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ivanova Poslanica 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ivanova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Ivanova Poslanica 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Ivanova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Ivanova Poslanica 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Ivanova 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hrv)", () => {
		expect(p.parse("Druga Ivanova Poslanica 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druga Ivanova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druga. Ivanova Poslanica 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druga. Ivanova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ivanova Poslanica 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ivanova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ivanova Poslanica 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ivanova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Ivanova Poslanica 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Ivanova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Ivanova Poslanica 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Ivanova 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hrv)", () => {
		expect(p.parse("Treæa Ivanova Poslanica 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Treæa Ivanova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Treæa. Ivanova Poslanica 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Treæa. Ivanova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Treća Ivanova Poslanica 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Treća Ivanova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Treća. Ivanova Poslanica 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Treća. Ivanova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ivanova Poslanica 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ivanova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ivanova Poslanica 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ivanova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Ivanova Poslanica 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Ivanova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Ivanova Poslanica 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Ivanova 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hrv)", () => {
		expect(p.parse("Prva Ivanova poslanica 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ivanova 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Iv 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hrv)", () => {
		expect(p.parse("Druga Ivanova poslanica 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ivanova 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Iv 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hrv)", () => {
		expect(p.parse("Treæa Ivanova poslanica 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Treća Ivanova poslanica 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ivanova 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Iv 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hrv)", () => {
		expect(p.parse("Jevanđelje po Ivanu 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Evanðelje po Ivanu 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Evanđelje po Ivanu 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ivan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Iv 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hrv)", () => {
		expect(p.parse("Djela apostolska 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dj 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hrv)", () => {
		expect(p.parse("Pavlova poslanica Rimljanima 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Poslanica Rimljanima 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rimljanima 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rim 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hrv)", () => {
		expect(p.parse("Prva Korinćanima Poslanica 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prva Korinćanima 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prva. Korinćanima Poslanica 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prva. Korinćanima 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinćanima Poslanica 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinćanima 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinćanima Poslanica 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinćanima 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinćanima Poslanica 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinćanima 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinćanima Poslanica 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinćanima 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hrv)", () => {
		expect(p.parse("Druga Korinćanima Poslanica 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga Korinćanima 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga. Korinćanima Poslanica 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga. Korinćanima 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinćanima Poslanica 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinćanima 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinćanima Poslanica 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinćanima 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinćanima Poslanica 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinćanima 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinćanima Poslanica 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinćanima 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hrv)", () => {
		expect(p.parse("Pavlova druga poslanica Korinćanima 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga poslanica Korinæanima 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druga poslanica Korinćanima 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinćanima 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hrv)", () => {
		expect(p.parse("Pavlova prva poslanica Korinćanima 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prva poslanica Korinæanima 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prva poslanica Korinćanima 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinćanima 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hrv)", () => {
		expect(p.parse("Pavlova poslanica Galaćanima 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Poslanica Galaæanima 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Poslanica Galaćanima 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaćanima 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hrv)", () => {
		expect(p.parse("Pavlova poslanica Efežanima 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Poslanica Efežanima 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efežanima 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hrv)", () => {
		expect(p.parse("Pavlova poslanica Filipljanima 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Poslanica Filipljanima 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipljanima 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hrv)", () => {
		expect(p.parse("Pavlova poslanica Kološanima 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Poslanica Kološanima 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kološanima 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hrv)", () => {
		expect(p.parse("Prva Solunjanima Poslanica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prva Solunjanima 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prva. Solunjanima Poslanica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prva. Solunjanima 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Solunjanima Poslanica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Solunjanima 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Solunjanima Poslanica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Solunjanima 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Solunjanima Poslanica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Solunjanima 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Solunjanima Poslanica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Solunjanima 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hrv)", () => {
		expect(p.parse("Druga Solunjanima Poslanica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga Solunjanima 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga. Solunjanima Poslanica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga. Solunjanima 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Solunjanima Poslanica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Solunjanima 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Solunjanima Poslanica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Solunjanima 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Solunjanima Poslanica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Solunjanima 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Solunjanima Poslanica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Solunjanima 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hrv)", () => {
		expect(p.parse("Pavlova druga poslanica Solunjanima 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druga poslanica Solunjanima 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Solunjanima 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Sol 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hrv)", () => {
		expect(p.parse("Pavlova prva poslanica Solunjanima 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prva poslanica Solunjanima 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Solunjanima 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Sol 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hrv)", () => {
		expect(p.parse("Prva Timoteju Poslanica 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prva Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prva. Timoteju Poslanica 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prva. Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteju Poslanica 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteju Poslanica 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteju Poslanica 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteju Poslanica 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteju 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hrv)", () => {
		expect(p.parse("Druga Timoteju Poslanica 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druga Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druga. Timoteju Poslanica 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druga. Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteju Poslanica 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteju Poslanica 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteju Poslanica 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteju Poslanica 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteju 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hrv)", () => {
		expect(p.parse("Pavlova druga poslanica Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druga poslanica Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteju 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hrv)", () => {
		expect(p.parse("Pavlova prva poslanica Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prva poslanica Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteju 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hrv)", () => {
		expect(p.parse("Pavlova poslanica Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Poslanica Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hrv)", () => {
		expect(p.parse("Pavlova poslanica Filemonu 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Poslanica Filemonu 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonu 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hrv)", () => {
		expect(p.parse("Pavlova poslanica Hebrejima 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Poslanica Hebrejima 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrejima 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hrv)", () => {
		expect(p.parse("Jakovljeva poslanica 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakovljeva 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hrv)", () => {
		expect(p.parse("Prva Petrova Poslanica 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prva Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prva. Petrova Poslanica 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prva. Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrova Poslanica 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrova Poslanica 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petrova Poslanica 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrova Poslanica 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrova 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hrv)", () => {
		expect(p.parse("Druga Petrova Poslanica 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga. Petrova Poslanica 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druga. Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrova Poslanica 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrova Poslanica 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petrova Poslanica 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrova Poslanica 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrova 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hrv)", () => {
		expect(p.parse("Druga Petrova poslanica 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrova 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hrv)", () => {
		expect(p.parse("Prva Petrova poslanica 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrova 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hrv)", () => {
		expect(p.parse("Poslanica Jude apostola 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judina poslanica 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judina 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (hrv)", () => {
		expect(p.parse("Tobija 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (hrv)", () => {
		expect(p.parse("Judita 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (hrv)", () => {
		expect(p.parse("Baruh 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (hrv)", () => {
		expect(p.parse("Suzana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Suz 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (hrv)", () => {
		expect(p.parse("Druga knjiga o Makabejcima 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (hrv)", () => {
		expect(p.parse("Treća knjiga o Makabejcima 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (hrv)", () => {
		expect(p.parse("4 Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (hrv)", () => {
		expect(p.parse("Prva knjiga o Makabejcima 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (hrv)", () => {
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
describe("Parser helper should handle chapters (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (hrv)", () => {
		expect(p.parse("Titus 1:1, poglavlja 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 poglavlja 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, poglavlje 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 poglavlje 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, glava 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 glava 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (hrv)", () => {
		expect(p.parse("Exod 1:1 verse 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm verse 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (hrv)", () => {
		expect(p.parse("Exod 1:1 i 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 i 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (hrv)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (hrv)", () => {
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (hrv)", () => {
		expect(p.parse("Lev 1 (CKK)").osis_and_translations()).toEqual([["Lev.1","CKK"]]);
	});
});
describe("Parser helper should handle book ranges (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (hrv)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Prva Ivanova Poslanica - Treæa Ivanova Poslanica").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Prva Ivanova Poslanica – Treæa Ivanova Poslanica").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Prva Ivanova Poslanica — Treæa Ivanova Poslanica").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (hrv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (hrv)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

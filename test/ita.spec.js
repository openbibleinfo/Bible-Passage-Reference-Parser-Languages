"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ita.js";

describe("Localized book Gen (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ita)", () => {
		expect(p.parse("Genesi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ge 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ita)", () => {
		expect(p.parse("Esodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Es 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (ita)", () => {
		expect(p.parse("Bel e il Drago 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ita)", () => {
		expect(p.parse("Levitico 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Le 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ita)", () => {
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nm 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nu 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (ita)", () => {
		expect(p.parse("Sapienza di Siracide 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sapienza di Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclesiastico 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Siracide 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Siràcide 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (ita)", () => {
		expect(p.parse("Sapienza di Salomone 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sapienza 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sap 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ita)", () => {
		expect(p.parse("Lamentazioni 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("La 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (ita)", () => {
		expect(p.parse("Lettera di Geremia 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Let-ger 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ita)", () => {
		expect(p.parse("Apocalisse di Giovanni 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rivelazione 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalisse 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Riv 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (ita)", () => {
		expect(p.parse("Orazione di Manasse Re di Giuda 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Preghiera di Manasse 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Orazione di Manasse 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ita)", () => {
		expect(p.parse("Deuteronomio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("De 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ita)", () => {
		expect(p.parse("Giosuè 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Giosué 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Gs 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ita)", () => {
		expect(p.parse("Giudici 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Gdc 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ita)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ita)", () => {
		expect(p.parse("Primo Ésdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Primo. Ésdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prima Ésdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prima. Ésdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1° Ésdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1°. Ésdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ésdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ésdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ésdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ésdras 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ita)", () => {
		expect(p.parse("Secondo Ésdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Secondo. Ésdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Seconda Ésdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Seconda. Ésdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2° Ésdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2°. Ésdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ésdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ésdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ésdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ésdras 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ita)", () => {
		expect(p.parse("Esdra greco 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ita)", () => {
		expect(p.parse("2 Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ita)", () => {
		expect(p.parse("Primo Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Primo. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prima Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prima. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1° Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1°. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esdra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ita)", () => {
		expect(p.parse("Terzo Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Terzo. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Terza Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Terza. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3° Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3°. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3 Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("III Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("III. Esdra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ita)", () => {
		expect(p.parse("Quarto Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Quarto. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Quarta Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Quarta. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4° Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4°. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4 Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("IV Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("IV. Esdra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 2Esd (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ita)", () => {
		expect(p.parse("Secondo Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Secondo. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Seconda Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Seconda. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2° Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2°. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esdra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ita)", () => {
		expect(p.parse("Esdra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ita)", () => {
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ita)", () => {
		expect(p.parse("Primo Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Primo. Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Prima Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Prima. Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1° Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1°. Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuele 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ita)", () => {
		expect(p.parse("Secondo Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Secondo. Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Seconda Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Seconda. Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2° Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2°. Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuele 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ita)", () => {
		expect(p.parse("2 Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 S 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ita)", () => {
		expect(p.parse("1 Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 S 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ita)", () => {
		expect(p.parse("Primo Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Primo. Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Prima Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Prima. Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1° Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1°. Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Re 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ita)", () => {
		expect(p.parse("Secondo Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Secondo. Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Seconda Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Seconda. Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2° Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2°. Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Re 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ita)", () => {
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 R 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ita)", () => {
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 R 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ita)", () => {
		expect(p.parse("Primo Cronache 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Primo. Cronache 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prima Cronache 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prima. Cronache 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1° Cronache 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1°. Cronache 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cronache 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Cronache 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Cronache 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Cronache 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ita)", () => {
		expect(p.parse("Secondo Cronache 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Secondo. Cronache 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Seconda Cronache 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Seconda. Cronache 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2° Cronache 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2°. Cronache 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cronache 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Cronache 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Cronache 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Cronache 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ita)", () => {
		expect(p.parse("2 Cronache 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ita)", () => {
		expect(p.parse("1 Cronache 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ita)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ed 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ita)", () => {
		expect(p.parse("Neemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ne 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (ita)", () => {
		expect(p.parse("Ester (versione greca) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester (greco) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester greco 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ita)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Et 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ita)", () => {
		expect(p.parse("Giobbe 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Gb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ita)", () => {
		expect(p.parse("Salmi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salmo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sl 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (ita)", () => {
		expect(p.parse("Preghiera di Azaria 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ita)", () => {
		expect(p.parse("Proverbi 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pr 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ita)", () => {
		expect(p.parse("Ecclesiaste 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qohèlet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qoelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qoèlet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecc 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ec 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qo 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (ita)", () => {
		expect(p.parse("Cantico dei tre giovani nella fornace 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Cantico dei tre fanciulli 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ita)", () => {
		expect(p.parse("Cantico dei Cantici 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantico di Salomone 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantico dei cantici 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantico 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ca 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ct 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ita)", () => {
		expect(p.parse("Jeremiah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Geremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ger 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Gr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ita)", () => {
		expect(p.parse("Ezechiele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ita)", () => {
		expect(p.parse("Daniele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Da 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ita)", () => {
		expect(p.parse("Osea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ita)", () => {
		expect(p.parse("Gioele 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Gioe 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Gl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ita)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ita)", () => {
		expect(p.parse("Ovadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ita)", () => {
		expect(p.parse("Giona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Gio 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Gn 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ita)", () => {
		expect(p.parse("Michea 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ita)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ita)", () => {
		expect(p.parse("Abacuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ac 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ita)", () => {
		expect(p.parse("Sofonia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("So 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ita)", () => {
		expect(p.parse("Aggeo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ita)", () => {
		expect(p.parse("Zaccaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zac 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Za 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zc 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ita)", () => {
		expect(p.parse("Malachia 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ml 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ita)", () => {
		expect(p.parse("Vangelo di San Matteo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Vangelo di San. Matteo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Vangelo di Matteo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Vangelo di. Matteo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Matt (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ita)", () => {
		expect(p.parse("Matteo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Matt (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ita)", () => {
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ita)", () => {
		expect(p.parse("Vangelo di San Marco 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Vangelo di San. Marco 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Vangelo di Marco 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Vangelo di. Marco 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Mark (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ita)", () => {
		expect(p.parse("Marco 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Mark (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ita)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ita)", () => {
		expect(p.parse("Vangelo di San Luca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Vangelo di San. Luca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Vangelo di Luca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Vangelo di. Luca 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Luke (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ita)", () => {
		expect(p.parse("Luca 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Luke (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ita)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ita)", () => {
		expect(p.parse("Prima lettera di Giovanni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Giovanni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Gv 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ita)", () => {
		expect(p.parse("Seconda lettera di Giovanni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Giovanni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Gv 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ita)", () => {
		expect(p.parse("Terza lettera di Giovanni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Giovanni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Gv 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ita)", () => {
		expect(p.parse("Vangelo di San Giovanni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Vangelo di San. Giovanni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Vangelo di Giovanni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Vangelo di. Giovanni 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ita)", () => {
		expect(p.parse("Primo Giovanni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primo. Giovanni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prima Giovanni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prima. Giovanni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1° Giovanni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1°. Giovanni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Giovanni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Giovanni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Giovanni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Giovanni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ita)", () => {
		expect(p.parse("Secondo Giovanni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Secondo. Giovanni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Seconda Giovanni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Seconda. Giovanni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2° Giovanni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2°. Giovanni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Giovanni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Giovanni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Giovanni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Giovanni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ita)", () => {
		expect(p.parse("Terzo Giovanni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Terzo. Giovanni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Terza Giovanni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Terza. Giovanni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3° Giovanni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3°. Giovanni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Giovanni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Giovanni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Giovanni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Giovanni 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ita)", () => {
		expect(p.parse("Giovanni 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ita)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Gv 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ita)", () => {
		expect(p.parse("Atti degli Apostoli 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Atti 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("At 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ita)", () => {
		expect(p.parse("Lettera ai Romani 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romani 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ita)", () => {
		expect(p.parse("Primo Corinzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Primo. Corinzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prima Corinzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prima. Corinzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1° Corinzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1°. Corinzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corinzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corinzi 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ita)", () => {
		expect(p.parse("Secondo Corinzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Secondo. Corinzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Seconda Corinzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Seconda. Corinzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2° Corinzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2°. Corinzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corinzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corinzi 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ita)", () => {
		expect(p.parse("Seconda lettera ai Corinzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinzi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ita)", () => {
		expect(p.parse("Prima lettera ai Corinzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinzi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ita)", () => {
		expect(p.parse("Lettera ai Galati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàlati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ita)", () => {
		expect(p.parse("Lettera agli Efesini 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesini 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ita)", () => {
		expect(p.parse("Lettera ai Filippesi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filippesi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ita)", () => {
		expect(p.parse("Lettera ai Colossesi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colossesi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Cl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ita)", () => {
		expect(p.parse("Primo Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primo. Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prima Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prima. Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1° Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1°. Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ita)", () => {
		expect(p.parse("Secondo Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Secondo. Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Seconda Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Seconda. Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2° Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2°. Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ita)", () => {
		expect(p.parse("Seconda lettera ai Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonicesi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ita)", () => {
		expect(p.parse("Prima lettera ai Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonicesi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ita)", () => {
		expect(p.parse("Primo Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Primo. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prima Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prima. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1° Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1°. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ita)", () => {
		expect(p.parse("Secondo Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Secondo. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Seconda Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Seconda. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2° Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2°. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ita)", () => {
		expect(p.parse("Seconda lettera a Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ita)", () => {
		expect(p.parse("Prima lettera a Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ita)", () => {
		expect(p.parse("Lettera a Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ita)", () => {
		expect(p.parse("Lettera a Filemone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filèmone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fi 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ita)", () => {
		expect(p.parse("Lettera agli Ebrei 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebrei 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ita)", () => {
		expect(p.parse("Lettera di Giacomo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Giacomo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Gc 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Gm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ita)", () => {
		expect(p.parse("Primo Pietro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primo. Pietro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prima Pietro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prima. Pietro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1° Pietro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1°. Pietro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pietro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pietro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pietro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pietro 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ita)", () => {
		expect(p.parse("Secondo Pietro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Secondo. Pietro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Seconda Pietro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Seconda. Pietro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2° Pietro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2°. Pietro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pietro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pietro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pietro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pietro 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ita)", () => {
		expect(p.parse("Seconda lettera di Pietro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pietro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ita)", () => {
		expect(p.parse("Prima lettera di Pietro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pietro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ita)", () => {
		expect(p.parse("Lettera di Giuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Giuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Gd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (ita)", () => {
		expect(p.parse("Tobiolo 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobia 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobi 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tb 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (ita)", () => {
		expect(p.parse("Giuditta 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Gdt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (ita)", () => {
		expect(p.parse("Baruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruc 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (ita)", () => {
		expect(p.parse("Storia di Susanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ita)", () => {
		expect(p.parse("Primo Maccabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primo. Maccabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Prima Maccabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Prima. Maccabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1° Maccabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1°. Maccabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maccabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Maccabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maccabei 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ita)", () => {
		expect(p.parse("Secondo Maccabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Secondo. Maccabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Seconda Maccabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Seconda. Maccabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2° Maccabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2°. Maccabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maccabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maccabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maccabei 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (ita)", () => {
		expect(p.parse("Terzo Maccabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Terzo. Maccabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Terza Maccabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Terza. Maccabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3° Maccabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3°. Maccabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Maccabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Maccabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Maccabei 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (ita)", () => {
		expect(p.parse("Quarto Maccabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Quarto. Maccabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Quarta Maccabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Quarta. Maccabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4° Maccabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4°. Maccabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Maccabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Maccabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Maccabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Maccabei 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ita)", () => {
		expect(p.parse("Secondo libro dei Maccabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maccabei 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mac 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (ita)", () => {
		expect(p.parse("Terzo libro dei Maccabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Maccabei 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mac 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (ita)", () => {
		expect(p.parse("Quarto libro dei Maccabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Maccabei 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mac 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (ita)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ita)", () => {
		expect(p.parse("Primo libro dei Maccabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maccabei 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mac 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/por.js";

describe("Localized book Gen (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (por)", () => {
		expect(p.parse("Génesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gênesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gén 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gên 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (por)", () => {
		expect(p.parse("Éxodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Êxodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Êxod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Êxd 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Êxo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Êx 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (por)", () => {
		expect(p.parse("Bel e o Dragão 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel e o dragão 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (por)", () => {
		expect(p.parse("Levíticos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levítico 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Le 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (por)", () => {
		expect(p.parse("Números 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Núm 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nm 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nú 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (por)", () => {
		expect(p.parse("Eclesiástico 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirácida 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (por)", () => {
		expect(p.parse("Sabedoria de Salomão 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sabedoria 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sab 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sb 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (por)", () => {
		expect(p.parse("Lamentaçôes de Jeremias 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lamentações de Jeremias 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lamentações 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lm 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (por)", () => {
		expect(p.parse("Carta de Jeremias 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Cart. Jer 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Cart Jer 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (por)", () => {
		expect(p.parse("Apocalipse de São João 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalipse de João 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalipse 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apoc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (por)", () => {
		expect(p.parse("Prece de Manassés 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Pr Man 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (por)", () => {
		expect(p.parse("Deuteronómio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronômio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deu 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (por)", () => {
		expect(p.parse("Josué 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Js 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (por)", () => {
		expect(p.parse("Juízes 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Juíz 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jz 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (por)", () => {
		expect(p.parse("Rute 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 2Esd (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (por)", () => {
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Es 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (por)", () => {
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Es 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (por)", () => {
		expect(p.parse("Primeira Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Primeira. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Primeiro Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Primeiro. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1a Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1a. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1o Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1o. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esdras 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (por)", () => {
		expect(p.parse("Segunda Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Segunda. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Segundo Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Segundo. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2a Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2a. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2o Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2o. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esdras 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (por)", () => {
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (por)", () => {
		expect(p.parse("Isaías 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (por)", () => {
		expect(p.parse("Primeira Reinos 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Primeira. Reinos 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Primeiro Reinos 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Primeiro. Reinos 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Reinos 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Reinos 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1a Reinos 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1a. Reinos 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1o Reinos 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1o. Reinos 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Reinos 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Reinos 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (por)", () => {
		expect(p.parse("Segunda Reinos 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Segunda. Reinos 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Segundo Reinos 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Segundo. Reinos 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Reinos 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Reinos 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2a Reinos 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2a. Reinos 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2o Reinos 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2o. Reinos 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Reinos 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Reinos 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (por)", () => {
		expect(p.parse("Terceira Reinos 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Terceira. Reinos 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Terceiro Reinos 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Terceiro. Reinos 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Reinos 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Reinos 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3a Reinos 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3a. Reinos 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3o Reinos 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3o. Reinos 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Reinos 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Reinos 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (por)", () => {
		expect(p.parse("Quarta Reinos 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Quarta. Reinos 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Quarto Reinos 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Quarto. Reinos 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Reinos 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Reinos 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4a Reinos 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4a. Reinos 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4o Reinos 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4o. Reinos 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Reinos 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Reinos 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (por)", () => {
		expect(p.parse("Primeira Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Primeira. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Primeiro Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Primeiro. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1a Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1a. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1o Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1o. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (por)", () => {
		expect(p.parse("Segunda Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Segunda. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Segundo Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Segundo. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2a Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2a. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2o Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2o. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (por)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sm 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 S 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (por)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sm 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 S 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (por)", () => {
		expect(p.parse("Primeira Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Primeira. Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Primeiro Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Primeiro. Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1a Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1a. Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1o Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1o. Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Reis 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (por)", () => {
		expect(p.parse("Segunda Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Segunda. Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Segundo Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Segundo. Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2a Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2a. Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2o Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2o. Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Reis 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (por)", () => {
		expect(p.parse("2 Reis 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Rs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 R 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (por)", () => {
		expect(p.parse("1 Reis 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Rs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 R 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (por)", () => {
		expect(p.parse("Primeira Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Primeira. Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Primeiro Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Primeiro. Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1a Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1a. Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1o Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1o. Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Crônicas 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (por)", () => {
		expect(p.parse("Segunda Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Segunda. Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Segundo Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Segundo. Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2a Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2a. Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2o Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2o. Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Crônicas 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (por)", () => {
		expect(p.parse("2 Crônicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Crôn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Crô 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (por)", () => {
		expect(p.parse("1 Crônicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Crôn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Crô 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (por)", () => {
		expect(p.parse("Esdr 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ed 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (por)", () => {
		expect(p.parse("Neemias 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ne 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (por)", () => {
		expect(p.parse("Ester (Grega) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester (grega) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester Grega 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester grega 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Est (Gr) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (por)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Et 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (por)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jó 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book PrAzar (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (por)", () => {
		expect(p.parse("Salmo de Azarias 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Sal Azar 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Ps (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (por)", () => {
		expect(p.parse("Salmos 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salmo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sl 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (por)", () => {
		expect(p.parse("Provérbios 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prv 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pro 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pr 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pv 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (por)", () => {
		expect(p.parse("Eclesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Coélet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ec 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (por)", () => {
		expect(p.parse("Cântico dos Três Jovens 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Cântico dos 3 Jovens 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("C3J 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (por)", () => {
		expect(p.parse("Cânticos dos Cânticos 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cântico dos Cânticos 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantares de Salomão 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cântico Superlativo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cântico de Salomão 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantares 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cânticos 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cânt 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cnt 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ct 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (por)", () => {
		expect(p.parse("Jeremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Je 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (por)", () => {
		expect(p.parse("Ezequiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezeq 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (por)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Da 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (por)", () => {
		expect(p.parse("Oséias 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (por)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (por)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amós 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (por)", () => {
		expect(p.parse("Obadias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (por)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (por)", () => {
		expect(p.parse("Miquéias 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miq 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mq 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (por)", () => {
		expect(p.parse("Naum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (por)", () => {
		expect(p.parse("Habacuque 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habacuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hc 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (por)", () => {
		expect(p.parse("Sofonias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (por)", () => {
		expect(p.parse("Ageu 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (por)", () => {
		expect(p.parse("Zacarias 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zac 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zc 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (por)", () => {
		expect(p.parse("Malaquias 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ml 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (por)", () => {
		expect(p.parse("Mateus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book 1Macc (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (por)", () => {
		expect(p.parse("Primeira Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primeira. Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primeiro Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primeiro. Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1a Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1a. Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabeus 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (por)", () => {
		expect(p.parse("Segunda Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segunda. Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2a Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2a. Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabeus 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (por)", () => {
		expect(p.parse("Terceira Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Terceira. Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Terceiro Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Terceiro. Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3a Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3a. Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabeus 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (por)", () => {
		expect(p.parse("Quarta Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Quarta. Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Quarto Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Quarto. Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4a Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4a. Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabeus 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (por)", () => {
		expect(p.parse("1 Macabeus 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mac 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 M 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (por)", () => {
		expect(p.parse("2 Macabeus 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mac 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 M 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (por)", () => {
		expect(p.parse("3 Macabeus 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mac 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 M 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (por)", () => {
		expect(p.parse("4 Macabeus 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mac 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 M 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book Mark (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (por)", () => {
		expect(p.parse("Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (por)", () => {
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (por)", () => {
		expect(p.parse("1 João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 J 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (por)", () => {
		expect(p.parse("2 João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 J 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (por)", () => {
		expect(p.parse("3 João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jo 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 J 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (por)", () => {
		expect(p.parse("Primeira João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primeira. João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primeiro João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primeiro. João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1a João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1a. João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o. João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. João 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (por)", () => {
		expect(p.parse("Segunda João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segunda. João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo. João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2a João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2a. João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o. João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. João 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (por)", () => {
		expect(p.parse("Terceira João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Terceira. João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Terceiro João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Terceiro. João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3a João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3a. João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o. João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. João 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (por)", () => {
		expect(p.parse("João 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (por)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jo 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (por)", () => {
		expect(p.parse("Atos dos Apóstolos 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Atos 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("At 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (por)", () => {
		expect(p.parse("Romanos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (por)", () => {
		expect(p.parse("Primeira Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Primeira. Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Primeiro Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Primeiro. Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1a Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1a. Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1o Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1o. Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Coríntios 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (por)", () => {
		expect(p.parse("Segunda Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Segunda. Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Segundo Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Segundo. Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2a Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2a. Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2o Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2o. Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Coríntios 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (por)", () => {
		expect(p.parse("2 Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (por)", () => {
		expect(p.parse("1 Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (por)", () => {
		expect(p.parse("Gálatas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gál 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (por)", () => {
		expect(p.parse("Efésios 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (por)", () => {
		expect(p.parse("Filipenses 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fl 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (por)", () => {
		expect(p.parse("Colossenses 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Cl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (por)", () => {
		expect(p.parse("Primeira Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primeira. Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primeiro Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primeiro. Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1a Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1a. Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1o Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1o. Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (por)", () => {
		expect(p.parse("Segunda Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Segunda. Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Segundo Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Segundo. Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2a Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2a. Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2o Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2o. Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (por)", () => {
		expect(p.parse("2 Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (por)", () => {
		expect(p.parse("1 Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (por)", () => {
		expect(p.parse("Primeira Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Primeira. Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Primeiro Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Primeiro. Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1a Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1a. Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1o Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1o. Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timóteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (por)", () => {
		expect(p.parse("Segunda Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Segunda. Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Segundo Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Segundo. Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2a Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2a. Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2o Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2o. Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timóteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (por)", () => {
		expect(p.parse("2 Timóteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (por)", () => {
		expect(p.parse("1 Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (por)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (por)", () => {
		expect(p.parse("Filemom 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filémon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flmn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fmn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (por)", () => {
		expect(p.parse("Hebreus 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (por)", () => {
		expect(p.parse("Tiago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tg 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (por)", () => {
		expect(p.parse("Primeira Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primeira. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primeiro Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primeiro. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1a Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1a. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1o Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1o. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pedro 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (por)", () => {
		expect(p.parse("Segunda Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Segunda. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Segundo Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Segundo. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2a Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2a. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2o Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2o. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pedro 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (por)", () => {
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ped 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (por)", () => {
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ped 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (por)", () => {
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (por)", () => {
		expect(p.parse("Tobias 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (por)", () => {
		expect(p.parse("Judite 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (por)", () => {
		expect(p.parse("Baruque 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruc 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (por)", () => {
		expect(p.parse("História de Susana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Parser helper should handle ranges (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (por)", () => {
		expect(p.parse("Titus 1:1 á 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1á2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 á 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (por)", () => {
		expect(p.parse("Titus 1:1, capítulos 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 capítulos 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, capítulo 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 capítulo 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, caps. 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 caps. 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, caps 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 caps 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, cap. 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 cap. 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, cap 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 cap 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (por)", () => {
		expect(p.parse("Exod 1:1 versículos 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm versículos 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 versículo 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm versículo 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 vers. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm vers. 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 vers 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm vers 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 ver. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm ver. 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 ver 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm ver 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (por)", () => {
		expect(p.parse("Exod 1:1 e 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 e 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (por)", () => {
		expect(p.parse("Ps 3 título, 4:2, 5:título").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (por)", () => {
		expect(p.parse("Rev 3e sig., 4:2e sig.").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
		expect(p.parse("Rev 3e sig, 4:2e sig").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (por)", () => {
		expect(p.parse("Lev 1 (NVI)").osis_and_translations()).toEqual([["Lev.1","NVI"]]);
		expect(p.parse("Lev 1 (JFA)").osis_and_translations()).toEqual([["Lev.1","JFA"]]);
		expect(p.parse("Lev 1 (BPT)").osis_and_translations()).toEqual([["Lev.1","BPT"]]);
	});
});
describe("Parser helper should handle book ranges (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (por)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 João á 3 João").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (por)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (por)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

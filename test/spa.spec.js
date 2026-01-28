"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/spa.js";

describe("Localized book Gen (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (spa)", () => {
		expect(p.parse("Génesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gén 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gn 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gé 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (spa)", () => {
		expect(p.parse("Éxodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Éxod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Éxd 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Éxo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Éx 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (spa)", () => {
		expect(p.parse("Bel y el Serpiente 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel y el Dragón 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (spa)", () => {
		expect(p.parse("Levítico 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (spa)", () => {
		expect(p.parse("Números 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Núm 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nm 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nú 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (spa)", () => {
		expect(p.parse("Eclesiástico 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirácides 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirácida 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirác 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Si 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (spa)", () => {
		expect(p.parse("Sabiduría 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sab 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sb 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (spa)", () => {
		expect(p.parse("Lamentaciones 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lamintaciones 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lamentacione 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lamintacione 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("La 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lm 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (spa)", () => {
		expect(p.parse("La Carta de Jeremías 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Carta de Jeremías 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Carta Jeremías 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Carta Jer 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (spa)", () => {
		expect(p.parse("El Apocalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apoc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (spa)", () => {
		expect(p.parse("La Oración de Manasés 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Oración de Manasés 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Or. Man 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Or Man 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (spa)", () => {
		expect(p.parse("Deuteronomio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deutoronomio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dueteronomio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deutronomio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deuteronmio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deutoronmio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deutronmio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deu 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (spa)", () => {
		expect(p.parse("Josué 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (spa)", () => {
		expect(p.parse("Jueces 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Juec 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jue 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jc 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (spa)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (spa)", () => {
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdr 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (spa)", () => {
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdr 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (spa)", () => {
		expect(p.parse("1.º Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1.º. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1º Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1º. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1.o Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1.o. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1o Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1o. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Primer Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Primer. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Primero Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Primero. Esdras 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (spa)", () => {
		expect(p.parse("2.º Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2.º. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2º Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2º. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2.o Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2.o. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2o Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2o. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Segundo Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Segundo. Esdras 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (spa)", () => {
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (spa)", () => {
		expect(p.parse("Isaías 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (spa)", () => {
		expect(p.parse("1.º Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1.º. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1º Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1º. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1.o Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1.o. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1o Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1o. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Primer Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Primer. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Primero Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Primero. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (spa)", () => {
		expect(p.parse("2.º Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2.º. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2º Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2º. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2.o Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2.o. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2o Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2o. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Segundo Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Segundo. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (spa)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sm 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 S 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (spa)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sm 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 S 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (spa)", () => {
		expect(p.parse("1.º Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1.º. Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1º Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1º. Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1.o Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1.o. Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1o Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1o. Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Primer Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Primer. Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Primero Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Primero. Reyes 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (spa)", () => {
		expect(p.parse("2.º Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2.º. Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2º Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2º. Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2.o Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2.o. Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2o Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2o. Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Segundo Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Segundo. Reyes 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (spa)", () => {
		expect(p.parse("2 Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ryes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Rees 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Reys 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Reye 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Res 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Rys 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Rye 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ree 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Rey 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Rs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ry 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 R 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (spa)", () => {
		expect(p.parse("1 Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ryes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Rees 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Reys 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Reye 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Res 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Rys 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Rye 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ree 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Rey 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Rs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ry 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 R 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (spa)", () => {
		expect(p.parse("1.º Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1.º. Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1º Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1º. Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1.o Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1.o. Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1o Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1o. Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Primer Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Primer. Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Primero Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Primero. Crónicas 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (spa)", () => {
		expect(p.parse("2.º Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2.º. Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2º Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2º. Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2.o Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2.o. Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2o Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2o. Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Segundo Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Segundo. Crónicas 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (spa)", () => {
		expect(p.parse("2 Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Crón 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cró 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (spa)", () => {
		expect(p.parse("1 Crónicas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Crón 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cró 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Cr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (spa)", () => {
		expect(p.parse("Esdr 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (spa)", () => {
		expect(p.parse("Nehemías 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ne 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (spa)", () => {
		expect(p.parse("Ester (Griego) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester (griego) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester Griego 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester griego 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Est Gr 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (spa)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Es 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (spa)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (spa)", () => {
		expect(p.parse("Salmos 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salmo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Slm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sl 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (spa)", () => {
		expect(p.parse("Cántico de Azarías 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Oración de Azarías 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azarías 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Or Azar 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Or Az 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (spa)", () => {
		expect(p.parse("Probverbios 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Porverbios 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Preverbios 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Proverbios 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Proberbios 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Poverbios 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prverbios 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Preverbio 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Proverbio 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Provebios 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prverbio 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prvbos 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prvbs 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prvbo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prvb 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prv 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pro 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pr 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pv 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (spa)", () => {
		expect(p.parse("Ecclesiasticés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiasticés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesiastiés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessaastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessaistés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessiastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessiistés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiastiés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessaastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessaistés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessiastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessiistés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesaastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesaistés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesiastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesiistés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessaatés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessaasté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessaités 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessaisté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessiatés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessiasté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessiités 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessiisté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesaastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesaistés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiastés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiistés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessaatés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessaasté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessaités 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessaisté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessiatés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessiasté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessiités 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessiisté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesaatés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesaasté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesaités 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesaisté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesiatés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesiasté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesiités 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesiisté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessaaté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessaité 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessiaté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclessiité 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesaatés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesaasté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesaités 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesaisté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiatés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiasté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiités 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiisté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessaaté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessaité 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessiaté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclessiité 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesaaté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesaité 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesiaté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclesiité 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesaaté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesaité 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiaté 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesiité 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccles 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecles 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecc 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ec 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qo 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (spa)", () => {
		expect(p.parse("El Canto de los Tres Jóvenes Hebreos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("El Himno de los Tres Jóvenes Hebreos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("El Canto de los Tres Jóvenes Judíos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("El Himno de los Tres Jóvenes Judíos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Canto de los Tres Jóvenes Hebreos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("El Canto de los 3 Jóvenes Hebreos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("El Himno de los 3 Jóvenes Hebreos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Canto de los Tres Jóvenes Judíos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("El Canto de los 3 Jóvenes Judíos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("El Himno de los 3 Jóvenes Judíos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Himno de los Tres Jóvenes Judíos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Canto de los 3 Jóvenes Hebreos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Himno de los 3 Jóvenes Hebreos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Canto de los 3 Jóvenes Judíos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Himno de los 3 Jóvenes Judíos 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Canto de los Tres Jóvenes 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Himno de los Tres Jóvenes 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Canto de los 3 Jóvenes 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Himno de los 3 Jóvenes 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Tres Jóvenes 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("3 Jóvenes 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Ct 3 Jó 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (spa)", () => {
		expect(p.parse("El Cantar de los Cantares 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantare de los Cantares 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantar de los Cantares 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantares 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cant 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Can 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cnt 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ct 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (spa)", () => {
		expect(p.parse("Jeremías 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremía 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jere 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (spa)", () => {
		expect(p.parse("Ezeequiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezeiquiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eziequiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eziiquiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezequiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezeequel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezeiquel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eziquiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eziequel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eziiquel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezequial 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezequel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eziquel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezequ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezeq 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezq 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (spa)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Da 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (spa)", () => {
		expect(p.parse("Oseas 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (spa)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joe 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (spa)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amós 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ams 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amó 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (spa)", () => {
		expect(p.parse("Abdías 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ab 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (spa)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonás 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jns 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (spa)", () => {
		expect(p.parse("Miqueas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miq 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mq 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (spa)", () => {
		expect(p.parse("Nahúm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahú 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nh 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (spa)", () => {
		expect(p.parse("Habbacac 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habbacuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habacac 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habacuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (spa)", () => {
		expect(p.parse("Sofonías 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("So 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (spa)", () => {
		expect(p.parse("Haggeo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hageo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ageo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hg 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (spa)", () => {
		expect(p.parse("Zacarías 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zacar 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zac 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Za 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (spa)", () => {
		expect(p.parse("Malaquías 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaqu 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ml 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (spa)", () => {
		expect(p.parse("El Evangelio de Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Evangelio de Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("San Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book 1Macc (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (spa)", () => {
		expect(p.parse("1.º Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.º. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1º. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1.o. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1o. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primer. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero Macabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Maccabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Macabbeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Maccabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Maccabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Maccabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Macabeeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Macabbeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Macabbeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Maccabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Maccabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Maccabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Macabeeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Macabbeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Maccabeo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Primero. Macabeo 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (spa)", () => {
		expect(p.parse("2.º Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.º. Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2º. Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2.o. Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2o. Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo Macabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Maccabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Macabbeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Maccabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Maccabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Maccabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Macabeeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Macabbeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Macabbeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Maccabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Maccabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Maccabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Macabeeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Macabbeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Maccabeo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Segundo. Macabeo 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (spa)", () => {
		expect(p.parse("3.º Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.º. Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3º. Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3.o. Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3o. Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercer. Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero Macabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Maccabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Macabbeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Maccabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Maccabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Maccabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Macabeeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Macabbeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Macabbeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Maccabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Maccabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Maccabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Macabeeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Macabbeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Maccabeo 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tercero. Macabeo 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (spa)", () => {
		expect(p.parse("4.º Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.º. Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4º. Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4.o. Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4o. Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto Macabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Maccabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Macabbeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Maccabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Maccabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Maccabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Macabeeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Macabbeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Macabbeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Maccabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Maccabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Maccabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Macabeeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Macabbeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Maccabeo 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Cuarto. Macabeo 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (spa)", () => {
		expect(p.parse("2 Macabeos 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mac 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 M 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (spa)", () => {
		expect(p.parse("3 Macabeos 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mac 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 M 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (spa)", () => {
		expect(p.parse("4 Macabeos 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mac 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 M 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (spa)", () => {
		expect(p.parse("1 Macabeos 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mac 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 M 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book Mark (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (spa)", () => {
		expect(p.parse("El Evangelio de Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Evangelio de Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("San Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (spa)", () => {
		expect(p.parse("El Evangelio de Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Evangelio de Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("San Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (spa)", () => {
		expect(p.parse("1.º San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º. San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º. San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º. San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º. San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º. San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º. San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o. San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o. San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o. San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o. San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o. San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o. San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer. San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer. San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer. San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero San Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero. San Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero. San Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero. San Juun 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (spa)", () => {
		expect(p.parse("2.º San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º. San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º. San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º. San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º. San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º. San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º. San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o. San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o. San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o. San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o. San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o. San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o. San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo San Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo. San Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo. San Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo. San Juun 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (spa)", () => {
		expect(p.parse("3.º San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º. San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º. San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º. San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º. San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º. San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º. San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o. San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o. San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o. San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o. San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o. San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o. San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer. San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer. San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer. San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero San Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero. San Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero. San Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero. San Juun 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (spa)", () => {
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (spa)", () => {
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (spa)", () => {
		expect(p.parse("3 Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (spa)", () => {
		expect(p.parse("1.º San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º. San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º. Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º. Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.º. Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º. San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º. Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º. Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1º. Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o. San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o. Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o. Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.o. Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o. San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o. Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o. Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1o. Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer. San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer. Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer. Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primer. Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero Juun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero. San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero. Jaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero. Jaun 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Primero. Juun 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (spa)", () => {
		expect(p.parse("2.º San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º. San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º. Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º. Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.º. Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º. San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º. Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º. Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2º. Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o. San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o. Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o. Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.o. Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o. San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o. Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o. Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2o. Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo Juun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo. San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo. Jaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo. Jaun 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Segundo. Juun 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (spa)", () => {
		expect(p.parse("3.º San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º. San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º. Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º. Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.º. Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º. San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º. Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º. Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3º. Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o. San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o. Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o. Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.o. Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o. San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o. Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o. Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3o. Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer. San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer. Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer. Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercer. Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero Juun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero. San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero. Jaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero. Jaun 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tercero. Juun 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (spa)", () => {
		expect(p.parse("San Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jaan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jaun 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Juun 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (spa)", () => {
		expect(p.parse("El Evangelio de Jaan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("El Evangelio de Jaun 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("El Evangelio de Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("El Evangelio de Juun 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (spa)", () => {
		expect(p.parse("Los Hechos de los Apóstoles 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hechos de los Apóstoles 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Los Hechos 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hechos 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hech 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hch 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hec 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hc 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (spa)", () => {
		expect(p.parse("Romanos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romano 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rmns 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roms 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rms 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rmn 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ros 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (spa)", () => {
		expect(p.parse("1.º Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1.º. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1º Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1º. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1.o Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1.o. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1o Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1o. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Primer Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Primer. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Primero Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Primero. Corintios 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (spa)", () => {
		expect(p.parse("2.º Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2.º. Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2º Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2º. Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2.o Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2.o. Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2o Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2o. Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Segundo Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Segundo. Corintios 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (spa)", () => {
		expect(p.parse("2 Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corini 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (spa)", () => {
		expect(p.parse("1 Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corini 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (spa)", () => {
		expect(p.parse("Gálatas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gálat 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gál 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gá 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (spa)", () => {
		expect(p.parse("Efesios 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efes 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (spa)", () => {
		expect(p.parse("Filipenses 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (spa)", () => {
		expect(p.parse("Colosenses 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colos 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (spa)", () => {
		expect(p.parse("1.º Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.º Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.º Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.º Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.º. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.º. Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.º. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.º. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1º Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1º Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1º Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1º Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1º. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1º. Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1º. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1º. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.o Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.o Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.o Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.o Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.o. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.o. Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.o. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.o. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1o Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1o Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1o Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1o Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1o. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1o. Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1o. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1o. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primer Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primer Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primer Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primer Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primer. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primer. Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primer. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primer. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primero Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primero Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primero Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primero Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primero. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primero. Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primero. Tesalonicense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Primero. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (spa)", () => {
		expect(p.parse("2.º Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.º Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.º Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.º Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.º. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.º. Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.º. Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.º. Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2º Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2º Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2º Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2º Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2º. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2º. Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2º. Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2º. Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.o Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.o Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.o Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.o Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.o. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.o. Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.o. Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.o. Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2o Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2o Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2o Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2o Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2o. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2o. Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2o. Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2o. Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Segundo Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Segundo Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Segundo Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Segundo Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Segundo. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Segundo. Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Segundo. Tesalonicense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Segundo. Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (spa)", () => {
		expect(p.parse("2 Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (spa)", () => {
		expect(p.parse("1 Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (spa)", () => {
		expect(p.parse("1.º Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1.º. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1º Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1º. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1.o Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1.o. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1o Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1o. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Primer Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Primer. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Primero Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Primero. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (spa)", () => {
		expect(p.parse("2.º Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2.º. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2º Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2º. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2.o Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2.o. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2o Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2o. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Segundo Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Segundo. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (spa)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (spa)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (spa)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ti 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (spa)", () => {
		expect(p.parse("Filemón 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flmn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fmn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (spa)", () => {
		expect(p.parse("Hebeees 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebeeos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebeers 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebeoes 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebeoos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebeors 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heberes 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heberos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heberrs 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heboees 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heboeos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heboers 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebooes 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebooos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heboors 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebores 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heboros 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heborrs 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrees 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebreos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrers 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebroes 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebroos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrors 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrres 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrros 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrrrs 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebees 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebeos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebers 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heboes 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heboos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebors 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebres 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebros 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrrs 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebreo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebes 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrs 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (spa)", () => {
		expect(p.parse("Santiago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sant 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Stg 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("St 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (spa)", () => {
		expect(p.parse("1.º San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1.º Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1.º. San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1.º. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1º San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1º Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1º. San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1º. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1.o San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1.o Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1.o. San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1.o. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1o San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1o Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1o. San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1o. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primer San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primer Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primer. San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primer. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primero San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primero Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primero. San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Primero. Pedro 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (spa)", () => {
		expect(p.parse("2.º San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2.º Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2.º. San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2.º. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2º San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2º Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2º. San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2º. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2.o San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2.o Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2.o. San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2.o. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2o San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2o Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2o. San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2o. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Segundo San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Segundo Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Segundo. San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Segundo. Pedro 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (spa)", () => {
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ped 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pd 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (spa)", () => {
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ped 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pd 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (spa)", () => {
		expect(p.parse("San Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jdas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (spa)", () => {
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobt 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobi 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tb 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (spa)", () => {
		expect(p.parse("Judit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Judt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (spa)", () => {
		expect(p.parse("Baruc 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Ba 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (spa)", () => {
		expect(p.parse("Susana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book Hab,Hag (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab,Hag (spa)", () => {
		expect(p.parse("Ha 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Heb,Hab (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb,Hab (spa)", () => {
		expect(p.parse("Hb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jonah,Job,Josh,Joel (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah,Job,Josh,Joel (spa)", () => {
		expect(p.parse("Jo 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Jude,Judg (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude,Judg (spa)", () => {
		expect(p.parse("Ju 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Matt,Mark,Mal (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt,Mark,Mal (spa)", () => {
		expect(p.parse("Ma 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Phil,Phlm (spa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil,Phlm (spa)", () => {
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});

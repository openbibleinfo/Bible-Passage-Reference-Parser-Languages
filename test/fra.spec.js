"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fra.js";

describe("Localized book Gen (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (fra)", () => {
		expect(p.parse("Genèse 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ge 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (fra)", () => {
		expect(p.parse("Exode 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (fra)", () => {
		expect(p.parse("Bel et le Serpent 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel et le serpent 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel et le Dragon 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel et le dragon 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (fra)", () => {
		expect(p.parse("Lévitique 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lév 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lé 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (fra)", () => {
		expect(p.parse("Nombres 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nomb 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nom 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nb 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nm 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("No 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (fra)", () => {
		expect(p.parse("La Sagesse de Ben Sira 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sagesse de Ben Sira 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclésiastique 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Siracide 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Si 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (fra)", () => {
		expect(p.parse("Sagesse de Salomon 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sagesse 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Sg 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (fra)", () => {
		expect(p.parse("Lamentations de Jérémie 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lamentations 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("La 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lm 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (fra)", () => {
		expect(p.parse("Épître de Jérémie 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Ép. Jérémie 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Ép Jérémie 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Ép. Jér 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Ép Jér 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Ep Jér 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (fra)", () => {
		expect(p.parse("Apocalypse de Jean 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalypse 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apoc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (fra)", () => {
		expect(p.parse("La Prière de Manassé 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Prière de Manassé 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Pr. Manassé 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Pr Manassé 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Pr. Man 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Pr Man 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (fra)", () => {
		expect(p.parse("Deutéronome 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deu 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (fra)", () => {
		expect(p.parse("Josué 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (fra)", () => {
		expect(p.parse("Juges 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jug 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (fra)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (fra)", () => {
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdr 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Es 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (fra)", () => {
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdr 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Es 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (fra)", () => {
		expect(p.parse("Première Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Première. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Premières Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Premières. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Premier Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Premier. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Premiers Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Premiers. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1re Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1re. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1ère Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1ère. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1er Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1er. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esdras 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (fra)", () => {
		expect(p.parse("Deuxième Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Deuxième. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Deuxièmes Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Deuxièmes. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2ème Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2ème. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2e Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2e. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2d Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2d. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2de Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2de. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esdras 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (fra)", () => {
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (fra)", () => {
		expect(p.parse("Isaïe 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ésaïe 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ésa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("És 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (fra)", () => {
		expect(p.parse("Première Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Première. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Premières Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Premières. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Premier Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Premier. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Premiers Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Premiers. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1re Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1re. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ère Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1ère. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1er Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1er. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (fra)", () => {
		expect(p.parse("Deuxième Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Deuxième. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Deuxièmes Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Deuxièmes. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ème Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2ème. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2e Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2e. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2d Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2d. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2de Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2de. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (fra)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 S 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (fra)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 S 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (fra)", () => {
		expect(p.parse("Première Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Première. Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Premières Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Premières. Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Premier Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Premier. Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Premiers Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Premiers. Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1re Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1re. Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ère Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ère. Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1er Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1er. Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Rois 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (fra)", () => {
		expect(p.parse("Deuxième Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Deuxième. Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Deuxièmes Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Deuxièmes. Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ème Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ème. Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2e Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2e. Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2d Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2d. Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2de Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2de. Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Rois 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (fra)", () => {
		expect(p.parse("2 Rois 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 R 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (fra)", () => {
		expect(p.parse("1 Rois 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 R 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (fra)", () => {
		expect(p.parse("Première Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Première. Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Premières Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Premières. Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Premier Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Premier. Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Premiers Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Premiers. Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1re Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1re. Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ère Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1ère. Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1er Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1er. Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Chroniques 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (fra)", () => {
		expect(p.parse("Deuxième Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Deuxième. Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Deuxièmes Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Deuxièmes. Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ème Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2ème. Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2e Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2e. Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2d Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2d. Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2de Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2de. Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Chroniques 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (fra)", () => {
		expect(p.parse("2 Chroniques 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Chron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Chro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Chr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ch 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (fra)", () => {
		expect(p.parse("1 Chroniques 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Chron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Chro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Chr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ch 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (fra)", () => {
		expect(p.parse("Esdr 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (fra)", () => {
		expect(p.parse("Néhémie 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Néh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Né 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ne 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (fra)", () => {
		expect(p.parse("Esther (Grec) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Esther (grec) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Esther Grec 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Esther grec 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Esther Gr 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Esther gr 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Esth Gr 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Esth gr 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (fra)", () => {
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (fra)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (fra)", () => {
		expect(p.parse("Psaumes 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psaume 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psau 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psa 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (fra)", () => {
		expect(p.parse("La Prière d'Azariah 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("La Prière d'Azarias 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Prière d'Azariah 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Prière d'Azarias 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Prière d’Azarias 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Pr. Azar 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Pr Azar 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (fra)", () => {
		expect(p.parse("Proverbes 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pro 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prv 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pr 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (fra)", () => {
		expect(p.parse("Ecclésiaste 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qoheleth 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecclés 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ec 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (fra)", () => {
		expect(p.parse("Cantique des Trois Enfants 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Cantique des 3 Enfants 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Ct 3 E 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (fra)", () => {
		expect(p.parse("Cantique des Cantiques 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantique des cantiques 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantiques 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cantique 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Cnt 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ca 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ct 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (fra)", () => {
		expect(p.parse("Jérémie 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jérém 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jér 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jr 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jé 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (fra)", () => {
		expect(p.parse("Ézéchiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ézéch 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezé 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (fra)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Da 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (fra)", () => {
		expect(p.parse("Osée 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (fra)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joël 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joë 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (fra)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (fra)", () => {
		expect(p.parse("Abdias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ab 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (fra)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (fra)", () => {
		expect(p.parse("Michée 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mich 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (fra)", () => {
		expect(p.parse("Nahoum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (fra)", () => {
		expect(p.parse("Habacuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habaquq 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habac 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habak 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ha 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (fra)", () => {
		expect(p.parse("Sophonie 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Soph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("So 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (fra)", () => {
		expect(p.parse("Aggée 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Agg 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (fra)", () => {
		expect(p.parse("Zaccharie 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zacharie 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zacch 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zach 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zacc 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zac 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Za 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zc 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (fra)", () => {
		expect(p.parse("Malachie 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malach 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malch 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malac 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malc 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ml 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fra)", () => {
		expect(p.parse("Matthieu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matth 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (fra)", () => {
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (fra)", () => {
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fra)", () => {
		expect(p.parse("1 Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fra)", () => {
		expect(p.parse("2 Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fra)", () => {
		expect(p.parse("3 Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fra)", () => {
		expect(p.parse("Première Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Première. Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Premières Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Premières. Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Premier Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Premier. Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Premiers Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Premiers. Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1re Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1re. Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ère Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1ère. Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1er Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1er. Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jean 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fra)", () => {
		expect(p.parse("Deuxième Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Deuxième. Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Deuxièmes Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Deuxièmes. Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ème Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2ème. Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2e Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2e. Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2d Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2d. Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2de Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2de. Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jean 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fra)", () => {
		expect(p.parse("Troisième Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Troisième. Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Troisièmes Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Troisièmes. Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ème Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ème. Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3e Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3e. Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jean 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fra)", () => {
		expect(p.parse("Jean 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fra)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (fra)", () => {
		expect(p.parse("Actes des Apôtres 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Actes 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Act 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ac 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (fra)", () => {
		expect(p.parse("Romains 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fra)", () => {
		expect(p.parse("Première Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Première. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Premières Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Premières. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Premier Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Premier. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Premiers Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Premiers. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1re Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1re. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ère Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1ère. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1er Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1er. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fra)", () => {
		expect(p.parse("Deuxième Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Deuxième. Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Deuxièmes Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Deuxièmes. Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ème Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2ème. Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2d Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2d. Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2de Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2de. Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fra)", () => {
		expect(p.parse("2 Corinthiens 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fra)", () => {
		expect(p.parse("1 Corinthiens 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (fra)", () => {
		expect(p.parse("Galates 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (fra)", () => {
		expect(p.parse("Éphésiens 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Éphés 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Éphé 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Éph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ép 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (fra)", () => {
		expect(p.parse("Philippiens 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ph 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (fra)", () => {
		expect(p.parse("Colossiens 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fra)", () => {
		expect(p.parse("Première Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Première Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Première. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Première. Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premières Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premières Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premières. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premières. Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premier Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premier Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premier. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premier. Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premiers Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premiers Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premiers. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Premiers. Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1re Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1re Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1re. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1re. Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ère Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ère Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ère. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1ère. Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1er Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1er Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1er. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1er. Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thesaloniciens 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fra)", () => {
		expect(p.parse("Deuxième Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Deuxième Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Deuxième. Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Deuxième. Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Deuxièmes Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Deuxièmes Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Deuxièmes. Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Deuxièmes. Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ème Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ème Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ème. Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2ème. Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e. Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e. Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2d Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2d Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2d. Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2d. Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2de Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2de Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2de. Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2de. Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thesaloniciens 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fra)", () => {
		expect(p.parse("2 Thessaloniciens 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fra)", () => {
		expect(p.parse("1 Thessaloniciens 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fra)", () => {
		expect(p.parse("Première Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Première. Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Premières Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Premières. Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Premier Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Premier. Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Premiers Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Premiers. Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1re Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1re. Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ère Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1ère. Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1er Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1er. Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timothée 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fra)", () => {
		expect(p.parse("Deuxième Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Deuxième. Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Deuxièmes Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Deuxièmes. Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ème Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2ème. Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2e Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2e. Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2d Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2d. Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2de Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2de. Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timothée 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fra)", () => {
		expect(p.parse("2 Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tm 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fra)", () => {
		expect(p.parse("1 Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tm 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (fra)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (fra)", () => {
		expect(p.parse("Philémon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (fra)", () => {
		expect(p.parse("Hébreux 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hébr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Héb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hé 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (fra)", () => {
		expect(p.parse("Jacques 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jaques 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jacq 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jac 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ja 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jc 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fra)", () => {
		expect(p.parse("Première Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Première. Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Premières Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Premières. Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Premier Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Premier. Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Premiers Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Premiers. Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1re Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1re. Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ère Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1ère. Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1er Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1er. Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pierre 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fra)", () => {
		expect(p.parse("Deuxième Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Deuxième. Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Deuxièmes Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Deuxièmes. Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ème Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2ème. Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2e Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2e. Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2d Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2d. Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2de Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2de. Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pierre 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fra)", () => {
		expect(p.parse("2 Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fra)", () => {
		expect(p.parse("1 Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (fra)", () => {
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (fra)", () => {
		expect(p.parse("Tobie 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tb 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (fra)", () => {
		expect(p.parse("Judith 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (fra)", () => {
		expect(p.parse("Baruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Ba 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (fra)", () => {
		expect(p.parse("Susanne et les deux vieillards 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Suzanne et les deux vieillards 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susanne et les vieillards 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Suzanne et les vieillards 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susanne au bain 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Suzanne au bain 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susanne 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Suzanne 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Suz 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (fra)", () => {
		expect(p.parse("Première Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Première. Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Premières Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Premières. Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Premier Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Premier. Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Premiers Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Premiers. Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1re Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1re. Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1ère Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1ère. Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1er Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1er. Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Maccabées 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (fra)", () => {
		expect(p.parse("Deuxième Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Deuxième. Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Deuxièmes Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Deuxièmes. Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2ème Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2ème. Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2e Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2e. Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2d Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2d. Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2de Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2de. Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Maccabées 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (fra)", () => {
		expect(p.parse("Troisième Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Troisième. Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Troisièmes Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Troisièmes. Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3ème Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3ème. Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3e Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3e. Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Maccabées 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (fra)", () => {
		expect(p.parse("Quatrième Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Quatrième. Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Quatrièmes Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Quatrièmes. Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4ème Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4ème. Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4e Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4e. Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Maccabées 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (fra)", () => {
		expect(p.parse("2 Maccabées 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 M 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (fra)", () => {
		expect(p.parse("3 Maccabées 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 M 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (fra)", () => {
		expect(p.parse("4 Maccabées 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 M 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (fra)", () => {
		expect(p.parse("1 Maccabées 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 M 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book Jonah,Job,Josh,Joel (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah,Job,Josh,Joel (fra)", () => {
		expect(p.parse("Jo 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Judg,Jude (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg,Jude (fra)", () => {
		expect(p.parse("Ju 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Phil,Phlm (fra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil,Phlm (fra)", () => {
		expect(p.parse("Phl 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ph 1:1").osis()).toEqual("Phil.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fin.js";

describe("Localized book Gen (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (fin)", () => {
		expect(p.parse("Ensimmäinen Mooseksen kirja 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ensimmäinen Mooseksen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ensimmäinen. Mooseksen kirja 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ensimmäinen. Mooseksen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mooseksen kirja 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mooseksen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mooseksen kirja 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mooseksen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Mooseksen kirja 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Mooseksen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Mooseksen kirja 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Mooseksen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (fin)", () => {
		expect(p.parse("Toinen Mooseksen kirja 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Toinen Mooseksen 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Toinen. Mooseksen kirja 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Toinen. Mooseksen 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mooseksen kirja 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mooseksen 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mooseksen kirja 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mooseksen 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Mooseksen kirja 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Mooseksen 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Mooseksen kirja 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Mooseksen 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (fin)", () => {
		expect(p.parse("Kolmas Mooseksen kirja 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Kolmas Mooseksen 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Kolmas. Mooseksen kirja 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Kolmas. Mooseksen 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mooseksen kirja 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mooseksen 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mooseksen kirja 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mooseksen 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Mooseksen kirja 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Mooseksen 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Mooseksen kirja 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Mooseksen 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (fin)", () => {
		expect(p.parse("Neljäs Mooseksen kirja 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Neljäs Mooseksen 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Neljäs. Mooseksen kirja 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Neljäs. Mooseksen 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mooseksen kirja 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mooseksen 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mooseksen kirja 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mooseksen 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Mooseksen kirja 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Mooseksen 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Mooseksen kirja 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Mooseksen 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (fin)", () => {
		expect(p.parse("Viides Mooseksen kirja 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Viides Mooseksen 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Viides. Mooseksen kirja 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Viides. Mooseksen 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mooseksen kirja 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mooseksen 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mooseksen kirja 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mooseksen 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Mooseksen kirja 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Mooseksen 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Mooseksen kirja 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Mooseksen 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (fin)", () => {
		expect(p.parse("1 Mooseksen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Moos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (fin)", () => {
		expect(p.parse("2 Mooseksen 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Moos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (fin)", () => {
		expect(p.parse("Bel ja lohikäärme 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (fin)", () => {
		expect(p.parse("3 Mooseksen 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Moos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (fin)", () => {
		expect(p.parse("4 Mooseksen 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Moos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (fin)", () => {
		expect(p.parse("Jeesus Siirakin kirja 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Jesus Siirakin kirja 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Siirakin kirja 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirakin kirja 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Siirakin 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirakin 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (fin)", () => {
		expect(p.parse("Salomon viisaus 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Viisauden kirja 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Viis 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (fin)", () => {
		expect(p.parse("Valitusvirret 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Valit 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (fin)", () => {
		expect(p.parse("Jeremian kirje 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (fin)", () => {
		expect(p.parse("Johanneksen ilmestys 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ilmestyskirja 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ilmestys 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ilm 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (fin)", () => {
		expect(p.parse("Manassen rukouksen 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Man ru 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (fin)", () => {
		expect(p.parse("5 Mooseksen 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Moos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (fin)", () => {
		expect(p.parse("Joosuan kirja 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joosuan 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joos 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (fin)", () => {
		expect(p.parse("Tuomarien kirja 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Tuomarien 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Tuom 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (fin)", () => {
		expect(p.parse("Ruutin kirja 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruutin 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (fin)", () => {
		expect(p.parse("1 Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Es 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (fin)", () => {
		expect(p.parse("2 Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Es 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (fin)", () => {
		expect(p.parse("Ensimmäinen Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Ensimmäinen. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (fin)", () => {
		expect(p.parse("Toinen Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Toinen. Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (fin)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (fin)", () => {
		expect(p.parse("Jesajan kirja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jesajan 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (fin)", () => {
		expect(p.parse("Ensimmäinen Samuelin kirja 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ensimmäinen Samuelin 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ensimmäinen. Samuelin kirja 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ensimmäinen. Samuelin 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelin kirja 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelin 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelin kirja 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelin 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuelin kirja 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuelin 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuelin kirja 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuelin 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (fin)", () => {
		expect(p.parse("Toinen Samuelin kirja 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Toinen Samuelin 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Toinen. Samuelin kirja 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Toinen. Samuelin 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelin kirja 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelin 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelin kirja 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelin 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuelin kirja 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuelin 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuelin kirja 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuelin 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (fin)", () => {
		expect(p.parse("2 Samuelin 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (fin)", () => {
		expect(p.parse("1 Samuelin 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (fin)", () => {
		expect(p.parse("Ensimmäinen Kuninkaiden kirja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ensimmäinen Kuninkaiden 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ensimmäinen. Kuninkaiden kirja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ensimmäinen. Kuninkaiden 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kuninkaiden kirja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kuninkaiden 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kuninkaiden kirja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kuninkaiden 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kuninkaiden kirja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kuninkaiden 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kuninkaiden kirja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kuninkaiden 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (fin)", () => {
		expect(p.parse("Toinen Kuninkaiden kirja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Toinen Kuninkaiden 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Toinen. Kuninkaiden kirja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Toinen. Kuninkaiden 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kuninkaiden kirja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kuninkaiden 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kuninkaiden kirja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kuninkaiden 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kuninkaiden kirja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kuninkaiden 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kuninkaiden kirja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kuninkaiden 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (fin)", () => {
		expect(p.parse("2 Kuninkaiden 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kun 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (fin)", () => {
		expect(p.parse("1 Kuninkaiden 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kun 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (fin)", () => {
		expect(p.parse("Ensimmäinen Aikakirja 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ensimmäinen. Aikakirja 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Aikakirja 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Aikakirja 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Aikakirja 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Aikakirja 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (fin)", () => {
		expect(p.parse("Toinen Aikakirja 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Toinen. Aikakirja 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Aikakirja 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Aikakirja 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Aikakirja 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Aikakirja 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (fin)", () => {
		expect(p.parse("2 Aikakirja 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Aikak 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Aik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (fin)", () => {
		expect(p.parse("1 Aikakirja 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Aikak 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Aik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (fin)", () => {
		expect(p.parse("Esran kirja 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esran 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (fin)", () => {
		expect(p.parse("Nehemian kirja 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemian 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (fin)", () => {
		expect(p.parse("Kreikkalainen Esterin kirja 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Kreikkalainen Esterin 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Kr. Est 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Kr Est 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (fin)", () => {
		expect(p.parse("Esterin kirja 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esterin 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (fin)", () => {
		expect(p.parse("Jobin kirja 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jobin 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (fin)", () => {
		expect(p.parse("Psalmien kirja 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmien 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmit 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (fin)", () => {
		expect(p.parse("Asarjan rukous 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Asar ru 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (fin)", () => {
		expect(p.parse("Sananlaskujen kirja 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sananlaskujen 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sananlaskut 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sananl 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Snl 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (fin)", () => {
		expect(p.parse("Saarnaajan kirja 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Saarnaajan 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Saarnaaja 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Saarn 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Saar 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (fin)", () => {
		expect(p.parse("Kolmen nuoren miehen ollessa tulisessa pätsissä 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Kolmen miehen kiitosvirsi tulessa 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Kolmen miehen kiitosvirsi 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Kolmen nuoren miehen 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Kolmen miehen 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (fin)", () => {
		expect(p.parse("Laulujen laulu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Korkea veisu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Laul. l 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Laul l 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (fin)", () => {
		expect(p.parse("Jeremian kirja 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremian 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (fin)", () => {
		expect(p.parse("Hesekielin kirja 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hesekielin 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hes 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (fin)", () => {
		expect(p.parse("Danielin kirja 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danielin 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (fin)", () => {
		expect(p.parse("Hoosean kirja 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoosean 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (fin)", () => {
		expect(p.parse("Joelin kirja 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joelin 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (fin)", () => {
		expect(p.parse("Aamoksen kirja 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Aamoksen 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Aam 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (fin)", () => {
		expect(p.parse("Obadjan kirja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadjan 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadj 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (fin)", () => {
		expect(p.parse("Joonan kirja 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Joonan 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Joona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Joon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (fin)", () => {
		expect(p.parse("Miikan kirja 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miikan 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miik 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (fin)", () => {
		expect(p.parse("Nahumin kirja 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahumin 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (fin)", () => {
		expect(p.parse("Habakukin kirja 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakukin 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (fin)", () => {
		expect(p.parse("Sefanjan kirja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefanjan 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (fin)", () => {
		expect(p.parse("Haggain kirja 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggain 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagg 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (fin)", () => {
		expect(p.parse("Sakarjan kirja 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakarjan 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (fin)", () => {
		expect(p.parse("Malakian kirja 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakian 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fin)", () => {
		expect(p.parse("Evankeliumi Matteuksen mukaan 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteuksen evankeliumi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteuksen 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (fin)", () => {
		expect(p.parse("Evankeliumi Markuksen mukaan 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markuksen evankeliumi 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markuksen 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (fin)", () => {
		expect(p.parse("Evankeliumi Luukkaan mukaan 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luukkaan evankeliumi 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luukkaan 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luuk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fin)", () => {
		expect(p.parse("Ensimmäinen Johanneksen kirje 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ensimmäinen. Johanneksen kirje 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johanneksen kirje 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johanneksen kirje 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Johanneksen kirje 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johanneksen kirje 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fin)", () => {
		expect(p.parse("Toinen Johanneksen kirje 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Toinen. Johanneksen kirje 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johanneksen kirje 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johanneksen kirje 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Johanneksen kirje 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johanneksen kirje 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fin)", () => {
		expect(p.parse("Kolmas Johanneksen kirje 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Kolmas. Johanneksen kirje 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johanneksen kirje 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johanneksen kirje 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Johanneksen kirje 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Johanneksen kirje 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fin)", () => {
		expect(p.parse("1 Johanneksen 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fin)", () => {
		expect(p.parse("2 Johanneksen 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fin)", () => {
		expect(p.parse("3 Johanneksen 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 2John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fin)", () => {
		expect(p.parse("Toinen Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Toinen. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fin)", () => {
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fin)", () => {
		expect(p.parse("Evankeliumi Johanneksen mukaan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johanneksen evankeliumi 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fin)", () => {
		expect(p.parse("Ensimmäinen Johanneksen 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ensimmäinen. Johanneksen 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johanneksen 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johanneksen 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Johanneksen 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johanneksen 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fin)", () => {
		expect(p.parse("Toinen Johanneksen 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Toinen. Johanneksen 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johanneksen 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johanneksen 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Johanneksen 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johanneksen 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fin)", () => {
		expect(p.parse("Kolmas Johanneksen 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Kolmas. Johanneksen 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johanneksen 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johanneksen 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Johanneksen 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Johanneksen 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fin)", () => {
		expect(p.parse("Johanneksen 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (fin)", () => {
		expect(p.parse("Apostolien teot 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap. t 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap t 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Teot 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap.t 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apt 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (fin)", () => {
		expect(p.parse("Kirje roomalaisille 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roomalaiskirje 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roomalaisille 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Room 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fin)", () => {
		expect(p.parse("Ensimmäinen Kirje korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ensimmäinen Korinttolaiskirje 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ensimmäinen Korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ensimmäinen. Kirje korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ensimmäinen. Korinttolaiskirje 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ensimmäinen. Korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kirje korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinttolaiskirje 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kirje korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinttolaiskirje 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kirje korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinttolaiskirje 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kirje korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinttolaiskirje 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fin)", () => {
		expect(p.parse("Toinen Kirje korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toinen Korinttolaiskirje 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toinen Korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toinen. Kirje korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toinen. Korinttolaiskirje 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toinen. Korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kirje korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinttolaiskirje 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kirje korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinttolaiskirje 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kirje korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinttolaiskirje 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kirje korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinttolaiskirje 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fin)", () => {
		expect(p.parse("2 Korinttilaisille 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fin)", () => {
		expect(p.parse("1 Korinttilaisille 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (fin)", () => {
		expect(p.parse("Kirje galatalaisille 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatalaisille 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatalaiskirj 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (fin)", () => {
		expect(p.parse("Kirje efesolaisille 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesolaiskirje 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesolaisille 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (fin)", () => {
		expect(p.parse("Kirje filippiläisille 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filippiläiskirje 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filippiläisille 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (fin)", () => {
		expect(p.parse("Kirje kolossalaisille 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossalaiskirje 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossalaisille 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fin)", () => {
		expect(p.parse("Ensimmäinen Kirje tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ensimmäinen Tessalonikalaiskirje 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ensimmäinen Tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ensimmäinen. Kirje tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ensimmäinen. Tessalonikalaiskirje 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ensimmäinen. Tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Kirje tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonikalaiskirje 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Kirje tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonikalaiskirje 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Kirje tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tessalonikalaiskirje 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Kirje tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tessalonikalaiskirje 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fin)", () => {
		expect(p.parse("Toinen Kirje tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toinen Tessalonikalaiskirje 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toinen Tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toinen. Kirje tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toinen. Tessalonikalaiskirje 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toinen. Tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Kirje tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonikalaiskirje 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Kirje tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonikalaiskirje 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Kirje tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tessalonikalaiskirje 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Kirje tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tessalonikalaiskirje 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fin)", () => {
		expect(p.parse("2 Tessalonikalaisille 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fin)", () => {
		expect(p.parse("1 Tessalonikalaisille 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fin)", () => {
		expect(p.parse("Ensimmäinen Kirje Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ensimmäinen Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ensimmäinen Timoteuskirje 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ensimmäinen. Kirje Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ensimmäinen. Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ensimmäinen. Timoteuskirje 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Kirje Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteuskirje 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Kirje Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteuskirje 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Kirje Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteuskirje 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Kirje Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteuskirje 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fin)", () => {
		expect(p.parse("Toinen Kirje Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toinen Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toinen Timoteuskirje 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toinen. Kirje Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toinen. Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toinen. Timoteuskirje 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Kirje Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteuskirje 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Kirje Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteuskirje 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Kirje Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteuskirje 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Kirje Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteuskirje 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fin)", () => {
		expect(p.parse("2 Timoteukselle 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fin)", () => {
		expect(p.parse("1 Timoteukselle 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (fin)", () => {
		expect(p.parse("Kirje Titukselle 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titukselle 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (fin)", () => {
		expect(p.parse("Kirje Filemonille 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonille 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (fin)", () => {
		expect(p.parse("Kirje hebrealaisille 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Kirje heprealaisille 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heprealaiskirje 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heprealaisille 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hepr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (fin)", () => {
		expect(p.parse("Jaakobin kirje 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jaakobin 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jaak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fin)", () => {
		expect(p.parse("Ensimmäinen Pietarin kirje 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ensimmäinen Pietarin 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ensimmäinen. Pietarin kirje 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ensimmäinen. Pietarin 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pietarin kirje 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pietarin 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pietarin kirje 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pietarin 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pietarin kirje 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pietarin 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pietarin kirje 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pietarin 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fin)", () => {
		expect(p.parse("Toinen Pietarin kirje 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Toinen Pietarin 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Toinen. Pietarin kirje 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Toinen. Pietarin 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pietarin kirje 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pietarin 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pietarin kirje 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pietarin 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pietarin kirje 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pietarin 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pietarin kirje 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pietarin 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fin)", () => {
		expect(p.parse("2 Pietarin 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Piet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fin)", () => {
		expect(p.parse("1 Pietarin 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Piet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (fin)", () => {
		expect(p.parse("Juudaksen kirje 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juudaksen 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (fin)", () => {
		expect(p.parse("Tobiaan kirja 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobitin kirja 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobian kirja 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobiaan 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobitin 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobian 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (fin)", () => {
		expect(p.parse("Juditin kirja 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Juditin 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (fin)", () => {
		expect(p.parse("Baarukin kirja 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Barukin kirja 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baarukin 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Barukin 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (fin)", () => {
		expect(p.parse("Susanna ja vanhimmat 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (fin)", () => {
		expect(p.parse("Ensimmäinen makkabilaiskirja 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ensimmäinen. makkabilaiskirja 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 makkabilaiskirja 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. makkabilaiskirja 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I makkabilaiskirja 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. makkabilaiskirja 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (fin)", () => {
		expect(p.parse("Toinen makkabilaiskirja 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Toinen. makkabilaiskirja 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 makkabilaiskirja 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. makkabilaiskirja 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II makkabilaiskirja 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. makkabilaiskirja 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (fin)", () => {
		expect(p.parse("Kolmas makkabilaiskirja 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Kolmas. makkabilaiskirja 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 makkabilaiskirja 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. makkabilaiskirja 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III makkabilaiskirja 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. makkabilaiskirja 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (fin)", () => {
		expect(p.parse("Neljäs makkabilaiskirja 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Neljäs. makkabilaiskirja 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 makkabilaiskirja 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. makkabilaiskirja 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV makkabilaiskirja 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. makkabilaiskirja 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (fin)", () => {
		expect(p.parse("2 makkabilaiskirja 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (fin)", () => {
		expect(p.parse("3 makkabilaiskirja 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (fin)", () => {
		expect(p.parse("4 makkabilaiskirja 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (fin)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (fin)", () => {
		expect(p.parse("1 makkabilaiskirja 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

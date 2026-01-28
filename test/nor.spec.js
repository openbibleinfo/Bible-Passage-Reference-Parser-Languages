"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nor.js";

describe("Localized book Gen (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nor)", () => {
		expect(p.parse("Første Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Første Mos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Første. Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Første. Mos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mos 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nor)", () => {
		expect(p.parse("Andre Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Andre Mos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Andre. Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Andre. Mos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mos 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nor)", () => {
		expect(p.parse("Tredje Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tredje Mos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tredje. Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tredje. Mos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mos 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nor)", () => {
		expect(p.parse("Fjerde Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Fjerde Mos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Fjerde. Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Fjerde. Mos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mos 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nor)", () => {
		expect(p.parse("Femte Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Femte Mos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Femte. Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Femte. Mos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mos 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nor)", () => {
		expect(p.parse("1 Mosebok 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nor)", () => {
		expect(p.parse("Annen Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mosebok 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (nor)", () => {
		expect(p.parse("Bel og dragen i Babylon 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel og draken 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nor)", () => {
		expect(p.parse("Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mosebok 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nor)", () => {
		expect(p.parse("4 Mosebok 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (nor)", () => {
		expect(p.parse("Jesu Siraks sønns visdom 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Siraks bok 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirak 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (nor)", () => {
		expect(p.parse("Salomos Visdom 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Visdommens bok 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Visd 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nor)", () => {
		expect(p.parse("Klagesangene 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klag 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (nor)", () => {
		expect(p.parse("Jeremias brev 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Jerbr 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nor)", () => {
		expect(p.parse("Johannes' åpenbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Johannes’ åpenbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Åpenbaringsboken 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Åpenbaringen 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apenbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Åpenbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Åp 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (nor)", () => {
		expect(p.parse("Manasses bønn 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Man 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nor)", () => {
		expect(p.parse("5 Mosebok 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nor)", () => {
		expect(p.parse("Josvas bok 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josvas 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josva 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nor)", () => {
		expect(p.parse("Dommernes bok 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dommernes 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dommerne 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dom 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nor)", () => {
		expect(p.parse("Ruts bok 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruts 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (nor)", () => {
		expect(p.parse("Første Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Første. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdras 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (nor)", () => {
		expect(p.parse("Andre Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Andre. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdras 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (nor)", () => {
		expect(p.parse("Tredje Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3 Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (nor)", () => {
		expect(p.parse("Fjerde Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4 Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (nor)", () => {
		expect(p.parse("Første Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Første. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (nor)", () => {
		expect(p.parse("Tredje Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Tredje. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3 Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3. Esra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (nor)", () => {
		expect(p.parse("Fjerde Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Fjerde. Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4 Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4. Esra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 2Esd (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (nor)", () => {
		expect(p.parse("Andre Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Andre. Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nor)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nor)", () => {
		expect(p.parse("Esaias' bok 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jesajaboken 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jesajas bok 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jesajaboka 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esaias 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nor)", () => {
		expect(p.parse("Første Samuelsbok 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første. Samuelsbok 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelsbok 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelsbok 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nor)", () => {
		expect(p.parse("Andre Samuelsbok 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andre Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andre Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andre. Samuelsbok 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andre. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Andre. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelsbok 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelsbok 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nor)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nor)", () => {
		expect(p.parse("Første Samuels 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første. Samuels 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuels 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuels 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nor)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nor)", () => {
		expect(p.parse("Første Kongebok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Første Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Første. Kongebok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Første. Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kongebok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kongebok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kong 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nor)", () => {
		expect(p.parse("Andre Kongebok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Andre Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Andre. Kongebok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Andre. Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kongebok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kongebok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kong 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nor)", () => {
		expect(p.parse("2 Kongebok 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nor)", () => {
		expect(p.parse("1 Kongebok 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nor)", () => {
		expect(p.parse("Første Krønikebok 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første Krø 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første. Krønikebok 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første. Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første. Krø 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krønikebok 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krø 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krønikebok 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krø 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nor)", () => {
		expect(p.parse("Andre Krønikebok 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Andre Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Andre Krø 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Andre. Krønikebok 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Andre. Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Andre. Krø 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krønikebok 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krø 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krønikebok 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krø 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nor)", () => {
		expect(p.parse("2 Krønikebok 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krø 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nor)", () => {
		expect(p.parse("1 Krønikebok 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krø 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nor)", () => {
		expect(p.parse("Esras bok 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nor)", () => {
		expect(p.parse("Nehemjas bok 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemias 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemja 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (nor)", () => {
		expect(p.parse("Den greske Ester-boken 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Den greske Ester-boka 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GrEst 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nor)", () => {
		expect(p.parse("Esters bok 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esters 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nor)", () => {
		expect(p.parse("Jobs bok 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jobs 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nor)", () => {
		expect(p.parse("Salmenes bok 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salmenes 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salmene 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salme 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (nor)", () => {
		expect(p.parse("Asarjas bønn 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nor)", () => {
		expect(p.parse("Salomos Ordsprog 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Salomos Ordspråk 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ordspråkene 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ordsp 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nor)", () => {
		expect(p.parse("Forkynnerens bok 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Predikantens bok 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Forkynneren 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Predikerens 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Predikeren 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Fork 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (nor)", () => {
		expect(p.parse("De tre mennenes sang føyer 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("De tre menns sang 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nor)", () => {
		expect(p.parse("Salomos Høisang 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Salomos høysang 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Høysangen 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Høys 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nor)", () => {
		expect(p.parse("Jeremias bok 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nor)", () => {
		expect(p.parse("Esekiels bok 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nor)", () => {
		expect(p.parse("Daniels bok 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nor)", () => {
		expect(p.parse("Hoseas bok 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoseas 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nor)", () => {
		expect(p.parse("Joels bok 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nor)", () => {
		expect(p.parse("Amos' bok 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nor)", () => {
		expect(p.parse("Obadjas bok 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nor)", () => {
		expect(p.parse("Jonas bok 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nor)", () => {
		expect(p.parse("Mikas bok 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nor)", () => {
		expect(p.parse("Nahums bok 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nor)", () => {
		expect(p.parse("Habakkuks bok 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nor)", () => {
		expect(p.parse("Sefanjas bok 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefanias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefanja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nor)", () => {
		expect(p.parse("Haggais bok 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nor)", () => {
		expect(p.parse("Sakarjaboken 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakarjas bok 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakarias 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakarja 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nor)", () => {
		expect(p.parse("Malakis bok 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakias 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nor)", () => {
		expect(p.parse("Evangeliet etter Matteus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteusevangeliet 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nor)", () => {
		expect(p.parse("Evangeliet etter Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markusevangeliet 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nor)", () => {
		expect(p.parse("Evangeliet etter Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukasevangeliet 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nor)", () => {
		expect(p.parse("Johannes’ første brev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nor)", () => {
		expect(p.parse("Johannes’ andre brev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nor)", () => {
		expect(p.parse("Johannes’ tredje brev 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nor)", () => {
		expect(p.parse("Første Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første. Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nor)", () => {
		expect(p.parse("Andre Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Andre Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Andre. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Andre. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nor)", () => {
		expect(p.parse("Tredje Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tredje Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tredje. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tredje. Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nor)", () => {
		expect(p.parse("Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nor)", () => {
		expect(p.parse("Evangeliet etter Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johannesevangeliet 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nor)", () => {
		expect(p.parse("Apostlenes gjerninger 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apostlenes-gjerninge 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apostelgjerningene 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acta 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apg 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ac 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nor)", () => {
		expect(p.parse("Paulus’ brev til romerne 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romerbrevet 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romerne 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nor)", () => {
		expect(p.parse("Første korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første Korintierne 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første Korinter 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første. korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første. Korintierne 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første. Korinter 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintierne 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinter 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintierne 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinter 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nor)", () => {
		expect(p.parse("Andre korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre Korintierne 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre Korinter 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre. korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre. Korintierne 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre. Korinter 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andre. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintierne 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinter 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintierne 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinter 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nor)", () => {
		expect(p.parse("Paulus’ andre brev til korinterne 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinter 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nor)", () => {
		expect(p.parse("Paulus’ første brev til korinterne 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinter 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nor)", () => {
		expect(p.parse("Paulus’ brev til galaterne 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaterbrevet 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaterne 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nor)", () => {
		expect(p.parse("Paulus’ brev til efeserne 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeserbrevet 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeserne 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nor)", () => {
		expect(p.parse("Paulus’ brev til filipperne 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipperbrevet 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filippenserne 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipperne 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nor)", () => {
		expect(p.parse("Paulus’ brev til kolosserne 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosserbrevet 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossenserne 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosserne 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nor)", () => {
		expect(p.parse("Første tessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første Tessalonikerne 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første Tessaloniker 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første. tessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første. Tessalonikerne 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første. Tessaloniker 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første. Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 tessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonikerne 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessaloniker 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. tessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonikerne 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessaloniker 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nor)", () => {
		expect(p.parse("Andre tessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre Tessalonikerne 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre Tessaloniker 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre. tessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre. Tessalonikerne 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre. Tessaloniker 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andre. Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 tessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonikerne 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessaloniker 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. tessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonikerne 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessaloniker 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nor)", () => {
		expect(p.parse("Paulus’ andre brev til tessalonikerne 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessaloniker 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nor)", () => {
		expect(p.parse("Paulus’ første brev til tessalonikerne 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessaloniker 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nor)", () => {
		expect(p.parse("Første Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første. Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nor)", () => {
		expect(p.parse("Andre Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andre Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andre Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andre. Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andre. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andre. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nor)", () => {
		expect(p.parse("Paulus’ andre brev til Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nor)", () => {
		expect(p.parse("Paulus’ første brev til Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nor)", () => {
		expect(p.parse("Paulus’ brev til Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Brevet til Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nor)", () => {
		expect(p.parse("Paulus’ brev til Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Brevet til Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonbrevet 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nor)", () => {
		expect(p.parse("Brevet til hebreerne 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebreerbrevet 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebreerne 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nor)", () => {
		expect(p.parse("Jakobs brev 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakobs 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nor)", () => {
		expect(p.parse("Første Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første Peters 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første. Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første. Peters 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peters 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peters 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nor)", () => {
		expect(p.parse("Andre Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre Peters 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre. Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre. Peters 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andre. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peters 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peters 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nor)", () => {
		expect(p.parse("Peters andre brev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nor)", () => {
		expect(p.parse("Peters første brev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nor)", () => {
		expect(p.parse("Judasbrevet 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas’ brev 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (nor)", () => {
		expect(p.parse("Tobias' bok 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobits bok 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (nor)", () => {
		expect(p.parse("Judits bok 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Judit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (nor)", () => {
		expect(p.parse("Baruks bok 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (nor)", () => {
		expect(p.parse("Fortellingen om Susanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Susanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (nor)", () => {
		expect(p.parse("Første Makkabeerbok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Første Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Første. Makkabeerbok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Første. Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makkabeerbok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makkabeerbok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makk 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (nor)", () => {
		expect(p.parse("Andre Makkabeerbok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Andre Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Andre. Makkabeerbok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Andre. Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makkabeerbok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makkabeerbok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makk 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (nor)", () => {
		expect(p.parse("Tredje Makkabeerbok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tredje Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tredje. Makkabeerbok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tredje. Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makkabeerbok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makkabeerbok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makk 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (nor)", () => {
		expect(p.parse("Fjerde Makkabeerbok 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Fjerde Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Fjerde. Makkabeerbok 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Fjerde. Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makkabeerbok 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makkabeerbok 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makk 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (nor)", () => {
		expect(p.parse("Andre Makkabeerbok 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (nor)", () => {
		expect(p.parse("Tredje Makkabeerbok 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (nor)", () => {
		expect(p.parse("Fjerde Makkabeerbok 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (nor)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (nor)", () => {
		expect(p.parse("Første Makkabeerbok 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

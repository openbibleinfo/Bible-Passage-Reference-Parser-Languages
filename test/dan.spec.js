"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dan.js";

describe("Localized book Gen (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (dan)", () => {
		expect(p.parse("Første Mosebog 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Første Mos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Første. Mosebog 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Første. Mos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mosebog 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mosebog 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mos 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (dan)", () => {
		expect(p.parse("Anden Mosebog 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Anden Mos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Anden. Mosebog 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Anden. Mos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mosebog 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mosebog 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mos 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (dan)", () => {
		expect(p.parse("Tredje Mosebog 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tredje Mos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tredje. Mosebog 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tredje. Mos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mosebog 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mosebog 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mos 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (dan)", () => {
		expect(p.parse("Fjerde Mosebog 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Fjerde Mos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Fjerde. Mosebog 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Fjerde. Mos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mosebog 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mosebog 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mos 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (dan)", () => {
		expect(p.parse("Femte Mosebog 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Femte Mos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Femte. Mosebog 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Femte. Mos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mosebog 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mosebog 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mos 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (dan)", () => {
		expect(p.parse("1 Mosebog 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (dan)", () => {
		expect(p.parse("2 Mosebog 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (dan)", () => {
		expect(p.parse("Bel og Dragen 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (dan)", () => {
		expect(p.parse("Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mosebog 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (dan)", () => {
		expect(p.parse("4 Mosebog 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (dan)", () => {
		expect(p.parse("Siraks Bog 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirak 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (dan)", () => {
		expect(p.parse("Visdommens Bog 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Visdommen 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (dan)", () => {
		expect(p.parse("Klagesangene 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klages 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klag 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (dan)", () => {
		expect(p.parse("Jeremias' Brev 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Jeremias’ Brev 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dan)", () => {
		expect(p.parse("Johannes' Åbenbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Johannesapokalypsen 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Johs. Åbenbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Åbenbaringsbogen 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Johs Åbenbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Aabenbaringen 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Åbenbaringen 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalypsen 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Åb 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (dan)", () => {
		expect(p.parse("Manasses Bøn 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (dan)", () => {
		expect(p.parse("Deuteronomium 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mosebog 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (dan)", () => {
		expect(p.parse("Josvabogen 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josvas Bog 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josvabog 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (dan)", () => {
		expect(p.parse("Dommerbogen 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dommer 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dom 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (dan)", () => {
		expect(p.parse("Ruths Bog 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (dan)", () => {
		expect(p.parse("Første Esdrasbog 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Første. Esdrasbog 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdrasbog 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdrasbog 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (dan)", () => {
		expect(p.parse("Tredje Esdrasbog 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Tredje. Esdrasbog 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3 Esdrasbog 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3. Esdrasbog 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (dan)", () => {
		expect(p.parse("Fjerde Esdrasbog 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Fjerde. Esdrasbog 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4 Esdrasbog 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4. Esdrasbog 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 2Esd (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (dan)", () => {
		expect(p.parse("Anden Esdrasbog 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Anden. Esdrasbog 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdrasbog 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdrasbog 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (dan)", () => {
		expect(p.parse("1 Esdrasbog 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (dan)", () => {
		expect(p.parse("2 Esdrasbog 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (dan)", () => {
		expect(p.parse("Esajas' Bog 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esajas 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jesaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Es 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (dan)", () => {
		expect(p.parse("Første Kongerigernes Bog 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første. Kongerigernes Bog 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Kongerigernes Bog 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Kongerigernes Bog 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (dan)", () => {
		expect(p.parse("Anden Kongerigernes Bog 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Anden. Kongerigernes Bog 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Kongerigernes Bog 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Kongerigernes Bog 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (dan)", () => {
		expect(p.parse("Tredje Kongerigernes Bog 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Tredje. Kongerigernes Bog 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Kongerigernes Bog 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Kongerigernes Bog 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (dan)", () => {
		expect(p.parse("Fjerde Kongerigernes Bog 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Fjerde. Kongerigernes Bog 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Kongerigernes Bog 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Kongerigernes Bog 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (dan)", () => {
		expect(p.parse("Første Samuelsbog 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første. Samuelsbog 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Første. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelsbog 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelsbog 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (dan)", () => {
		expect(p.parse("Anden Samuelsbog 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Anden Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Anden Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Anden. Samuelsbog 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Anden. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Anden. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelsbog 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelsbog 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (dan)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (dan)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (dan)", () => {
		expect(p.parse("Første Kongebog 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Første Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Første. Kongebog 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Første. Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kongebog 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kongebog 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kong 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (dan)", () => {
		expect(p.parse("Anden Kongebog 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Anden Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Anden. Kongebog 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Anden. Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kongebog 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kongebog 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kong 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (dan)", () => {
		expect(p.parse("2 Kongebog 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kong 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (dan)", () => {
		expect(p.parse("1 Kongebog 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kong 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (dan)", () => {
		expect(p.parse("Første Krønikebog 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første. Krønikebog 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første. Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Første. Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krønikebog 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krønikebog 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krøn 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (dan)", () => {
		expect(p.parse("Anden Krønikebog 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Anden Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Anden Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Anden. Krønikebog 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Anden. Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Anden. Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krønikebog 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krønikebog 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krøn 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (dan)", () => {
		expect(p.parse("2 Krønikebog 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krøn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (dan)", () => {
		expect(p.parse("1 Krønikebog 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krøn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (dan)", () => {
		expect(p.parse("Ezras Bog 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (dan)", () => {
		expect(p.parse("Nehemias’ Bog 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemias 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (dan)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (dan)", () => {
		expect(p.parse("Esters Bog 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (dan)", () => {
		expect(p.parse("Jobs Bog 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Hiob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (dan)", () => {
		expect(p.parse("Salmernes Bog 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salmerne 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salme 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sl 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (dan)", () => {
		expect(p.parse("Azarjas bøn 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Azarjas Bøn 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (dan)", () => {
		expect(p.parse("Ordsprogenes Bog 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ordsprogene 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ordsp 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (dan)", () => {
		expect(p.parse("Prædikerens Bog 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Prædikeren 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Prad 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Præd 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (dan)", () => {
		expect(p.parse("De tre mænds lovsang 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("De Tre Mænds Lovsang 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (dan)", () => {
		expect(p.parse("Salomons Højsang 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Højsangen 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hojs 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Højs 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (dan)", () => {
		expect(p.parse("Jeremias' Bog 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (dan)", () => {
		expect(p.parse("Ezekiels’ Bog 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiels Bog 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hezechiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (dan)", () => {
		expect(p.parse("Daniels Bog 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (dan)", () => {
		expect(p.parse("Hoseas’ Bog 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoseas 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (dan)", () => {
		expect(p.parse("Joels Bog 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (dan)", () => {
		expect(p.parse("Amos' Bog 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (dan)", () => {
		expect(p.parse("Obadias' Bog 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (dan)", () => {
		expect(p.parse("Jonas' Bog 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (dan)", () => {
		expect(p.parse("Mikas Bog 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (dan)", () => {
		expect(p.parse("Nahums Bog 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (dan)", () => {
		expect(p.parse("Habakkuks Bog 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (dan)", () => {
		expect(p.parse("Sefanias' Bog 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefanias’ Bog 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefanias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (dan)", () => {
		expect(p.parse("Haggajs Bog 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggaj 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagg 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (dan)", () => {
		expect(p.parse("Zakarias' Bog 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakarias 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (dan)", () => {
		expect(p.parse("Malakias’ Bog 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakias 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dan)", () => {
		expect(p.parse("Matthæusevangeliet 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattæusevangeliet 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matthæus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dan)", () => {
		expect(p.parse("Markusevangeliet 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dan)", () => {
		expect(p.parse("Lukasevangeliet 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dan)", () => {
		expect(p.parse("Første Johannes' Brev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første Johannesbrev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første. Johannes' Brev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Første. Johannesbrev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannes' Brev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannesbrev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannes' Brev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannesbrev 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dan)", () => {
		expect(p.parse("Anden Johannes' Brev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Anden Johannesbrev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Anden. Johannes' Brev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Anden. Johannesbrev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannes' Brev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannesbrev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannes' Brev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannesbrev 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dan)", () => {
		expect(p.parse("Tredje Johannes' Brev 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tredje Johannesbrev 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tredje. Johannes' Brev 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tredje. Johannesbrev 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannes' Brev 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannesbrev 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johannes' Brev 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johannesbrev 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dan)", () => {
		expect(p.parse("Johannes' Første Brev 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dan)", () => {
		expect(p.parse("Johannes' Andet Brev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Andet Johannesbrev 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dan)", () => {
		expect(p.parse("Johannes' Tredje Brev 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dan)", () => {
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
describe("Localized book 2John (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dan)", () => {
		expect(p.parse("Anden Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Anden Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Anden. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Anden. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dan)", () => {
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
describe("Localized book John (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dan)", () => {
		expect(p.parse("Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dan)", () => {
		expect(p.parse("Johannesevangeliet 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dan)", () => {
		expect(p.parse("Apostlenes Gerninger 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gerninger 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap.G 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ApG 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apg 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dan)", () => {
		expect(p.parse("Paulus' Brev til Romerne 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romerbrevet 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romerne 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dan)", () => {
		expect(p.parse("Første Korintherbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første Korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første Korinterne 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første. Korintherbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første. Korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første. Korinterne 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Første. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintherbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinterne 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintherbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinterbrev 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinterne 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dan)", () => {
		expect(p.parse("Anden Korintherbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Anden Korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Anden Korinterne 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Anden Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Anden. Korintherbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Anden. Korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Anden. Korinterne 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Anden. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintherbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinterne 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintherbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinterbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinterne 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dan)", () => {
		expect(p.parse("Paulus' Andet Brev til Korintherne 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Andet Korintherbrev 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinterne 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dan)", () => {
		expect(p.parse("Paulus' Første Brev til Korintherne 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinterne 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dan)", () => {
		expect(p.parse("Paulus' Brev til Galaterne 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Brevet til Galaterne 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaterbrevet 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaterne 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dan)", () => {
		expect(p.parse("Paulus' Brev til Efeserne 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeserbrevet 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeserne 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dan)", () => {
		expect(p.parse("Paulus' Brev til Filipperne 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipperbrevet 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipperne 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dan)", () => {
		expect(p.parse("Paulus' Brev til Kolossenserne 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossenserbrevet 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossensern 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dan)", () => {
		expect(p.parse("Første Thessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første Tessalonikerne 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første. Thessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første. Tessalonikerne 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Første. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonikerne 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonikerne 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dan)", () => {
		expect(p.parse("Anden Thessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Anden Tessalonikerne 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Anden Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Anden. Thessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Anden. Tessalonikerne 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Anden. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonikerne 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonikerne 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dan)", () => {
		expect(p.parse("Paulus' Andet Brev til Thessalonikerne 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Andet Thessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonikerbrev 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dan)", () => {
		expect(p.parse("Paulus' Første Brev til Thessalonikerne 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonikerbrev 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dan)", () => {
		expect(p.parse("Første Timotheusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første. Timotheusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første. Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Første. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotheusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotheusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteusbrev 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dan)", () => {
		expect(p.parse("Anden Timotheusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Anden Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Anden Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Anden Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Anden. Timotheusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Anden. Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Anden. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Anden. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotheusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotheusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dan)", () => {
		expect(p.parse("Paulus' Andet Brev til Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Andet Timotheusbrev 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dan)", () => {
		expect(p.parse("Paulus' Første Brev til Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dan)", () => {
		expect(p.parse("Paulus' Brev til Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titusbrevet 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dan)", () => {
		expect(p.parse("Paulus' Brev til Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonbrevet 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dan)", () => {
		expect(p.parse("Brevet til Hebræerne 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebræerbrevet 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebræerne 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dan)", () => {
		expect(p.parse("Jakobsbrevet 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakobs Brev 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dan)", () => {
		expect(p.parse("Første Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første. Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Første. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petersbrev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dan)", () => {
		expect(p.parse("Anden Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Anden Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Anden Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Anden. Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Anden. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Anden. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dan)", () => {
		expect(p.parse("Peters Andet Brev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Andet Petersbrev 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dan)", () => {
		expect(p.parse("Peters Første Brev 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dan)", () => {
		expect(p.parse("Judas' Brev 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judasbrevet 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (dan)", () => {
		expect(p.parse("Tobits Bog 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (dan)", () => {
		expect(p.parse("Judits Bog 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Judit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (dan)", () => {
		expect(p.parse("Baruks Bog 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (dan)", () => {
		expect(p.parse("Susanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (dan)", () => {
		expect(p.parse("Første Makkabæerbog 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Første Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Første. Makkabæerbog 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Første. Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makkabæerbog 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makkabæerbog 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makk 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (dan)", () => {
		expect(p.parse("Anden Makkabæerbog 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Anden Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Anden. Makkabæerbog 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Anden. Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makkabæerbog 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makkabæerbog 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makk 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (dan)", () => {
		expect(p.parse("Tredje Makkabæerbog 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tredje Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tredje. Makkabæerbog 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tredje. Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makkabæerbog 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makkabæerbog 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makk 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (dan)", () => {
		expect(p.parse("Fjerde Makkabæerbog 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Fjerde Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Fjerde. Makkabæerbog 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Fjerde. Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makkabæerbog 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makkabæerbog 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makk 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (dan)", () => {
		expect(p.parse("2 Makkabæerbog 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (dan)", () => {
		expect(p.parse("3 Makkabæerbog 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (dan)", () => {
		expect(p.parse("4 Makkabæerbog 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (dan)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (dan)", () => {
		expect(p.parse("1 Makkabæerbog 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

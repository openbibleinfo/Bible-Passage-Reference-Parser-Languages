"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/deu.js";

describe("Localized book Gen (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (deu)", () => {
		expect(p.parse("Erste Buch Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Erste Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Erste. Buch Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Erste. Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ersten Buch Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ersten Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ersten. Buch Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ersten. Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Erster Buch Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Erster Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Erster. Buch Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Erster. Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Erstes Buch Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Erstes Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Erstes. Buch Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Erstes. Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Buch Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Buch Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mose 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (deu)", () => {
		expect(p.parse("Zweite Buch Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweite Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweite. Buch Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweite. Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweiten Buch Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweiten Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweiten. Buch Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweiten. Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweiter Buch Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweiter Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweiter. Buch Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweiter. Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweites Buch Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweites Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweites. Buch Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Zweites. Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Buch Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Buch Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mose 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (deu)", () => {
		expect(p.parse("Dritte Buch Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Dritte Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Dritte. Buch Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Dritte. Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Dritten Buch Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Dritten Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Dritten. Buch Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Dritten. Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Dritter Buch Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Dritter Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Dritter. Buch Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Dritter. Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Drittes Buch Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Drittes Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Drittes. Buch Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Drittes. Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Buch Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Buch Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mose 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (deu)", () => {
		expect(p.parse("Vierte Buch Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Vierte Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Vierte. Buch Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Vierte. Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Vierten Buch Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Vierten Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Vierten. Buch Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Vierten. Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Viertes Buch Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Viertes Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Viertes. Buch Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Viertes. Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Buch Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Buch Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mose 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (deu)", () => {
		expect(p.parse("Fünftes Buch Mose 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Fünftes Mose 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Fünftes. Buch Mose 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Fünftes. Mose 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Buch Mose 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mose 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Buch Mose 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mose 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (deu)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mos 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (deu)", () => {
		expect(p.parse("2. Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mos 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (deu)", () => {
		expect(p.parse("Bel und Vom Drachen 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel und der Drache 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel und Drache 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (deu)", () => {
		expect(p.parse("Levitikus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mo 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mos 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mo 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (deu)", () => {
		expect(p.parse("4. Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mos 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nm 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (deu)", () => {
		expect(p.parse("Ecclesiasticus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Jesus Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (deu)", () => {
		expect(p.parse("Weisheit Salomos 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Weisheit 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Weish 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (deu)", () => {
		expect(p.parse("Klagelieder Jeremias 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klagelieder 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klag 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klgl 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (deu)", () => {
		expect(p.parse("Brief des Jeremia 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Br Jer 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (deu)", () => {
		expect(p.parse("Offenbarung 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Offb 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (deu)", () => {
		expect(p.parse("Das Gebet des Manasse 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Das Gebet Manasses 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Gebet des Manasse 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Gebet Manasses 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Gebet Manasse 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Geb Man 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Or Man 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (deu)", () => {
		expect(p.parse("Deuteronomium 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mose 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mose 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mos 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dtn 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (deu)", () => {
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (deu)", () => {
		expect(p.parse("Richter 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Rich 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ri 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (deu)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (deu)", () => {
		expect(p.parse("Erste Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Erste. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Ersten Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Ersten. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Erster Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Erster. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Erstes Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Erstes. Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (deu)", () => {
		expect(p.parse("Zweite Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweite. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweiten Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweiten. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweiter Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweiter. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweites Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweites. Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (deu)", () => {
		expect(p.parse("1. Esdr 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esr 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdr 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Es 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esr 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Es 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (deu)", () => {
		expect(p.parse("2. Esdr 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esr 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdr 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Es 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esr 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Es 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (deu)", () => {
		expect(p.parse("Erste Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Erste. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Ersten Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Ersten. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Erster Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Erster. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Erstes Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Erstes. Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (deu)", () => {
		expect(p.parse("Zweite Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweite. Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweiten Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweiten. Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweiter Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweiter. Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweites Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Zweites. Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (deu)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (deu)", () => {
		expect(p.parse("Isaias 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (deu)", () => {
		expect(p.parse("Erste Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Erste. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ersten Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ersten. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Erster Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Erster. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Erstes Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Erstes. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (deu)", () => {
		expect(p.parse("Zweite Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Zweite. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Zweiten Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Zweiten. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Zweiter Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Zweiter. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Zweites Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Zweites. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (deu)", () => {
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (deu)", () => {
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (deu)", () => {
		expect(p.parse("Erste Koenige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Erste Könige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Erste. Koenige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Erste. Könige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ersten Koenige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ersten Könige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ersten. Koenige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ersten. Könige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Erster Koenige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Erster Könige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Erster. Koenige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Erster. Könige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Erstes Koenige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Erstes Könige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Erstes. Koenige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Erstes. Könige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Koenige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Könige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Koenige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Könige 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (deu)", () => {
		expect(p.parse("Zweite Koenige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweite Könige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweite. Koenige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweite. Könige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweiten Koenige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweiten Könige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweiten. Koenige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweiten. Könige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweiter Koenige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweiter Könige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweiter. Koenige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweiter. Könige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweites Koenige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweites Könige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweites. Koenige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Zweites. Könige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Koenige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Könige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Koenige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Könige 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (deu)", () => {
		expect(p.parse("2. Könige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Könige 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Koen 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kng 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Koe 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Koen 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kön 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kng 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Koe 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kö 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kön 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kö 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (deu)", () => {
		expect(p.parse("1. Könige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Könige 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Koen 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kng 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Koe 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Koen 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kön 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kng 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Koe 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kö 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kön 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kö 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (deu)", () => {
		expect(p.parse("Erste Chronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Erste. Chronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ersten Chronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ersten. Chronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Erster Chronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Erster. Chronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Erstes Chronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Erstes. Chronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Chronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Chronik 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (deu)", () => {
		expect(p.parse("Zweite Chronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Zweite. Chronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Zweiten Chronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Zweiten. Chronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Zweiter Chronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Zweiter. Chronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Zweites Chronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Zweites. Chronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Chronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Chronik 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (deu)", () => {
		expect(p.parse("2. Chronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Chronik 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Chron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Chron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Chr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Chr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (deu)", () => {
		expect(p.parse("1. Chronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Chronik 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Chron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Chron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Chr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Chr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (deu)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (deu)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (deu)", () => {
		expect(p.parse("Ester (Griechisch) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Gr Est 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (deu)", () => {
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (deu)", () => {
		expect(p.parse("Hiob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ijob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Hi 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (deu)", () => {
		expect(p.parse("Psalmen 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Pslm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (deu)", () => {
		expect(p.parse("Das Gebet des Asarja 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Das Gebet Asarjas 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Gebet des Asarja 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Gebet Asarjas 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Geb As 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (deu)", () => {
		expect(p.parse("Sprichwoerter 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sprichwörter 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sprueche 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sprüche 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Spr 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (deu)", () => {
		expect(p.parse("Ecclesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ekklesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Prediger 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Pred 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Koh 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (deu)", () => {
		expect(p.parse("Gesang der drei Maenner im Feuerofen 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Gesang der drei Männer im Feuerofen 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Gesang der drei im Feuerofen 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Gesang der drei Maenner 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Gesang der drei Männer 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Gesang der drei 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Gesang der Drei 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("L3J 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (deu)", () => {
		expect(p.parse("Hoheslied Salomonis 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hohelied Salomonis 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hoheslied Salomos 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hohelied Salomos 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hohes Lied 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hoheslied 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hohelied 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hld 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (deu)", () => {
		expect(p.parse("Jeremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (deu)", () => {
		expect(p.parse("Ezechiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hesekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hesek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hes 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (deu)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (deu)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (deu)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (deu)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (deu)", () => {
		expect(p.parse("Abdias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (deu)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (deu)", () => {
		expect(p.parse("Michaeas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Michäas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Micha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mich 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (deu)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (deu)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (deu)", () => {
		expect(p.parse("Zephanja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefanja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (deu)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagg 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (deu)", () => {
		expect(p.parse("Zacharias 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sacharja 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sach 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (deu)", () => {
		expect(p.parse("Malachias 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Maleachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (deu)", () => {
		expect(p.parse("Das Evangelium nach Matthaeus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Das Evangelium nach Matthäus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Das Evangelium nach. Matthaeus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Das Evangelium nach. Matthäus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Evangelium nach Matthaeus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Evangelium nach Matthäus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Evangelium nach. Matthaeus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Evangelium nach. Matthäus 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Matt (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (deu)", () => {
		expect(p.parse("Matthaeus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matthäus 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Matt (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (deu)", () => {
		expect(p.parse("Matthaeusevangelium 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matthäusevangelium 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (deu)", () => {
		expect(p.parse("Das Evangelium nach Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Das Evangelium nach. Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Evangelium nach Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Evangelium nach. Markus 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Mark (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (deu)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Mark (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (deu)", () => {
		expect(p.parse("Markusevangelium 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (deu)", () => {
		expect(p.parse("Das Evangelium nach Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Das Evangelium nach. Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Evangelium nach Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Evangelium nach. Lukas 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Luke (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (deu)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book Luke (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (deu)", () => {
		expect(p.parse("Lukasevangelium 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (deu)", () => {
		expect(p.parse("1. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (deu)", () => {
		expect(p.parse("2. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (deu)", () => {
		expect(p.parse("3. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jo 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (deu)", () => {
		expect(p.parse("Das Evangelium nach Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Das Evangelium nach. Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Evangelium nach Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Evangelium nach. Johannes 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (deu)", () => {
		expect(p.parse("Erste Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Erste. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ersten Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ersten. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Erster Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Erster. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Erstes Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Erstes. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannes 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (deu)", () => {
		expect(p.parse("Zweite Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zweite. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zweiten Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zweiten. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zweiter Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zweiter. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zweites Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Zweites. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannes 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (deu)", () => {
		expect(p.parse("Dritte Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Dritte. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Dritten Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Dritten. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Dritter Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Dritter. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Drittes Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Drittes. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johannes 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (deu)", () => {
		expect(p.parse("Johannes 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (deu)", () => {
		expect(p.parse("Johannesevangelium 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (deu)", () => {
		expect(p.parse("Apostelgeschichte 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apg 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (deu)", () => {
		expect(p.parse("Roemer 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Römer 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roem 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Röm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (deu)", () => {
		expect(p.parse("Erste Korinther 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Erste. Korinther 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ersten Korinther 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ersten. Korinther 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Erster Korinther 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Erster. Korinther 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Erstes Korinther 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Erstes. Korinther 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinther 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinther 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (deu)", () => {
		expect(p.parse("Zweite Korinther 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Zweite. Korinther 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Zweiten Korinther 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Zweiten. Korinther 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Zweiter Korinther 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Zweiter. Korinther 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Zweites Korinther 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Zweites. Korinther 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinther 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinther 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (deu)", () => {
		expect(p.parse("2. Korinther 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinther 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (deu)", () => {
		expect(p.parse("1. Korinther 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinther 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (deu)", () => {
		expect(p.parse("Galater 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (deu)", () => {
		expect(p.parse("Epheser 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (deu)", () => {
		expect(p.parse("Philipper 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (deu)", () => {
		expect(p.parse("Kolosser 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (deu)", () => {
		expect(p.parse("Erste Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Erste. Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ersten Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ersten. Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Erster Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Erster. Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Erstes Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Erstes. Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (deu)", () => {
		expect(p.parse("Zweite Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Zweite. Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Zweiten Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Zweiten. Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Zweiter Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Zweiter. Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Zweites Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Zweites. Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (deu)", () => {
		expect(p.parse("2. Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonicher 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (deu)", () => {
		expect(p.parse("1. Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonicher 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (deu)", () => {
		expect(p.parse("Erste Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Erste. Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ersten Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ersten. Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Erster Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Erster. Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Erstes Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Erstes. Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotheus 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (deu)", () => {
		expect(p.parse("Zweite Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Zweite. Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Zweiten Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Zweiten. Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Zweiter Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Zweiter. Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Zweites Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Zweites. Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotheus 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (deu)", () => {
		expect(p.parse("2. Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotheus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (deu)", () => {
		expect(p.parse("1. Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotheus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (deu)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (deu)", () => {
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (deu)", () => {
		expect(p.parse("Hebraeer 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebräer 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (deu)", () => {
		expect(p.parse("Jakobusbrief 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (deu)", () => {
		expect(p.parse("Erste Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Erste. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ersten Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ersten. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Erster Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Erster. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Erstes Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Erstes. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (deu)", () => {
		expect(p.parse("Zweite Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Zweite. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Zweiten Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Zweiten. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Zweiter Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Zweiter. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Zweites Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Zweites. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (deu)", () => {
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (deu)", () => {
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (deu)", () => {
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (deu)", () => {
		expect(p.parse("Tobias 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (deu)", () => {
		expect(p.parse("Judit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (deu)", () => {
		expect(p.parse("Baruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (deu)", () => {
		expect(p.parse("Susanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (deu)", () => {
		expect(p.parse("Erste Makkabaeer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Erste Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Erste. Makkabaeer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Erste. Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ersten Makkabaeer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ersten Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ersten. Makkabaeer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Ersten. Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Erster Makkabaeer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Erster Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Erster. Makkabaeer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Erster. Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Erstes Makkabaeer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Erstes Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Erstes. Makkabaeer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Erstes. Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makkabaeer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makkabaeer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (deu)", () => {
		expect(p.parse("Zweite Makkabaeer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweite Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweite. Makkabaeer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweite. Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweiten Makkabaeer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweiten Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweiten. Makkabaeer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweiten. Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweiter Makkabaeer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweiter Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweiter. Makkabaeer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweiter. Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweites Makkabaeer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweites Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweites. Makkabaeer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Zweites. Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makkabaeer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makkabaeer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (deu)", () => {
		expect(p.parse("Dritte Makkabaeer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Dritte Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Dritte. Makkabaeer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Dritte. Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Dritten Makkabaeer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Dritten Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Dritten. Makkabaeer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Dritten. Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Dritter Makkabaeer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Dritter Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Dritter. Makkabaeer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Dritter. Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Drittes Makkabaeer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Drittes Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Drittes. Makkabaeer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Drittes. Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makkabaeer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makkabaeer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (deu)", () => {
		expect(p.parse("Vierte Makkabaeer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Vierte Makkabäer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Vierte. Makkabaeer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Vierte. Makkabäer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Vierten Makkabaeer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Vierten Makkabäer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Vierten. Makkabaeer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Vierten. Makkabäer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Viertes Makkabaeer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Viertes Makkabäer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Viertes. Makkabaeer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Viertes. Makkabäer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makkabaeer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makkabäer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makkabaeer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makkabäer 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (deu)", () => {
		expect(p.parse("2. Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makkabäer 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makk 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (deu)", () => {
		expect(p.parse("3. Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makkabäer 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makk 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (deu)", () => {
		expect(p.parse("4. Makkabäer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makkabäer 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makk 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (deu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (deu)", () => {
		expect(p.parse("1. Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makkabäer 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makk 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nld.js";

describe("Localized book Gen (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nld)", () => {
		expect(p.parse("Eerste Mozes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Eerste. Mozes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1e Mozes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1e. Mozes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Mozes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Mozes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mozes 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mozes 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nld)", () => {
		expect(p.parse("Tweede Mozes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Tweede. Mozes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2e Mozes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2e. Mozes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Mozes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Mozes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mozes 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mozes 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nld)", () => {
		expect(p.parse("Derde Mozes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Derde. Mozes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3e Mozes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3e. Mozes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Mozes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Mozes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mozes 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mozes 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nld)", () => {
		expect(p.parse("Vierde Mozes 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Vierde. Mozes 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Mozes 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Mozes 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mozes 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mozes 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nld)", () => {
		expect(p.parse("Vijfde Mozes 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Vijfde. Mozes 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Mozes 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Mozes 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mozes 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mozes 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nld)", () => {
		expect(p.parse("Beresjiet 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nld)", () => {
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Sjemot 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (nld)", () => {
		expect(p.parse("Bel en de draak 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nld)", () => {
		expect(p.parse("Leviticus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Vajikra 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Wajikra 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nld)", () => {
		expect(p.parse("Bamidbar 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Bemidbar 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numberi 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nu 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (nld)", () => {
		expect(p.parse("Wijsheid van Jozua Ben Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Wijsheid van Jezus Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Wijsheid van Ben Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ecclesiasticus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Jezus Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirach 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (nld)", () => {
		expect(p.parse("De wijsheid van Salomo 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Het boek der wijsheid 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wijsheid van Salomo 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wijsheid 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nld)", () => {
		expect(p.parse("Klaagliederen 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Klaagl 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kl 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (nld)", () => {
		expect(p.parse("Brief van Jeremia 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nld)", () => {
		expect(p.parse("Openbaring van Johannes 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Openbaringen 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Openbaring 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalyps 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Openb 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apk 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Op 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (nld)", () => {
		expect(p.parse("Manasse 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Man 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nld)", () => {
		expect(p.parse("Deuteronomium 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dewariem 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nld)", () => {
		expect(p.parse("Jozua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nld)", () => {
		expect(p.parse("Richteren 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Rechters 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Richtere 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Recht 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Richt 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Re 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ri 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nld)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (nld)", () => {
		expect(p.parse("Eerste Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Eerste. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1e Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1e. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esdras 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (nld)", () => {
		expect(p.parse("Derde Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Derde. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3e Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3e. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("III Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("III. Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3. Esdras 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (nld)", () => {
		expect(p.parse("Vierde Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Vierde. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("IV Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("IV. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4. Esdras 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 2Esd (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (nld)", () => {
		expect(p.parse("Tweede Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Tweede. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2e Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2e. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esdras 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (nld)", () => {
		expect(p.parse("1 Esdras 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (nld)", () => {
		expect(p.parse("2 Esdras 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (nld)", () => {
		expect(p.parse("Eerste Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Eerste. Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1e Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1e. Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ezra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 1Esd (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (nld)", () => {
		expect(p.parse("Derde Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Derde. Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3e Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3e. Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("III Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("III. Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3 Ezra 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("3. Ezra 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (nld)", () => {
		expect(p.parse("Vierde Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Vierde. Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("IV Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("IV. Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4 Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("4. Ezra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 2Esd (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (nld)", () => {
		expect(p.parse("Tweede Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Tweede. Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2e Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2e. Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezra 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ezra 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nld)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nld)", () => {
		expect(p.parse("Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Js 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nld)", () => {
		expect(p.parse("Eerste Samuël 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Eerste Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Eerste. Samuël 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Eerste. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1e Samuël 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1e Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1e. Samuël 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1e. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuël 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuël 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuël 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuël 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nld)", () => {
		expect(p.parse("Tweede Samuël 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Tweede Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Tweede. Samuël 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Tweede. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2e Samuël 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2e Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2e. Samuël 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2e. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuël 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuël 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuël 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuël 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nld)", () => {
		expect(p.parse("Samuel II 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 S 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nld)", () => {
		expect(p.parse("Samuel I 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 S 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nld)", () => {
		expect(p.parse("Eerste Koningen 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eerste Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eerste Ko 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eerste. Koningen 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eerste. Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Eerste. Ko 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1e Koningen 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1e Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1e Ko 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1e. Koningen 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1e. Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1e. Ko 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Koningen 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Ko 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Koningen 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ko 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Koningen 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ko 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Koningen 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ko 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nld)", () => {
		expect(p.parse("Tweede Koningen 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Tweede Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Tweede Ko 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Tweede. Koningen 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Tweede. Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Tweede. Ko 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2e Koningen 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2e Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2e Ko 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2e. Koningen 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2e. Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2e. Ko 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Koningen 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Ko 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Koningen 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ko 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Koningen 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ko 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Koningen 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ko 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nld)", () => {
		expect(p.parse("2 Koningen 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kon 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ko 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nld)", () => {
		expect(p.parse("1 Koningen 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kon 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ko 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nld)", () => {
		expect(p.parse("Eerste Kronieken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Eerste Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Eerste. Kronieken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Eerste. Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1e Kronieken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1e Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1e. Kronieken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1e. Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kronieken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kronieken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kronieken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronieken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kron 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nld)", () => {
		expect(p.parse("Tweede Kronieken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Tweede Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Tweede. Kronieken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Tweede. Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2e Kronieken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2e Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2e. Kronieken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2e. Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kronieken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kronieken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kronieken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronieken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kron 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nld)", () => {
		expect(p.parse("2 Kronieken 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nld)", () => {
		expect(p.parse("1 Kronieken 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nld)", () => {
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nld)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (nld)", () => {
		expect(p.parse("Ester (Grieks) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester (Gr.) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester (Gr) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Est gr 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nld)", () => {
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nld)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nld)", () => {
		expect(p.parse("Psalmen 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (nld)", () => {
		expect(p.parse("Gebed van Azarja 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nld)", () => {
		expect(p.parse("Spreuken 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Spr 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nld)", () => {
		expect(p.parse("Prediker 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Koheleth 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qoheleth 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Qohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Pred 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Pr 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (nld)", () => {
		expect(p.parse("Gezang der drie mannen in het vuur 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Lied van de drie jongemannen 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nld)", () => {
		expect(p.parse("Canticum canticorum 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hooglied 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hoogl 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hl 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nld)", () => {
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nld)", () => {
		expect(p.parse("Ezechiël 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezech 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nld)", () => {
		expect(p.parse("Daniël 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Da 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nld)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nld)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joël 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nld)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nld)", () => {
		expect(p.parse("Obadja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nld)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nld)", () => {
		expect(p.parse("Micha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mica 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nld)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nld)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nld)", () => {
		expect(p.parse("Sefanja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefanja 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nld)", () => {
		expect(p.parse("Haggaï 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagg 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nld)", () => {
		expect(p.parse("Zacharia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zach 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nld)", () => {
		expect(p.parse("Maleachi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nld)", () => {
		expect(p.parse("Evangelie volgens Matteüs 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mattheüs 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matthéüs 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteüs 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matth 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nld)", () => {
		expect(p.parse("Evangelie volgens Marcus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Evangelie volgens Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marcus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nld)", () => {
		expect(p.parse("Evangelie volgens Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Evangelie volgens Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nld)", () => {
		expect(p.parse("1 Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nld)", () => {
		expect(p.parse("2 Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nld)", () => {
		expect(p.parse("3 Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nld)", () => {
		expect(p.parse("Eerste Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Eerste Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Eerste. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Eerste. Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1e Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1e Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1e. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1e. Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nld)", () => {
		expect(p.parse("Tweede Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Tweede Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Tweede. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Tweede. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2e Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2e Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2e. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2e. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nld)", () => {
		expect(p.parse("Derde Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Derde Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Derde. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Derde. Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3e Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3e Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3e. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3e. Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nld)", () => {
		expect(p.parse("Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nld)", () => {
		expect(p.parse("Evangelie volgens Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nld)", () => {
		expect(p.parse("Handelingen van de apostelen 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Handelingen der apostelen 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Handelingen 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hand 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hnd 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nld)", () => {
		expect(p.parse("Romeinenbrief 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romeinen 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nld)", () => {
		expect(p.parse("Eerste Corinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste Corintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste Corinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste Korinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste Corintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste Korintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste Corinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste Korinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste. Corinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste. Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste. Corintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste. Corinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste. Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste. Korinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste. Corintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste. Korintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste. Corinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste. Korinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Eerste. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e Corinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e Corintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e Corinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e Korinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e Corintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e Korintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e Corinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e Korinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e. Corinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e. Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e. Corintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e. Corinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e. Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e. Korinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e. Corintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e. Korintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e. Corinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e. Korinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1e. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Corinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Corinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinthiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiër 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinthe 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nld)", () => {
		expect(p.parse("Tweede Corinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede Corintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede Corinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede Korinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede Corintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede Korintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede Corinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede Korinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede. Corinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede. Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede. Corintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede. Corinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede. Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede. Korinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede. Corintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede. Korintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede. Corinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede. Korinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Tweede. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Corinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Corintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Corinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Korinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Corintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Korintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Corinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Korinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Corinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Corintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Corinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Korinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Corintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Korintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Corinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Korinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2e. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Corinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Corinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinthiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiër 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinthe 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nld)", () => {
		expect(p.parse("2 Korinthiërs 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nld)", () => {
		expect(p.parse("1 Korinthiërs 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nld)", () => {
		expect(p.parse("Galatenbrief 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaten 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nld)", () => {
		expect(p.parse("Efeziërs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efez 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nld)", () => {
		expect(p.parse("Filippenzen 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nld)", () => {
		expect(p.parse("Colossenzen 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolossenzen 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nld)", () => {
		expect(p.parse("Eerste Thessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eerste Tessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eerste Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eerste Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eerste Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eerste. Thessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eerste. Tessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eerste. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eerste. Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Eerste. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1e Thessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1e Tessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1e Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1e Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1e Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1e. Thessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1e. Tessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1e. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1e. Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1e. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nld)", () => {
		expect(p.parse("Tweede Thessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tweede Tessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tweede Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tweede Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tweede Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tweede. Thessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tweede. Tessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tweede. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tweede. Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tweede. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e Thessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e Tessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e. Thessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e. Tessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e. Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2e. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nld)", () => {
		expect(p.parse("2 Tessalonicenzen 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nld)", () => {
		expect(p.parse("1 Tessalonicenzen 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nld)", () => {
		expect(p.parse("Eerste Timotheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eerste Timoteüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eerste Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eerste. Timotheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eerste. Timoteüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Eerste. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1e Timotheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1e Timoteüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1e Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1e. Timotheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1e. Timoteüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1e. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timotheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotheüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nld)", () => {
		expect(p.parse("Tweede Timotheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tweede Timoteüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tweede Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tweede. Timotheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tweede. Timoteüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tweede. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2e Timotheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2e Timoteüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2e Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2e. Timotheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2e. Timoteüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2e. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timotheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotheüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nld)", () => {
		expect(p.parse("2 Timoteüs 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nld)", () => {
		expect(p.parse("1 Timoteüs 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nld)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nld)", () => {
		expect(p.parse("Filémon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nld)", () => {
		expect(p.parse("Hebreeën 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nld)", () => {
		expect(p.parse("Jacobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nld)", () => {
		expect(p.parse("Eerste Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eerste Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eerste Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eerste. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eerste. Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Eerste. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1e Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1e Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1e Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1e. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1e. Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1e. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nld)", () => {
		expect(p.parse("Tweede Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tweede Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tweede Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tweede. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tweede. Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Tweede. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2e Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2e Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2e Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2e. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2e. Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2e. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nld)", () => {
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nld)", () => {
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nld)", () => {
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (nld)", () => {
		expect(p.parse("Tobías 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobía 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (nld)", () => {
		expect(p.parse("Judith 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Judit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (nld)", () => {
		expect(p.parse("Baruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (nld)", () => {
		expect(p.parse("Susanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (nld)", () => {
		expect(p.parse("Eerste Makkabeeën 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Eerste Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Eerste. Makkabeeën 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Eerste. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1e Makkabeeën 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1e Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1e. Makkabeeën 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1e. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Makkabeeën 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Makkabeeën 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makkabeeën 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makkabeeën 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (nld)", () => {
		expect(p.parse("Tweede Makkabeeën 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Tweede Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Tweede. Makkabeeën 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Tweede. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2e Makkabeeën 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2e Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2e. Makkabeeën 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2e. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Makkabeeën 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Makkabeeën 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makkabeeën 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makkabeeën 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (nld)", () => {
		expect(p.parse("Derde Makkabeeën 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Derde Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Derde. Makkabeeën 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Derde. Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3e Makkabeeën 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3e Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3e. Makkabeeën 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3e. Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Makkabeeën 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Makkabeeën 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makkabeeën 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makkabeeën 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Mak 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (nld)", () => {
		expect(p.parse("Vierde Makkabeeën 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Vierde Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Vierde. Makkabeeën 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Vierde. Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Makkabeeën 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Makkabeeën 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makkabeeën 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makkabeeën 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Mak 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (nld)", () => {
		expect(p.parse("2 Makkabeeën 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (nld)", () => {
		expect(p.parse("3 Makkabeeën 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mak 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (nld)", () => {
		expect(p.parse("4 Makkabeeën 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mak 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (nld)", () => {
		expect(p.parse("1 Makkabeeën 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book Ezek,Ezra (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek,Ezra (nld)", () => {
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Parser helper should handle ranges (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (nld)", () => {
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
describe("Parser helper should handle chapters (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (nld)", () => {
		expect(p.parse("Titus 1:1, hoofdstukken 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 hoofdstukken 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, hoofdstuk 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 hoofdstuk 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (nld)", () => {
		expect(p.parse("Exod 1:1 verzen 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm verzen 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 vers 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm vers 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 vs. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm vs. 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 vs 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm vs 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 v. 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm v. 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (nld)", () => {
		expect(p.parse("Exod 1:1 en 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 en 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 vgl 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 vgl 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
		expect(p.parse("Exod 1:1 zie ook 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 zie ook 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (nld)", () => {
		expect(p.parse("Ps 3 opschrift, 4:2, 5:opschrift").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (nld)", () => {
		expect(p.parse("Rev 3en volgende verzen, 4:2en volgende verzen").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (nld)", () => {
		expect(p.parse("Lev 1 (GNB96)").osis_and_translations()).toEqual([["Lev.1","GNB96"]]);
		expect(p.parse("Lev 1 (NBG51)").osis_and_translations()).toEqual([["Lev.1","NBG51"]]);
		expect(p.parse("Lev 1 (NBV)").osis_and_translations()).toEqual([["Lev.1","NBV"]]);
		expect(p.parse("Lev 1 (SV)").osis_and_translations()).toEqual([["Lev.1","SV"]]);
		expect(p.parse("Lev 1 (SV77)").osis_and_translations()).toEqual([["Lev.1","SV77"]]);
		expect(p.parse("Lev 1 (WV95)").osis_and_translations()).toEqual([["Lev.1","WV95"]]);
		expect(p.parse("Lev 1 (NB)").osis_and_translations()).toEqual([["Lev.1","NB"]]);
	});
});
describe("Parser helper should handle book ranges (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (nld)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johannes - 3 Johannes").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johannes – 3 Johannes").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johannes — 3 Johannes").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (nld)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (nld)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

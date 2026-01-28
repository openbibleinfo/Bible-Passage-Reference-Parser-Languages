"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/slk.js";

describe("Localized book Gen (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (slk)", () => {
		expect(p.parse("Kniha stvorenia 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kniha pôvodu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kniha. stvorenia 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kniha. pôvodu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("K. stvorenia 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("K. pôvodu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("K stvorenia 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("K pôvodu 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Gen (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (slk)", () => {
		expect(p.parse("Prvá kniha Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Prvá kniha. Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Prvý list Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Prvý list. Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Prvá Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Prvá. Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Prvý Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Prvý. Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 k Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 k. Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Mojžišova 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Mojžišova 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (slk)", () => {
		expect(p.parse("Druhá kniha Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhá kniha. Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhý list Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhý list. Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhá Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhá. Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhý Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Druhý. Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 k Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 k. Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mojžišova 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Mojžišova 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (slk)", () => {
		expect(p.parse("Tretia kniha Mojžišova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tretia kniha. Mojžišova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tretia Mojžišova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tretia. Mojžišova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tretí Mojžišova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tretí. Mojžišova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 k Mojžišova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 k. Mojžišova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Mojžišova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Mojžišova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mojžišova 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Mojžišova 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (slk)", () => {
		expect(p.parse("Štvrtá kniha Mojžišova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Štvrtá kniha. Mojžišova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Štvrtá Mojžišova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Štvrtá. Mojžišova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 k Mojžišova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 k. Mojžišova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Mojžišova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Mojžišova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mojžišova 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Mojžišova 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (slk)", () => {
		expect(p.parse("Piata kniha Mojžišova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Piata kniha. Mojžišova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Piata Mojžišova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Piata. Mojžišova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 k Mojžišova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 k. Mojžišova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Mojžišova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Mojžišova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Mojžišova 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Mojžišova 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (slk)", () => {
		expect(p.parse("Genezis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 M 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (slk)", () => {
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 M 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (slk)", () => {
		expect(p.parse("Bél a drak 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bél 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (slk)", () => {
		expect(p.parse("Levitikus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 M 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (slk)", () => {
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 M 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nm 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (slk)", () => {
		expect(p.parse("Kniha Sirachovcova 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Kniha. Sirachovcova 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("K. Sirachovcova 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("K Sirachovcova 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Sir (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (slk)", () => {
		expect(p.parse("Sirachovcova 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Sir (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (slk)", () => {
		expect(p.parse("Kniha Sirachovho syna 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Kniha Ekleziastikus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Kniha Sirachovca 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Kniha. Sirachovho syna 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Kniha. Ekleziastikus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Kniha. Sirachovca 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("K. Sirachovho syna 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("K. Ekleziastikus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("K. Sirachovca 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("K Sirachovho syna 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("K Ekleziastikus 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("K Sirachovca 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Sir (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (slk)", () => {
		expect(p.parse("Sirachovec 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (slk)", () => {
		expect(p.parse("Múdrosti 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Múdrosť 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Múd 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (slk)", () => {
		expect(p.parse("Kniha nárekov 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kniha. nárekov 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("K. nárekov 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("K nárekov 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Lam (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (slk)", () => {
		expect(p.parse("Jeremiášov Plač 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Plač Jeremiášov 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Žalospevy 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Náreky 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Žalosp 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Plač 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Nár 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (slk)", () => {
		expect(p.parse("Jeremiášov list 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (slk)", () => {
		expect(p.parse("Zjavenie Apoštola Jána 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zjavenie svätého Jána 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zjavenie Jána 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokalypsa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zjavenie 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zjav 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zjv 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Zj 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (slk)", () => {
		expect(p.parse("Manasesova modlitba 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (slk)", () => {
		expect(p.parse("Deuteronómium 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 M 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (slk)", () => {
		expect(p.parse("Jošuova 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Józuova 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jozua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jozue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jošua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Józua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (slk)", () => {
		expect(p.parse("K. sudcov 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("K sudcov 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sudcovia 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sudcov 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sdc 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Sud 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (slk)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rút 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (slk)", () => {
		expect(p.parse("Prvá kniha Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvá kniha. Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvý list Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvý list. Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvá Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvá. Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvý Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvý. Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 k Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 k. Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ezdrášova 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (slk)", () => {
		expect(p.parse("Druhá kniha Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhá kniha. Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhý list Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhý list. Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhá Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhá. Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhý Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhý. Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 k Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 k. Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ezdrášova 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (slk)", () => {
		expect(p.parse("1 Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (slk)", () => {
		expect(p.parse("2 Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (slk)", () => {
		expect(p.parse("Prvá kniha Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvá kniha. Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvý list Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvý list. Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvá Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvá. Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvý Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Prvý. Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 k Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 k. Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ezdráš 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (slk)", () => {
		expect(p.parse("Druhá kniha Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhá kniha. Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhý list Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhý list. Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhá Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhá. Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhý Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Druhý. Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 k Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 k. Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ezdráš 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (slk)", () => {
		expect(p.parse("Ezdráš 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (slk)", () => {
		expect(p.parse("Izaiáš 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Izajáš 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (slk)", () => {
		expect(p.parse("Prvá kniha Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Prvá kniha. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Prvý list Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Prvý list. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Prvá Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Prvá. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Prvý Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Prvý. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 k Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 k. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelova 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (slk)", () => {
		expect(p.parse("Druhá kniha Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá kniha. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý list Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý list. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhá. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Druhý. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 k Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 k. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelova 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (slk)", () => {
		expect(p.parse("2 Samuelova 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 S 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (slk)", () => {
		expect(p.parse("1 Samuelova 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 S 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (slk)", () => {
		expect(p.parse("Prvá kniha Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Prvá kniha. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Prvý list Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Prvý list. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Prvá Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Prvá. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Prvý Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Prvý. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 k Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 k. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (slk)", () => {
		expect(p.parse("Tretia kniha Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Tretia kniha. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Tretia Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Tretia. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Tretí Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Tretí. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 k Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 k. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (slk)", () => {
		expect(p.parse("Štvrtá kniha Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Štvrtá kniha. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Štvrtá Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Štvrtá. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 k Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 k. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (slk)", () => {
		expect(p.parse("Druhá kniha Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhá kniha. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý list Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý list. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhá Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhá. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Druhý. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 k Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 k. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (slk)", () => {
		expect(p.parse("2 Kráľov 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Krľ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kr 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (slk)", () => {
		expect(p.parse("1 Kráľov 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Krľ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kr 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (slk)", () => {
		expect(p.parse("Prvá kniha Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvá kniha Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvá kniha Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvá kniha. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvá kniha. Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvá kniha. Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý list Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý list Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý list Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý list. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý list. Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý list. Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvá Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvá Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvá Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvá. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvá. Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvá. Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý. Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Prvý. Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 k Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 k Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 k Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 k. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 k. Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 k. Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Paralipomenon 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronická 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kroník 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (slk)", () => {
		expect(p.parse("Druhá kniha Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá kniha Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá kniha Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá kniha. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá kniha. Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá kniha. Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý list Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý list Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý list Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý list. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý list. Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý list. Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá. Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhá. Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý. Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Druhý. Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 k Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 k Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 k Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 k. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 k. Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 k. Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Paralipomenon 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronická 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kroník 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (slk)", () => {
		expect(p.parse("2 Kroník 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kron 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Krn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (slk)", () => {
		expect(p.parse("1 Kroník 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kron 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Krn 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (slk)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (slk)", () => {
		expect(p.parse("Nehemiáš 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (slk)", () => {
		expect(p.parse("Grécke časti knihy Ester 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester (gr.) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ester (gr) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (slk)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (slk)", () => {
		expect(p.parse("Kniha Jóbova 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Kniha. Jóbova 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("K. Jóbova 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("K Jóbova 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Job (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (slk)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jób 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (slk)", () => {
		expect(p.parse("Kniha žalmov 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Kniha. žalmov 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("K. žalmov 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("K žalmov 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Ps (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (slk)", () => {
		expect(p.parse("Žaltár 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Žalmy 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Žalm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ž 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (slk)", () => {
		expect(p.parse("Azarjášova modlitba 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (slk)", () => {
		expect(p.parse("Kniha prísloví 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Kniha. prísloví 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("K. prísloví 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("K prísloví 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Prov (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (slk)", () => {
		expect(p.parse("Príslovia 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prís 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pr 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (slk)", () => {
		expect(p.parse("Kniha kazateľova 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kniha. kazateľova 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("K. kazateľova 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("K kazateľova 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Eccl (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (slk)", () => {
		expect(p.parse("Kohelet — Kazateľ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ekleziastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kazateľ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kaz 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Koh 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (slk)", () => {
		expect(p.parse("Traja mládenci v rozpálenej peci 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Pieseň mládencov v ohnivej peci 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (slk)", () => {
		expect(p.parse("Veľpieseň Šalamúnova 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pieseň Šalamúnova 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pieseň piesní 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Veľpieseň 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pieseň 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pies 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Veľp 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Vľp 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("PŠ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (slk)", () => {
		expect(p.parse("Jeremiáš 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (slk)", () => {
		expect(p.parse("Ezechiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (slk)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (slk)", () => {
		expect(p.parse("Hozeáš 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ozeáš 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (slk)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (slk)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ámos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ám 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (slk)", () => {
		expect(p.parse("Obadiáš 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obediáš 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdiáš 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (slk)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonáš 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (slk)", () => {
		expect(p.parse("Micheáš 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mich 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (slk)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Náhum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (slk)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (slk)", () => {
		expect(p.parse("Sofoniáš 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (slk)", () => {
		expect(p.parse("Haggeus 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aggeus 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ageus 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (slk)", () => {
		expect(p.parse("Zachariáš 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zach 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (slk)", () => {
		expect(p.parse("Malachiáš 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (slk)", () => {
		expect(p.parse("Evanjelium Podľa Matúša 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matúša 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matúš 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (slk)", () => {
		expect(p.parse("Evanjelium Podľa Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marek 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (slk)", () => {
		expect(p.parse("Evanjelium Podľa Lukáša 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukáša 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukáš 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (slk)", () => {
		expect(p.parse("Prvý Jánov list 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 J 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (slk)", () => {
		expect(p.parse("Druhý Jánov list 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 J 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (slk)", () => {
		expect(p.parse("Tretí Jánov list 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 J 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (slk)", () => {
		expect(p.parse("Prvá kniha Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prvá kniha. Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prvý list Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prvý list. Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prvá Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prvá. Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prvý Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Prvý. Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 k Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 k. Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jánov 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jánov 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (slk)", () => {
		expect(p.parse("Druhá kniha Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhá kniha. Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý list Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý list. Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhá Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhá. Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Druhý. Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 k Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 k. Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jánov 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jánov 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (slk)", () => {
		expect(p.parse("Tretia kniha Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tretia kniha. Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tretia Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tretia. Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tretí Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tretí. Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 k Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 k. Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jánov 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jánov 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (slk)", () => {
		expect(p.parse("Evanjelium Podľa Jána 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jána 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ján 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (slk)", () => {
		expect(p.parse("Skutky apoštolov 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Skutky 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Sk 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (slk)", () => {
		expect(p.parse("List Rimanom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rimanom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rímskym 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rim 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (slk)", () => {
		expect(p.parse("Prvá kniha Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvá kniha Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvá kniha. Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvá kniha. Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvý list Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvý list Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvý list. Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvý list. Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvá Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvá Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvá. Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvá. Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvý Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvý Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvý. Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Prvý. Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 k Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 k Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 k. Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 k. Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintským 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (slk)", () => {
		expect(p.parse("Druhá kniha Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá kniha Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá kniha. Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá kniha. Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý list Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý list Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý list. Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý list. Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá. Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhá. Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý. Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Druhý. Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 k Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 k Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 k. Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 k. Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintským 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (slk)", () => {
		expect(p.parse("2 Korinťanom 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (slk)", () => {
		expect(p.parse("1 Korinťanom 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (slk)", () => {
		expect(p.parse("List Galaťanom 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatským 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaťanom 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (slk)", () => {
		expect(p.parse("List Efezanom 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efezanom 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efezským 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (slk)", () => {
		expect(p.parse("List Filipanom 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipanom 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipským 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (slk)", () => {
		expect(p.parse("List Kolosanom 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosenským 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosanom 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (slk)", () => {
		expect(p.parse("Prvá kniha Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá kniha Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá kniha Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá kniha Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá kniha. Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá kniha. Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá kniha. Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá kniha. Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý list Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý list Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý list Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý list Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý list. Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý list. Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý list. Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý list. Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá. Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá. Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá. Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvá. Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý. Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý. Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý. Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Prvý. Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 k Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 k Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 k Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 k Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 k. Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 k. Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 k. Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 k. Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloničanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonickým 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Solúnskym 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (slk)", () => {
		expect(p.parse("Druhá kniha Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá kniha Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá kniha Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá kniha Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá kniha. Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá kniha. Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá kniha. Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá kniha. Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý list Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý list Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý list Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý list Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý list. Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý list. Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý list. Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý list. Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá. Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá. Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá. Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhá. Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý. Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý. Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý. Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Druhý. Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 k Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 k Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 k Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 k Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 k. Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 k. Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 k. Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 k. Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloničanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonickým 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Solúnskym 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (slk)", () => {
		expect(p.parse("2. Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Solúnčanom 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Sol 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (slk)", () => {
		expect(p.parse("1. Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Solúnčanom 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Sol 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (slk)", () => {
		expect(p.parse("Prvá kniha Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvá kniha Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvá kniha. Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvá kniha. Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvý list Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvý list Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvý list. Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvý list. Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvá Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvá Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvá. Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvá. Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvý Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvý Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvý. Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Prvý. Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 k Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 k Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 k. Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 k. Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteovi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (slk)", () => {
		expect(p.parse("Druhá kniha Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá kniha Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá kniha. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá kniha. Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý list Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý list Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý list. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý list. Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhá. Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Druhý. Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 k Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 k Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 k. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 k. Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteovi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (slk)", () => {
		expect(p.parse("2. Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotejovi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (slk)", () => {
		expect(p.parse("1. Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotejovi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (slk)", () => {
		expect(p.parse("List Títovi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Títovi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tít 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (slk)", () => {
		expect(p.parse("List Filemónovi 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemonovi 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (slk)", () => {
		expect(p.parse("List Hebrejom 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrejom 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Židom 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Žid 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (slk)", () => {
		expect(p.parse("Jakubov List 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakubov 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (slk)", () => {
		expect(p.parse("Prvý Petrov list 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (slk)", () => {
		expect(p.parse("Druhý Petrov list 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (slk)", () => {
		expect(p.parse("Prvá kniha Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prvá kniha. Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prvý list Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prvý list. Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prvá Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prvá. Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prvý Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Prvý. Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 k Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 k. Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrov 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrov 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (slk)", () => {
		expect(p.parse("Druhá kniha Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá kniha. Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý list Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý list. Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhá. Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Druhý. Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 k Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 k. Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrov 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrov 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (slk)", () => {
		expect(p.parse("Júdov List 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Júdov 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Júd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (slk)", () => {
		expect(p.parse("Tobiáš 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (slk)", () => {
		expect(p.parse("Kniha Juditina 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Kniha. Juditina 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("K. Juditina 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("K Juditina 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Jdt (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (slk)", () => {
		expect(p.parse("Judita 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Judit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (slk)", () => {
		expect(p.parse("Proroctvo Baruchovo 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Baruch 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (slk)", () => {
		expect(p.parse("Zuzana 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Zuzane 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (slk)", () => {
		expect(p.parse("Prvá kniha Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Prvá kniha. Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Prvý list Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Prvý list. Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Prvá Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Prvá. Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Prvý Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Prvý. Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 k Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 k. Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (slk)", () => {
		expect(p.parse("Druhá kniha Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhá kniha. Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý list Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý list. Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhá Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhá. Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý. Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 k Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 k. Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (slk)", () => {
		expect(p.parse("Tretia kniha Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tretia kniha. Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tretia Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tretia. Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tretí Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Tretí. Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 k Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 k. Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (slk)", () => {
		expect(p.parse("Štvrtá kniha Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Štvrtá kniha. Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Štvrtá Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Štvrtá. Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 k Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 k. Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (slk)", () => {
		expect(p.parse("Druhá kniha Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhá kniha. Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý list Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý list. Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhá Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhá. Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Druhý. Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 k Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 k. Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabejcov 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 2Macc (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (slk)", () => {
		expect(p.parse("2. Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Machabejcov 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mach 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (slk)", () => {
		expect(p.parse("3. Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Machabejcov 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mach 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Mak 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (slk)", () => {
		expect(p.parse("4. Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Machabejcov 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mach 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Mak 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (slk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (slk)", () => {
		expect(p.parse("Prvá Makabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Machabejcov 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mach 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

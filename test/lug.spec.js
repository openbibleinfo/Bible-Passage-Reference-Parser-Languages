"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lug.js";

describe("Localized book Gen (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lug)", () => {
		expect(p.parse("Olubereberye 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Entandikwa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Amas 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Lub 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Nta 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lug)", () => {
		expect(p.parse("Okuva E Misiri 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Okuva 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Okuv 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kuv 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (lug)", () => {
		expect(p.parse("Beeli N'ogusota 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lug)", () => {
		expect(p.parse("Eby'Abaleevi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Eky'abaleevi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ebyabaleevi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Abal 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lug)", () => {
		expect(p.parse("Okubala 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kubal 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Emiw 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kbl 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (lug)", () => {
		expect(p.parse("Siraki 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (lug)", () => {
		expect(p.parse("Amagezi Ga Solomooni 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Amag 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Mag 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lug)", () => {
		expect(p.parse("Okukungubaga 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kung 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Okuk 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kgb 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (lug)", () => {
		expect(p.parse("Ebbaluwa Ya Yeremiya 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Bal Yer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lug)", () => {
		expect(p.parse("Okubikkulirwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Okub 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kub 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (lug)", () => {
		expect(p.parse("Manasse 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Man 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lug)", () => {
		expect(p.parse("Ekyamateeka Olwokubiri 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Amateeka Agookubiri 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Et 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ma 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lug)", () => {
		expect(p.parse("Yoswa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lug)", () => {
		expect(p.parse("Ekyabalamuzi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abalamuzi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abalam 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Balam 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bal 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lug)", () => {
		expect(p.parse("Luusi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruusi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Luus 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruus 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Lus 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (lug)", () => {
		expect(p.parse("1 Esideraasi 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Esd 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esideraasi 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (lug)", () => {
		expect(p.parse("2 Esideraasi 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Esd 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esideraasi 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lug)", () => {
		expect(p.parse("Yisaaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yis 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lug)", () => {
		expect(p.parse("1 Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samwiri 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samwiri 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lug)", () => {
		expect(p.parse("2 Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samwiri 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samwiri 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lug)", () => {
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lug)", () => {
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lug)", () => {
		expect(p.parse("1 Bassekabaka 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Bassek 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Bak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bassekabaka 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bassek 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bak 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lug)", () => {
		expect(p.parse("2 Bassekabaka 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Bassek 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Bak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bassekabaka 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bassek 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bak 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lug)", () => {
		expect(p.parse("1Bk 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lug)", () => {
		expect(p.parse("2Bk 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lug)", () => {
		expect(p.parse("1 Ekyebyomumirembe 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ebyomumirembe 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ebyaf 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Byom 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ekyebyomumirembe 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ebyomumirembe 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ebyaf 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Byom 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lug)", () => {
		expect(p.parse("2 Ekyebyomumirembe 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ebyomumirembe 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ebyaf 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Byom 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ekyebyomumirembe 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ebyomumirembe 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ebyaf 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Byom 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lug)", () => {
		expect(p.parse("1By 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lug)", () => {
		expect(p.parse("2By 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lug)", () => {
		expect(p.parse("Ezera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezer 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezir 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lug)", () => {
		expect(p.parse("Nekkemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nek 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lug)", () => {
		expect(p.parse("Yobu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lug)", () => {
		expect(p.parse("Zabbuli 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zab 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lug)", () => {
		expect(p.parse("Engero 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Eng 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Nge 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lug)", () => {
		expect(p.parse("Omubuulizi 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kow 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mub 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (lug)", () => {
		expect(p.parse("Oluyimba Lw'abavubuka Abasatu 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Kus 3 Bav 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lug)", () => {
		expect(p.parse("Oluyimba Ssennyimba 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Oluyimba 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Oluy 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lug)", () => {
		expect(p.parse("Yeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lug)", () => {
		expect(p.parse("Ezeekyeli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezeekyeri 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lug)", () => {
		expect(p.parse("Daniyeli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danyeri 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lug)", () => {
		expect(p.parse("Hoseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Koseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Kos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oz 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lug)", () => {
		expect(p.parse("Yoweeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoweeri 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yowel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yol 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yo 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lug)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lug)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lug)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lug)", () => {
		expect(p.parse("Mikka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lug)", () => {
		expect(p.parse("Nakkumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nak 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lug)", () => {
		expect(p.parse("Kaabakuuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuuku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abak 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Kaab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Kbk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lug)", () => {
		expect(p.parse("Zeffaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lug)", () => {
		expect(p.parse("Haggayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Kaggayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Kag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lug)", () => {
		expect(p.parse("Zekkaliya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lug)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lug)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lug)", () => {
		expect(p.parse("Mariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Makko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lug)", () => {
		expect(p.parse("Lukka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lug)", () => {
		expect(p.parse("1Yk 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lug)", () => {
		expect(p.parse("2Yk 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lug)", () => {
		expect(p.parse("3 Yokaana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yowanne 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yok 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yow 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yk 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lug)", () => {
		expect(p.parse("1 Yokaana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yowanne 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yok 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yow 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yokaana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowanne 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yok 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yow 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lug)", () => {
		expect(p.parse("2 Yokaana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yowanne 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yok 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yow 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yokaana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowanne 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yok 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yow 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lug)", () => {
		expect(p.parse("Yokaana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yowanne 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yok 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yk 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lug)", () => {
		expect(p.parse("Ebikolwa By'Abatume 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ebikolwa byʼAbatume 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ebikolwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ebik 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bik 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lug)", () => {
		expect(p.parse("Abarooma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Abaruumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lug)", () => {
		expect(p.parse("1 Abakkolinso 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Abakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kol 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abakkolinso 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kol 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lug)", () => {
		expect(p.parse("2 Abakkolinso 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Abakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abakkolinso 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kol 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lug)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lug)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lug)", () => {
		expect(p.parse("Abakkolosaayi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Abakolosaayi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Bak 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lug)", () => {
		expect(p.parse("Abaggalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Abagalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Bag 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lug)", () => {
		expect(p.parse("Abaefeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Abeefeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Beef 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Bef 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lug)", () => {
		expect(p.parse("Abafilippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Abafiripi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Baf 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lug)", () => {
		expect(p.parse("1 Abasessaloniika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Abatessalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Basessaloniika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Bas 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Bat 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abasessaloniika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abatessalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Basessaloniika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bas 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bat 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lug)", () => {
		expect(p.parse("2 Abasessaloniika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Abatessalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Basessaloniika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Bas 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Bat 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abasessaloniika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abatessalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Basessaloniika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bas 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bat 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lug)", () => {
		expect(p.parse("1Bs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lug)", () => {
		expect(p.parse("2Bs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lug)", () => {
		expect(p.parse("1 Timoseewo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteewo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoseewo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteewo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lug)", () => {
		expect(p.parse("2 Timoseewo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteewo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoseewo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteewo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lug)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lug)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lug)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lug)", () => {
		expect(p.parse("Filemooni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Firemooni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fir 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lug)", () => {
		expect(p.parse("Abaebbulaniya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Abeebureeyi 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Abeeb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Beb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lug)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lug)", () => {
		expect(p.parse("1 Peetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lug)", () => {
		expect(p.parse("2 Peetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lug)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lug)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lug)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (lug)", () => {
		expect(p.parse("Tobiiti 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (lug)", () => {
		expect(p.parse("Yudita 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yudit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Ydt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (lug)", () => {
		expect(p.parse("Baruku 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (lug)", () => {
		expect(p.parse("Susanna 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (lug)", () => {
		expect(p.parse("1 Abamakkabeewo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Bamak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Abamakkabeewo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Bamak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (lug)", () => {
		expect(p.parse("2 Abamakkabeewo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Bamak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Abamakkabeewo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Bamak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lug)", () => {
		expect(p.parse("Esiteeri 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Eseza 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Es 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (lug)", () => {
		expect(p.parse("OLUYIMBA LW'ABAVUBUKA ABASATU 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Kus 3 Bav 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Parser helper should handle book ranges (lug)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lug)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yk - 3 Yokaana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yk – 3 Yokaana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yk — 3 Yokaana").osis()).toEqual("1John.1-3John.1");
	});
});

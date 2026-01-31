"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lua.js";

describe("Localized book Gen (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lua)", () => {
		expect(p.parse("Tshibangidilu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genese 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tshib 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lua)", () => {
		expect(p.parse("Tshimuangi 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ekesode 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Tshim 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ek. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (lua)", () => {
		expect(p.parse("Bele 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lua)", () => {
		expect(p.parse("Mikenji ya bena Levi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lewitiki 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lew. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lua)", () => {
		expect(p.parse("Dibadika 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nomba 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nom. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Dib 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (lua)", () => {
		expect(p.parse("Sira 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (lua)", () => {
		expect(p.parse("Meji 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Mj 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lua)", () => {
		expect(p.parse("Muadi 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Muad 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (lua)", () => {
		expect(p.parse("Mukanda mutuma wa Yirmeya 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Muk Yirm 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lua)", () => {
		expect(p.parse("Buakabuluibua 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Didimanyisha 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Buak. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Didim 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lua)", () => {
		expect(p.parse("Dutelonone 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dielulula 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Diel 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dut. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lua)", () => {
		expect(p.parse("Yoshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yoshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yosh. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yosh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lua)", () => {
		expect(p.parse("Balumbuluishi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Balombodi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bal. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bal 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lua)", () => {
		expect(p.parse("Luta 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rute 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lua)", () => {
		expect(p.parse("Yeshaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yesh. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yesh 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lua)", () => {
		expect(p.parse("1 Samuwele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuwele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lua)", () => {
		expect(p.parse("2 Samuwele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuwele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lua)", () => {
		expect(p.parse("1 Bakalenga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Bakelenge 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Bak. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Bak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bakalenga 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bakelenge 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bak. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bak 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lua)", () => {
		expect(p.parse("2 Bakalenga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Bakelenge 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Bak. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Bak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bakalenga 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bakelenge 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bak. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bak 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lua)", () => {
		expect(p.parse("1 Kulondolola 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kul. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kul 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kulondolola 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kul. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kul 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lua)", () => {
		expect(p.parse("2 Kulondolola 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kul. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kul 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kulondolola 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kul. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kul 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lua)", () => {
		expect(p.parse("Ezela 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ez. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lua)", () => {
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lua)", () => {
		expect(p.parse("Yobe 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yobo 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lua)", () => {
		expect(p.parse("Misambu 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mis. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mis 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lua)", () => {
		expect(p.parse("Nsumuinu 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Nsu. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Nsum 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lua)", () => {
		expect(p.parse("Muambi 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Muam. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mb 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lua)", () => {
		expect(p.parse("Musambu muimpe Mutambe 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Musambu wa Solomo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("MuMu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Mus. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lua)", () => {
		expect(p.parse("Yelemiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yirmeya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yel. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yirm 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lua)", () => {
		expect(p.parse("Yehezekele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yezekiyele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yeh. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lua)", () => {
		expect(p.parse("Hoshea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osheya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosh. 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osh 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lua)", () => {
		expect(p.parse("Yowele 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoele 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yowe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lua)", () => {
		expect(p.parse("Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lua)", () => {
		expect(p.parse("Obadaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lua)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lua)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lua)", () => {
		expect(p.parse("Nahuma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lua)", () => {
		expect(p.parse("Habakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abakuke 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abak 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lua)", () => {
		expect(p.parse("Sefanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lua)", () => {
		expect(p.parse("Agayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aga 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lua)", () => {
		expect(p.parse("Zekarya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekâya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lua)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lua)", () => {
		expect(p.parse("Matayi 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lua)", () => {
		expect(p.parse("Marke 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mâko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lua)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lua)", () => {
		expect(p.parse("1 Yowanane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yone 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yow 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowanane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yone 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yow 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lua)", () => {
		expect(p.parse("2 Yowanane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yone 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yow 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowanane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yone 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yow 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lua)", () => {
		expect(p.parse("3 Yowanane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yone 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yow 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yowanane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yone 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yow 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lua)", () => {
		expect(p.parse("Yowanane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yone 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lua)", () => {
		expect(p.parse("Malu Menza 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bienzedi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bien. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mm 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lua)", () => {
		expect(p.parse("Lomo 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lo. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lua)", () => {
		expect(p.parse("1 Kolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korente 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kol. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korente 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kol. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lua)", () => {
		expect(p.parse("2 Kolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korente 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kol. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korente 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kol. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lua)", () => {
		expect(p.parse("Kolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lua)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ngalate 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ngal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lua)", () => {
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeze 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lua)", () => {
		expect(p.parse("Filipoi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipe 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lua)", () => {
		expect(p.parse("1 Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lua)", () => {
		expect(p.parse("2 Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lua)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lua)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lua)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lua)", () => {
		expect(p.parse("Filemona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lua)", () => {
		expect(p.parse("Ebrewu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebelu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lua)", () => {
		expect(p.parse("Yakobe 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lua)", () => {
		expect(p.parse("2 Petelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lua)", () => {
		expect(p.parse("3 Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lua)", () => {
		expect(p.parse("1 Petelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lua)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (lua)", () => {
		expect(p.parse("Tobite 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (lua)", () => {
		expect(p.parse("Yudite 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yudt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (lua)", () => {
		expect(p.parse("Baruke 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (lua)", () => {
		expect(p.parse("Suzane 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Suz 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (lua)", () => {
		expect(p.parse("1 Bamakabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Bamakabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (lua)", () => {
		expect(p.parse("2 Bamakabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Bamakabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Dan (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lua)", () => {
		expect(p.parse("Daniyele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danyele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Esth (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lua)", () => {
		expect(p.parse("Estere 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esetê 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Preferred book names (lua)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (lua)", () => {
		expect(p.parse("Daniyele gr 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("Dangr 1:1").osis()).toEqual("PrAzar.1.1");
	});
});

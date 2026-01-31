"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/anu.js";

describe("Localized book Gen (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (anu)", () => {
		expect(p.parse("Wïlöölö 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Wï 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (anu)", () => {
		expect(p.parse("Bwøth Wøk 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("B/Wøk 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (anu)", () => {
		expect(p.parse("Ciik Kiper Dïlämme 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("C/K/D 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (anu)", () => {
		expect(p.parse("Kwään Jiy 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("K/Jiy 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (anu)", () => {
		expect(p.parse("Wëël Kïmmö 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("W/Kïm 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (anu)", () => {
		expect(p.parse("Mana Nyooth 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ma/Nyo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (anu)", () => {
		expect(p.parse("Tiet Ciik 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("T/Ciik 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (anu)", () => {
		expect(p.parse("Jøcua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jøc 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (anu)", () => {
		expect(p.parse("Pïëmme 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Pïëm 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (anu)", () => {
		expect(p.parse("Ruuth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (anu)", () => {
		expect(p.parse("Aydheea 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Aydh 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (anu)", () => {
		expect(p.parse("1 Camiel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Camiel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (anu)", () => {
		expect(p.parse("2 Camiel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Camiel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (anu)", () => {
		expect(p.parse("1Cam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (anu)", () => {
		expect(p.parse("2Cam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (anu)", () => {
		expect(p.parse("1Nye 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (anu)", () => {
		expect(p.parse("2Nye 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (anu)", () => {
		expect(p.parse("1 Luup Nyeye 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Luup Nyeye 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (anu)", () => {
		expect(p.parse("2 Luup Nyeye 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Luup Nyeye 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (anu)", () => {
		expect(p.parse("1 Nyeye 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Nyeye 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (anu)", () => {
		expect(p.parse("2 Nyeye 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Nyeye 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (anu)", () => {
		expect(p.parse("1L/Nye 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (anu)", () => {
		expect(p.parse("2L/Nye 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (anu)", () => {
		expect(p.parse("Edhera 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Edhe 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (anu)", () => {
		expect(p.parse("Neemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neem 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (anu)", () => {
		expect(p.parse("Acther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Acth 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (anu)", () => {
		expect(p.parse("Jööp 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (anu)", () => {
		expect(p.parse("Dut Pwøc 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("D/Pwøc 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (anu)", () => {
		expect(p.parse("Pwöc Leec Wïc 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("P/L/W 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (anu)", () => {
		expect(p.parse("Luup Dïpööy 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("L/Dïp 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (anu)", () => {
		expect(p.parse("Obeec Dudi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Obe/Du 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (anu)", () => {
		expect(p.parse("Jeremaya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (anu)", () => {
		expect(p.parse("Edhikiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Edhi 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (anu)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (anu)", () => {
		expect(p.parse("Odheea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Odh 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (anu)", () => {
		expect(p.parse("Jool 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (anu)", () => {
		expect(p.parse("Amøc 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (anu)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (anu)", () => {
		expect(p.parse("Joona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (anu)", () => {
		expect(p.parse("Mikiya 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (anu)", () => {
		expect(p.parse("Neeyam 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Neey 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (anu)", () => {
		expect(p.parse("Abakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Aba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (anu)", () => {
		expect(p.parse("Jepaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Jep 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (anu)", () => {
		expect(p.parse("Agëë 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (anu)", () => {
		expect(p.parse("Dhekaraya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Dhek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (anu)", () => {
		expect(p.parse("Milkiya 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mil 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (anu)", () => {
		expect(p.parse("Mathiew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (anu)", () => {
		expect(p.parse("Maak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (anu)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (anu)", () => {
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (anu)", () => {
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (anu)", () => {
		expect(p.parse("3 Jøøn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (anu)", () => {
		expect(p.parse("1 Jøøn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jøøn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (anu)", () => {
		expect(p.parse("2 Jøøn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jøøn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (anu)", () => {
		expect(p.parse("Jøøn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (anu)", () => {
		expect(p.parse("Moa Tïïc Nyïïatwieli 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("M/Tïïc 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (anu)", () => {
		expect(p.parse("Röm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (anu)", () => {
		expect(p.parse("1 Körin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Körin 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (anu)", () => {
		expect(p.parse("2 Körin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Körin 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (anu)", () => {
		expect(p.parse("1Kör 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (anu)", () => {
		expect(p.parse("2Kör 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (anu)", () => {
		expect(p.parse("Köløcia 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Köl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (anu)", () => {
		expect(p.parse("Galeecia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (anu)", () => {
		expect(p.parse("Epeca 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (anu)", () => {
		expect(p.parse("Pilipay 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (anu)", () => {
		expect(p.parse("1 Thecalönika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thecalönika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (anu)", () => {
		expect(p.parse("2 Thecalönika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thecalönika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (anu)", () => {
		expect(p.parse("1Thec 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (anu)", () => {
		expect(p.parse("2Thec 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (anu)", () => {
		expect(p.parse("1 Timöthi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timöthi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (anu)", () => {
		expect(p.parse("2 Timöthi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timöthi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (anu)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (anu)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (anu)", () => {
		expect(p.parse("Tayta 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tay 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (anu)", () => {
		expect(p.parse("Piliman 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (anu)", () => {
		expect(p.parse("Ibaru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Iba 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (anu)", () => {
		expect(p.parse("Jeemeth 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jeem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (anu)", () => {
		expect(p.parse("1 Piter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piter 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (anu)", () => {
		expect(p.parse("2 Piter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piter 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (anu)", () => {
		expect(p.parse("1Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (anu)", () => {
		expect(p.parse("2Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (anu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (anu)", () => {
		expect(p.parse("Juut 1:1").osis()).toEqual("Jude.1.1");
	});
});

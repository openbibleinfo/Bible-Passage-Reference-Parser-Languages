"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/jra.js";

describe("Localized book Gen (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (jra)", () => {
		expect(p.parse("Čơdơ̆ng Phŭn 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Phŭn Blŭng 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ភុន ឞ៊្លុង 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Phŭn 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Čơd 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ភុន 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (jra)", () => {
		expect(p.parse("Tơlơi Tơbiă 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Tơbiă 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ឞ្យៈ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Biă 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Tơb 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (jra)", () => {
		expect(p.parse("Lêwi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lêw 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (jra)", () => {
		expect(p.parse("Tơlơi Yap 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Yap 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (jra)", () => {
		expect(p.parse("Tơlơi Čok Hia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Čŏk Hia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Čok 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Čŏk 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (jra)", () => {
		expect(p.parse("Tơlơi Bơrơđah 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pơrơđah 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Bơrđ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Prđ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (jra)", () => {
		expect(p.parse("Tơlơi Pơtô Mơñă Tơlơi Juăt 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Juăt 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Mơñă 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Juă 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (jra)", () => {
		expect(p.parse("Yôsua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yôsuê 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yôs 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (jra)", () => {
		expect(p.parse("Ƀing Khua Phat Kơđi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Khua Phat Kơđi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Phat 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kpk 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (jra)", () => {
		expect(p.parse("H'Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("H’Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("HʼRut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ហរូត 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (jra)", () => {
		expect(p.parse("Yesayah 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Êsai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (jra)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuêl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuêl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuêl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuêl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (jra)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuêl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuêl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuêl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuêl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (jra)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (jra)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (jra)", () => {
		expect(p.parse("1 Ƀing Pơtao 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Pơtao 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ƀing Pơtao 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Pơtao 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Ƀing Pơtao 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Pơtao 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ƀing Pơtao 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Pơtao 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (jra)", () => {
		expect(p.parse("2 Ƀing Pơtao 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Pơtao 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ƀing Pơtao 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Pơtao 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Ƀing Pơtao 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Pơtao 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ƀing Pơtao 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Pơtao 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (jra)", () => {
		expect(p.parse("1Pơt 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (jra)", () => {
		expect(p.parse("2Pơt 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (jra)", () => {
		expect(p.parse("1 Tơlơi Čih Ruai 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Hră Ruai 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Čih 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tơlơi Čih Ruai 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Hră Ruai 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Čih 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Tơlơi Čih Ruai 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Hră Ruai 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Čih 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Tơlơi Čih Ruai 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Hră Ruai 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Čih 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (jra)", () => {
		expect(p.parse("2 Tơlơi Čih Ruai 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Hră Ruai 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Čih 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tơlơi Čih Ruai 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Hră Ruai 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Čih 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Tơlơi Čih Ruai 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Hră Ruai 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Čih 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Tơlơi Čih Ruai 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Hră Ruai 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Čih 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (jra)", () => {
		expect(p.parse("1Hră 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (jra)", () => {
		expect(p.parse("2Hră 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (jra)", () => {
		expect(p.parse("Êsra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Êsr 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (jra)", () => {
		expect(p.parse("Nehemyah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nêhêmi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nêh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (jra)", () => {
		expect(p.parse("H'Êsther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Hʼester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Êst 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (jra)", () => {
		expect(p.parse("Jôp 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yôb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (jra)", () => {
		expect(p.parse("Tơlơi Bơrơtưh 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pơrơtưh 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Bơrt 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prt 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (jra)", () => {
		expect(p.parse("Khua Pô Pơtô 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Pô Pơtô 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Khua 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Pôp 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (jra)", () => {
		expect(p.parse("Tơlơi Adoh Hiam 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Adoh Hiam 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Adh 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (jra)", () => {
		expect(p.parse("Tơlơi Adoh Hơđăp 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Adoh Bơni Hơơč 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Adoh 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Abh 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (jra)", () => {
		expect(p.parse("Yirmeyah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yêrêmi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yêr 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yir 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (jra)", () => {
		expect(p.parse("Yehezekêl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Êsêkiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Êsê 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yeh 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (jra)", () => {
		expect(p.parse("Daniêl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Đaniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (jra)", () => {
		expect(p.parse("Hôsea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hôs 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ôsê 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (jra)", () => {
		expect(p.parse("Yôel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yôêl 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yôê 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (jra)", () => {
		expect(p.parse("Amôs 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amô 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (jra)", () => {
		expect(p.parse("Ôbadyah 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Apđia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ôba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (jra)", () => {
		expect(p.parse("Yônah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("យ៉ូណះ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yôna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yôn 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (jra)", () => {
		expect(p.parse("Mikhah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (jra)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (jra)", () => {
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (jra)", () => {
		expect(p.parse("Zephanyah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sôphôni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sôph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zep 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (jra)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Agê 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (jra)", () => {
		expect(p.parse("Zekharyah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (jra)", () => {
		expect(p.parse("Malakhi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (jra)", () => {
		expect(p.parse("Mathiơ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ម៉ាធឿ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (jra)", () => {
		expect(p.parse("Markôs 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (jra)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jra)", () => {
		expect(p.parse("1Yôh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jra)", () => {
		expect(p.parse("2Yôh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (jra)", () => {
		expect(p.parse("III Yôhan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yôhan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Yô 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yôh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jra)", () => {
		expect(p.parse("1 Yôhan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yô 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yôhan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yô 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yôhan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yô 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yôhan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yô 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jra)", () => {
		expect(p.parse("2 Yôhan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yô 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yôhan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yô 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yôhan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yô 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yôhan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yô 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (jra)", () => {
		expect(p.parse("Yôhan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yôh 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yô 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (jra)", () => {
		expect(p.parse("Bruă Mơnuă 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ឞ្វៈម៍ ង៉ៈ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Buă Ngă 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ឞ្វៈម៍ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bruă 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Brm 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Buă 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (jra)", () => {
		expect(p.parse("Rôm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jra)", () => {
		expect(p.parse("1 Korinthos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kôrantô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kôr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinthos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kôrantô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kôr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinthos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kôrantô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kôr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinthos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kôrantô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kôr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jra)", () => {
		expect(p.parse("2 Korinthos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kôrantô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kôr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinthos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kôrantô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kôr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinthos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kôrantô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kôr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinthos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kôrantô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kôr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jra)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jra)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (jra)", () => {
		expect(p.parse("Kolossai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kôlôs 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kôl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (jra)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (jra)", () => {
		expect(p.parse("Ephesos 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Êphêsô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Êph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (jra)", () => {
		expect(p.parse("Philip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Php 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jra)", () => {
		expect(p.parse("1 Thessalonikê 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Têsalônik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tês 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonikê 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Têsalônik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tês 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thessalonikê 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Têsalônik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tês 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thessalonikê 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Têsalônik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tês 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (jra)", () => {
		expect(p.parse("2 Thessalonikê 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Têsalônik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tês 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonikê 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Têsalônik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tês 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thessalonikê 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Têsalônik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tês 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thessalonikê 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Têsalônik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tês 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jra)", () => {
		expect(p.parse("1The 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (jra)", () => {
		expect(p.parse("2The 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jra)", () => {
		expect(p.parse("1 Timothe 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothe 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timothe 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timothe 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jra)", () => {
		expect(p.parse("2 Timothe 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothe 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timothe 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timothe 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jra)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jra)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (jra)", () => {
		expect(p.parse("Titos 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (jra)", () => {
		expect(p.parse("Philemôn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philêmôn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (jra)", () => {
		expect(p.parse("Hêbrơ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hêb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (jra)", () => {
		expect(p.parse("Yakơ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jra)", () => {
		expect(p.parse("1 Pêtrôs 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pê 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pêtrôs 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pê 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pêtrôs 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pê 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pêtrôs 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pê 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jra)", () => {
		expect(p.parse("2 Pêtrôs 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pê 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pêtrôs 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pê 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pêtrôs 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pê 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pêtrôs 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pê 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jra)", () => {
		expect(p.parse("1Pêt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jra)", () => {
		expect(p.parse("2Pêt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (jra)", () => {
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yut 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (jra)", () => {
		expect(p.parse("Phlm 2 - 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Phlm 2 – 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Phlm 2 — 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle verses (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (jra)", () => {
		expect(p.parse("Phlm verse 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (jra)", () => {
		expect(p.parse("Phlm 2 & 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle book ranges (jra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (jra)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yôh - III Yôhan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yôh – III Yôhan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yôh — III Yôhan").osis()).toEqual("1John.1-3John.1");
	});
});

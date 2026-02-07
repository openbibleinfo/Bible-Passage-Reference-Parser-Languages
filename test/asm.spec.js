"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/asm.js";

describe("Localized book Gen (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (asm)", () => {
		expect(p.parse("আদি 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (asm)", () => {
		expect(p.parse("যাত্ৰা 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (asm)", () => {
		expect(p.parse("লেবীয়া 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("লেবী 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (asm)", () => {
		expect(p.parse("গননা 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("গন 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (asm)", () => {
		expect(p.parse("বিলা 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (asm)", () => {
		expect(p.parse("প্ৰকাশিত বাক্য 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("প্ৰকা 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (asm)", () => {
		expect(p.parse("দ্বি.বি. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (asm)", () => {
		expect(p.parse("যিহো 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (asm)", () => {
		expect(p.parse("বিচাৰ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (asm)", () => {
		expect(p.parse("ৰূথ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (asm)", () => {
		expect(p.parse("যিচ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (asm)", () => {
		expect(p.parse("1 চমূ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. চমূ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (asm)", () => {
		expect(p.parse("2 চমূ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. চমূ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (asm)", () => {
		expect(p.parse("1চমূ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (asm)", () => {
		expect(p.parse("2চমূ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (asm)", () => {
		expect(p.parse("1 ৰাজা 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ৰাজা 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (asm)", () => {
		expect(p.parse("2 ৰাজা 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ৰাজা 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (asm)", () => {
		expect(p.parse("1ৰাজা 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (asm)", () => {
		expect(p.parse("2ৰাজা 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (asm)", () => {
		expect(p.parse("1 বংশা 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. বংশা 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (asm)", () => {
		expect(p.parse("2 বংশা 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. বংশা 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (asm)", () => {
		expect(p.parse("2বংশা 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (asm)", () => {
		expect(p.parse("ইজ্ৰা 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (asm)", () => {
		expect(p.parse("নহি 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (asm)", () => {
		expect(p.parse("ইষ্ট 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (asm)", () => {
		expect(p.parse("ইয়ো 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (asm)", () => {
		expect(p.parse("গীত 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (asm)", () => {
		expect(p.parse("হিতো 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (asm)", () => {
		expect(p.parse("উপ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (asm)", () => {
		expect(p.parse("পৰম 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (asm)", () => {
		expect(p.parse("যিৰি 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (asm)", () => {
		expect(p.parse("যিহি 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (asm)", () => {
		expect(p.parse("দানি 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (asm)", () => {
		expect(p.parse("হোচ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (asm)", () => {
		expect(p.parse("যোৱে 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (asm)", () => {
		expect(p.parse("আমো 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (asm)", () => {
		expect(p.parse("ওবদি 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ওব 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (asm)", () => {
		expect(p.parse("যোনা 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("যোন 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (asm)", () => {
		expect(p.parse("মীখা 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("মীখ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (asm)", () => {
		expect(p.parse("নহূ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (asm)", () => {
		expect(p.parse("হব 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (asm)", () => {
		expect(p.parse("চফ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (asm)", () => {
		expect(p.parse("হ্গ্গ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (asm)", () => {
		expect(p.parse("জখ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (asm)", () => {
		expect(p.parse("মলা 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (asm)", () => {
		expect(p.parse("মথি 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (asm)", () => {
		expect(p.parse("মাৰ্ক 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (asm)", () => {
		expect(p.parse("লূক 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (asm)", () => {
		expect(p.parse("1যো 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (asm)", () => {
		expect(p.parse("2যো 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (asm)", () => {
		expect(p.parse("3 যোহন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3যো 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (asm)", () => {
		expect(p.parse("1 যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. যোহন 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (asm)", () => {
		expect(p.parse("2 যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. যোহন 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (asm)", () => {
		expect(p.parse("যোহন 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (asm)", () => {
		expect(p.parse("পাঁচনি 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (asm)", () => {
		expect(p.parse("ৰোমীয়া 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (asm)", () => {
		expect(p.parse("1 কৰি 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. কৰি 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (asm)", () => {
		expect(p.parse("2 কৰি 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. কৰি 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (asm)", () => {
		expect(p.parse("1কৰি 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (asm)", () => {
		expect(p.parse("2কৰি 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (asm)", () => {
		expect(p.parse("কলচীয়া 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("কল 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (asm)", () => {
		expect(p.parse("গালাতীয়া 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("গালা 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (asm)", () => {
		expect(p.parse("ইফিচীয়া 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ইফি 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (asm)", () => {
		expect(p.parse("ফিলিপীয়া 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ফিল 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (asm)", () => {
		expect(p.parse("1 থিচলনীকীয়া 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. থিচলনীকীয়া 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (asm)", () => {
		expect(p.parse("2 থিচলনীকীয়া 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. থিচলনীকীয়া 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (asm)", () => {
		expect(p.parse("1থিচ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (asm)", () => {
		expect(p.parse("2থিচ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (asm)", () => {
		expect(p.parse("1 তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (asm)", () => {
		expect(p.parse("2 তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (asm)", () => {
		expect(p.parse("1তীম 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (asm)", () => {
		expect(p.parse("2তীম 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (asm)", () => {
		expect(p.parse("তীত 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (asm)", () => {
		expect(p.parse("ফিলীমন 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলী 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (asm)", () => {
		expect(p.parse("ইব্ৰী 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (asm)", () => {
		expect(p.parse("যাকোব 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("যাকো 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (asm)", () => {
		expect(p.parse("1 পিতৰ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. পিতৰ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (asm)", () => {
		expect(p.parse("2 পিতৰ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. পিতৰ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (asm)", () => {
		expect(p.parse("1পিত 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (asm)", () => {
		expect(p.parse("2পিত 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (asm)", () => {
		expect(p.parse("যিহূদা 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (asm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (asm)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1যো - 3 যোহন").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1যো – 3 যোহন").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1যো — 3 যোহন").osis()).toEqual("1John.1-3John.1");
	});
});

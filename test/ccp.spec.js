"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ccp.js";

describe("Localized book Gen (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ccp)", () => {
		expect(p.parse("পত্থম 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("পত্ত 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ccp)", () => {
		expect(p.parse("যাত্রা 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ccp)", () => {
		expect(p.parse("লেবীয় 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("লেবী 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ccp)", () => {
		expect(p.parse("গণাণা 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("গণা 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ccp)", () => {
		expect(p.parse("আবিলেচ্ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("আবি 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ccp)", () => {
		expect(p.parse("ফগদাং পেইয়্যে 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ফগদাং 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ccp)", () => {
		expect(p.parse("দ্বি’লম্বর বিররণ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("দ্বিবি 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ccp)", () => {
		expect(p.parse("যিহোশূয় 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("যিহোশু 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ccp)", () => {
		expect(p.parse("বিচের গুরিয়্যেগুন 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("বিচেরগু 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ccp)", () => {
		expect(p.parse("রূত 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ccp)", () => {
		expect(p.parse("যিশাইয় 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("যিশা 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ccp)", () => {
		expect(p.parse("১ শমূয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ শমূ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১. শমূয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১. শমূ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ccp)", () => {
		expect(p.parse("২ শমূয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ শমূ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২. শমূয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২. শমূ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ccp)", () => {
		expect(p.parse("১ রাজাবলী 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১ রাজা 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১. রাজাবলী 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১. রাজা 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ccp)", () => {
		expect(p.parse("২ রাজাবলী 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২ রাজা 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২. রাজাবলী 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২. রাজা 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ccp)", () => {
		expect(p.parse("১ বংশধর 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১ বংশ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১. বংশধর 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১. বংশ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ccp)", () => {
		expect(p.parse("২ বংশধর 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২ বংশ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২. বংশধর 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২. বংশ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ccp)", () => {
		expect(p.parse("ইষ্রা 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ccp)", () => {
		expect(p.parse("নহিমিয় 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("নহি 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ccp)", () => {
		expect(p.parse("ইষ্টের 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ccp)", () => {
		expect(p.parse("ইয়োব 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ccp)", () => {
		expect(p.parse("গীত 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ccp)", () => {
		expect(p.parse("গম্ উপদেজ্ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("গমউ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ccp)", () => {
		expect(p.parse("উপদেশক 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("উপদে 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ccp)", () => {
		expect(p.parse("পরমগীত 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("পরমগী 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ccp)", () => {
		expect(p.parse("যিরমিয় 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("যির 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ccp)", () => {
		expect(p.parse("যিহিষ্কেল 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("যিহি 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ccp)", () => {
		expect(p.parse("দানিয়েল 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("দানি 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ccp)", () => {
		expect(p.parse("হোশেয় 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("হোসে 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ccp)", () => {
		expect(p.parse("যোয়েল 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("যোয়ে 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ccp)", () => {
		expect(p.parse("আমোষ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("আমো 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ccp)", () => {
		expect(p.parse("ওবদিয় 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ওব 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ccp)", () => {
		expect(p.parse("যোনা 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ccp)", () => {
		expect(p.parse("মীখা 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ccp)", () => {
		expect(p.parse("নহূম 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("নহূ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ccp)", () => {
		expect(p.parse("হবক্‌‌‌‌কূক 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হব 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ccp)", () => {
		expect(p.parse("সফনিয় 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("সফ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ccp)", () => {
		expect(p.parse("হগয় 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("হগ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ccp)", () => {
		expect(p.parse("সখরিয় 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("সখ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ccp)", () => {
		expect(p.parse("মালাখি 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("মালা 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ccp)", () => {
		expect(p.parse("মথি 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ccp)", () => {
		expect(p.parse("মার্ক 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ccp)", () => {
		expect(p.parse("লূক 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ccp)", () => {
		expect(p.parse("১ যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১ যোন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১. যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১. যোন 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ccp)", () => {
		expect(p.parse("২ যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২ যোন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২. যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২. যোন 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ccp)", () => {
		expect(p.parse("৩ যোহন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩ যোন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩. যোহন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩. যোন 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ccp)", () => {
		expect(p.parse("যোহন 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ccp)", () => {
		expect(p.parse("প্রেরিত্‌ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ccp)", () => {
		expect(p.parse("রোমীয় 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("রোমী 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ccp)", () => {
		expect(p.parse("১ করিন্হীয় 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১ করিন্হ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১. করিন্হীয় 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১. করিন্হ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ccp)", () => {
		expect(p.parse("২ করিন্হীয় 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২ করিন্হ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২. করিন্হীয় 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২. করিন্হ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ccp)", () => {
		expect(p.parse("কলসীয় 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("কল 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ccp)", () => {
		expect(p.parse("গালাতীয় 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("গালা 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ccp)", () => {
		expect(p.parse("ইফিষীয় 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ইফি 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ccp)", () => {
		expect(p.parse("ফিলিপীয় 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ফিলি 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ccp)", () => {
		expect(p.parse("১ থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১ থিষলনী 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১. থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১. থিষলনী 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ccp)", () => {
		expect(p.parse("২ থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২ থিষলনী 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২. থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২. থিষলনী 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ccp)", () => {
		expect(p.parse("১ তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১ তীমথি 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তীমথি 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ccp)", () => {
		expect(p.parse("২ তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২ তীমথি 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তীমথি 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ccp)", () => {
		expect(p.parse("তীত 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ccp)", () => {
		expect(p.parse("ফিলীমন 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলী 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ccp)", () => {
		expect(p.parse("ইব্রীয় 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ccp)", () => {
		expect(p.parse("যাকোব 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ccp)", () => {
		expect(p.parse("১ পিতর 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১. পিতর 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ccp)", () => {
		expect(p.parse("২ পিতর 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২. পিতর 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ccp)", () => {
		expect(p.parse("যিহূদা 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("যিহূা 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (ccp)", () => {
		expect(p.parse("১ করিন্হীয় 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১ শমূয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১ তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("২ করিন্হীয় 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২ শমূয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২ তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("কলসীয় 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("দানিয়েল 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ইফিষীয় 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("গালাতীয় 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("হগয় 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ইব্রীয় 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("হোশেয় 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("যিশাইয় 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("যিরমিয় 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ইয়োব 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("যোয়েল 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("যোয়ে 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("যিহোশূয় 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("বিচের গুরিয়্যেগুন 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("লেবীয় 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("নহিমিয় 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ওবদিয় 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ফিলিপীয় 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ফগদাং পেইয়্যে 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("রোমীয় 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("সখরিয় 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("সফনিয় 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Parser helper should handle book ranges (ccp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ccp)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("১ যোহন - ৩ যোহন").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("১ যোহন – ৩ যোহন").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("১ যোহন — ৩ যোহন").osis()).toEqual("1John.1-3John.1");
	});
});

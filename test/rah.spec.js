"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rah.js";

describe("Localized book Gen (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (rah)", () => {
		expect(p.parse("চঙি 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (rah)", () => {
		expect(p.parse("চৗবৗতনি 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("চৗবৗ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (rah)", () => {
		expect(p.parse("লেবী 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (rah)", () => {
		expect(p.parse("লেকেনি 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("লেকে 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (rah)", () => {
		expect(p.parse("হেপমি 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("হেপ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rah)", () => {
		expect(p.parse("তৗনৗকতানি 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("তৗনৗ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (rah)", () => {
		expect(p.parse("লাবনিং তাওৰায় 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("লাব 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (rah)", () => {
		expect(p.parse("যিহোশূৱা 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("যিহো 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (rah)", () => {
		expect(p.parse("বিচাৰ গিৰদো 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("বিচা 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (rah)", () => {
		expect(p.parse("ৰূথ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (rah)", () => {
		expect(p.parse("যিশয়া 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("যি 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (rah)", () => {
		expect(p.parse("১ শমুৱেল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ শমু 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১. শমুৱেল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১. শমু 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (rah)", () => {
		expect(p.parse("২ শমুৱেল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ শমু 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২. শমুৱেল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২. শমু 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (rah)", () => {
		expect(p.parse("১ ৰাজা 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১. ৰাজা 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (rah)", () => {
		expect(p.parse("২ ৰাজা 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২. ৰাজা 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (rah)", () => {
		expect(p.parse("১ বংশদো 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১ বংশ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১. বংশদো 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১. বংশ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (rah)", () => {
		expect(p.parse("২ বংশদো 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২ বংশ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২. বংশদো 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২. বংশ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (rah)", () => {
		expect(p.parse("ইজ্রা 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (rah)", () => {
		expect(p.parse("নহিমিয়া 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("নহি 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (rah)", () => {
		expect(p.parse("ইষ্টেৰ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ইষ্টে 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (rah)", () => {
		expect(p.parse("ইয়োব 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ইয়ো 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (rah)", () => {
		expect(p.parse("চায়পৗৰি 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("চায় 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (rah)", () => {
		expect(p.parse("আদত ক্রৌ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("আদত 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (rah)", () => {
		expect(p.parse("দেপ্রেংগিৰ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("দেপ্রেং 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (rah)", () => {
		expect(p.parse("শলোমননি 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("শলো 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (rah)", () => {
		expect(p.parse("যিৰিমিয়া 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("যিৰি 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (rah)", () => {
		expect(p.parse("যিহিষ্কেল 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("যিহি 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (rah)", () => {
		expect(p.parse("দানিয়েল 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("দানি 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (rah)", () => {
		expect(p.parse("হোচেয় 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("হোচে 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (rah)", () => {
		expect(p.parse("যোৱেল 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("যোৱে 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (rah)", () => {
		expect(p.parse("আমোষ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("আমো 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (rah)", () => {
		expect(p.parse("ওবদিয় 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ওব 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (rah)", () => {
		expect(p.parse("যোনা 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (rah)", () => {
		expect(p.parse("মীখা 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (rah)", () => {
		expect(p.parse("নহুম 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (rah)", () => {
		expect(p.parse("হবক্কুক 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হব 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (rah)", () => {
		expect(p.parse("সফনিয় 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("সফ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (rah)", () => {
		expect(p.parse("হগয় 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (rah)", () => {
		expect(p.parse("জখৰিয় 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("জখ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (rah)", () => {
		expect(p.parse("মালাখী 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("মালা 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rah)", () => {
		expect(p.parse("মথি 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rah)", () => {
		expect(p.parse("মার্ক 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rah)", () => {
		expect(p.parse("লুক 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rah)", () => {
		expect(p.parse("১ যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১ যো 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১. যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১. যো 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rah)", () => {
		expect(p.parse("২ যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২ যো 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২. যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২. যো 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rah)", () => {
		expect(p.parse("৩ যোহন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩ যো 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩. যোহন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩. যো 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rah)", () => {
		expect(p.parse("যোহন 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("যো 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rah)", () => {
		expect(p.parse("দিমসেত 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("দিম 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rah)", () => {
		expect(p.parse("ৰোমীয় 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ৰো 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rah)", () => {
		expect(p.parse("১ কৰি 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১. কৰি 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rah)", () => {
		expect(p.parse("২ কৰি 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২. কৰি 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rah)", () => {
		expect(p.parse("কলসীয়া 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("কল 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rah)", () => {
		expect(p.parse("গালাতীয়া 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("গালা 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rah)", () => {
		expect(p.parse("ইফিষীয়া 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ইফি 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rah)", () => {
		expect(p.parse("ফিলিপীয়া 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ফিলি 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rah)", () => {
		expect(p.parse("১ থিষলনীকীয়া 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১ থিষ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১. থিষলনীকীয়া 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১. থিষ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rah)", () => {
		expect(p.parse("২ থিষলনীকীয়া 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২ থিষ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২. থিষলনীকীয়া 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২. থিষ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rah)", () => {
		expect(p.parse("১ তীমথি 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১ তীম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তীমথি 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তীম 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rah)", () => {
		expect(p.parse("২ তীমথি 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২ তীম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তীমথি 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তীম 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rah)", () => {
		expect(p.parse("তীত 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rah)", () => {
		expect(p.parse("ফিলীমন 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলী 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rah)", () => {
		expect(p.parse("ইব্রী 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rah)", () => {
		expect(p.parse("যাকোব 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("যাকো 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rah)", () => {
		expect(p.parse("১ পিতৰ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১ পি 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১. পিতৰ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১. পি 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rah)", () => {
		expect(p.parse("২ পিতৰ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২ পি 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২. পিতৰ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২. পি 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rah)", () => {
		expect(p.parse("যিহুদা 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("যিহু 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (rah)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (rah)", () => {
		expect(p.parse("১ থিষলনীকীয়া 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("২ থিষলনীকীয়া 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("কলসীয়া 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("দানিয়েল 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("লাবনিং তাওৰায় 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ইফিষীয়া 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("গালাতীয়া 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("হগয় 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("হোচেয় 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("যিশয়া 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("যিৰিমিয়া 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ইয়োব 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ইয়ো 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("নহিমিয়া 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ওবদিয় 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ফিলিপীয়া 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("চায়পৗৰি 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("চায় 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ৰোমীয় 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("জখৰিয় 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("সফনিয় 1:1").osis()).toEqual("Zeph.1.1");
	});
});

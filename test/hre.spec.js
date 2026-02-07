"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hre.js";

describe("Localized book Gen (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hre)", () => {
		expect(p.parse("Bìac Baxèm 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Bb 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hre)", () => {
		expect(p.parse("Loh Enh Aicàp 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Lea 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hre)", () => {
		expect(p.parse("Lêwi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hre)", () => {
		expect(p.parse("Sôq Jàn 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Sj 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hre)", () => {
		expect(p.parse("Bàu Ha-on 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ha-on 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hre)", () => {
		expect(p.parse("Bìac Mahno 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Bm 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hre)", () => {
		expect(p.parse("Ranenh Achìh Hlài 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Rah 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hre)", () => {
		expect(p.parse("Jôsuê 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jôs 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hre)", () => {
		expect(p.parse("'Bài Cwan Hadrah 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bch 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hre)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hre)", () => {
		expect(p.parse("Êsai 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hre)", () => {
		expect(p.parse("1 Sa-mu-ên 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa-mu-ên 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hre)", () => {
		expect(p.parse("2 Sa-mu-ên 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa-mu-ên 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hre)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hre)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hre)", () => {
		expect(p.parse("1 'Bài Bùa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. 'Bài Bùa 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hre)", () => {
		expect(p.parse("2 'Bài Bùa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. 'Bài Bùa 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hre)", () => {
		expect(p.parse("1Bùa 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hre)", () => {
		expect(p.parse("2Bùa 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hre)", () => {
		expect(p.parse("1 'Nhòng Bùa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. 'Nhòng Bùa 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hre)", () => {
		expect(p.parse("2 'Nhòng Bùa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. 'Nhòng Bùa 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hre)", () => {
		expect(p.parse("1Nb 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hre)", () => {
		expect(p.parse("2Nb 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hre)", () => {
		expect(p.parse("Êxra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hre)", () => {
		expect(p.parse("Nê-hê-mi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nêh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hre)", () => {
		expect(p.parse("Êxtê 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hre)", () => {
		expect(p.parse("Jop 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hre)", () => {
		expect(p.parse("'Bŏi Calêu Plình 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Bcp 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hre)", () => {
		expect(p.parse("Bàu Rabiaq 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Br 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hre)", () => {
		expect(p.parse("Bàu Anoi Hnài 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Bah 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hre)", () => {
		expect(p.parse("'Bŏi Calêu 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Bc 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hre)", () => {
		expect(p.parse("Jê-rê-mi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jêr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hre)", () => {
		expect(p.parse("Ê-xê-chi-ên 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Êxê 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hre)", () => {
		expect(p.parse("Đa-ni-ên 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Đan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hre)", () => {
		expect(p.parse("Ôsê 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hre)", () => {
		expect(p.parse("Jôên 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hre)", () => {
		expect(p.parse("Amôt 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hre)", () => {
		expect(p.parse("Apđia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hre)", () => {
		expect(p.parse("Jôna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hre)", () => {
		expect(p.parse("Mica 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hre)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hre)", () => {
		expect(p.parse("Ha-ba-cuc 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hre)", () => {
		expect(p.parse("Sô-phô-ni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sôph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hre)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hre)", () => {
		expect(p.parse("Xa-cha-ri 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Xach 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hre)", () => {
		expect(p.parse("Ma-la-chi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hre)", () => {
		expect(p.parse("Mathêu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hre)", () => {
		expect(p.parse("Mŏc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hre)", () => {
		expect(p.parse("Luca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hre)", () => {
		expect(p.parse("1Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hre)", () => {
		expect(p.parse("2Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hre)", () => {
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hre)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hre)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hre)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hre)", () => {
		expect(p.parse("Bìac Yiang Hadròih 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Byh 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hre)", () => {
		expect(p.parse("Rôma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rôm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hre)", () => {
		expect(p.parse("1 Cô-rinh-tô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cô-rinh-tô 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hre)", () => {
		expect(p.parse("2 Cô-rinh-tô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cô-rinh-tô 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hre)", () => {
		expect(p.parse("1Cô 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hre)", () => {
		expect(p.parse("2Cô 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hre)", () => {
		expect(p.parse("Cô-lô-se 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Côl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hre)", () => {
		expect(p.parse("Ga-la-ti 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hre)", () => {
		expect(p.parse("Ê-phê-sô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Êph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hre)", () => {
		expect(p.parse("Philip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hre)", () => {
		expect(p.parse("1 Tê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hre)", () => {
		expect(p.parse("2 Tê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hre)", () => {
		expect(p.parse("1Tês 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hre)", () => {
		expect(p.parse("2Tês 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hre)", () => {
		expect(p.parse("1 Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hre)", () => {
		expect(p.parse("2 Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hre)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hre)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hre)", () => {
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hre)", () => {
		expect(p.parse("Phi-lê-môn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hre)", () => {
		expect(p.parse("Hêbru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hêb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hre)", () => {
		expect(p.parse("Jacò 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jac 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hre)", () => {
		expect(p.parse("1 Pêtrô 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pêtrô 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hre)", () => {
		expect(p.parse("2 Pêtrô 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pêtrô 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hre)", () => {
		expect(p.parse("1Pêt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hre)", () => {
		expect(p.parse("2Pêt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hre)", () => {
		expect(p.parse("Juđe 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juđ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (hre)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (hre)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jon - 3 Jon").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jon – 3 Jon").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jon — 3 Jon").osis()).toEqual("1John.1-3John.1");
	});
});

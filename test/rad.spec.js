"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rad.js";

describe("Localized book Gen (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (rad)", () => {
		expect(p.parse("Klei Mphŭn Dơ̆ng 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kmd 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (rad)", () => {
		expect(p.parse("Klei Kbiă 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kkbiă 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (rad)", () => {
		expect(p.parse("Bruă Lêwi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lêwi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (rad)", () => {
		expect(p.parse("Klei Yap 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kyap 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (rad)", () => {
		expect(p.parse("Klei Čŏk Hia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kčhia 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rad)", () => {
		expect(p.parse("Klei Bi Êdah 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kbêdah 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (rad)", () => {
		expect(p.parse("Klei Mtô Mñă Klei Bhiăn 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kmñă 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (rad)", () => {
		expect(p.parse("Y-Yôsuê 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yôsuê 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (rad)", () => {
		expect(p.parse("Phung Khua Phat Kđi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kpkđi 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (rad)", () => {
		expect(p.parse("H'Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (rad)", () => {
		expect(p.parse("Y-Êsai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Êsai 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (rad)", () => {
		expect(p.parse("I Y-Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Y-Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (rad)", () => {
		expect(p.parse("II Y-samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Y-samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (rad)", () => {
		expect(p.parse("I Bruă Mtao 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Mtao 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Bruă Mtao 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Mtao 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (rad)", () => {
		expect(p.parse("II Bruă Mtao 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Mtao 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Bruă Mtao 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Mtao 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (rad)", () => {
		expect(p.parse("I Klei Yăl Dliê 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Kyd 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Klei Yăl Dliê 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Kyd 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (rad)", () => {
		expect(p.parse("II Klei Yăl Dliê 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Kyd 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Klei Yăl Dliê 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Kyd 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (rad)", () => {
		expect(p.parse("Y-Êsra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Êsra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (rad)", () => {
		expect(p.parse("Y-Nêhêmi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nêhê 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (rad)", () => {
		expect(p.parse("H'Êsther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Êst 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (rad)", () => {
		expect(p.parse("Y-Yôp 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yôp 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (rad)", () => {
		expect(p.parse("Klei Mmuñ Hđăp 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Kmh 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (rad)", () => {
		expect(p.parse("Klei Bi Hriêng 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Kbh 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (rad)", () => {
		expect(p.parse("Khua Pô Mtô 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kpm 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (rad)", () => {
		expect(p.parse("Klei Mmuñ Siam Hĭn 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kmsh 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (rad)", () => {
		expect(p.parse("Y-Yêrêmi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yêr 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (rad)", () => {
		expect(p.parse("Y-Êsêkiêl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Êsê 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (rad)", () => {
		expect(p.parse("Y-Đaniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Đan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (rad)", () => {
		expect(p.parse("Y-Ôsê 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ôsê 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (rad)", () => {
		expect(p.parse("Y-Yôel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yôel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (rad)", () => {
		expect(p.parse("Y-Amôs 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amôs 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (rad)", () => {
		expect(p.parse("Y-Apđia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Apđia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (rad)", () => {
		expect(p.parse("Y-Yôna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yôna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (rad)", () => {
		expect(p.parse("Y-Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (rad)", () => {
		expect(p.parse("Y-Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (rad)", () => {
		expect(p.parse("Y-Haƀakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Haƀa 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (rad)", () => {
		expect(p.parse("Y-Sôphôni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sôphô 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (rad)", () => {
		expect(p.parse("Y-Agê 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Agê 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (rad)", () => {
		expect(p.parse("Y-Sakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Saka 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (rad)", () => {
		expect(p.parse("Y-Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rad)", () => {
		expect(p.parse("Y-Mathiơ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rad)", () => {
		expect(p.parse("Y-Markôs 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rad)", () => {
		expect(p.parse("Y-Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rad)", () => {
		expect(p.parse("III Y-yôhan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Yôh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rad)", () => {
		expect(p.parse("I Y-Yôhan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yôh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Y-Yôhan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yôh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book John (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rad)", () => {
		expect(p.parse("Y-Yôhan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yôh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 2John (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rad)", () => {
		expect(p.parse("II Y-yôhan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yôh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Y-yôhan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yôh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rad)", () => {
		expect(p.parse("Bruă Phung Khua Ƀĭng Kna 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bƀk 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rad)", () => {
		expect(p.parse("Rôm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rad)", () => {
		expect(p.parse("I Kôrantô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kôr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kôrantô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kôr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rad)", () => {
		expect(p.parse("II Kôrantô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kôr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kôrantô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kôr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rad)", () => {
		expect(p.parse("Kôlôs 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kôl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rad)", () => {
		expect(p.parse("Galati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rad)", () => {
		expect(p.parse("Êphêsô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Êph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rad)", () => {
		expect(p.parse("Philip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rad)", () => {
		expect(p.parse("I Têsalônik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Têsa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Têsalônik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Têsa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rad)", () => {
		expect(p.parse("II Têsalônik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Têsa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Têsalônik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Têsa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rad)", () => {
		expect(p.parse("I Y-Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timô 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Y-Timôthê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timô 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rad)", () => {
		expect(p.parse("II Y-timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timô 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Y-timôthê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timô 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rad)", () => {
		expect(p.parse("Y-Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rad)", () => {
		expect(p.parse("Y-Philêmôn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philê 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rad)", () => {
		expect(p.parse("Hêbrơ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hêb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rad)", () => {
		expect(p.parse("Y-Yakơ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakơ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rad)", () => {
		expect(p.parse("I Y-Pêtrôs 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pê 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Y-Pêtrôs 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pê 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rad)", () => {
		expect(p.parse("II Y-pêtrôs 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pê 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Y-pêtrôs 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pê 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rad)", () => {
		expect(p.parse("Y-Yut 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yut 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (rad)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (rad)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Y-Yôhan - III Y-yôhan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Y-Yôhan – III Y-yôhan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Y-Yôhan — III Y-yôhan").osis()).toEqual("1John.1-3John.1");
	});
});

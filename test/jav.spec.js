"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/jav.js";

describe("Localized book Gen (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (jav)", () => {
		expect(p.parse("Purwaning Dumadi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (jav)", () => {
		expect(p.parse("Pangentasan 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (jav)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (jav)", () => {
		expect(p.parse("Kaimaman 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (jav)", () => {
		expect(p.parse("Wilangan 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (jav)", () => {
		expect(p.parse("Kitab Yesus bin Sirakh 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sirakh 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (jav)", () => {
		expect(p.parse("Kawicaksanan Salomo 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Kawicaksanan 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (jav)", () => {
		expect(p.parse("Kidung Pangadhuh 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kidung Pasambat 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (jav)", () => {
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (jav)", () => {
		expect(p.parse("Kitab Wahyu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pamedaran 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wahyu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (jav)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (jav)", () => {
		expect(p.parse("Pangandharing Toret 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Andharaning Toret 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Andharaning Torèt 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (jav)", () => {
		expect(p.parse("Yosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yusak 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (jav)", () => {
		expect(p.parse("Para Hakim 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (jav)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (jav)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (jav)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (jav)", () => {
		expect(p.parse("Yesaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yésaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (jav)", () => {
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (jav)", () => {
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (jav)", () => {
		expect(p.parse("II Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (jav)", () => {
		expect(p.parse("I Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (jav)", () => {
		expect(p.parse("I Para Raja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Para Raja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Para Raja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Para Raja 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (jav)", () => {
		expect(p.parse("II Para Raja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Para Raja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Para Raja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Para Raja 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (jav)", () => {
		expect(p.parse("II Para Raja 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (jav)", () => {
		expect(p.parse("I Para Raja 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (jav)", () => {
		expect(p.parse("I Babad 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Babad 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Babad 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Babad 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (jav)", () => {
		expect(p.parse("II Babad 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Babad 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Babad 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Babad 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (jav)", () => {
		expect(p.parse("II Babad 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (jav)", () => {
		expect(p.parse("I Babad 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (jav)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (jav)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (jav)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (jav)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (jav)", () => {
		expect(p.parse("Ayub 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (jav)", () => {
		expect(p.parse("Masmur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Jabur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zabur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (jav)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (jav)", () => {
		expect(p.parse("Wulang Bebasan 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (jav)", () => {
		expect(p.parse("Juru Kotbah 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohelet 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (jav)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (jav)", () => {
		expect(p.parse("Musthikaning Kidung 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kidung Agung 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (jav)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yérémia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (jav)", () => {
		expect(p.parse("Yeheskiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yehezkiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yéhèzkièl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (jav)", () => {
		expect(p.parse("Dhaniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danièl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (jav)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (jav)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (jav)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (jav)", () => {
		expect(p.parse("Obaja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (jav)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yunus 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (jav)", () => {
		expect(p.parse("Mikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (jav)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (jav)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (jav)", () => {
		expect(p.parse("Zefanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (jav)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (jav)", () => {
		expect(p.parse("Zakharia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (jav)", () => {
		expect(p.parse("Maleakhi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (jav)", () => {
		expect(p.parse("Injil Matius 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matius 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matéus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (jav)", () => {
		expect(p.parse("Injil Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (jav)", () => {
		expect(p.parse("Injil Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jav)", () => {
		expect(p.parse("I Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jav)", () => {
		expect(p.parse("II Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (jav)", () => {
		expect(p.parse("III Yohanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jav)", () => {
		expect(p.parse("I Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yokanan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yokanan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yokanan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yokanan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jav)", () => {
		expect(p.parse("II Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yokanan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yokanan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yokanan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yokanan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (jav)", () => {
		expect(p.parse("III Yohanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Yokanan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Yohanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Yokanan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yokanan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yokanan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (jav)", () => {
		expect(p.parse("Yohanes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yokanan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (jav)", () => {
		expect(p.parse("Injil Yohanes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (jav)", () => {
		expect(p.parse("Lelakone Para Rasul 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Para Rasul 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (jav)", () => {
		expect(p.parse("Layang Paulus Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jav)", () => {
		expect(p.parse("I Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korinta 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korinta 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korinta 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinta 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jav)", () => {
		expect(p.parse("II Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korinta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korinta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korinta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinta 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jav)", () => {
		expect(p.parse("II Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jav)", () => {
		expect(p.parse("I Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (jav)", () => {
		expect(p.parse("Layang Paulus Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galasia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (jav)", () => {
		expect(p.parse("Layang Paulus Efesus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efése 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (jav)", () => {
		expect(p.parse("Layang Paulus Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (jav)", () => {
		expect(p.parse("Layang Paulus Kolosé 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosé 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jav)", () => {
		expect(p.parse("I Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tèsalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tèsalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tèsalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tèsalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (jav)", () => {
		expect(p.parse("II Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tèsalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tèsalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tèsalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tèsalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (jav)", () => {
		expect(p.parse("II Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jav)", () => {
		expect(p.parse("I Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jav)", () => {
		expect(p.parse("I Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotius 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jav)", () => {
		expect(p.parse("II Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotius 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jav)", () => {
		expect(p.parse("II Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jav)", () => {
		expect(p.parse("I Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (jav)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (jav)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (jav)", () => {
		expect(p.parse("Layang Ibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (jav)", () => {
		expect(p.parse("Layang Yakobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jav)", () => {
		expect(p.parse("I Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pétrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pétrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pétrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pétrus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jav)", () => {
		expect(p.parse("II Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pétrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pétrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pétrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pétrus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jav)", () => {
		expect(p.parse("II Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jav)", () => {
		expect(p.parse("I Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (jav)", () => {
		expect(p.parse("Layang Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (jav)", () => {
		expect(p.parse("Tobias 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (jav)", () => {
		expect(p.parse("Kitab Yudit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Judith 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yudit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (jav)", () => {
		expect(p.parse("Kitab Barukh 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Barukh 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (jav)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (jav)", () => {
		expect(p.parse("I Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabe 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (jav)", () => {
		expect(p.parse("II Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabe 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (jav)", () => {
		expect(p.parse("III Makabe 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Makabe 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Makabe 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Makabe 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (jav)", () => {
		expect(p.parse("IV Makabe 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Makabe 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Makabe 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Makabe 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (jav)", () => {
		expect(p.parse("II Makabe 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (jav)", () => {
		expect(p.parse("III Makabe 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (jav)", () => {
		expect(p.parse("IV Makabe 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (jav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (jav)", () => {
		expect(p.parse("I Makabe 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

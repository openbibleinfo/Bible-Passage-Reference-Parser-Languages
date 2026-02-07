"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/shu.js";

describe("Localized book Gen (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (shu)", () => {
		expect(p.parse("Takwiin 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("تكوين 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Takw 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("تكن 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (shu)", () => {
		expect(p.parse("Khuruuj 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("خُروج 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Khrj 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("خرج 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (shu)", () => {
		expect(p.parse("Laawiyiin 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("لاوِيِّين 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Law 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("لاو 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (shu)", () => {
		expect(p.parse("Adad 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("عَدد 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Add 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("عدد 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (shu)", () => {
		expect(p.parse("مَراثِي إرْمِيا 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Maraasi Irmiya 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("مرث إرمي 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mars 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (shu)", () => {
		expect(p.parse("Ruʼya 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رُؤية 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رؤي 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (shu)", () => {
		expect(p.parse("تَثْنِية 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Tasniya 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Tasn 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("تثن 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (shu)", () => {
		expect(p.parse("Yachuuʼ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يَشُوع 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yach 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يشع 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (shu)", () => {
		expect(p.parse("Gudiya 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قُضياء 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Gud 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قض 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (shu)", () => {
		expect(p.parse("Raʼuus 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("رَعُوث 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rus 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("رعث 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (shu)", () => {
		expect(p.parse("Ichaʼya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("إشَعْيا 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Icha 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("إشعي 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (shu)", () => {
		expect(p.parse("1 Samuwiil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 صَمُوِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuwiil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. صَمُوِيل 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (shu)", () => {
		expect(p.parse("2 Samuwiil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 صَمُوِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuwiil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. صَمُوِيل 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (shu)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1صم 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (shu)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2صم 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (shu)", () => {
		expect(p.parse("1 Muluuk 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 مُلوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Muluuk 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. مُلوك 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (shu)", () => {
		expect(p.parse("2 Muluuk 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 مُلوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Muluuk 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. مُلوك 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (shu)", () => {
		expect(p.parse("1Mulk 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ملك 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (shu)", () => {
		expect(p.parse("2Mulk 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ملك 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (shu)", () => {
		expect(p.parse("1 Akhbaar 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Akhbaar 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. أخبار 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (shu)", () => {
		expect(p.parse("2 Akhbaar 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Akhbaar 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. أخبار 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (shu)", () => {
		expect(p.parse("1Akhb 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1خبر 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (shu)", () => {
		expect(p.parse("2Akhb 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2خبر 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (shu)", () => {
		expect(p.parse("عَزْرا 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Azra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Azr 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عزر 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (shu)", () => {
		expect(p.parse("نَحَمْيا 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nahamya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نحم 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (shu)", () => {
		expect(p.parse("أسْتِير 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Astiir 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("أستر 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ast 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (shu)", () => {
		expect(p.parse("Ayyuub 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("أيُّوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayub 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("أيب 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (shu)", () => {
		expect(p.parse("Zabuur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("زَبُور 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zbr 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("زبر 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (shu)", () => {
		expect(p.parse("Amsaal 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("أمْثال 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Amsl 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("مسل 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (shu)", () => {
		expect(p.parse("Jaamiʼa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("جامِعة 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Jam 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("جمع 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (shu)", () => {
		expect(p.parse("Nachiid 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Nchd 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("نشيد 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("نشد 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (shu)", () => {
		expect(p.parse("إرْمِيا 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Irmiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("إرمي 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Irm 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (shu)", () => {
		expect(p.parse("Hizgiyaal 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حِزْقِيال 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hzg 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حزق 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (shu)", () => {
		expect(p.parse("Danyaal 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دَنْيال 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دنل 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (shu)", () => {
		expect(p.parse("Huuchaʼ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("هُوشَع 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Huch 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("هشع 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (shu)", () => {
		expect(p.parse("Yuwiil 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يُوِيل 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yuw 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يول 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (shu)", () => {
		expect(p.parse("عَمُوس 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amuus 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ams 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عمس 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (shu)", () => {
		expect(p.parse("عُبَدْيا 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ubadya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ubdy 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عبد 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (shu)", () => {
		expect(p.parse("Yuunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يُونُس 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yuns 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يونس 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (shu)", () => {
		expect(p.parse("Miikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("مِيخا 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikh 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ميخ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (shu)", () => {
		expect(p.parse("Naahuum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نَاحُوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نحوم 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (shu)", () => {
		expect(p.parse("Habaguug 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حَبَقُوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hbg 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حبق 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (shu)", () => {
		expect(p.parse("صَفَنْيا 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Safanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Saf 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("صفن 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (shu)", () => {
		expect(p.parse("Haggaay 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حَقَّاي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حقق 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (shu)", () => {
		expect(p.parse("زَكَرِيَّا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakariiya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زكر 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (shu)", () => {
		expect(p.parse("Malaakhi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("مَلاخِـي 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ملخ 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (shu)", () => {
		expect(p.parse("مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متت 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (shu)", () => {
		expect(p.parse("مَرْخُوس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markhus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرخس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (shu)", () => {
		expect(p.parse("Luukha 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لُوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوق 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (shu)", () => {
		expect(p.parse("1يحن 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (shu)", () => {
		expect(p.parse("2يحن 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (shu)", () => {
		expect(p.parse("3 يُوحَنَّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yuuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yuuh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3يحن 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (shu)", () => {
		expect(p.parse("1 يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yuuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yuuh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuuh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (shu)", () => {
		expect(p.parse("2 يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yuuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yuuh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuuh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (shu)", () => {
		expect(p.parse("يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuuhanna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuuh 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يحن 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (shu)", () => {
		expect(p.parse("Aʼmaal al-Rusul 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("أعمال الرُسُل 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Amal 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("عمل 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (shu)", () => {
		expect(p.parse("رَوْمَا 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rooma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("روم 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (shu)", () => {
		expect(p.parse("1 كُرُنْتُس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kuruntus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kur 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. كُرُنْتُس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kuruntus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kur 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (shu)", () => {
		expect(p.parse("2 كُرُنْتُس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kuruntus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kur 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. كُرُنْتُس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kuruntus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kur 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (shu)", () => {
		expect(p.parse("1كرن 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (shu)", () => {
		expect(p.parse("2كرن 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (shu)", () => {
		expect(p.parse("كُلُوسِي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kuluusi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kul 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كلس 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (shu)", () => {
		expect(p.parse("Khalaatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غَلاطِية 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Khal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غلط 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (shu)", () => {
		expect(p.parse("Afasus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أفَسُس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أفس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Af 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (shu)", () => {
		expect(p.parse("فِلِبِّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filibbi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filib 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فلب 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (shu)", () => {
		expect(p.parse("1 Tasaluuniiki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تَسَلونِيكِي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tasal 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasaluuniiki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تَسَلونِيكِي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasal 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (shu)", () => {
		expect(p.parse("2 Tasaluuniiki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تَسَلونِيكِي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tasal 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasaluuniiki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تَسَلونِيكِي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasal 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (shu)", () => {
		expect(p.parse("1تسل 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (shu)", () => {
		expect(p.parse("2تسل 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (shu)", () => {
		expect(p.parse("1 Timuutaawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تِمُوتَاوُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timuutaawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تِمُوتَاوُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (shu)", () => {
		expect(p.parse("2 Timuutaawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تِمُوتَاوُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timuutaawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تِمُوتَاوُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (shu)", () => {
		expect(p.parse("1تم 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (shu)", () => {
		expect(p.parse("2تم 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (shu)", () => {
		expect(p.parse("Tiitus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تِيطُس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تطس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (shu)", () => {
		expect(p.parse("Filimuun 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فِلِمُون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filim 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فلم 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (shu)", () => {
		expect(p.parse("عِبْرَانِيِّين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibraaniyiin 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibra 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عبر 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (shu)", () => {
		expect(p.parse("Yaakhuub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يَعْقُوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaakh 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يعقب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (shu)", () => {
		expect(p.parse("1 بُطْرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Butrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 But 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. بُطْرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Butrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. But 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (shu)", () => {
		expect(p.parse("2 بُطْرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Butrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 But 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. بُطْرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Butrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. But 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (shu)", () => {
		expect(p.parse("1بطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (shu)", () => {
		expect(p.parse("2بطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (shu)", () => {
		expect(p.parse("يَهُوذَا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yahuuza 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yahu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يهذ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (shu)", () => {
		expect(p.parse("1 يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("2 يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("3 يُوحَنَّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("حَقَّاي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("عِبْرَانِيِّين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("أيُّوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("لاوِيِّين 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("فِلِبِّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("زَكَرِيَّا 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Parser helper should handle book ranges (shu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (shu)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1يحن - 3 يُوحَنَّا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1يحن – 3 يُوحَنَّا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1يحن — 3 يُوحَنَّا").osis()).toEqual("1John.1-3John.1");
	});
});

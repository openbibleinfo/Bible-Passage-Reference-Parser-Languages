"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/snd.js";

describe("Localized book Gen (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (snd)", () => {
		expect(p.parse("پيدائش 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("پيد 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (snd)", () => {
		expect(p.parse("خروج 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("خر 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (snd)", () => {
		expect(p.parse("لاوي سرشتو 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("لاو 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (snd)", () => {
		expect(p.parse("ڳاڻاٽو 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ڳا 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (snd)", () => {
		expect(p.parse("زاريون 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("زار 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (snd)", () => {
		expect(p.parse("آڪاش‌واڻي 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("مڪاشفو 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("مڪا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("آڪ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (snd)", () => {
		expect(p.parse("شريعت جو دور 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("شر 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (snd)", () => {
		expect(p.parse("يشوع 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يش 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (snd)", () => {
		expect(p.parse("رهبرَ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قاضين 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ره 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قا 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (snd)", () => {
		expect(p.parse("رُوت 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("روٿ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (snd)", () => {
		expect(p.parse("يسعياہ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("يس 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (snd)", () => {
		expect(p.parse("1 - سموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 - سم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. - سموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. - سم 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (snd)", () => {
		expect(p.parse("2 - سموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 - سم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. - سموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. - سم 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (snd)", () => {
		expect(p.parse("1.سموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1.سم 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (snd)", () => {
		expect(p.parse("2.سموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2.سم 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (snd)", () => {
		expect(p.parse("1 - بادشاهہ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 - با 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. - بادشاهہ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. - با 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (snd)", () => {
		expect(p.parse("2 - بادشاهہ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 - با 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. - بادشاهہ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. - با 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (snd)", () => {
		expect(p.parse("1.بادشاهَہ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1.با 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (snd)", () => {
		expect(p.parse("2.بادشاهَہ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2.با 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (snd)", () => {
		expect(p.parse("1 - تواريخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 - توا 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. - تواريخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. - توا 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (snd)", () => {
		expect(p.parse("2 - تواريخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 - توا 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. - تواريخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. - توا 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (snd)", () => {
		expect(p.parse("1.تواريخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1.توا 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (snd)", () => {
		expect(p.parse("2.تواريخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2.توا 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (snd)", () => {
		expect(p.parse("عزرا 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عز 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (snd)", () => {
		expect(p.parse("نحمياہ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نحم 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (snd)", () => {
		expect(p.parse("آستر 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("آس 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (snd)", () => {
		expect(p.parse("ايوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ايو 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (snd)", () => {
		expect(p.parse("زبور 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("زب 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (snd)", () => {
		expect(p.parse("چوڻيون 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("چوڻ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("مثل 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (snd)", () => {
		expect(p.parse("واعظ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("وا 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (snd)", () => {
		expect(p.parse("راڳن جو راڳ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("راڳ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("را 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (snd)", () => {
		expect(p.parse("يرمياہ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ير 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (snd)", () => {
		expect(p.parse("حزقي ايل 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حزقي‌ايل 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حز 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (snd)", () => {
		expect(p.parse("داني ايل 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دانيال 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دان 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (snd)", () => {
		expect(p.parse("هوسيع 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("هوس 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (snd)", () => {
		expect(p.parse("يوايل 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يوا 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (snd)", () => {
		expect(p.parse("عاموس 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عا 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (snd)", () => {
		expect(p.parse("عبدياہ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عبد 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (snd)", () => {
		expect(p.parse("يوناہ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يونس 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يون 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (snd)", () => {
		expect(p.parse("ميڪاہ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ميڪ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (snd)", () => {
		expect(p.parse("ناحوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ناح 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (snd)", () => {
		expect(p.parse("حبقوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حبق 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (snd)", () => {
		expect(p.parse("صفنياہ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("صف 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (snd)", () => {
		expect(p.parse("حجيءَ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حجي 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (snd)", () => {
		expect(p.parse("ذڪرياہ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زڪرياہ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ذڪ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زڪ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (snd)", () => {
		expect(p.parse("ملاڪيءَ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ملاڪي 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ملا 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (snd)", () => {
		expect(p.parse("متي 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مت 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (snd)", () => {
		expect(p.parse("مرقس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مر 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (snd)", () => {
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لو 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (snd)", () => {
		expect(p.parse("1.يوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.يو 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (snd)", () => {
		expect(p.parse("2.يوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.يو 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (snd)", () => {
		expect(p.parse("3 - يوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.يوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 - يو 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.يو 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (snd)", () => {
		expect(p.parse("1 - يوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 - يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. - يوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. - يو 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (snd)", () => {
		expect(p.parse("2 - يوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 - يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. - يوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. - يو 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (snd)", () => {
		expect(p.parse("يوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يو 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (snd)", () => {
		expect(p.parse("رسولن جا ڪم 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("سنتن جا ڪم 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("رس 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("سن 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (snd)", () => {
		expect(p.parse("رومين 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رو 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (snd)", () => {
		expect(p.parse("1 - ڪرنٿين 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 - ڪر 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. - ڪرنٿين 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. - ڪر 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (snd)", () => {
		expect(p.parse("2 - ڪرنٿين 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 - ڪر 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. - ڪرنٿين 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. - ڪر 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (snd)", () => {
		expect(p.parse("1.ڪرنٿين 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1.ڪر 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (snd)", () => {
		expect(p.parse("2.ڪرنٿين 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2.ڪر 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (snd)", () => {
		expect(p.parse("ڪلسين 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ڪل 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (snd)", () => {
		expect(p.parse("گلتين 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گل 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (snd)", () => {
		expect(p.parse("اِفسين 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("افسين 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("اف 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (snd)", () => {
		expect(p.parse("فلپين 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فلپ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (snd)", () => {
		expect(p.parse("1 - ٿسلونيڪين 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 - ٿس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. - ٿسلونيڪين 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. - ٿس 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (snd)", () => {
		expect(p.parse("2 - ٿسلونيڪين 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 - ٿس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. - ٿسلونيڪين 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. - ٿس 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (snd)", () => {
		expect(p.parse("1.ٿسلونيڪين 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.ٿس 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (snd)", () => {
		expect(p.parse("2.ٿسلونيڪين 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.ٿس 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (snd)", () => {
		expect(p.parse("1 - تيمٿيس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 - تيم 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. - تيمٿيس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. - تيم 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (snd)", () => {
		expect(p.parse("2 - تيمٿيس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 - تيم 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. - تيمٿيس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. - تيم 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (snd)", () => {
		expect(p.parse("1.تيمٿيس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1.تيم 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1.تم 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (snd)", () => {
		expect(p.parse("2.تيمٿيس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2.تيم 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2.تم 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (snd)", () => {
		expect(p.parse("طيطس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("طيط 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (snd)", () => {
		expect(p.parse("فليمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فل 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (snd)", () => {
		expect(p.parse("عبرانين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عبر 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (snd)", () => {
		expect(p.parse("يعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يع 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (snd)", () => {
		expect(p.parse("1 - پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 - پط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. - پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. - پط 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (snd)", () => {
		expect(p.parse("2 - پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 - پط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. - پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. - پط 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (snd)", () => {
		expect(p.parse("1.پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1.پط 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (snd)", () => {
		expect(p.parse("2.پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2.پط 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (snd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (snd)", () => {
		expect(p.parse("يهوداهہ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يهوداہ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يهو 1:1").osis()).toEqual("Jude.1.1");
	});
});

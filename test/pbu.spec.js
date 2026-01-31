"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pbu.js";

describe("Localized book Gen (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pbu)", () => {
		expect(p.parse("پېدايښت 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("پېدا 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pbu)", () => {
		expect(p.parse("هِجرت 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("هِجر 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pbu)", () => {
		expect(p.parse("ليويانو 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ليوا 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pbu)", () => {
		expect(p.parse("شمېر 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (pbu)", () => {
		expect(p.parse("مرثيى 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pbu)", () => {
		expect(p.parse("مکاشفه 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رويا 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pbu)", () => {
		expect(p.parse("ګردان 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (pbu)", () => {
		expect(p.parse("يشوَع 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يشو 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (pbu)", () => {
		expect(p.parse("قاضيانو 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قاضي 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pbu)", () => {
		expect(p.parse("روت 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pbu)", () => {
		expect(p.parse("يشعياه 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("يشعا 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pbu)", () => {
		expect(p.parse("اول سموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("اول. سموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("لومړی سموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("لومړی. سموئيل 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pbu)", () => {
		expect(p.parse("دوهم سموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دوهم. سموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دوېم سموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دوېم. سموئيل 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pbu)", () => {
		expect(p.parse("۱سمو 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pbu)", () => {
		expect(p.parse("۲سمو 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pbu)", () => {
		expect(p.parse("اول بادشاهان 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("اول. بادشاهان 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("لومړی بادشاهان 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("لومړی. بادشاهان 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pbu)", () => {
		expect(p.parse("دوهم بادشاهان 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دوهم. بادشاهان 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دوېم بادشاهان 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دوېم. بادشاهان 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pbu)", () => {
		expect(p.parse("۱بادش 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pbu)", () => {
		expect(p.parse("۲بادش 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pbu)", () => {
		expect(p.parse("اول تواريخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("اول. تواريخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("لومړی تواريخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("لومړی. تواريخ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pbu)", () => {
		expect(p.parse("۱تارخ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pbu)", () => {
		expect(p.parse("دوهم تاريخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دوهم. تاريخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دوېم تاريخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دوېم. تاريخ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pbu)", () => {
		expect(p.parse("۲تارخ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (pbu)", () => {
		expect(p.parse("عزرا 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pbu)", () => {
		expect(p.parse("نحمياه 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نحم 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pbu)", () => {
		expect(p.parse("اِستَر 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("استر 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pbu)", () => {
		expect(p.parse("ايُوب 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (pbu)", () => {
		expect(p.parse("زبور 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (pbu)", () => {
		expect(p.parse("متلونه 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("متل 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (pbu)", () => {
		expect(p.parse("څېړونکی 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("معلِم 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("معلم 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (pbu)", () => {
		expect(p.parse("غزلې 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("غزل 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (pbu)", () => {
		expect(p.parse("يرمياه 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("يرميا 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pbu)", () => {
		expect(p.parse("حزقى‌ايل 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حزق 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pbu)", () => {
		expect(p.parse("دانيال 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دانيا 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (pbu)", () => {
		expect(p.parse("هوسيع 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("هوس 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pbu)", () => {
		expect(p.parse("يوايل 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pbu)", () => {
		expect(p.parse("عاموس 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عامو 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (pbu)", () => {
		expect(p.parse("عبدياه 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عبد 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pbu)", () => {
		expect(p.parse("يُونس 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pbu)", () => {
		expect(p.parse("ميکاه 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ميک 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (pbu)", () => {
		expect(p.parse("ناحوم 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (pbu)", () => {
		expect(p.parse("حبقُوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حبقوق 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (pbu)", () => {
		expect(p.parse("صفنياه 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("صفن 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pbu)", () => {
		expect(p.parse("حجى 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (pbu)", () => {
		expect(p.parse("زکرياه 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زکريا 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pbu)", () => {
		expect(p.parse("ملاکى 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ملاک 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pbu)", () => {
		expect(p.parse("متى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متي 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pbu)", () => {
		expect(p.parse("مرقوس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pbu)", () => {
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pbu)", () => {
		expect(p.parse("۱يوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pbu)", () => {
		expect(p.parse("۲يوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pbu)", () => {
		expect(p.parse("درېم يوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("درېم یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳يوحنا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pbu)", () => {
		expect(p.parse("اول يوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اول یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اول. يوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اول. یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("لومړی يوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("لومړی یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("لومړی. يوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("لومړی. یوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pbu)", () => {
		expect(p.parse("دوهم يوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوهم یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوهم. يوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوهم. یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوېم يوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوېم یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوېم. يوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوېم. یوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pbu)", () => {
		expect(p.parse("يوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یوحنا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pbu)", () => {
		expect(p.parse("د رسولانو عملونه 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("اعمال 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pbu)", () => {
		expect(p.parse("روميان 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رومیان 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("روم 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pbu)", () => {
		expect(p.parse("اول کورنتيان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اول قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اول. کورنتيان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اول. قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("لومړی کورنتيان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("لومړی قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("لومړی. کورنتيان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("لومړی. قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pbu)", () => {
		expect(p.parse("دوهم کورنتيان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوهم قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوهم. کورنتيان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوهم. قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوېم کورنتيان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوېم قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوېم. کورنتيان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوېم. قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pbu)", () => {
		expect(p.parse("۱کورن 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pbu)", () => {
		expect(p.parse("۲کورن 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pbu)", () => {
		expect(p.parse("کولوسيان 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کولسیان 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کولوس 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pbu)", () => {
		expect(p.parse("غلاتیان 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ګلتيان 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ګلت 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pbu)", () => {
		expect(p.parse("اِفِسيانو 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("افسیسیان 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("افس 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pbu)", () => {
		expect(p.parse("فيليپيانو 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فیلیپیان 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فيلپ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pbu)", () => {
		expect(p.parse("اول تِسالونيکيان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اول تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اول. تِسالونيکيان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اول. تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("لومړی تِسالونيکيان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("لومړی تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("لومړی. تِسالونيکيان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("لومړی. تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pbu)", () => {
		expect(p.parse("دوهم تِسالونيکيان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوهم تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوهم. تِسالونيکيان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوهم. تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوېم تِسالونيکيان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوېم تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوېم. تِسالونيکيان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوېم. تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pbu)", () => {
		expect(p.parse("۱تسالو 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pbu)", () => {
		expect(p.parse("۲تسالو 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pbu)", () => {
		expect(p.parse("اول تيموتيوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اول تیموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اول. تيموتيوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اول. تیموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("لومړی تيموتيوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("لومړی تیموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("لومړی. تيموتيوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("لومړی. تیموتاوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pbu)", () => {
		expect(p.parse("دوهم تيموتيوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوهم تیموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوهم. تيموتيوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوهم. تیموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوېم تيموتيوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوېم تیموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوېم. تيموتيوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوېم. تیموتاوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pbu)", () => {
		expect(p.parse("۱تيمو 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pbu)", () => {
		expect(p.parse("۲تيمو 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pbu)", () => {
		expect(p.parse("تيطوس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تیتوس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pbu)", () => {
		expect(p.parse("فيليمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فیلیمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فيليم 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pbu)", () => {
		expect(p.parse("عبرانيان 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عبرانیان 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عبران 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pbu)", () => {
		expect(p.parse("يعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("یعقوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pbu)", () => {
		expect(p.parse("اول پطروس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اول. پطروس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("لومړی پطروس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("لومړی. پطروس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pbu)", () => {
		expect(p.parse("دوهم پطروس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوهم. پطروس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوېم پطروس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوېم. پطروس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pbu)", () => {
		expect(p.parse("۱پطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pbu)", () => {
		expect(p.parse("۲پطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pbu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pbu)", () => {
		expect(p.parse("يهوداه 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("یهودا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يهود 1:1").osis()).toEqual("Jude.1.1");
	});
});

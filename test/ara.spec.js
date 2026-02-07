"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ara.js";

describe("Localized book Gen (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ara)", () => {
		expect(p.parse("سفر التكوين 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("التكوين 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ﺗﻜﻮﻳﻦ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("تك 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ara)", () => {
		expect(p.parse("سفر الخروج 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("الخروج 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("خر 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (ara)", () => {
		expect(p.parse("بل والتنين 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ara)", () => {
		expect(p.parse("سفر اللاويين 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("اللاويين 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("الأحبار 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ﺍﻟﻼﻭﻳﻲ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("أح 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("لا 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ara)", () => {
		expect(p.parse("سفر العدد 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("العدد 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("عد 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (ara)", () => {
		expect(p.parse("سفر ابن سيراخ 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("يشوع بن سيراخ 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("سيراخ 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("سي 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (ara)", () => {
		expect(p.parse("حكمة سليمان 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("سفر الحكمة 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("الحكمة 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("حك 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ara)", () => {
		expect(p.parse("سفر مراثي إرميا 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("مراثي إرميا 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("المراثي 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("مرا 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (ara)", () => {
		expect(p.parse("رسالة إرميا 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book PrMan (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (ara)", () => {
		expect(p.parse("صلاة منسى 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ara)", () => {
		expect(p.parse("تثنية الإشتراع 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("سفر التثنية 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("تَثنِيَة 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("التثنية 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("تث 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ara)", () => {
		expect(p.parse("سفر يشوع 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يشوع 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يش 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ara)", () => {
		expect(p.parse("سفر القضاة 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("القضاة 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قض 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ara)", () => {
		expect(p.parse("سفر راعوث 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("راعوث 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("را 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ara)", () => {
		expect(p.parse("إسدراس الأول 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ara)", () => {
		expect(p.parse("إسدراس الثاني 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ara)", () => {
		expect(p.parse("سفر إشعياء 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("إشَعْياء 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ﺃﺷﻌﻴﺎء 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("إشعيا 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("اش 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 2Sam (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ara)", () => {
		expect(p.parse("سفر صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الممالك الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("صموئيل الثّاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ara)", () => {
		expect(p.parse("سفر صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الممالك الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("ﺻﻤﻮﺋﻴﻞ ﺍﻷﻭﻝ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Kgs (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ara)", () => {
		expect(p.parse("سفر الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الممالك الرابع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ﺍﻟﻤﻠﻮﻙ ﺍﻟﺜﺎﻧﻲ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 الملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ara)", () => {
		expect(p.parse("سفر الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("الممالك الثالث 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ﺍﻟﻤﻠﻮﻙ ﺍﻷﻭ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 الملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Chr (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ara)", () => {
		expect(p.parse("سفر أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("ﺃﺧﺒﺎﺭ ﺍﻷﻳﺎﻡ ﺍﻟﺜﺎﻥ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الأخبار 2 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ara)", () => {
		expect(p.parse("سفر أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("ﺃﺧﺒﺎﺭ ﺍﻷﻳﺎﻡ ﺍﻷ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأخبار 1 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ara)", () => {
		expect(p.parse("سفر عزرا 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عزرا 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عـز 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ara)", () => {
		expect(p.parse("سفر نحميا 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نحميا 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نح 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (ara)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ara)", () => {
		expect(p.parse("سفر أستير 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("أستير 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("أس 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ara)", () => {
		expect(p.parse("سفر أيوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("أيوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("أي 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ara)", () => {
		expect(p.parse("سفر المزامير 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("المَزمُور 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("المزامير 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("المزمور 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("مزمور 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("مز 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (ara)", () => {
		expect(p.parse("صلاة عزريا 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ara)", () => {
		expect(p.parse("سفر الأمثال 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("الأمثال 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("أمثال 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ﺃﻣﺜﺎﻝ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("مثل 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ام 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ara)", () => {
		expect(p.parse("سفر الجامعة 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("الجامعة 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("جا 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (ara)", () => {
		expect(p.parse("أنشودة الأطفال الثلاثة 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ara)", () => {
		expect(p.parse("سفر نشيد الأنشاد 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("نشيد الأناشيد 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ﻧﺸﻴﺪ ﺍﻷﻧﺸﺎ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("نش 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ara)", () => {
		expect(p.parse("سفر إرميا 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ﺃﺭﻣﻴﺎء 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("أرميا 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("إرميا 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ار 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ara)", () => {
		expect(p.parse("سفر حزقيال 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حزقيال 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حز 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ara)", () => {
		expect(p.parse("سفر دانيال 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دانيال 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دا 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ara)", () => {
		expect(p.parse("سفر هوشع 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("هوشع 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("هو 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ara)", () => {
		expect(p.parse("سفر يوئيل 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يوئيل 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يوء 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ara)", () => {
		expect(p.parse("سفر عاموس 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عاموس 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عا 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ara)", () => {
		expect(p.parse("سفر عوبديا 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عوبديا 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عو 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ara)", () => {
		expect(p.parse("سفر يونان 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يونان 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يون 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ara)", () => {
		expect(p.parse("سفر ميخا 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ميخا 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("مي 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ara)", () => {
		expect(p.parse("سفر ناحوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ناحوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نحوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نحو 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نا 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ara)", () => {
		expect(p.parse("سفر حبقوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حبقوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حب 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ara)", () => {
		expect(p.parse("سفر صفنيا 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("صفنيا 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("صف 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ara)", () => {
		expect(p.parse("سفر حجي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حجَّي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حجاي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حجي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حج 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ara)", () => {
		expect(p.parse("زَكَرِيّا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("سفر زكريا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زكريا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زك 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ara)", () => {
		expect(p.parse("سفر ملاخي 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ملاخي 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ملا 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ﻣﻼﺥ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("مل 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ara)", () => {
		expect(p.parse("إنجيل متى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مت 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ara)", () => {
		expect(p.parse("إنجيل مرقس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرقس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مر 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ara)", () => {
		expect(p.parse("إنجيل لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لو 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ara)", () => {
		expect(p.parse("رسالة القديس يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة يوحنا 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("ﻳﻮﺣﻨﺎ ﺍﻻﻭﻝ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يو 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ara)", () => {
		expect(p.parse("رسالة القديس يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة يوحنا 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 يو 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ara)", () => {
		expect(p.parse("رسالة القديس يوحنا الثالثة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("رسالة يوحنا الثالثة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("رسالة يوحنا 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("يوحنا الثالثة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 يو 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Rev (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ara)", () => {
		expect(p.parse("رؤيا يوحنا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ﻳﻮﺣﻨﺎ ﺭﺅﻳﺎ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("الرؤيــا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رؤ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book John (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ara)", () => {
		expect(p.parse("إنجيل يوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يو 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ara)", () => {
		expect(p.parse("سفر أعمال الرسل 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("أعمال الرسل 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ﺍﻋﻤﺎﻝ ﺍﻟﺮﺳﻞ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("اع 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ara)", () => {
		expect(p.parse("رسالة بولس الرسول إلى أهل رومية 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("الرسالة إلى أهل رومية 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رسالة روما 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ﺭﻭﻣﻴﺔ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("روم 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رو 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 2Cor (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ara)", () => {
		expect(p.parse("رسالة بولس الرسول الثانية إلى أهل كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الرسالة الثانية إلى أهل كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 قور 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2كو 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ara)", () => {
		expect(p.parse("رسالة بولس الرسول الأولى إلى أهل كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الرسالة الأولى إلى أهل كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("ﻛﻮﺭﻧﺜﻮﺱ ﺍﻻﻭﻝ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 قور 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1كو 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ara)", () => {
		expect(p.parse("رسالة بولس الرسول إلى أهل غلاطية 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("الرسالة إلى أهل غلاطية 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("رسالة غلاطية 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ﻏﻼﻃﻲ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غل 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ara)", () => {
		expect(p.parse("رسالة بولس الرسول إلى أهل أفسس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("الرسالة إلى أهل أفسس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("رسالة أفسس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ﺃﻓﺴﺲ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أف 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ara)", () => {
		expect(p.parse("رسالة بولس الرسول إلى أهل فيلبي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("الرسالة إلى أهل فيلبي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("رسالة فيلبي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ﻓﻴﻠﻴﺒﻲ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فل 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("في 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ara)", () => {
		expect(p.parse("رسالة بولس الرسول إلى أهل كولوسي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("الرسالة إلى أهل كولوسي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("رسالة كولوسي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ﻛﻮﻟﻮﺳﻲ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("قول 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كو 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 2Thess (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ara)", () => {
		expect(p.parse("رسالة بولس الرسول الثانية إلى أهل تسالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الرسالة الثانية إلى أهل تسالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رسالة تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("ﺍﻟﺜﺎﻧﻴﺔ ﺗﺴﺎﻟﻮﻧﻴﻜﻲ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تس 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ara)", () => {
		expect(p.parse("رسالة بولس الرسول الأولى إلى أهل تسالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الرسالة الأولى إلى أهل تسالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رسالة تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("ﺍﻻﻭﻝ ﺗﺴﺎﻟﻮﻧﻴﻜﻲ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تس 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Tim (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ara)", () => {
		expect(p.parse("رسالة بولس الرسول الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("الرسالة الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("تيموثاوس الثانية 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("ﺍﻟﺜﺎﻧﻴﺔ ﺗﻴﻤﻮﺛﺎﻭﺱ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 طيم 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ara)", () => {
		expect(p.parse("رسالة بولس الرسول الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("الرسالة الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("تيموثاوس الأولى 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("ﺍﻻﻭﻝ ﺗﻴﻤﻮﺛﺎﻭﺱ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 طيم 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ara)", () => {
		expect(p.parse("رسالة بولس الرسول إلى تيطس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("الرسالة إلى تيطس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("طيطس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ﺗﻴﻄﺲ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تي 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("طي 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ara)", () => {
		expect(p.parse("رسالة بولس الرسول إلى فليمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("الرسالة إلى فليمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فليمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فيل 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ف 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ara)", () => {
		expect(p.parse("الرسالة إلى العبرانيين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("العبرانيين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عب 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ara)", () => {
		expect(p.parse("رسالة القديس يعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("رسالة يعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يع 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ara)", () => {
		expect(p.parse("رسالة القديس بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة بطرس 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2بط 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ara)", () => {
		expect(p.parse("رسالة القديس بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة بطرس 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1بط 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ara)", () => {
		expect(p.parse("رسالى القديس يهوذا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("رسالة يهوذا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يهوذا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يهو 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يه 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (ara)", () => {
		expect(p.parse("سفر طوبيا 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("طوبيا 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("طو 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (ara)", () => {
		expect(p.parse("سفر يهوديت 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("يهوديت 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("يـه 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (ara)", () => {
		expect(p.parse("سفر باروخ 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("باروك 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("با 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (ara)", () => {
		expect(p.parse("كتاب سوزانا 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("سوزانا 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ara)", () => {
		expect(p.parse("سفر المكابين الثاني 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("المكابين الثاني 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 المكابيين 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 مك 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (ara)", () => {
		expect(p.parse("المكابين الثالث 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (ara)", () => {
		expect(p.parse("المكابين الرابع 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ara)", () => {
		expect(p.parse("سفر المكابين الأول 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("المكابين الأول 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 المكابيين 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 مك 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (ara)", () => {
		expect(p.parse("Titus 1:1 to 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1to2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 to 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (ara)", () => {
		expect(p.parse("Titus 1:1, فصل 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 فصل 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (ara)", () => {
		expect(p.parse("Exod 1:1 آية 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm آية 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (ara)", () => {
		expect(p.parse("Exod 1:1 ، 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 ، 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (ara)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (ara)", () => {
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (ara)", () => {
		expect(p.parse("Lev 1 (ALAB)").osis_and_translations()).toEqual([["Lev.1","ALAB"]]);
		expect(p.parse("Lev 1 (VD)").osis_and_translations()).toEqual([["Lev.1","VD"]]);
	});
});
describe("Parser helper should handle book ranges (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ara)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("رسالة القديس يوحنا الأولى to رسالة القديس يوحنا الثالثة").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (ara)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (ara)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

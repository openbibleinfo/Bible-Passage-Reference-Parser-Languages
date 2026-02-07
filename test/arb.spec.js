"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/arb.js";

describe("Localized book Gen (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (arb)", () => {
		expect(p.parse("قصص الأنبياء - التّكوين 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("قصص الأنبياء - التكوين 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("اَلتَّكْوِينُ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("التكوين 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("تكوين 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("تك 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (arb)", () => {
		expect(p.parse("قصّة النّبيّ موسى - الخروج 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("اَلْخُرُوجُ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("سفر الخروج 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("الخروج 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("خرُوج 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("خروج 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("خر 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (arb)", () => {
		expect(p.parse("قصّة النبيّ موسى – من اللاويين 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("اَللَّاوِيِّينَ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("سفر اللاويـين 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("اللاويين 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("لَاويّين 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("الأحبار 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("لا 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (arb)", () => {
		expect(p.parse("قصّة النبي موسى - من العدد 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("اَلْعَدَد 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("سفر العدد 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("العدد 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("عَدَد 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("عد 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (arb)", () => {
		expect(p.parse("يشوع بن سيراخ 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("سي 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (arb)", () => {
		expect(p.parse("الحكمة 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("حك 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (arb)", () => {
		expect(p.parse("من مراثي النّبيّ إرميا 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("مَرَاثِي إِرْمِيَا 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("سفر مراثي ارميا 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("مَرَاثِي إرْمِي 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("من مراثي إرميا 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("مراثي إرميا 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("المراثي 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("مرا 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (arb)", () => {
		expect(p.parse("رسالة إرميا 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("إر (يو) 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (arb)", () => {
		expect(p.parse("رُؤْيا القِدِّيس يُوحَنَّا اللاهوتي 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رُؤْيَا يُوحَنَّا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rou2ya You7anna 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رؤيا يوحَنّا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رؤيا يوحنّا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("كتاب الرؤيا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رؤيا يوحنا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("الرؤيا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رُؤيَا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رؤ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (arb)", () => {
		expect(p.parse("قصّة النبي موسى – من التثنية 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("تثنية الاشتراع 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("اَلتَّثْنِيَة 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("سفر التـثنية 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("تَثْنِيَة 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("التثنية 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("تث 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (arb)", () => {
		expect(p.parse("يشوع بن نون 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("سفر يشوع 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يَشُوع 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يشوع 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يوشع 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("يش 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (arb)", () => {
		expect(p.parse("اَلْقُضَاة 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("سفر القضاة 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("القضاة 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قُضَاة 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قض 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (arb)", () => {
		expect(p.parse("قصّة راعوث المؤمنة 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("سفر راعوث 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("رَاعُوث 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("راعوت 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("راعوث 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("را 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (arb)", () => {
		expect(p.parse("من الوحي إلى أشعيا 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("إِشَعْيَاءَ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("إشَعْيَاء 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("سفر إشعيا 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("إشعياء 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("أشعيا 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("إشعيا 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("إش 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("اش 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (arb)", () => {
		expect(p.parse("صَمُوئِيلَ ٱلْأَوَّلُ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("قصّة صموئيل وداود 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("صموئيل الأوّل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1صمويل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1صم 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (arb)", () => {
		expect(p.parse("صَمُوئِيلَ ٱلثَّانِي 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2صمويل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2صم 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (arb)", () => {
		expect(p.parse("1 صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الأولى صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الأولى صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الأولى صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الأولى صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الأولى صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الأولى. صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الأولى. صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الأولى. صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الأولى. صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الأولى. صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رسالة صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رسالة صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رسالة صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رسالة صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رسالة صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رسالة. صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رسالة. صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رسالة. صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رسالة. صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رسالة. صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رِسَالَةُ صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رِسَالَةُ صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رِسَالَةُ صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رِسَالَةُ صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رِسَالَةُ صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رِسَالَةُ. صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رِسَالَةُ. صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رِسَالَةُ. صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رِسَالَةُ. صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("رِسَالَةُ. صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سفر صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سفر صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سفر صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سفر صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سفر صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سفر. صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سفر. صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سفر. صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سفر. صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("سفر. صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("من صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("من صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("من صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("من صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("من صم 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("من. صموئيل الأول 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("من. صَمُوئِيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("من. صَمُوئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("من. صموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("من. صم 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (arb)", () => {
		expect(p.parse("2 قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية. قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية. صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية. صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية. صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية. صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الثانية. صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة. قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة. صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة. صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة. صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة. صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رسالة. صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ. قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ. صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ. صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ. صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ. صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("رِسَالَةُ. صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر. قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر. صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر. صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر. صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر. صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("سفر. صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من صم 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من. قصّة النبيّ داود 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من. صموئيل الثاني 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من. صَمُوئِيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من. صَمُوئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من. صموئيل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("من. صم 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (arb)", () => {
		expect(p.parse("قصص سليمان وإلياس واليسع 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("اَلْمُلُوكِ ٱلْأَوَّلُ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("الملوك الأوّل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("ملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1مل 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (arb)", () => {
		expect(p.parse("اَلْمُلُوكِ ٱلثَّانِي 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("ملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2مل 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (arb)", () => {
		expect(p.parse("1 الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("الأولى الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("الأولى مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("الأولى ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("الأولى مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("الأولى. الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("الأولى. مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("الأولى. ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("الأولى. مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رسالة الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رسالة مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رسالة ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رسالة مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رسالة. الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رسالة. مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رسالة. ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رسالة. مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رِسَالَةُ الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رِسَالَةُ مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رِسَالَةُ ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رِسَالَةُ مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رِسَالَةُ. الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رِسَالَةُ. مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رِسَالَةُ. ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رِسَالَةُ. مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("سفر الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("سفر مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("سفر ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("سفر مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("سفر. الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("سفر. مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("سفر. ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("سفر. مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("من الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("من مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("من ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("من مل 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("من. الملوك الأول 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("من. مُلُوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("من. ملوك 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("من. مل 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (arb)", () => {
		expect(p.parse("2 قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الثانية قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الثانية الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الثانية مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الثانية ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الثانية مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الثانية. قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الثانية. الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الثانية. مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الثانية. ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("الثانية. مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رسالة قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رسالة الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رسالة مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رسالة ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رسالة مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رسالة. قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رسالة. الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رسالة. مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رسالة. ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رسالة. مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رِسَالَةُ قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رِسَالَةُ الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رِسَالَةُ مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رِسَالَةُ ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رِسَالَةُ مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رِسَالَةُ. قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رِسَالَةُ. الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رِسَالَةُ. مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رِسَالَةُ. ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رِسَالَةُ. مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("سفر قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("سفر الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("سفر مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("سفر ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("سفر مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("سفر. قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("سفر. الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("سفر. مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("سفر. ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("سفر. مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("من قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("من الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("من مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("من ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("من مل 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("من. قصّة إلياس واليسع 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("من. الملوك الثاني 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("من. مُلُوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("من. ملوك 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("من. مل 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (arb)", () => {
		expect(p.parse("أَخْبَارِ ٱلْأَوَّلُ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأخبار الأوّل 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1أخ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (arb)", () => {
		expect(p.parse("أَخْبَارِ ٱلثَّانِي 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الأخبار الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2أخ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (arb)", () => {
		expect(p.parse("1 أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأولى أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأولى قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأولى أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأولى أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأولى أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأولى. أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأولى. قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأولى. أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأولى. أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الأولى. أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رسالة أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رسالة قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رسالة أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رسالة أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رسالة أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رسالة. أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رسالة. قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رسالة. أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رسالة. أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رسالة. أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رِسَالَةُ أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رِسَالَةُ قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رِسَالَةُ أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رِسَالَةُ أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رِسَالَةُ أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رِسَالَةُ. أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رِسَالَةُ. قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رِسَالَةُ. أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رِسَالَةُ. أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("رِسَالَةُ. أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("سفر أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("سفر قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("سفر أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("سفر أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("سفر أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("سفر. أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("سفر. قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("سفر. أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("سفر. أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("سفر. أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("من أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("من قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("من أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("من أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("من أخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("من. أخبار الأيام الأول 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("من. قصّة النبيّ داود 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("من. أخْبَار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("من. أخبار 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("من. أخ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (arb)", () => {
		expect(p.parse("2 أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الثانية أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الثانية قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الثانية أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الثانية أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الثانية أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الثانية. أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الثانية. قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الثانية. أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الثانية. أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الثانية. أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رسالة أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رسالة قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رسالة أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رسالة أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رسالة أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رسالة. أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رسالة. قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رسالة. أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رسالة. أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رسالة. أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رِسَالَةُ أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رِسَالَةُ قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رِسَالَةُ أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رِسَالَةُ أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رِسَالَةُ أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رِسَالَةُ. أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رِسَالَةُ. قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رِسَالَةُ. أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رِسَالَةُ. أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("رِسَالَةُ. أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("سفر أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("سفر قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("سفر أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("سفر أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("سفر أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("سفر. أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("سفر. قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("سفر. أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("سفر. أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("سفر. أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("من أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("من قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("من أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("من أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("من أخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("من. أخبار الأيام الثاني 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("من. قصّة النبيّ سليمان 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("من. أخْبَار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("من. أخبار 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("من. أخ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (arb)", () => {
		expect(p.parse("سفر عزرا 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عَزْرَا 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عزرا 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عز 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (arb)", () => {
		expect(p.parse("سفر نحميا 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نَحَمْيَا 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نحميا 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نح 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (arb)", () => {
		expect(p.parse("سفر أستير 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("أَسْتِير 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("أسْتِير 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("أستير 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("إستير 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("أس 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("إس 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (arb)", () => {
		expect(p.parse("قصّة النّبيّ أيّوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("أَيُّوبَ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("سفر أيوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("أيُّوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("أيّوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("أيوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("أي 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (arb)", () => {
		expect(p.parse("مزامير داود النبيّ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("اَلْمَزَامِيرُ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("من كتاب الزبور 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("المَزَامِير 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("المزامير 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mazmour 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("مزمور 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("مز 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (arb)", () => {
		expect(p.parse("من أمثال النبيّ سليمان 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("سفر الأمثال 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("أَمْثَالٌ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("الأمْثَال 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("الأمثَال 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("الأمثال 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("أم 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (arb)", () => {
		expect(p.parse("كتاب الخطيب الحكيم 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("اَلْجَامِعَةِ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("الخطيب الحكيم 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("سفر الجامعة 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("الجَامِعَة 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("الجامعة 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("جا 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (arb)", () => {
		expect(p.parse("نَشِيدُ ٱلْأَنْشَادِ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("سفر نشيد الأنشاد 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("نَشِيد الأنشَاد 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("نشيد الأناشيد 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("نشيد الأنشاد 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("نش 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (arb)", () => {
		expect(p.parse("من الوحي إلى إرميا 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("إِرْمِيَا 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("سفر ارميا 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("إرْمِيَا 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("إرميا 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("إر 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ار 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (arb)", () => {
		expect(p.parse("من الوحي إلى حزقيال 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حِزْقِيَال 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("سفر حزقيال 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حزقيال 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حز 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (arb)", () => {
		expect(p.parse("كتاب النّبيّ دانيال 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("سفر دانيال 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دَانِيآل 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دَانيَال 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دانيال 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دا 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (arb)", () => {
		expect(p.parse("من الوحي إلى هوشع 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("سفر هوشع 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("هُوشَع 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("هوشع 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("هو 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (arb)", () => {
		expect(p.parse("سفر يوئيل 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يُوئِيل 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يُوئيل 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يوئيل 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يوئ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يؤ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (arb)", () => {
		expect(p.parse("من الوحي إلى عاموس 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("سفر عاموس 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عَامُوس 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عاموس 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عا 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (arb)", () => {
		expect(p.parse("سفر عوبـيديا 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عُوبَدْيَا 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عوبديا 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عو 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (arb)", () => {
		expect(p.parse("قصّة النّبيّ يونس 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("سفر يونان 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يُونَان 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يونان 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يونس 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("يون 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (arb)", () => {
		expect(p.parse("من الوحي إلى ميخا 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("سفر ميخا 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("مِيخَا 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ميخَا 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ميخا 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("مي 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (arb)", () => {
		expect(p.parse("سفر ناحوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نَاحُوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ناحوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نحوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نا 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (arb)", () => {
		expect(p.parse("من الوحي إلى حبقوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حَبَقُّوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("سفر حبقوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حبقوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حب 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (arb)", () => {
		expect(p.parse("سفر صفنيا 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("صَفَنْيَا 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("صفنيا 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("صف 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (arb)", () => {
		expect(p.parse("سفر حجاي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حَجَّي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حجّاي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حجي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حج 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (arb)", () => {
		expect(p.parse("من الوحي إلى زكريّا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زَكَرِيَّا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زَكَريَّا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("سفر زكريا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زكريّا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زكريا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زك 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (arb)", () => {
		expect(p.parse("من الوحي إلى ملاكي 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("سفر ملاخي 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("مَلَاخِي 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ملاخي 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ملا 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (arb)", () => {
		expect(p.parse("البشارة كما دوّنها متى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("من الإنجيل - عن متّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("إِنْجِيلُ مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("إِنجيلُ مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("إنجيل متى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مت 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (arb)", () => {
		expect(p.parse("البشارة كما دوّنها مرقس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("إِنْجِيلُ مَرْقُسَ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("إِنجيلُ مَرقُسَ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("إنجيل مرقس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مَرْقُسَ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مَرْقُس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mercos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مَرقُس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرقس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مر 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (arb)", () => {
		expect(p.parse("البشارة كما دوّنها لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("إِنْجِيلُ لُوقَا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("إِنجيلُ لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("إنجيل لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لُوقَا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lou2a 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لو 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (arb)", () => {
		expect(p.parse("يُوحَنَّا ٱلْأُولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("يوحَنّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1يوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1يو 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (arb)", () => {
		expect(p.parse("يُوحَنَّا ٱلثَّانِيَةُ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("يوحَنّا الثّانيةُ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("يوحنّا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2يوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2يو 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (arb)", () => {
		expect(p.parse("رِسَالَةُ القِدِّيس يُوحَنَّا الثَّالِثَة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("يُوحَنَّا ٱلثَّالِثَةُ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("رسالة يوحنا الثالثة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("يوحَنّا الثّالِثَةُ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("يوحنّا الثالثة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("يوحنا الثالثة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 يُوحَنَّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 You7anna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3يوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 يو 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3يو 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (arb)", () => {
		expect(p.parse("1 القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى. القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى. يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى. يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى. يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى. You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("الأولى. يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة. القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة. يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة. يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة. يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة. You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رسالة. يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ. القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ. يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ. يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ. يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ. You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةُ. يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر. القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر. يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر. يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر. يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر. You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("سفر. يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من. القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من. يوحنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من. يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من. يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من. You7anna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("من. يو 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (arb)", () => {
		expect(p.parse("2 القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("الثانية القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("الثانية يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("الثانية يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("الثانية You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("الثانية يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("الثانية. القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("الثانية. يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("الثانية. يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("الثانية. You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("الثانية. يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة. القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة. يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة. يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة. You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رسالة. يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةُ القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةُ يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةُ يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةُ You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةُ يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةُ. القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةُ. يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةُ. يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةُ. You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةُ. يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("سفر القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("سفر يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("سفر يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("سفر You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("سفر يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("سفر. القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("سفر. يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("سفر. يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("سفر. You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("سفر. يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("من القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("من يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("من يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("من You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("من يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("من. القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("من. يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("من. يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("من. You7anna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("من. يو 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (arb)", () => {
		expect(p.parse("البشارة كما دوّنها يوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("إِنْجِيلُ يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("إِنجيلُ يوحَنّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("إنجيل يوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("You7anna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يوحنّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يو 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (arb)", () => {
		expect(p.parse("أَعْمَالُ ٱلرُّسُلِ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("أعمالُ الرُّسُلِ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("سيرة الحواريّين 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("A3mel el-rousl 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("أعمال الرسل 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("أعْمَال 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("أعمال 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("أع 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (arb)", () => {
		expect(p.parse("الرِسَالَةُ إِلَى أَهْلِ رُومِيَةَ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("من رسالة روما 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رسالة رومة 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رُومِيَةَ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("روميَةَ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رُومَا 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("روما 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رومة 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رو 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (arb)", () => {
		expect(p.parse("الرِّسَالَة الأُولى إلى أهلِ كُورَنثُوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("كُورِنْثُوسَ ٱلأُولَى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("كورِنثوسَ الأولَى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1كورنتوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1كور 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1كو 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (arb)", () => {
		expect(p.parse("2 رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية. رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية. كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية. إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية. Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية. كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("الثانية. كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة. رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة. كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة. إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة. Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة. كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رسالة. كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ. رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ. كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ. إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ. Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ. كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ. كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر. رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر. كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر. إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر. Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر. كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("سفر. كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من. رسالة كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من. كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من. إلى قورنتس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من. Korentos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من. كورنثوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("من. كو 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (arb)", () => {
		expect(p.parse("الرِّسَالَة الثّانِيَة إلى أهلِ كُورَنْثُوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("كُورِنْثُوسَ ٱلثَّانِيةُ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("كورِنثوسَ الثّانيةُ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("كورنتوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2كورنتوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2كور 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2كو 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (arb)", () => {
		expect(p.parse("1 رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى. رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى. كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى. إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى. Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى. كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("الأولى. كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة. رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة. كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة. إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة. Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة. كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رسالة. كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ. رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ. كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ. إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ. Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ. كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ. كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر. رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر. كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر. إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر. Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر. كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("سفر. كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من. رسالة كورنتوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من. كورنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من. إلى قورنتس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من. Korentos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من. كورنثوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("من. كو 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Col (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (arb)", () => {
		expect(p.parse("الرِّسَالة إلى أهلِ كُولُسِّي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("رسالة كولوسي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كُولُوسِّي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كُولُوسِي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colossi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كولوسّي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كولوسي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("قولسي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كو 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (arb)", () => {
		expect(p.parse("الرِّسَالةُ إلى أهْلِ غَلاطِيَة 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("من رسالة غلاطية 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("رسالة غلاطية 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غَلَاطِيَّةَ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غَلَاطِيَّة 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غَلاطيَّةَ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ghalatya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غلاطية 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غلا 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غل 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (arb)", () => {
		expect(p.parse("الرِّسَالةُ إلى أهْلِ أفَسُسْ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("من رسالة أفاسوس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("رسالة أفسس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أَفَسُسَ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أفَسُسَ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afasos 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أفاسوس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أفَسُس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أفاسس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أفسس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أف 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (arb)", () => {
		expect(p.parse("الرِّسَالة إلى أهلِ فِيلِيبِّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("رسالة فيلبــي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فِيلِبِّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فيلِبّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فيليبّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فيلبي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("في 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (arb)", () => {
		expect(p.parse("1 تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الأولى تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الأولى إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الأولى Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الأولى تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الأولى تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الأولى. تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الأولى. إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الأولى. Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الأولى. تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الأولى. تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رسالة تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رسالة إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رسالة Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رسالة تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رسالة تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رسالة. تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رسالة. إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رسالة. Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رسالة. تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رسالة. تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ. تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ. إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ. Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ. تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةُ. تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("سفر تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("سفر إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("سفر Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("سفر تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("سفر تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("سفر. تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("سفر. إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("سفر. Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("سفر. تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("سفر. تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("من تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("من إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("من Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("من تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("من تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("من. تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("من. إلى تسالونيقي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("من. Tasalouniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("من. تسَالونيكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("من. تس 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (arb)", () => {
		expect(p.parse("الرِّسَالةُ الأُولى إلى أهْلِ تَسَالُونِيكِي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("تَسَالُونِيكِي ٱلأُولَى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("تسالونيكي الأولَى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("تسالونكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1تسالونكي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1تس 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (arb)", () => {
		expect(p.parse("2 تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الثانية تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الثانية إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الثانية Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الثانية تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الثانية تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الثانية. تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الثانية. إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الثانية. Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الثانية. تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الثانية. تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رسالة تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رسالة إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رسالة Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رسالة تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رسالة تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رسالة. تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رسالة. إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رسالة. Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رسالة. تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رسالة. تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ. تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ. إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ. Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ. تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةُ. تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("سفر تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("سفر إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("سفر Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("سفر تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("سفر تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("سفر. تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("سفر. إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("سفر. Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("سفر. تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("سفر. تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("من تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("من إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("من Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("من تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("من تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("من. تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("من. إلى تسالونيقي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("من. Tasalouniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("من. تسَالونيكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("من. تس 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (arb)", () => {
		expect(p.parse("الرِّسَالة الثَّانِيَة إلى أهْلِ تَسَالُونِيكِي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("تَسَالُونِيكِي ٱلثَّانِيةُ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("تسالونيكي الثّانيةُ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("تسالونكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2تسالونكي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2تس 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (arb)", () => {
		expect(p.parse("1 بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("الأولى بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("الأولى إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("الأولى Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("الأولى تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("الأولى تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("الأولى. بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("الأولى. إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("الأولى. Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("الأولى. تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("الأولى. تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رسالة بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رسالة إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رسالة Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رسالة تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رسالة تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رسالة. بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رسالة. إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رسالة. Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رسالة. تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رسالة. تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ. بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ. إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ. Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ. تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةُ. تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("سفر بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("سفر إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("سفر Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("سفر تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("سفر تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("سفر. بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("سفر. إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("سفر. Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("سفر. تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("سفر. تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("من بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("من إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("من Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("من تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("من تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("من. بولس الأولى إلى تيموثاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("من. إلى طيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("من. Timothawos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("من. تيموثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("من. تي 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (arb)", () => {
		expect(p.parse("الرِّسَالَةُ الأولى إلى تِيمُوثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("تِيمُوثَاوُسَ ٱلْأُولَى 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("تيموثاوُسَ الأولَى 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("تيموتاوي الأولى 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("تيموثاوس الأولى 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1تيموثي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1تم 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1تي 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (arb)", () => {
		expect(p.parse("2 بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("الثانية بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("الثانية إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("الثانية Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("الثانية تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("الثانية تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("الثانية. بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("الثانية. إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("الثانية. Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("الثانية. تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("الثانية. تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رسالة بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رسالة إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رسالة Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رسالة تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رسالة تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رسالة. بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رسالة. إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رسالة. Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رسالة. تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رسالة. تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ. بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ. إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ. Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ. تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ. تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("سفر بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("سفر إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("سفر Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("سفر تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("سفر تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("سفر. بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("سفر. إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("سفر. Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("سفر. تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("سفر. تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("من بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("من إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("من Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("من تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("من تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("من. بولس الثانية إلى تيموثاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("من. إلى طيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("من. Timothawos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("من. تيموثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("من. تي 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (arb)", () => {
		expect(p.parse("الرِّسَالَةُ الثَّانِية إلى تِيمُوثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("تِيمُوثَاوُسَ ٱلثَّانِيةُ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("تيموثاوُسَ الثّانيةُ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("تيموتاوي الثانية 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("تيموثاوس الثانية 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2تيموثي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2تم 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2تي 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (arb)", () => {
		expect(p.parse("الرِّسَالة إلى تِيطُس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("رسالة بولس إلى تيطس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تِيطُسَ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تيطُسَ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تِيطُس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titos 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تيتوس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تيطس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("طيطس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تي 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (arb)", () => {
		expect(p.parse("الرِّسَالة إلى فِيلِيمُن 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("رسالة بولس إلى فيلمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فِلِيمُونَ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فِلِيمُون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فِليمونَ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فِليمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فليمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فيلمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فلمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فل 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (arb)", () => {
		expect(p.parse("الرِّسَالة إلى العِبرانِيِّين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("رسالة إلى العبرانيين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("من رسالة العبرانيين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ٱلْعِبْرَانِيِّينَ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("العِبرانيِّينَ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عِبرَانِيّين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("3ebraniyyin 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("العبرانيّين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("العبرانيين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عب 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (arb)", () => {
		expect(p.parse("رِسَالَةُ القِدِّيس يَعْقُوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("رسالة يعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يَعْقُوبَ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يَعْقُوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ya3koub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يَعقوبَ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يع 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (arb)", () => {
		expect(p.parse("بُطْرُسَ ٱلْأُولَى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("بُطرُسَ الأولَى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1بط 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (arb)", () => {
		expect(p.parse("بُطْرُسَ ٱلثَّانِيَةُ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("بُطرُسَ الثّانيةُ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("صخر الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2بط 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (arb)", () => {
		expect(p.parse("1 القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى. القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى. رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى. بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى. Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى. بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("الأولى. بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة. القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة. رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة. بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة. Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة. بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رسالة. بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ. القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ. رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ. بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ. Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ. بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةُ. بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر. القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر. رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر. بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر. Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر. بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("سفر. بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من. القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من. رسالة صخر الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من. بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من. Boutros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من. بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("من. بط 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (arb)", () => {
		expect(p.parse("2 القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("الثانية القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("الثانية بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("الثانية Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("الثانية بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("الثانية بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("الثانية. القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("الثانية. بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("الثانية. Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("الثانية. بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("الثانية. بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة. القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة. بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة. Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة. بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رسالة. بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةُ القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةُ بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةُ Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةُ بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةُ بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةُ. القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةُ. بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةُ. Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةُ. بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةُ. بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("سفر القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("سفر بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("سفر Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("سفر بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("سفر بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("سفر. القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("سفر. بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("سفر. Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("سفر. بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("سفر. بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("من القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("من بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("من Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("من بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("من بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("من. القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("من. بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("من. Boutros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("من. بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("من. بط 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (arb)", () => {
		expect(p.parse("رِسَالَةُ القِدِّيس يَهُوذَا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("رسالة يهوذا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يَهُوذَا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yahouza 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يَهوذا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يهوذا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يه 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (arb)", () => {
		expect(p.parse("طوبيّا 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("طوبيا 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("طو 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (arb)", () => {
		expect(p.parse("يهوديت 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("يه 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (arb)", () => {
		expect(p.parse("باروك 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("با 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (arb)", () => {
		expect(p.parse("1 مك 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. مك 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("الأولى مك 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("الأولى. مك 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("رسالة مك 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("رسالة. مك 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("رِسَالَةُ مك 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("رِسَالَةُ. مك 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("سفر مك 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("سفر. مك 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("من مك 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("من. مك 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (arb)", () => {
		expect(p.parse("2 مك 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. مك 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("الثانية مك 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("الثانية. مك 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("رسالة مك 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("رسالة. مك 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("رِسَالَةُ مك 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("رِسَالَةُ. مك 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("سفر مك 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("سفر. مك 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("من مك 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("من. مك 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 1Macc (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (arb)", () => {
		expect(p.parse("المكّابيّين الأوّل 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("المكابيين الأول 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (arb)", () => {
		expect(p.parse("المكابـيين الثاني 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("المكابيّين الثاني 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Preferred book names (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (arb)", () => {
		expect(p.parse("أَخْبَارِ ٱلْأَوَّلُ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("من قصّة النبيّ داود (1 أخبار) 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("الرِّسَالَة الأُولى إلى أهلِ كُورَنثُوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةُ القِدِّيسِ يُوحَنَّا الأولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("يُوحَنَّا ٱلْأُولَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اَلْمُلُوكِ ٱلْأَوَّلُ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("قصص سليمان وإلياس واليسع (1 ملوك) 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("رِسَالَةُ القِدِّيس بُطْرُسَ الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("قصّة صموئيل وداود (1 صموئيل) 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("صَمُوئِيلَ ٱلْأَوَّلُ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("الرِّسَالةُ الأُولى إلى أهْلِ تَسَالُونِيكِي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("الرِّسَالَةُ الأولى إلى تِيمُوثَاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("أَخْبَارِ ٱلثَّانِي 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("من قصّة النبيّ سليمان (2 أخبار) 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("الرِّسَالَة الثّانِيَة إلى أهلِ كُورَنْثُوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("كُورِنْثُوسَ  ٱلثَّانِيةُ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةُ القِدِّيس يُوحَنَّا الثَّانِيَة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("يُوحَنَّا ٱلثَّانِيَةُ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("اَلْمُلُوكِ ٱلثَّانِي 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("من قصّة إلياس واليسع (2 ملوك) 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("رِسَالَةُ القِدِّيس بُطْرُسَ الثَّانِيَة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("بُطْرُسَ ٱلثَّانِيَةُ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("من قصّة النبيّ داود (2 صموئيل) 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("صَمُوئِيلَ ٱلثَّانِي 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("الرِّسَالة الثَّانِيَة إلى أهْلِ تَسَالُونِيكِي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("تَسَالُونِيكِي ٱلثَّانِيةُ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("الرِّسَالَةُ الثَّانِية إلى تِيمُوثَاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("تِيمُوثَاوُسَ ٱلثَّانِيةُ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةُ القِدِّيس يُوحَنَّا الثَّالِثَة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("يُوحَنَّا ٱلثَّالِثَةُ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("أَعْمَالُ ٱلرُّسُلِ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("أعمالُ الرُّسُلِ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("الرِّسَالة إلى أهلِ كُولُسِّي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كُولُوسِّي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("اَلتَّثْنِيَة 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("الرِّسَالةُ إلى أهْلِ أفَسُسْ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("الرِّسَالةُ إلى أهْلِ غَلاطِيَة 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غَلاطيَّةَ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غَلَاطِيَّةَ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("اَلتَّكْوِينُ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("حَبَقُّوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حَجَّي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("الرِّسَالة إلى العِبرانِيِّين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("العِبرانيِّينَ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ٱلْعِبْرَانِيِّينَ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("رِسَالَةُ القِدِّيس يَعْقُوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("أَيُّوبَ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("إِنْجِيلُ يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("رِسَالَةُ القِدِّيس يَهُوذَا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("اَللَّاوِيِّينَ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("إِنْجِيلُ مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("إِنجيلُ مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("الرِّسَالة إلى أهلِ فِيلِيبِّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فِيلِبِّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("الرِّسَالة إلى فِيلِيمُن 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("رُؤْيا القِدِّيس يُوحَنَّا اللاهوتي 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رُؤْيَا يُوحَنَّا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("الرِّسَالة إلى تِيطُس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("زَكَريَّا 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Parser helper should handle book ranges (arb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (arb)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("يُوحَنَّا ٱلْأُولَى - رِسَالَةُ القِدِّيس يُوحَنَّا الثَّالِثَة").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("يُوحَنَّا ٱلْأُولَى – رِسَالَةُ القِدِّيس يُوحَنَّا الثَّالِثَة").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("يُوحَنَّا ٱلْأُولَى — رِسَالَةُ القِدِّيس يُوحَنَّا الثَّالِثَة").osis()).toEqual("1John.1-3John.1");
	});
});

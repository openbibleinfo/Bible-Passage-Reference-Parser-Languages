"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ary.js";

describe("Localized book Rev (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ary)", () => {
		expect(p.parse("الرُّؤْيَا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("الرؤيا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رؤ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ary)", () => {
		expect(p.parse("إنجيل متّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متى 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ary)", () => {
		expect(p.parse("إنجيل مَرقُس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مَرْقُسْ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرقس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ary)", () => {
		expect(p.parse("إنجيل لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لُوقَا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لو 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ary)", () => {
		expect(p.parse("يُوحَنَّا اللّْوّْلَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("يوحَنّا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1يوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ary)", () => {
		expect(p.parse("يُوحَنَّا التَّانِيَّة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("يوحَنّا التانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2يوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ary)", () => {
		expect(p.parse("يُوحَنَّا التَّالْتَة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("يوحَنّا التالتة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3يوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 يو 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ary)", () => {
		expect(p.parse("1 يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةْ يو 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("رِسَالَةْ. يو 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ary)", () => {
		expect(p.parse("2 يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةْ يو 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("رِسَالَةْ. يو 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ary)", () => {
		expect(p.parse("إنجيل يوحَنّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يو 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ary)", () => {
		expect(p.parse("أعمال الرُسُل 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("الْأَعْمَالْ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("الاعمال 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("أع 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ary)", () => {
		expect(p.parse("رُومَا 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رومية 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("روما 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رو 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ary)", () => {
		expect(p.parse("1 كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةْ كو 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("رِسَالَةْ. كو 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ary)", () => {
		expect(p.parse("2 كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةْ كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("رِسَالَةْ. كو 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ary)", () => {
		expect(p.parse("كُورِنْتُوسْ اللّْوّْلَى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("كورِنثوس الأولى 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1كورنتوس 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ary)", () => {
		expect(p.parse("كُورِنْتُوسْ التَّانِيَّة 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("كورِنثوس التانية 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2كورنتوس 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ary)", () => {
		expect(p.parse("رِسَالَةْ كُولُوسِّي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كولوسي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كو 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ary)", () => {
		expect(p.parse("رِسَالَةْ غَلَاطِيَّة 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غلاطية 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ary)", () => {
		expect(p.parse("رِسَالَةْ أَفَسُسْ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أَفَسُس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أفسس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أف 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ary)", () => {
		expect(p.parse("رِسَالَةْ فِيلِبِّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فيلِبّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فيليبي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("في 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ary)", () => {
		expect(p.parse("1 تْسَالُونِيكِي اللّْوّْلَى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تْسَالُونِيكِي اللّْوّْلَى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةْ تْسَالُونِيكِي اللّْوّْلَى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةْ تس 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةْ. تْسَالُونِيكِي اللّْوّْلَى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("رِسَالَةْ. تس 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ary)", () => {
		expect(p.parse("تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1تسالونيكي 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ary)", () => {
		expect(p.parse("2 تْسَالُونِيكِي التَّانِيَّة 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تْسَالُونِيكِي التَّانِيَّة 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةْ تْسَالُونِيكِي التَّانِيَّة 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةْ تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةْ. تْسَالُونِيكِي التَّانِيَّة 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةْ. تس 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ary)", () => {
		expect(p.parse("تسالونيكي التانية 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2تسالونيكي 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ary)", () => {
		expect(p.parse("1 تِيمُوتَاوُسْ اللّْوّْلَى 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تِيمُوتَاوُسْ اللّْوّْلَى 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةْ تِيمُوتَاوُسْ اللّْوّْلَى 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةْ تي 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةْ. تِيمُوتَاوُسْ اللّْوّْلَى 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("رِسَالَةْ. تي 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ary)", () => {
		expect(p.parse("تيموثاوس الأولى 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1تيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ary)", () => {
		expect(p.parse("2 تِيمُوتَاوُسْ التَّانِيَّة 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تِيمُوتَاوُسْ التَّانِيَّة 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةْ تِيمُوتَاوُسْ التَّانِيَّة 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةْ تي 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةْ. تِيمُوتَاوُسْ التَّانِيَّة 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("رِسَالَةْ. تي 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ary)", () => {
		expect(p.parse("تيموثاوس التانية 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2تيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ary)", () => {
		expect(p.parse("رِسَالَةْ تِيطُسْ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تيطُس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تيطس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تي 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ary)", () => {
		expect(p.parse("رِسَالَةْ فِلِيمُونْ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فِليمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فيلمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فل 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ary)", () => {
		expect(p.parse("الرِّسَالَة لْلْعِبْرَانِيِّينْ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("العبرانيين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عبرانيين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عب 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ary)", () => {
		expect(p.parse("يَعْقُوبْ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يَعْقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يع 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ary)", () => {
		expect(p.parse("1 بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةْ بط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("رِسَالَةْ. بط 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ary)", () => {
		expect(p.parse("2 بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةْ بط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةْ. بط 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ary)", () => {
		expect(p.parse("بُطْرُسْ اللّْوّْلَى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("بُطْرُس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1بطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ary)", () => {
		expect(p.parse("بُطْرُسْ التَّانِيَّة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("بُطْرُس التانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2بطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ary)", () => {
		expect(p.parse("يَهُودَا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يَهودا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يهودا 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (ary)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (ary)", () => {
		expect(p.parse("يُوحَنَّا اللّْوّْلَى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("كُورِنْتُوسْ التَّانِيَّة 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("يُوحَنَّا التَّانِيَّة 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("بُطْرُسْ التَّانِيَّة 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("رِسَالَةْ تْسَالُونِيكِي التَّانِيَّة 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("رِسَالَةْ تِيمُوتَاوُسْ التَّانِيَّة 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("يُوحَنَّا التَّالْتَة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("رِسَالَةْ كُولُوسِّي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("رِسَالَةْ غَلَاطِيَّة 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("الرِّسَالَة لْلْعِبْرَانِيِّينْ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("رِسَالَةْ فِيلِبِّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("الرُّؤْيَا 1:1").osis()).toEqual("Rev.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/acw.js";

describe("Localized book Joel (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (acw)", () => {
		expect(p.parse("يا ويل 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("يوئيل 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Obad (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (acw)", () => {
		expect(p.parse("عوبديا 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عو 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Nah (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (acw)", () => {
		expect(p.parse("ناحوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("نا 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (acw)", () => {
		expect(p.parse("حبقوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حب 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (acw)", () => {
		expect(p.parse("صفنيا 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (acw)", () => {
		expect(p.parse("حجي 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حج 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book 1John (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (acw)", () => {
		expect(p.parse("يوحنا الأولى 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1يو 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (acw)", () => {
		expect(p.parse("يوحنا الثانية 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2يو 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (acw)", () => {
		expect(p.parse("يوحنا الثالثة 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3يو 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 2Cor (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (acw)", () => {
		expect(p.parse("2 كو 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. كو 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (acw)", () => {
		expect(p.parse("كورنثوس الثانية 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (acw)", () => {
		expect(p.parse("كولوسي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كو 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (acw)", () => {
		expect(p.parse("غلاطية 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (acw)", () => {
		expect(p.parse("أفسس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أف 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (acw)", () => {
		expect(p.parse("فيلبي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("في 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (acw)", () => {
		expect(p.parse("تسالونيكي الأولى 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تس 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (acw)", () => {
		expect(p.parse("2 تس 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تس 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (acw)", () => {
		expect(p.parse("تسالونيكي الثانية 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (acw)", () => {
		expect(p.parse("‎ تيماثاوس الاولى 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1تي 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (acw)", () => {
		expect(p.parse("تيموثاس الثانية 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2تي 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (acw)", () => {
		expect(p.parse("تيطوس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تي 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (acw)", () => {
		expect(p.parse("فليمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فل 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (acw)", () => {
		expect(p.parse("العبرانيين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عب 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (acw)", () => {
		expect(p.parse("يعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يع 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (acw)", () => {
		expect(p.parse("بطرس الأولى 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1بط 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (acw)", () => {
		expect(p.parse("بطرس الثانية 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2بط 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (acw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (acw)", () => {
		expect(p.parse("يهوذا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يه 1:1").osis()).toEqual("Jude.1.1");
	});
});

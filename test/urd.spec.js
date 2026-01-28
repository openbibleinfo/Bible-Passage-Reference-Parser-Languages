"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/urd.js";

describe("Localized book Gen (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (urd)", () => {
		expect(p.parse("pīdāyiš 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("پَیدایش 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("پيدائش 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("پیدائش 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("پیدایش 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (urd)", () => {
		expect(p.parse("خُرُوج 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ḫurūj 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("خروج 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (urd)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (urd)", () => {
		expect(p.parse("iḥbār 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("احبار 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (urd)", () => {
		expect(p.parse("gintī 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("گِنتی 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("گنتی 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (urd)", () => {
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (urd)", () => {
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (urd)", () => {
		expect(p.parse("نَوحہ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("nūḥâ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("نوحہ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (urd)", () => {
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (urd)", () => {
		expect(p.parse("yūḥannā ʿārif kā mukāšafâ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("یُو حنّا عارِف کا مُکاشفہ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("یو حنا عارف کا مکاشفہ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("یُوحنا عارف کا مکاشفہ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("مُکاشفہ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("مکاشفہ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (urd)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (urd)", () => {
		expect(p.parse("istis̱nā 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("اِستِثنا 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("استثناء 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("استثنا 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (urd)", () => {
		expect(p.parse("yašūʿ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("یشُوع 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("یشوع 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (urd)", () => {
		expect(p.parse("qużāh 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قُضاۃ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قضاة 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قضاہ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("قضاۃ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (urd)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("رُوت 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("rūt 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("روت 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (urd)", () => {
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (urd)", () => {
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (urd)", () => {
		expect(p.parse("yasaʿyāh 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("یسعیاہ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("یعسیاہ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (urd)", () => {
		expect(p.parse("اوّل سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("اوّل. سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱ سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱. سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. سموئیل 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (urd)", () => {
		expect(p.parse("دوم سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دوم. سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("۲ سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("۲. سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. سموئیل 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (urd)", () => {
		expect(p.parse("اوّل-سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("اوّل۔سموایل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("اوّل.-سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("اوّل.۔سموایل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱-سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱۔سموایل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱.-سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱.۔سموایل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1۔سموایل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1.-سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1.۔سموایل 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (urd)", () => {
		expect(p.parse("دوم-سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دوم۔سموایل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دوم.-سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دوم.۔سموایل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("۲-سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("۲۔سموایل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("۲.-سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("۲.۔سموایل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2۔سموایل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2.-سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2.۔سموایل 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (urd)", () => {
		expect(p.parse("2 samūʾīl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("۲۔سموایل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (urd)", () => {
		expect(p.parse("اوّل سموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("اوّل. سموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱ سموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱. سموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 سموئيل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. سموئيل 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (urd)", () => {
		expect(p.parse("1 samūʾīl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱۔سموایل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (urd)", () => {
		expect(p.parse("اوّل سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("اوّل. سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("۱ سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("۱. سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (urd)", () => {
		expect(p.parse("دوم سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دوم. سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("۲ سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("۲. سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (urd)", () => {
		expect(p.parse("اوّل-سلاطِین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("اوّل۔سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("اوّل.-سلاطِین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("اوّل.۔سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("۱-سلاطِین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("۱۔سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("۱.-سلاطِین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("۱.۔سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-سلاطِین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1۔سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1.-سلاطِین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1.۔سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (urd)", () => {
		expect(p.parse("دوم-سلاطِین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دوم۔سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دوم.-سلاطِین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دوم.۔سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("۲-سلاطِین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("۲۔سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("۲.-سلاطِین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("۲.۔سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-سلاطِین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2۔سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2.-سلاطِین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2.۔سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (urd)", () => {
		expect(p.parse("2 salāṭīn 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("۲۔سلاطین 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (urd)", () => {
		expect(p.parse("1 salāṭīn 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("۱۔سلاطین 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (urd)", () => {
		expect(p.parse("اوّل۔تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("اوّل.۔تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("۱۔تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("۱.۔تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1۔تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1.۔تواریخ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (urd)", () => {
		expect(p.parse("دوم۔تواریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دوم.۔تواریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("۲۔تواریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("۲.۔تواریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2۔تواریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2.۔تواریخ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (urd)", () => {
		expect(p.parse("دوم تو اریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دوم. تو اریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("۲ تو اریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("۲. تو اریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 تو اریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. تو اریخ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (urd)", () => {
		expect(p.parse("دوم- توارِیخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دوم.- توارِیخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("۲- توارِیخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("۲.- توارِیخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2- توارِیخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2.- توارِیخ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (urd)", () => {
		expect(p.parse("2 tavārīḫ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("۲۔تواریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (urd)", () => {
		expect(p.parse("اوّل تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("اوّل. تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("۱ تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("۱. تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. تواریخ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (urd)", () => {
		expect(p.parse("اوّل-توارِیخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("اوّل.-توارِیخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("۱-توارِیخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("۱.-توارِیخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-توارِیخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1.-توارِیخ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (urd)", () => {
		expect(p.parse("1 tavārīḫ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("۱۔تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (urd)", () => {
		expect(p.parse("ʿizrā 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عز را 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عزرا 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (urd)", () => {
		expect(p.parse("niḥimyāh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نحمیاہ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (urd)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (urd)", () => {
		expect(p.parse("āstar 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ایستر 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("آستر 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (urd)", () => {
		expect(p.parse("ایُّوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ayyūb 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ایّوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ایوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (urd)", () => {
		expect(p.parse("zabūr 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("زبُور 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("زبور 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("زبُو 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (urd)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (urd)", () => {
		expect(p.parse("ams̱āl 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("اَمثال 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("امثال 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (urd)", () => {
		expect(p.parse("واعِظ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("vāʿẓ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("واعظ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (urd)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (urd)", () => {
		expect(p.parse("ġazalu l-ġazalāt 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("غزلُ الغزلات 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("غزل الغزلات 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (urd)", () => {
		expect(p.parse("yirmayāh 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("یرمِیاہ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("یرمیاہ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (urd)", () => {
		expect(p.parse("حِزقی ایل 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ḥiziqīʾīl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حزقی ایل 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حزقیایل 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (urd)", () => {
		expect(p.parse("دانی ایل 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("dānīʾīl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دانیایل 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("دانیال 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (urd)", () => {
		expect(p.parse("ہو سیعاہ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ہوسیعَِ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("hūsīʿ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ہوسیع 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (urd)", () => {
		expect(p.parse("یُوایل 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("yōʾīl 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("یوایل 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (urd)", () => {
		expect(p.parse("عامُوس 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ʿāmōs 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عاموس 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (urd)", () => {
		expect(p.parse("ʿabadiyāh 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عبدیاہ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (urd)", () => {
		expect(p.parse("یُوناہ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("yūnas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("یونس 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (urd)", () => {
		expect(p.parse("مِیکاہ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("mīkāh 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("میکاہ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (urd)", () => {
		expect(p.parse("نا حُوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ناحُوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("nāḥūm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ناحوم 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (urd)", () => {
		expect(p.parse("ḥabaqqūq 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حبقُّوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حبقّوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حبقوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (urd)", () => {
		expect(p.parse("ṣafaniyāh 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("صفنیاہ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (urd)", () => {
		expect(p.parse("ḥajjai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حجَّی 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حجيّ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حجی 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (urd)", () => {
		expect(p.parse("zakariyāh 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زکریاہ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زکریا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (urd)", () => {
		expect(p.parse("malākī 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ملاکی 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (urd)", () => {
		expect(p.parse("mattī kī injīl 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متّی کی انجیل 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متی کی انجیل 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متّی 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متی 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (urd)", () => {
		expect(p.parse("marqus kī injīl 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرقُس کی انجیل 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرقس کی انجیل 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرقس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (urd)", () => {
		expect(p.parse("لُوقا کی انجیل 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("lūqā kī injīl 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوقا کی انجیل 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لُوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (urd)", () => {
		expect(p.parse("اوّل یوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اوّل. یوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱ یوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱. یوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 یوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. یوحنّا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (urd)", () => {
		expect(p.parse("دوم یوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوم. یوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲ یوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲. یوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 یوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. یوحنّا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (urd)", () => {
		expect(p.parse("تیسرا یوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("تیسرا. یوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳ یوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳. یوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 یوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. یوحنّا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (urd)", () => {
		expect(p.parse("اوّل-یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اوّل۔یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اوّل.-یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اوّل.۔یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱-یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱۔یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱.-یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱.۔یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1۔یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.-یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1.۔یوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (urd)", () => {
		expect(p.parse("دوم-یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوم۔یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوم.-یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوم.۔یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲-یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲۔یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲.-یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲.۔یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2۔یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.-یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2.۔یوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (urd)", () => {
		expect(p.parse("تیسرا-یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("تیسرا۔یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("تیسرا.-یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("تیسرا.۔یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳-یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳۔یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳.-یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳.۔یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3۔یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.-یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3.۔یوحنا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 2John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (urd)", () => {
		expect(p.parse("yūḥannā kā dūsrā ʿām ḫaṭ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("یُوحنّا کا دوسرا عام خط 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("یوحنا کا دوسرا عام خط 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("یوحنّا کا دوسرا خط 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲ یوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (urd)", () => {
		expect(p.parse("yūḥannā kā tīsrā ʿām ḫaṭ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("یُوحنّا کا تیسرا عام خط 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("یوحنا کا تیسرا عام خط 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("یوحنّا کا تیسرا خط 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳ یوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (urd)", () => {
		expect(p.parse("yūḥannā kā pahlā ʿām ḫaṭ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یُوحنّا کا پہلا عام خط 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یوحنّا کا پہلا عام خط 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یوحنا کا پہلا عام خط 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱ یوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (urd)", () => {
		expect(p.parse("yūḥannā kī injīl 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یُوحنّا کی انجیل 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یوحنا کی انجیل 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (urd)", () => {
		expect(p.parse("اوّل یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اوّل. یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱ یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱. یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 یُوحنّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. یُوحنّا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (urd)", () => {
		expect(p.parse("دوم یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوم. یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲ یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲. یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 یُوحنّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. یُوحنّا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (urd)", () => {
		expect(p.parse("تیسرا یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("تیسرا. یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳ یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳. یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 یُوحنّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. یُوحنّا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (urd)", () => {
		expect(p.parse("یُوحنّا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (urd)", () => {
		expect(p.parse("rasūlōṅ ke aʿmāl 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("رسُولوں کے اعمال 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("رسولوں کے اعمال 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("یوحنا کے اعمال 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("اَعمال 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("رسولوں 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("اعمال 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (urd)", () => {
		expect(p.parse("رومیوں کے نام پولس رسول کا خط 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("rōmiyōṅ ke nām kā ḫaṭ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رومیوں کے نام کا خط 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رُومِیوں 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رومیوں 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (urd)", () => {
		expect(p.parse("اوّل کرنتھِیُوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اوّل کُرنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اوّل. کرنتھِیُوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اوّل. کُرنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱ کرنتھِیُوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱ کُرنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱. کرنتھِیُوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱. کُرنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 کرنتھِیُوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 کُرنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. کرنتھِیُوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. کُرنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (urd)", () => {
		expect(p.parse("دوم کرنتھِیُوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوم کُرنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوم. کرنتھِیُوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوم. کُرنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲ کرنتھِیُوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲ کُرنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲. کرنتھِیُوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲. کُرنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 کرنتھِیُوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 کُرنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. کرنتھِیُوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. کُرنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (urd)", () => {
		expect(p.parse("اوّل-کُرِنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اوّل۔کرنتھیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اوّل.-کُرِنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اوّل.۔کرنتھیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱-کُرِنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱۔کرنتھیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱.-کُرِنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱.۔کرنتھیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-کُرِنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1۔کرنتھیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1.-کُرِنتھِیوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1.۔کرنتھیوں 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (urd)", () => {
		expect(p.parse("دوم-کُرِنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوم۔کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوم.-کُرِنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوم.۔کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲-کُرِنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲۔کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲.-کُرِنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲.۔کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-کُرِنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2۔کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2.-کُرِنتھِیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2.۔کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (urd)", () => {
		expect(p.parse("دوم کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوم. کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲ کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲. کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (urd)", () => {
		expect(p.parse("کرنتھِیُوں کے نام پولس رسول کا دوسرا خط 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("kurintʰiyōṅ ke nām kā dūsrā ḫaṭ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("کُرِنتھِیوں کے نام کا دوسرا خط 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("کرنتھیوں کے نام کا دوسرا خط 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲ کرنتھیوں 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (urd)", () => {
		expect(p.parse("کرنتھِیُوں کے نام پولس رسول کا پہلا خط 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("kurintʰiyōṅ ke nām kā pahlā ḫaṭ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("کُرِنتھِیوں کے نام کا پہلا خط 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("کرنتھیوں کے نام کا پہلا خط 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱ کرنتھِیُوں 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (urd)", () => {
		expect(p.parse("گلتیوں کے نام پولُس رسول کا خط 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("galatiyōṅ ke nām kā ḫaṭ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گلتِیوں کے نام کا خط 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گلتیوں کے نام کا خط 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گلتِیوں 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("گلتیوں 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (urd)", () => {
		expect(p.parse("افسیوں کے نام پو لس رسول کا خط 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ifisiyōṅ ke nām kā ḫaṭ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("اِفِسِیوں کے نام کا خط 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("افسیوں کے نام کا خط 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("اِفسِیوں 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("اِفسیوں 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("افسیوں 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (urd)", () => {
		expect(p.parse("فِلِپّیُوں کے نام پو لس رسُول کا خط 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("filippiyōṅ ke nām kā ḫaṭ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فِلِپِّیوں کے نام کا خط 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فلپیوں کے نام کا خط 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فِلِپّیُوں 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فِلپّیوں 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فلپیوں 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (urd)", () => {
		expect(p.parse("کُلِسّیوں کے نام پولُس رسُول کا خط 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("kulussiyōṅ ke nām kā ḫaṭ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کُلُسِّیوں کے نام کا خط 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کلسیوں کے نام کا خط 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کُلِسّیوں 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کُلسِیوں 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کُلسّیوں 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کلسیوں 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (urd)", () => {
		expect(p.parse("اوّل تھِسلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اوّل تھسّلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اوّل. تھِسلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اوّل. تھسّلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱ تھِسلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱ تھسّلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱. تھِسلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱. تھسّلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تھِسلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 تھسّلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تھِسلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تھسّلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (urd)", () => {
		expect(p.parse("دوم تھِسلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوم تھسّلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوم. تھِسلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوم. تھسّلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲ تھِسلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲ تھسّلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲. تھِسلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲. تھسّلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تھِسلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تھسّلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تھِسلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تھسّلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (urd)", () => {
		expect(p.parse("اوّل-تھِسّلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اوّل۔تھسلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اوّل.-تھِسّلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اوّل.۔تھسلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱-تھِسّلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱۔تھسلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱.-تھِسّلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱.۔تھسلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-تھِسّلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1۔تھسلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.-تھِسّلُنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1.۔تھسلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (urd)", () => {
		expect(p.parse("دوم-تھِسّلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوم۔تھسلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوم.-تھِسّلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوم.۔تھسلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲-تھِسّلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲۔تھسلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲.-تھِسّلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲.۔تھسلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-تھِسّلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2۔تھسلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.-تھِسّلُنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2.۔تھسلنیکیوں 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (urd)", () => {
		expect(p.parse("دوم تھسلنیکوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوم. تھسلنیکوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲ تھسلنیکوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲. تھسلنیکوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 تھسلنیکوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تھسلنیکوں 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (urd)", () => {
		expect(p.parse("تھسلنیکوں کے نام پو لس رسول کادوسرا خط 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("tʰissalunīkiyōṅ ke nām kā dūsrā ḫaṭ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("تھِسّلُنیکیوں کے نام کا دوسرا خط 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("تھسلنیکیوں کے نام کا دوسرا خط 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲ تھسلنیکوں 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (urd)", () => {
		expect(p.parse("تھسّلنیکیوں کے نام پولس رسول کا پہلا خط 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("tʰissalunīkiyōṅ ke nām kā pahlā ḫaṭ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("تھِسّلُنیکیوں کے نام کا پہلا خط 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("تھسلنیکیوں کے نام کا پہلا خط 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱ تھسّلنیکیوں 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (urd)", () => {
		expect(p.parse("اوّل تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّل تیمِتھُیس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّل. تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّل. تیمِتھُیس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱ تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱ تیمِتھُیس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱. تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱. تیمِتھُیس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تیمِتھُیس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تیمِتھُیس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (urd)", () => {
		expect(p.parse("دوم تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم تیمِتھُیس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم. تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم. تیمِتھُیس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲ تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲ تیمِتھُیس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲. تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲. تیمِتھُیس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تیمِتھُیس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تیمِتھُیس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (urd)", () => {
		expect(p.parse("اوّل-تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّل۔تیمتھیس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّل.-تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّل.۔تیمتھیس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱-تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱۔تیمتھیس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱.-تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱.۔تیمتھیس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1۔تیمتھیس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1.-تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1.۔تیمتھیس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (urd)", () => {
		expect(p.parse("دوم-تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم۔تیمتھیس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم.-تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم.۔تیمتھیس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲-تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲۔تیمتھیس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲.-تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲.۔تیمتھیس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2۔تیمتھیس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2.-تِیمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2.۔تیمتھیس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (urd)", () => {
		expect(p.parse("دوم تیِمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم. تیِمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲ تیِمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲. تیِمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تیِمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تیِمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (urd)", () => {
		expect(p.parse("تیِمُتھِیُس کے نام پولس رسول کا دوسرا خط 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("tīmutʰiyus ke nām kā dūsrā ḫaṭ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("تِیمُتھِیُس کے نام کا دوسرا خط 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("تیمتھیس کے نام کا دوسرا خط 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲ تیِمُتھِیُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (urd)", () => {
		expect(p.parse("تِیمُتھِیُس کے نام پولُس رسول کا پہلا خط 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("tīmutʰiyus ke nām kā pahlā ḫaṭ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("تِیمُتھِیُس کے نام کا پہلا خط 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("تیمتھیس کے نام کا پہلا خط 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱ تِیمُتھِیُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (urd)", () => {
		expect(p.parse("طِطُس کے نام پولس رسُول کا خط 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ṭiṭus ke nām kā ḫaṭ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("طِطُس کے نام کا خط 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ططس کے نام کا خط 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("طِطُس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ططس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (urd)", () => {
		expect(p.parse("فلیمون کے نام پولس رسُول کا خط 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("filēmōn ke nām kā ḫaṭ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فِلیمون کے نام کا خط 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فلیمون کے نام کا خط 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فِلیمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فلیمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (urd)", () => {
		expect(p.parse("عبرانیوں کے نام پولس رسول کا خط 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ʿibrāniyōṅ ke nām kā ḫaṭ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عِبرانیوں کے نام کا خط 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عبرانیوں کے نام کا خط 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عِبرانیوں 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عبرانیوں 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (urd)", () => {
		expect(p.parse("yaʿqūb kā ʿām ḫaṭ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("یعقوب کا عا م خط 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("یعقُوب کا عام خط 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("یعقوب کا عام خط 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("یعقُوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("یعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (urd)", () => {
		expect(p.parse("اوّل پطر س 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اوّل پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اوّل. پطر س 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اوّل. پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱ پطر س 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱ پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱. پطر س 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱. پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 پطر س 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. پطر س 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. پطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (urd)", () => {
		expect(p.parse("دوم پطر س 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوم پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوم. پطر س 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوم. پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲ پطر س 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲ پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲. پطر س 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲. پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 پطر س 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. پطر س 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. پطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (urd)", () => {
		expect(p.parse("اوّل-پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اوّل۔پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اوّل.-پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اوّل.۔پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱-پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱۔پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱.-پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱.۔پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1۔پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1.-پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1.۔پطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (urd)", () => {
		expect(p.parse("دوم-پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوم۔پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوم.-پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوم.۔پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲-پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲۔پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲.-پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲.۔پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2۔پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2.-پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2.۔پطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (urd)", () => {
		expect(p.parse("paṭras kā dūsrā ʿām ḫaṭ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("پطرس کا دوسرا عام خط 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲ پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (urd)", () => {
		expect(p.parse("paṭras kā pahlā ʿām ḫaṭ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("پطر س کاپہلا عا م خط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("پطرس کا پہلا عام خط 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱ پطر س 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (urd)", () => {
		expect(p.parse("yahūdāh kā ʿām ḫaṭ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("یہُوداہ کا عام خط 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("یہوداہ کا عام خط 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("یہُوداہ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("یہوداہ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (urd)", () => {
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (urd)", () => {
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (urd)", () => {
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (urd)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 2Macc (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (urd)", () => {
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (urd)", () => {
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (urd)", () => {
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (urd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (urd)", () => {
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});

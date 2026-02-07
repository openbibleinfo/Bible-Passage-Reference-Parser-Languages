"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pes.js";

describe("Localized book Gen (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pes)", () => {
		expect(p.parse("پیدایش 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pes)", () => {
		expect(p.parse("خروج 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pes)", () => {
		expect(p.parse("لاویان 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pes)", () => {
		expect(p.parse("اعداد 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (pes)", () => {
		expect(p.parse("مراثی اِرمیا 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("سوگ‌نامه 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("سوگنامه 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("مراثی 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pes)", () => {
		expect(p.parse("مکاشفهٔ یوحنا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("مکاشفۀ یوحنا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("مکاشفه 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pes)", () => {
		expect(p.parse("تثنیه 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (pes)", () => {
		expect(p.parse("یوشع 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (pes)", () => {
		expect(p.parse("داوران 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pes)", () => {
		expect(p.parse("روت 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pes)", () => {
		expect(p.parse("اِشعیا 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("اشعیا 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pes)", () => {
		expect(p.parse("اول سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("اول. سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("اوّل سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("اوّل. سموئیل 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pes)", () => {
		expect(p.parse("دوم سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دوم. سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دوّم سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دوّم. سموئیل 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pes)", () => {
		expect(p.parse("۱سموئیل 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pes)", () => {
		expect(p.parse("۲سموئیل 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pes)", () => {
		expect(p.parse("اول پادشاهان 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("اول. پادشاهان 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("اوّل پادشاهان 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("اوّل. پادشاهان 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pes)", () => {
		expect(p.parse("دوم پادشاهان 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دوم. پادشاهان 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دوّم پادشاهان 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دوّم. پادشاهان 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pes)", () => {
		expect(p.parse("۱پادشاهان 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pes)", () => {
		expect(p.parse("۲پادشاهان 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pes)", () => {
		expect(p.parse("اول تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("اول. تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("اوّل تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("اوّل. تواریخ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pes)", () => {
		expect(p.parse("دوم تواریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دوم. تواریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دوّم تواریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دوّم. تواریخ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pes)", () => {
		expect(p.parse("۱تواریخ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pes)", () => {
		expect(p.parse("۲تواریخ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (pes)", () => {
		expect(p.parse("عِزرا 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("عزرا 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pes)", () => {
		expect(p.parse("نِحِمیا 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("نحمیا 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pes)", () => {
		expect(p.parse("استِر 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("اِستر 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("استر 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pes)", () => {
		expect(p.parse("ایّوب 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ایوب 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (pes)", () => {
		expect(p.parse("مزامیر 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("مزمور 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (pes)", () => {
		expect(p.parse("امثال 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (pes)", () => {
		expect(p.parse("جامعه 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (pes)", () => {
		expect(p.parse("غزل غزل‌ها 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("غزل‌غزل‌ها 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("غزل غزلها 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("غزلها 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (pes)", () => {
		expect(p.parse("اِرمیا 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ارمیا 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pes)", () => {
		expect(p.parse("حِزِقیال 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حِزقیال 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("حزقیال 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pes)", () => {
		expect(p.parse("دانیال 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (pes)", () => {
		expect(p.parse("هوشع 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pes)", () => {
		expect(p.parse("یوئیل 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pes)", () => {
		expect(p.parse("عاموس نبی 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("عاموس 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (pes)", () => {
		expect(p.parse("عوبَدیا 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("عوبدیا 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pes)", () => {
		expect(p.parse("یونس 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pes)", () => {
		expect(p.parse("میکاه 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("میکا 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (pes)", () => {
		expect(p.parse("ناحوم 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (pes)", () => {
		expect(p.parse("حَبَقوق 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("حبقوق 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (pes)", () => {
		expect(p.parse("صَفَنیا 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("صفنیا 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pes)", () => {
		expect(p.parse("حَجّای 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حَجَّی 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("حجی 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (pes)", () => {
		expect(p.parse("زَکریا 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("زکریا 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pes)", () => {
		expect(p.parse("مَلاکی 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ملاکی 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pes)", () => {
		expect(p.parse("مَتّی 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متّی 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متی 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pes)", () => {
		expect(p.parse("مَرقُس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرقس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pes)", () => {
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pes)", () => {
		expect(p.parse("۱یوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pes)", () => {
		expect(p.parse("۲یوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pes)", () => {
		expect(p.parse("سوّم یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("سوم یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳یوحنا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pes)", () => {
		expect(p.parse("اول یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اول. یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اوّل یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اوّل. یوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pes)", () => {
		expect(p.parse("دوم یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوم. یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوّم یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوّم. یوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pes)", () => {
		expect(p.parse("یوحنا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pes)", () => {
		expect(p.parse("کارهای رسولان 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("اعمال رسولان 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("اعمال 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pes)", () => {
		expect(p.parse("رومیان 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pes)", () => {
		expect(p.parse("اول قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اول. قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اوّل قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اوّل. قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pes)", () => {
		expect(p.parse("دوم قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوم. قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوّم قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوّم. قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pes)", () => {
		expect(p.parse("۱قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pes)", () => {
		expect(p.parse("۲قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pes)", () => {
		expect(p.parse("کولُسیان 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کولسیان 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pes)", () => {
		expect(p.parse("غلاطیان 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pes)", () => {
		expect(p.parse("اَفِسُسیان 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("اَفِسسیان 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("افسسیان 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pes)", () => {
		expect(p.parse("فیلیپیان 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فلیپیان 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pes)", () => {
		expect(p.parse("اول تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اول. تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اوّل تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اوّل. تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pes)", () => {
		expect(p.parse("دوم تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوم. تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوّم تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوّم. تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pes)", () => {
		expect(p.parse("۱تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱تسالونیکان 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pes)", () => {
		expect(p.parse("۲تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pes)", () => {
		expect(p.parse("اول تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اول تیموتاؤس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اول. تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اول. تیموتاؤس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّل تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّل تیموتاؤس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّل. تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّل. تیموتاؤس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pes)", () => {
		expect(p.parse("دوم تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم تیموتاؤس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم. تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم. تیموتاؤس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوّم تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوّم تیموتاؤس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوّم. تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوّم. تیموتاؤس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pes)", () => {
		expect(p.parse("۱تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pes)", () => {
		expect(p.parse("۲تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pes)", () => {
		expect(p.parse("تیتوس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تیطُس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تیطس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pes)", () => {
		expect(p.parse("فِلیمُون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فیلیمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فلیمون 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pes)", () => {
		expect(p.parse("عبرانیان 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pes)", () => {
		expect(p.parse("یعقوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pes)", () => {
		expect(p.parse("اول پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اول. پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اوّل پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اوّل. پطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pes)", () => {
		expect(p.parse("دوم پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوم. پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوّم پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوّم. پطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pes)", () => {
		expect(p.parse("۱پطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pes)", () => {
		expect(p.parse("۲پطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pes)", () => {
		expect(p.parse("یهودا 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (pes)", () => {
		expect(p.parse("حَجَّی 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Parser helper should handle book ranges (pes)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (pes)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("۱یوحنا - سوّم یوحنا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("۱یوحنا – سوّم یوحنا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("۱یوحنا — سوّم یوحنا").osis()).toEqual("1John.1-3John.1");
	});
});

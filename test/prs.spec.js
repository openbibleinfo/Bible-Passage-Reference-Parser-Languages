"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/prs.js";

describe("Localized book Gen (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (prs)", () => {
		expect(p.parse("پیدایش 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (prs)", () => {
		expect(p.parse("خروج 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (prs)", () => {
		expect(p.parse("لاویان 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (prs)", () => {
		expect(p.parse("اعداد 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (prs)", () => {
		expect(p.parse("سوگنامه 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (prs)", () => {
		expect(p.parse("مکاشفه 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (prs)", () => {
		expect(p.parse("تثنیه 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (prs)", () => {
		expect(p.parse("یوشع 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (prs)", () => {
		expect(p.parse("داوران 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (prs)", () => {
		expect(p.parse("روت 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (prs)", () => {
		expect(p.parse("اشعیا 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (prs)", () => {
		expect(p.parse("اول سموئیل 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("اول. سموئیل 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (prs)", () => {
		expect(p.parse("دوم سموئیل 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("دوم. سموئیل 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (prs)", () => {
		expect(p.parse("اول پادشاهان 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("اول. پادشاهان 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (prs)", () => {
		expect(p.parse("دوم پادشاهان 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("دوم. پادشاهان 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (prs)", () => {
		expect(p.parse("اول تواریخ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("اول. تواریخ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (prs)", () => {
		expect(p.parse("دوم تواریخ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("دوم. تواریخ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (prs)", () => {
		expect(p.parse("عِزرا 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (prs)", () => {
		expect(p.parse("نِحِمیا 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (prs)", () => {
		expect(p.parse("اِستَر 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (prs)", () => {
		expect(p.parse("ایوب 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (prs)", () => {
		expect(p.parse("مزامیر 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (prs)", () => {
		expect(p.parse("امثال سلیمان 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (prs)", () => {
		expect(p.parse("جامعه 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (prs)", () => {
		expect(p.parse("غزلِ غزلها 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (prs)", () => {
		expect(p.parse("ارمیا 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (prs)", () => {
		expect(p.parse("حِزقیال 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (prs)", () => {
		expect(p.parse("دانیال 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (prs)", () => {
		expect(p.parse("هوشع 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (prs)", () => {
		expect(p.parse("یوئیل 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (prs)", () => {
		expect(p.parse("عاموس 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (prs)", () => {
		expect(p.parse("عوبَدیا 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (prs)", () => {
		expect(p.parse("یونس 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (prs)", () => {
		expect(p.parse("میکاه 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (prs)", () => {
		expect(p.parse("ناحوم 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (prs)", () => {
		expect(p.parse("حبَقوق 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (prs)", () => {
		expect(p.parse("سِفَنیا 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (prs)", () => {
		expect(p.parse("حجی 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (prs)", () => {
		expect(p.parse("زِکَریا 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (prs)", () => {
		expect(p.parse("ملاکی 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (prs)", () => {
		expect(p.parse("متی 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (prs)", () => {
		expect(p.parse("مرقُس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (prs)", () => {
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (prs)", () => {
		expect(p.parse("اول یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اول. یوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (prs)", () => {
		expect(p.parse("دوم یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوم. یوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (prs)", () => {
		expect(p.parse("سوم یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("سوم. یوحنا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (prs)", () => {
		expect(p.parse("یوحنا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (prs)", () => {
		expect(p.parse("اعمال رسولان 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (prs)", () => {
		expect(p.parse("رومیان 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (prs)", () => {
		expect(p.parse("اول قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اول. قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (prs)", () => {
		expect(p.parse("دوم قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوم. قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (prs)", () => {
		expect(p.parse("کولسیان 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (prs)", () => {
		expect(p.parse("غلاطیان 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (prs)", () => {
		expect(p.parse("اِفِسُسیان 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (prs)", () => {
		expect(p.parse("فیلیپیان 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (prs)", () => {
		expect(p.parse("اول تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اول. تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (prs)", () => {
		expect(p.parse("دوم تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوم. تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (prs)", () => {
		expect(p.parse("اول تیموتاووس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اول. تیموتاووس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (prs)", () => {
		expect(p.parse("دوم تیموتاووس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم. تیموتاووس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (prs)", () => {
		expect(p.parse("تیطوس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (prs)", () => {
		expect(p.parse("فِلیمون 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (prs)", () => {
		expect(p.parse("عبرانیان 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (prs)", () => {
		expect(p.parse("یعقوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (prs)", () => {
		expect(p.parse("اول پِطرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اول. پِطرُس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (prs)", () => {
		expect(p.parse("دوم پِطرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوم. پِطرُس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (prs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (prs)", () => {
		expect(p.parse("یهودا 1:1").osis()).toEqual("Jude.1.1");
	});
});

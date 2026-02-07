"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/glk.js";

describe("Localized book Gen (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (glk)", () => {
		expect(p.parse("پیدایش 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (glk)", () => {
		expect(p.parse("خروج 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (glk)", () => {
		expect(p.parse("موکأشفه 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (glk)", () => {
		expect(p.parse("روت 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Ezra (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (glk)", () => {
		expect(p.parse("عِزرا 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Esth (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (glk)", () => {
		expect(p.parse("استر 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (glk)", () => {
		expect(p.parse("ایوب 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (glk)", () => {
		expect(p.parse("مزامیر 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Dan (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (glk)", () => {
		expect(p.parse("دانیال 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Jonah (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (glk)", () => {
		expect(p.parse("یونس 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (glk)", () => {
		expect(p.parse("متّی 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متا 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (glk)", () => {
		expect(p.parse("مَرقُس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (glk)", () => {
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (glk)", () => {
		expect(p.parse("۱یوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (glk)", () => {
		expect(p.parse("۲یوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (glk)", () => {
		expect(p.parse("سوم یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳یوحنا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (glk)", () => {
		expect(p.parse("اوّل یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اوّل. یوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (glk)", () => {
		expect(p.parse("دوم یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوم. یوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (glk)", () => {
		expect(p.parse("یوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یوح 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (glk)", () => {
		expect(p.parse("روسولأنٚ کأرأن 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("اعمالٚ رسولأن 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("اعمال 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("کأرأن 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (glk)", () => {
		expect(p.parse("رومیأن 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (glk)", () => {
		expect(p.parse("اوّل قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اوّل. قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (glk)", () => {
		expect(p.parse("دوم قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوم. قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (glk)", () => {
		expect(p.parse("۱قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (glk)", () => {
		expect(p.parse("۲قرنتیان 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (glk)", () => {
		expect(p.parse("کولسیان 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (glk)", () => {
		expect(p.parse("غلاطیأن 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (glk)", () => {
		expect(p.parse("افسسیان 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (glk)", () => {
		expect(p.parse("فیلیپیان 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (glk)", () => {
		expect(p.parse("اوّل تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اوّل. تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (glk)", () => {
		expect(p.parse("دوم تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوم. تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (glk)", () => {
		expect(p.parse("۱تسالونیکیان 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (glk)", () => {
		expect(p.parse("۲تسالونیکیان 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (glk)", () => {
		expect(p.parse("اوّل تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّل. تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (glk)", () => {
		expect(p.parse("دوم تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوم. تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (glk)", () => {
		expect(p.parse("۱تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (glk)", () => {
		expect(p.parse("۲تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (glk)", () => {
		expect(p.parse("تیتوس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (glk)", () => {
		expect(p.parse("فیلیمون 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (glk)", () => {
		expect(p.parse("عبرأنیأن 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (glk)", () => {
		expect(p.parse("یعقوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (glk)", () => {
		expect(p.parse("اوّل پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اوّل. پطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (glk)", () => {
		expect(p.parse("دوم پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوم. پطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (glk)", () => {
		expect(p.parse("۱پطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (glk)", () => {
		expect(p.parse("۲پطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (glk)", () => {
		expect(p.parse("یهودا 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (glk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (glk)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("۱یوحنا - سوم یوحنا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("۱یوحنا – سوم یوحنا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("۱یوحنا — سوم یوحنا").osis()).toEqual("1John.1-3John.1");
	});
});

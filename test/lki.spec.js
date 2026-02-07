"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lki.js";

describe("Localized book Rev (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lki)", () => {
		expect(p.parse("مِکاشفَه 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lki)", () => {
		expect(p.parse("مَتّی 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lki)", () => {
		expect(p.parse("مَرقُس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lki)", () => {
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lki)", () => {
		expect(p.parse("اول یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("اول. یوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lki)", () => {
		expect(p.parse("دوئِم یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دوئِم. یوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lki)", () => {
		expect(p.parse("سِئِم یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("سِئِم. یوحنا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lki)", () => {
		expect(p.parse("یوحنا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lki)", () => {
		expect(p.parse("کارَل رسولَل 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lki)", () => {
		expect(p.parse("رومیان 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lki)", () => {
		expect(p.parse("اول قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اول. قرنتیان 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lki)", () => {
		expect(p.parse("دوئِم قُرَنتیان 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دوئِم. قُرَنتیان 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lki)", () => {
		expect(p.parse("کولُسیَل 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lki)", () => {
		expect(p.parse("غَلاطیَل 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lki)", () => {
		expect(p.parse("اَفِسُسیَل 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lki)", () => {
		expect(p.parse("فیلیپیَل 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lki)", () => {
		expect(p.parse("اول تِسالونیکیَل 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اول. تِسالونیکیَل 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lki)", () => {
		expect(p.parse("دوئِم تِسالونیکیَل 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دوئِم. تِسالونیکیَل 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lki)", () => {
		expect(p.parse("اول تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اول. تیموتائوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lki)", () => {
		expect(p.parse("دوئِم تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دوئِم. تیموتائوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lki)", () => {
		expect(p.parse("تیتوس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lki)", () => {
		expect(p.parse("فیلیمون 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lki)", () => {
		expect(p.parse("عِبرانیَل 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lki)", () => {
		expect(p.parse("یعقوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lki)", () => {
		expect(p.parse("اول پطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("اول. پطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lki)", () => {
		expect(p.parse("دوئِم پطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دوئِم. پطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lki)", () => {
		expect(p.parse("یهودا 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (lki)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lki)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("اول یوحنا - سِئِم یوحنا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("اول یوحنا – سِئِم یوحنا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("اول یوحنا — سِئِم یوحنا").osis()).toEqual("1John.1-3John.1");
	});
});

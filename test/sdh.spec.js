"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sdh.js";

describe("Localized book Rev (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sdh)", () => {
		expect(p.parse("وەحی وه یوحەنا 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sdh)", () => {
		expect(p.parse("ئنجیل مەتا 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sdh)", () => {
		expect(p.parse("مەرقوس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sdh)", () => {
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sdh)", () => {
		expect(p.parse("یەکم یوحەنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("یەکم. یوحەنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sdh)", () => {
		expect(p.parse("دویم یوحەنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("دویم. یوحەنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sdh)", () => {
		expect(p.parse("سێیەم یوحەنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("سێیەم. یوحەنا 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sdh)", () => {
		expect(p.parse("یوحەنا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sdh)", () => {
		expect(p.parse("کاریل ڕەسولەیل 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sdh)", () => {
		expect(p.parse("رومیەگان 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sdh)", () => {
		expect(p.parse("یەکم قورنتییل 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("یەکم. قورنتییل 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sdh)", () => {
		expect(p.parse("دویم قورنتییل 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("دویم. قورنتییل 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sdh)", () => {
		expect(p.parse("نامه وه کولوسییل 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sdh)", () => {
		expect(p.parse("نامه وە غەلاتییل 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sdh)", () => {
		expect(p.parse("ئەفسوسیێل 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sdh)", () => {
		expect(p.parse("نامەێ فیلیپییل 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sdh)", () => {
		expect(p.parse("یەکم تسالونیکییل 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("یەکم. تسالونیکییل 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sdh)", () => {
		expect(p.parse("دویم تسالونیکییل 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("دویم. تسالونیکییل 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sdh)", () => {
		expect(p.parse("یەکم نامەێ تیموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("یەکم. نامەێ تیموتاوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sdh)", () => {
		expect(p.parse("دویم تیموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("دویم. تیموتاوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sdh)", () => {
		expect(p.parse("تیتوس 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sdh)", () => {
		expect(p.parse("نامه وه فیلیمون 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sdh)", () => {
		expect(p.parse("عبرانییل 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sdh)", () => {
		expect(p.parse("یاقوب 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sdh)", () => {
		expect(p.parse("یەکم پتروس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("یەکم. پتروس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sdh)", () => {
		expect(p.parse("دویم پتروس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("دویم. پتروس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sdh)", () => {
		expect(p.parse("یەهودا 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (sdh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (sdh)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("یەکم یوحەنا - سێیەم یوحەنا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("یەکم یوحەنا – سێیەم یوحەنا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("یەکم یوحەنا — سێیەم یوحەنا").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tly.js";

describe("Localized book Rev (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tly)", () => {
		expect(p.parse("یوحنا موکاشیفَه 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tly)", () => {
		expect(p.parse("مَتّی 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tly)", () => {
		expect(p.parse("مَرقُس 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tly)", () => {
		expect(p.parse("انجیل لوقا 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tly)", () => {
		expect(p.parse("یوحنا اوّلین نامَه 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tly)", () => {
		expect(p.parse("یوحنا دوّمین نامَه 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tly)", () => {
		expect(p.parse("یوحنا سوّمین نامَه 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tly)", () => {
		expect(p.parse("یوحنا 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tly)", () => {
		expect(p.parse("رَسولون اَعمال 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tly)", () => {
		expect(p.parse("رومی کلیسارا نامه 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tly)", () => {
		expect(p.parse("اوّلین نامَه قورَنتیانیرا 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("اوّلین. نامَه قورَنتیانیرا 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tly)", () => {
		expect(p.parse("دوومین نامه قرنتیانیرا 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tly)", () => {
		expect(p.parse("نامَه کُولُسی کلیسا را 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tly)", () => {
		expect(p.parse("نامه غلاطیَه کلیسارا 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tly)", () => {
		expect(p.parse("نامَه اَفسوسی کلیسارا 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tly)", () => {
		expect(p.parse("نامَه فیلیپی کلیسا را 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 2Thess (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tly)", () => {
		expect(p.parse("دوّمین نامَه تَسالونیکی کلیسا را 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tly)", () => {
		expect(p.parse("اوّلین نامَه تَسالونیکی کلیسا را 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("اوّلین. نامَه تَسالونیکی کلیسا را 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Tim (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tly)", () => {
		expect(p.parse("دِوُّمین نامَه تیموتائوسیرا 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tly)", () => {
		expect(p.parse("اوّلین نامَه تیموتائوسیرا 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("اوّلین. نامَه تیموتائوسیرا 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tly)", () => {
		expect(p.parse("نامَه تیتوسیرا 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tly)", () => {
		expect(p.parse("نامَه فیلیمونیرا 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tly)", () => {
		expect(p.parse("نامَه، عِبرانیه نَتاجَه مسیحیونرا 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tly)", () => {
		expect(p.parse("یعقوبی نامَه 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tly)", () => {
		expect(p.parse("پطروسی اوّلین نامَه 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tly)", () => {
		expect(p.parse("پطروسی دومین نامه 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tly)", () => {
		expect(p.parse("یهودا نامه 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (tly)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (tly)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("یوحنا اوّلین نامَه - یوحنا سوّمین نامَه").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("یوحنا اوّلین نامَه – یوحنا سوّمین نامَه").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("یوحنا اوّلین نامَه — یوحنا سوّمین نامَه").osis()).toEqual("1John.1-3John.1");
	});
});

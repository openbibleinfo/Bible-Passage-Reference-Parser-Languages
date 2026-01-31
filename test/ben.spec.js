"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ben.js";

describe("Localized book Gen (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ben)", () => {
		expect(p.parse("আদি পুস্তক 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("আদিপুস্তক 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("পয়দায়েশ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("পয়দা 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("আদি 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ben)", () => {
		expect(p.parse("যাত্রা পুস্তক 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("যাত্রাপুস্তক 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("যাত্রা 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("হিজরত 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("হিজ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ben)", () => {
		expect(p.parse("লেবীয় পুন্তক। 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("লেবীয় পুস্তক 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("লেবীয় 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("লেবী 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ben)", () => {
		expect(p.parse("গণনা পুস্তক 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("গণনাপুস্তক। 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("গণনাপুস্তক 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("শুমারী 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("গণনা 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("গণ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ben)", () => {
		expect(p.parse("যিরমিয়ের বিলাপ। 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("যিরমিয়র বিলাপ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("বিলাপ গীতি 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("বিলাপ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("বিলা 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("মাতম 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ben)", () => {
		expect(p.parse("প্রকাশিত বাক্য। 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("প্রকাশিত কালাম 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("প্রকাশিত বাক্য 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("প্রকাশিত 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("প্র.বা. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("প্রকাশ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("প্রকা 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Josh (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ben)", () => {
		expect(p.parse("যিহোশূয়ের পুস্তক। 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("যিহোশূয়ের পুস্তক 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("যিহোশূয় 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ইউসা 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("যিহো 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ben)", () => {
		expect(p.parse("বিচারপতি ও জননায়কদের বিবরণ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("বিচারকর্ত্তৃগণের বিবরণ। 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("বিচারকর্ত্তৃগণের বিবরণ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("বিচারকর্ত্তৃগণে 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("বিচারকর্ত্তৃগণ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("বিচারকর্তৃগণ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("কাজীগণ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("বিচারক 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("বিচার 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("কাজী 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("বিচা 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ben)", () => {
		expect(p.parse("রূতের বিবরণ। 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("রূথের কাহিনী 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("রূতের বিবরণ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("রূতে 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("রূত 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("রূথ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ben)", () => {
		expect(p.parse("যিশাইয় ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("যিশাইয় ভাববাদীর পুস্তক 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ইশাইয়া 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("যিশাইয় 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("যিশা 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ইশা 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("যিশ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ben)", () => {
		expect(p.parse("1 শমূয়েলে। 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 শমুয়েলে 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 শামুয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 শমূয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 শামু 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 শমু 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 শমূ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. শমূয়েলে। 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. শমুয়েলে 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. শামুয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. শমূয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. শামু 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. শমু 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. শমূ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ শমূয়েলে। 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ শমুয়েলে 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ শামুয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ শমূয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ শামু 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ শমু 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ শমূ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১. শমূয়েলে। 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১. শমুয়েলে 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১. শামুয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১. শমূয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১. শামু 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১. শমু 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১. শমূ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ben)", () => {
		expect(p.parse("2 শমূয়েলে। 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 শমুয়েলে 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 শামুয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 শমূয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 শামু 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 শমু 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 শমূ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. শমূয়েলে। 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. শমুয়েলে 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. শামুয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. শমূয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. শামু 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. শমু 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. শমূ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ শমূয়েলে। 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ শমুয়েলে 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ শামুয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ শমূয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ শামু 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ শমু 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ শমূ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২. শমূয়েলে। 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২. শমুয়েলে 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২. শামুয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২. শমূয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২. শামু 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২. শমু 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২. শমূ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ben)", () => {
		expect(p.parse("শমূয়েলের প্রথম পুস্তক 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1শমূ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ben)", () => {
		expect(p.parse("শমূয়েলের দ্বিতীয় পুস্তক 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2শমূ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ben)", () => {
		expect(p.parse("1 বাদশাহ্‌নামা 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 বাদশাহ্‌ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 রাজাবলি। 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 রাজাবলি 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 রাজা 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. বাদশাহ্‌নামা 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. বাদশাহ্‌ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. রাজাবলি। 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. রাজাবলি 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. রাজা 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১ বাদশাহ্‌নামা 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১ বাদশাহ্‌ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১ রাজাবলি। 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১ রাজাবলি 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১ রাজা 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১. বাদশাহ্‌নামা 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১. বাদশাহ্‌ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১. রাজাবলি। 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১. রাজাবলি 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("১. রাজা 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ben)", () => {
		expect(p.parse("2 বাদশাহ্‌নামা 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 বাদশাহ্‌ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 রাজাবলি। 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 রাজাবলি 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 রাজা 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. বাদশাহ্‌নামা 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. বাদশাহ্‌ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. রাজাবলি। 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. রাজাবলি 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. রাজা 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২ বাদশাহ্‌নামা 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২ বাদশাহ্‌ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২ রাজাবলি। 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২ রাজাবলি 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২ রাজা 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২. বাদশাহ্‌নামা 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২. বাদশাহ্‌ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২. রাজাবলি। 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২. রাজাবলি 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("২. রাজা 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ben)", () => {
		expect(p.parse("রাজাবলির প্রথম খণ্ড 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1রাজা 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ben)", () => {
		expect(p.parse("রাজাবলির দ্বিতীয় খণ্ড 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2রাজা 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ben)", () => {
		expect(p.parse("1 খান্দাননামা 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 খান্দান‌ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 বংশাবলি। 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 বংশাবলি 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 বংশা 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 বংশ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. খান্দাননামা 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. খান্দান‌ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. বংশাবলি। 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. বংশাবলি 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. বংশা 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. বংশ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১ খান্দাননামা 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১ খান্দান‌ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১ বংশাবলি। 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১ বংশাবলি 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১ বংশা 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১ বংশ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১. খান্দাননামা 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১. খান্দান‌ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১. বংশাবলি। 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১. বংশাবলি 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১. বংশা 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("১. বংশ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ben)", () => {
		expect(p.parse("2 খান্দাননামা 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 খান্দান‌ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 বংশাবলি। 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 বংশাবলি 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 বংশা 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 বংশ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. খান্দাননামা 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. খান্দান‌ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. বংশাবলি। 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. বংশাবলি 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. বংশা 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. বংশ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২ খান্দাননামা 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২ খান্দান‌ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২ বংশাবলি। 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২ বংশাবলি 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২ বংশা 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২ বংশ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২. খান্দাননামা 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২. খান্দান‌ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২. বংশাবলি। 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২. বংশাবলি 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২. বংশা 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("২. বংশ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ben)", () => {
		expect(p.parse("বংশাবলির প্রথম খণ্ড 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1বংশা 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1বংশ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ben)", () => {
		expect(p.parse("বংশাবলির দ্বিতীয় খণ্ড 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2বংশা 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2বংশ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ben)", () => {
		expect(p.parse("উযায়ের 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ইষ্রা। 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ইষ্রা 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ben)", () => {
		expect(p.parse("নহিমিয়ের পুস্তক। 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("নহিমিয়র পুস্তক 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("নহিমিয়া 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("নহিমিয়ে 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("নহিমিয় 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("নহি 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ben)", () => {
		expect(p.parse("ইষ্টেরের বিবরণ। 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ইষ্টেরের বিবরণ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ইষ্টের 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ইষ্টে 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ইষ্ট 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ben)", () => {
		expect(p.parse("ইয়োবের বিবরণ। 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ইয়োবের বিবরণ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("আইয়ুব 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ইয়োবে 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ইয়োব 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("আইউব 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ইয়ো 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ben)", () => {
		expect(p.parse("গীতসংহিতা । 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("গীতসংহিতা 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("জবুর শরীফ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("জবুর 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("গীত 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ben)", () => {
		expect(p.parse("হিতোপদেশ। 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("হিতোপদেশ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("মেসাল 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("হিতোপ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("হিতো 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("হিত 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ben)", () => {
		expect(p.parse("হেদায়েতকারী 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("উপদেশক। 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("উপদেশক 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("উপ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ben)", () => {
		expect(p.parse("সোলায়মানের শীর 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("শলোমনের পরমগীত 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("সোলায়মান 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("পরমগীত। 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("পরমগীত 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("পরম 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("পর 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ben)", () => {
		expect(p.parse("যিরমিয় ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("যিরমিয় ভাববাদীর পুস্তক 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ইয়ারমিয়া 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("যিরমিয় 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ইয়ার 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("যির 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ben)", () => {
		expect(p.parse("যিহিষ্কেল ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("যিহিষ্কেল ভাববাদীর পুস্তক 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("যিহিষ্কেল 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("যিহিস্কেল 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ইহিস্কেল 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("যিহি 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ইহি 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ben)", () => {
		expect(p.parse("দানিয়েলের পুস্তক। 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("দানিয়েলের পুস্তক 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("দানিয়াল 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("দানিয়েল 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("দানি 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ben)", () => {
		expect(p.parse("হোশেয় ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("হোশেয় ভাববাদীর পুস্তক 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("হোসিয়া 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("হোশেয় 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("হোশে 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ben)", () => {
		expect(p.parse("যোয়েল ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("যোয়েল ভাববাদীর পুস্তক 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("যোয়েল 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("যোয়ে 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ben)", () => {
		expect(p.parse("আমোষ ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("আমোষ ভাববাদীর পুস্তক 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("আমোজ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("আমোষ 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("আমোস 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("আমো 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ben)", () => {
		expect(p.parse("ওবদিয় ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ওবদিয় ভাববাদীর পুস্তক 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ওবদিয় 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ওব 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ben)", () => {
		expect(p.parse("যোনা ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("যোনা ভাববাদীর পুস্তক 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ইউনুস 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("যোনা 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ben)", () => {
		expect(p.parse("মীখা ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("মীখা ভাববাদীর পুস্তক 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("মিকাহ্‌ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("মিকাহ্ 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("মীখা 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ben)", () => {
		expect(p.parse("নহূম ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("নহূম ভাববাদীর পুস্তক 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("নাহূম 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("নহুম 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("নহূম 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("নহূ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ben)", () => {
		expect(p.parse("হবক্‌কূক ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হবক‌্কূক ভাববাদীর পুস্তক 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হাবাক্কুক 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হবক্‌কুক 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হবক্‌কূক 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হবক‌্কূক 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হবককূক 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হবক্‌ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হবক্ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হবক 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("হব 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ben)", () => {
		expect(p.parse("সফনিয় ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("সফনিয় ভাববাদীর পুস্তক 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("সফনিয় 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("সফ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ben)", () => {
		expect(p.parse("হগয় ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("হগয় ভাববাদীর পুস্তক 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("হগয় 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("হগ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ben)", () => {
		expect(p.parse("সখরিয় ভাববাদীর পুস্তক 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("জাকারিয়া 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("সখরিয়। 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("সখরিয় 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("জাকা 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("সখ 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ben)", () => {
		expect(p.parse("মালাখি ভাববাদীর পুস্তক। 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("মালাখি ভাববাদীর পুস্তক 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("মালাখি 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("মালা 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("মাল 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ben)", () => {
		expect(p.parse("মথিলিখিত সুসমাচার 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("মথি। 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("মথি 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ben)", () => {
		expect(p.parse("Márk-Likhita Susamácár 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("মার্কলিখিত সুসমাচার 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("মার্ক। 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("মার্ক 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Már 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ben)", () => {
		expect(p.parse("লূকলিখিত সুসমাচার 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("লুক। 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("লুক 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("লূক 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ben)", () => {
		expect(p.parse("যোহনের প্রথম পত্র 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1যোহ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ben)", () => {
		expect(p.parse("যোহনের দ্বিতীয় পত্র 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2যোহ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ben)", () => {
		expect(p.parse("যোহনের তৃতীয় পত্র 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩ ইউহোন্না 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 যোহন। 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 যোহন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩ যোহন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩ যোহ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("৩ ইউ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3যোহ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ben)", () => {
		expect(p.parse("1 ইউহোন্না 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 যোহন। 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 যোহ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ইউ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ইউহোন্না 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. যোহন। 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. যোহ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ইউ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১ ইউহোন্না 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১ যোহন। 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১ যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১ যোহ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১ ইউ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১. ইউহোন্না 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১. যোহন। 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১. যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১. যোহ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("১. ইউ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ben)", () => {
		expect(p.parse("2 ইউহোন্না 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 যোহন। 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 যোহ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ইউ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ইউহোন্না 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. যোহন। 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. যোহ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ইউ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২ ইউহোন্না 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২ যোহন। 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২ যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২ যোহ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২ ইউ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২. ইউহোন্না 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২. যোহন। 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২. যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২. যোহ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("২. ইউ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ben)", () => {
		expect(p.parse("যোহনলিখিত সুসমাচার 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ইউহোন্না 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("যোহন। 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("যোহন 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("যোহ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ইউ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("যো 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ben)", () => {
		expect(p.parse("প্রেরিতদের কার্য্য-বিবরণ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("প্রেরিতদের কার্য্য 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("প্রেরিত্‌ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("প্রেরিত। 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("প্রেরিত 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("প্রেরি 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ben)", () => {
		expect(p.parse("রোমীয়দের প্রতি পত্র 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("রোমীয়। 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("রোমীয় 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("রোমী 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("রোম 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ben)", () => {
		expect(p.parse("1 করিন্থীয়। 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 করিন্থীয় 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 করি 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 কর 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. করিন্থীয়। 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. করিন্থীয় 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. করি 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. কর 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১ করিন্থীয়। 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১ করিন্থীয় 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১ করি 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১ কর 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১. করিন্থীয়। 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১. করিন্থীয় 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১. করি 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১. কর 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ben)", () => {
		expect(p.parse("2 করিন্থীয়। 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 করিন্থীয় 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 করি 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 কর 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. করিন্থীয়। 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. করিন্থীয় 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. করি 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. কর 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২ করিন্থীয়। 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২ করিন্থীয় 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২ করি 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২ কর 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২. করিন্থীয়। 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২. করিন্থীয় 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২. করি 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২. কর 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ben)", () => {
		expect(p.parse("করিন্থীয়দের প্রতি প্রথম পত্র 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1করি 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ben)", () => {
		expect(p.parse("করিন্থীয়দের প্রতি দ্বিতীয় পত্র 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2করি 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২করি 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ben)", () => {
		expect(p.parse("কলসীয়দের প্রতি পত্র 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("কলসীয়। 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("কলসীয় 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("কল 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ben)", () => {
		expect(p.parse("গালাতীয়দের প্রতি পত্র 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("গালাতীয়। 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("গালাতীয় 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("গালা 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ben)", () => {
		expect(p.parse("ইফিষীয়দের প্রতি পত্র 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ইফিষীয়। 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ইফিষীয় 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ইফিসীয় 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ইফি 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ben)", () => {
		expect(p.parse("ফিলিপীয়দের প্রতি পত্র 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ফিলিপীয়। 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ফিলিপীয় 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ফিলি 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ben)", () => {
		expect(p.parse("1 থিষলনীকীয়। 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 থিষলনিকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 থিষ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. থিষলনীকীয়। 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. থিষলনিকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. থিষ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১ থিষলনীকীয়। 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১ থিষলনিকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১ থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১ থিষ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১. থিষলনীকীয়। 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১. থিষলনিকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১. থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১. থিষ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ben)", () => {
		expect(p.parse("2 থিষলনীকীয়। 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 থিষলনিকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 থিষ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. থিষলনীকীয়। 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. থিষলনিকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. থিষ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২ থিষলনীকীয়। 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২ থিষলনিকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২ থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২ থিষ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২. থিষলনীকীয়। 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২. থিষলনিকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২. থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২. থিষ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ben)", () => {
		expect(p.parse("থিষলনীকীয়দের প্রতি প্রথম পত্র 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1থিষ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ben)", () => {
		expect(p.parse("থিষলনীকীয়দের প্রতি দ্বিতীয় পত্র 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2থিষ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ben)", () => {
		expect(p.parse("1 তীমথিয়ে। 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 তিমথির 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 তিমথি 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 তিম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 তীম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. তীমথিয়ে। 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. তিমথির 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. তিমথি 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. তিম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. তীম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১ তীমথিয়ে। 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১ তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১ তিমথির 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১ তিমথি 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১ তিম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১ তীম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তীমথিয়ে। 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তিমথির 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তিমথি 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তিম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("১. তীম 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ben)", () => {
		expect(p.parse("2 তীমথিয়ে। 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 তিমথির 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 তিমথি 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 তিম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 তীম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. তীমথিয়ে। 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. তিমথির 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. তিমথি 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. তিম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. তীম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২ তীমথিয়ে। 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২ তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২ তিমথির 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২ তিমথি 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২ তিম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২ তীম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তীমথিয়ে। 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তিমথির 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তিমথি 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তিম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("২. তীম 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ben)", () => {
		expect(p.parse("তীমথিয়ের প্রতি প্রথম পত্র 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1তিম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1তীম 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ben)", () => {
		expect(p.parse("তীমথিয়ের প্রতি দ্বিতীয় পত্র 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2তিম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2তীম 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ben)", () => {
		expect(p.parse("তীতের প্রতি পত্র 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("তীতের 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("তীত। 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("তীত 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ben)", () => {
		expect(p.parse("ফিলীমনের প্রতি পত্র 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলীমনে। 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলীমনের 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলীমনে 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলীমন 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলী 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ben)", () => {
		expect(p.parse("ইব্রীয়দের প্রতি পত্র 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ইব্রীয়। 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ইব্রীয় 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ইবরানী 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("হিব্রু 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ইব্রী 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ben)", () => {
		expect(p.parse("যাকোবের পত্র 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ইয়াকুব 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("যাকোবে। 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("যাকোবে 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("যাকোব 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("যাকো 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ben)", () => {
		expect(p.parse("1 পিতর। 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 পিতর 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. পিতর। 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. পিতর 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১ পিতর। 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১ পিতর 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১. পিতর। 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("১. পিতর 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ben)", () => {
		expect(p.parse("2 পিতর। 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 পিতর 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. পিতর। 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. পিতর 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২ পিতর। 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২ পিতর 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২. পিতর। 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("২. পিতর 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ben)", () => {
		expect(p.parse("পিতরের প্রথম পত্র 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1পিত 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ben)", () => {
		expect(p.parse("পিতরের দ্বিতীয় পত্র 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2পিত 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Deut (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ben)", () => {
		expect(p.parse("দ্বিতীয় বিবরণ। 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("দ্বিতীয় বিবরণ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("দ্বি. বি. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("দ্বি:বি: 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("দ্বি.বি. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("দ্বিতীয় 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("দ্বি বি 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("দ্বিতী 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Jude (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ben)", () => {
		expect(p.parse("যিহূদার পত্র 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("যিহূদা। 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("যিহুদা 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("যিহূদা 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("এহুদা 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("যিহূ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (ben)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (ben)", () => {
		expect(p.parse("১ করিন্থীয় 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("১ শামুয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ শমূয়েল 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("১ থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 থিষলনীকীয় 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("১ তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("২ করিন্থীয় 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("২ শামুয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ শমূয়েল 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("২ থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 থিষলনীকীয় 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("২ তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("কলসীয় 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("দানিয়াল 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("দানিয়েল 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("দ্বিতীয় বিবরণ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("হেদায়েতকারী 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ইফিষীয় 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("উযায়ের 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("গালাতীয় 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("পয়দায়েশ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("পয়দা 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("হগয় 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("হগয় ভাববাদীর পুস্তক 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ইব্রীয় 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("হোসিয়া 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("হোশেয় 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ইশাইয়া 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("যিশাইয় 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ইয়াকুব 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ইয়ারমিয়া 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ইয়ার 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("যিরমিয় 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("আইয়ুব 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ইয়োব 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("যোয়েল 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("যিহোশূয় 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("লেবীয় 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("লেবীয় পুস্তক 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("নহিমিয়া 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("নহিমিয় 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ওবদিয় 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ফিলিপীয় 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("রোমীয় 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("সোলায়মানের শীর 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("সোলায়মান 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("জাকারিয়া 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("সখরিয় 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("সফনিয় 1:1").osis()).toEqual("Zeph.1.1");
	});
});

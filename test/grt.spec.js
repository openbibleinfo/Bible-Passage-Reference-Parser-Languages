"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/grt.js";

describe("Localized book Rev (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (grt)", () => {
		expect(p.parse("ফারাকগিবা খাৎথা 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ফারাকা 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (grt)", () => {
		expect(p.parse("মথি 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (grt)", () => {
		expect(p.parse("মার্ক 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (grt)", () => {
		expect(p.parse("লূক 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (grt)", () => {
		expect(p.parse("1 যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 যোহ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. যোহন 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. যোহ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (grt)", () => {
		expect(p.parse("2 যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 যোহ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. যোহন 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. যোহ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (grt)", () => {
		expect(p.parse("3 যোহন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 যোহ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. যোহন 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. যোহ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (grt)", () => {
		expect(p.parse("যোহননা 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("যোহন 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (grt)", () => {
		expect(p.parse("ওয়াত্তেতারাংনা 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ওয়াত্তেতা 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (grt)", () => {
		expect(p.parse("রোমানরাংনা 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("রোম 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (grt)", () => {
		expect(p.parse("1 করিন্থী 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. করিন্থী 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (grt)", () => {
		expect(p.parse("2 করিন্থী 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. করিন্থী 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (grt)", () => {
		expect(p.parse("1ম করিন্থীয়রাংনা 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (grt)", () => {
		expect(p.parse("2য় করিন্থীয়রাংনা 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (grt)", () => {
		expect(p.parse("কলসীয়রাংনা 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("কলসী 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (grt)", () => {
		expect(p.parse("গালাতীয়রাংনা 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("গালা 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (grt)", () => {
		expect(p.parse("ইফিষীয়রাংনা 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ইফি 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (grt)", () => {
		expect(p.parse("ফিলিপীয়রাংনা 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ফিলি 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (grt)", () => {
		expect(p.parse("1 থিষলনীকী 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 থিষলনী 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. থিষলনীকী 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. থিষলনী 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (grt)", () => {
		expect(p.parse("2 থিষলনীকীয়রাংনা 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 থিষলনী 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. থিষলনীকীয়রাংনা 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. থিষলনী 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (grt)", () => {
		expect(p.parse("1 তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 তীম 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. তীম 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (grt)", () => {
		expect(p.parse("2 তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 তীম 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. তীম 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (grt)", () => {
		expect(p.parse("তীতনা 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("তীত 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (grt)", () => {
		expect(p.parse("ফিলীমনা 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ফিলী 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (grt)", () => {
		expect(p.parse("ইব্রীয়রাংনা 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ইব্রী 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (grt)", () => {
		expect(p.parse("যাকোব 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 2Pet (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (grt)", () => {
		expect(p.parse("২ পিতর 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (grt)", () => {
		expect(p.parse("1 পিতর 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. পিতর 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (grt)", () => {
		expect(p.parse("2 পিতর 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. পিতর 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (grt)", () => {
		expect(p.parse("পিতর 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (grt)", () => {
		expect(p.parse("যিহূদা 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("যিহূ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (grt)", () => {
		expect(p.parse("1ম করিন্থীয়রাংনা 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 যোহ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 তীমথিয় 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2য় করিন্থীয়রাংনা 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 যোহ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 থিষলনীকীয়রাংনা 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 তীমথিয় 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("3 যোহ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("ওয়াত্তেতারাংনা 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ওয়াত্তেতা 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("কলসীয়রাংনা 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ইফিষীয়রাংনা 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("গালাতীয়রাংনা 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ইব্রীয়রাংনা 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("যাকোব 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("যোহননা 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("যোহন 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ফিলিপীয়রাংনা 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("রোম 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Parser helper should handle book ranges (grt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (grt)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 যোহন - 3 যোহন").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 যোহন – 3 যোহন").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 যোহন — 3 যোহন").osis()).toEqual("1John.1-3John.1");
	});
});

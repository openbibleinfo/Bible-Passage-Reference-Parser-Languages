"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bvr.js";

describe("Localized book Rev (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bvr)", () => {
		expect(p.parse("Borrich 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bvr)", () => {
		expect(p.parse("Metiyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bvr)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bvr)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bvr)", () => {
		expect(p.parse("1 Jon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bvr)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bvr)", () => {
		expect(p.parse("3 Jon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bvr)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bvr)", () => {
		expect(p.parse("Jama Aburr-ji 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bvr)", () => {
		expect(p.parse("Rowm Aburr-guyinda 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rowm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bvr)", () => {
		expect(p.parse("1 Gorint Aburr-guyinda 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Gorint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Gorint Aburr-guyinda 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Gorint 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bvr)", () => {
		expect(p.parse("2 Gorint Aburr-guyinda 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Gorint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Gorint Aburr-guyinda 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Gorint 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bvr)", () => {
		expect(p.parse("Gulóchay Aburr-guyinda 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Gulóchay 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bvr)", () => {
		expect(p.parse("Galéychiya Aburr-guyinda 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galéychiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bvr)", () => {
		expect(p.parse("Apachach Aburr-guyinda 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Apachach 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bvr)", () => {
		expect(p.parse("Bilipay 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bvr)", () => {
		expect(p.parse("1 Jechalónika Aburr-guyinda 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Jechalónika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Jechalónika Aburr-guyinda 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Jechalónika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bvr)", () => {
		expect(p.parse("2 Jechalónika Aburr-guyinda 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Jechalónika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Jechalónika Aburr-guyinda 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Jechalónika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bvr)", () => {
		expect(p.parse("1 Dimati 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Dimati 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bvr)", () => {
		expect(p.parse("2 Dimati 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Dimati 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bvr)", () => {
		expect(p.parse("Daytach 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bvr)", () => {
		expect(p.parse("Baylíman 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bvr)", () => {
		expect(p.parse("Yibru Yerrcha 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bvr)", () => {
		expect(p.parse("Jeymch 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bvr)", () => {
		expect(p.parse("1 Birta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Birta 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bvr)", () => {
		expect(p.parse("2 Birta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Birta 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bvr)", () => {
		expect(p.parse("Jut 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (bvr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bvr)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jon - 3 Jon").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jon – 3 Jon").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jon — 3 Jon").osis()).toEqual("1John.1-3John.1");
	});
});

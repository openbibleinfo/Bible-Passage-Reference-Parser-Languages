"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yns.js";

describe("Localized book Rev (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (yns)", () => {
		expect(p.parse("Imɛɛy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Imɛ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (yns)", () => {
		expect(p.parse("Màtay 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Màt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (yns)", () => {
		expect(p.parse("Malakɔ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mlk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yns)", () => {
		expect(p.parse("Lukà 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yns)", () => {
		expect(p.parse("1Yw 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yns)", () => {
		expect(p.parse("2Yw 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (yns)", () => {
		expect(p.parse("3 Ywan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yw 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yns)", () => {
		expect(p.parse("1 Ywan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ywan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yns)", () => {
		expect(p.parse("2 Ywan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ywan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (yns)", () => {
		expect(p.parse("Ywan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ywn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (yns)", () => {
		expect(p.parse("Isal 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ian 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (yns)", () => {
		expect(p.parse("Lɔmà 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lɔm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yns)", () => {
		expect(p.parse("1 Bàkɔlintɔ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bàkɔlintɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yns)", () => {
		expect(p.parse("2 Bàkɔlintɔ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bàkɔlintɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yns)", () => {
		expect(p.parse("1Kɔ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yns)", () => {
		expect(p.parse("2Kɔ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (yns)", () => {
		expect(p.parse("Kɔlɔsay 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (yns)", () => {
		expect(p.parse("Ngalàtyà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Nga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (yns)", () => {
		expect(p.parse("Ɛfɛsɔ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (yns)", () => {
		expect(p.parse("Filipo 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yns)", () => {
		expect(p.parse("1 Tɛsalɔnikà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalɔnikà 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yns)", () => {
		expect(p.parse("2 Tɛsalɔnikà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalɔnikà 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yns)", () => {
		expect(p.parse("1Tɛ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yns)", () => {
		expect(p.parse("2Tɛ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yns)", () => {
		expect(p.parse("1 Tumàtɛ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tumàtɛ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yns)", () => {
		expect(p.parse("2 Tumàtɛ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tumàtɛ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yns)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yns)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (yns)", () => {
		expect(p.parse("Titɔ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (yns)", () => {
		expect(p.parse("Filemɔ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (yns)", () => {
		expect(p.parse("Ɛbɛlyɔ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ɛbɛ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (yns)", () => {
		expect(p.parse("Zyak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zya 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yns)", () => {
		expect(p.parse("1 Petɔlà 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petɔlà 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yns)", () => {
		expect(p.parse("2 Petɔlà 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petɔlà 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yns)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yns)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (yns)", () => {
		expect(p.parse("Yude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (yns)", () => {
		expect(p.parse("1 Bàkɔlintɔ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Petɔlà 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Tɛsalɔnikà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tumàtɛ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2  Bàkɔlintɔ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Petɔlà 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Tɛsalɔnikà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tumàtɛ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ngalàtyà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Lukà 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Màtay 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Màt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Lɔmà 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Parser helper should handle book ranges (yns)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (yns)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yw - 3 Ywan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yw – 3 Ywan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yw — 3 Ywan").osis()).toEqual("1John.1-3John.1");
	});
});

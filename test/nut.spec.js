"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nut.js";

describe("Localized book Rev (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nut)", () => {
		expect(p.parse("Khảy Ọc 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Khảy 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nut)", () => {
		expect(p.parse("Ma-thi-ơ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nut)", () => {
		expect(p.parse("Mahc 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nut)", () => {
		expect(p.parse("Lu-ca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nut)", () => {
		expect(p.parse("I Dahng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Dahng 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nut)", () => {
		expect(p.parse("II Dahng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Dahng 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nut)", () => {
		expect(p.parse("III Dahng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Dahng 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nut)", () => {
		expect(p.parse("Dahng 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nut)", () => {
		expect(p.parse("Cóhng Vệc 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nut)", () => {
		expect(p.parse("Lô-ma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lô 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nut)", () => {
		expect(p.parse("I Cô-lihng-tô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Cô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cô-lihng-tô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Cô 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nut)", () => {
		expect(p.parse("II Cô-lihng-tô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Cô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cô-lihng-tô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Cô 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nut)", () => {
		expect(p.parse("Cô-lô-sê 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Côl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nut)", () => {
		expect(p.parse("Ca-la-ti 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ca 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nut)", () => {
		expect(p.parse("Ê-fê-sô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Êfê 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nut)", () => {
		expect(p.parse("Fi-líhp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nut)", () => {
		expect(p.parse("I Tê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tê 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tê-sa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tê 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nut)", () => {
		expect(p.parse("II Tê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tê 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tê-sa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tê 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nut)", () => {
		expect(p.parse("I Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nut)", () => {
		expect(p.parse("II Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nut)", () => {
		expect(p.parse("Tíht 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nut)", () => {
		expect(p.parse("Fi-lê-môn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nut)", () => {
		expect(p.parse("Hê-bơ-lơ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hê 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nut)", () => {
		expect(p.parse("Da-cơ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Da 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nut)", () => {
		expect(p.parse("I Fi-e-lơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Fi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Fi-e-lơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Fi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nut)", () => {
		expect(p.parse("II Fi-e-lơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Fi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Fi-e-lơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Fi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nut)", () => {
		expect(p.parse("Du-đe 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Du 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (nut)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (nut)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Dahng - III Dahng").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Dahng – III Dahng").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Dahng — III Dahng").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kvq.js";

describe("Localized book Rev (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kvq)", () => {
		expect(p.parse("Dèd́è̆lî̄ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Dè̆lî̄ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kvq)", () => {
		expect(p.parse("Mattĕo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kvq)", () => {
		expect(p.parse("Mărko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Măr 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kvq)", () => {
		expect(p.parse("Lŭka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lŭk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kvq)", () => {
		expect(p.parse("1 Zowănnī 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Zo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zowănnī 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kvq)", () => {
		expect(p.parse("2 Zowănnī 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Zo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zowănnī 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kvq)", () => {
		expect(p.parse("3 Zowănnī 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Zo 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zowănnī 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kvq)", () => {
		expect(p.parse("Zowănnī 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zo 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kvq)", () => {
		expect(p.parse("Thodŏpho 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kvq)", () => {
		expect(p.parse("Rŏma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rŏ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kvq)", () => {
		expect(p.parse("1 Kòrĭn 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kòr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kòrĭn 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kòr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kvq)", () => {
		expect(p.parse("2 Kòrĭn 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kòr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kòrĭn 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kòr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kvq)", () => {
		expect(p.parse("Kòlò̆ssia 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòlò̆ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kvq)", () => {
		expect(p.parse("Galatiăno 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kvq)", () => {
		expect(p.parse("Ephè̆sus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ephè̆ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kvq)", () => {
		expect(p.parse("Philippiăno 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kvq)", () => {
		expect(p.parse("1 Thèssalò̆nika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thèssa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thèssalò̆nika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thèssa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kvq)", () => {
		expect(p.parse("2 Thèssalò̆nika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thèssa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thèssalò̆nika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thèssa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kvq)", () => {
		expect(p.parse("1 Timò̆theo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timò̆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timò̆theo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timò̆ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kvq)", () => {
		expect(p.parse("2 Timò̆theo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timò̆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timò̆theo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timò̆ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kvq)", () => {
		expect(p.parse("Tĭto 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tĭ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kvq)", () => {
		expect(p.parse("Philemòn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phile 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kvq)", () => {
		expect(p.parse("Hebrè̆u 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kvq)", () => {
		expect(p.parse("Zăkomo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ză 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kvq)", () => {
		expect(p.parse("1 Petru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kvq)", () => {
		expect(p.parse("2 Petru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kvq)", () => {
		expect(p.parse("Jŭda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jŭ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (kvq)", () => {
		expect(p.parse("1 Kòrĭn 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kòr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Zowănnī 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Thèssalò̆nika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thèssa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Timò̆theo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timò̆ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Kòrĭn 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kòr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Zowănnī 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Thèssalò̆nika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thèssa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Timò̆theo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timò̆ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("3 Zowănnī 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Thodŏpho 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kòlò̆ssia 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòlò̆ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ephè̆sus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ephè̆ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Galatiăno 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Hebrè̆u 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Zăkomo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ză 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zowănnī 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jŭda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jŭ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lŭka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lŭk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Mărko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Măr 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mattĕo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Philippiăno 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philemòn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Dèd́è̆lî̄ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Dè̆lî̄ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rŏma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rŏ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Tĭto 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tĭ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Parser helper should handle book ranges (kvq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kvq)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zowănnī - 3 Zowănnī").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zowănnī – 3 Zowănnī").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zowănnī — 3 Zowănnī").osis()).toEqual("1John.1-3John.1");
	});
});

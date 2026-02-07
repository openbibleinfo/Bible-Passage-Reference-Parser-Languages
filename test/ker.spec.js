"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ker.js";

describe("Localized book Rev (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ker)", () => {
		expect(p.parse("Veɗe 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ker)", () => {
		expect(p.parse("Matiye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ker)", () => {
		expect(p.parse("Markə 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ker)", () => {
		expect(p.parse("Liki 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ker)", () => {
		expect(p.parse("I Zaŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Zaŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ker)", () => {
		expect(p.parse("II Zaŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Zaŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ker)", () => {
		expect(p.parse("III Zaŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Zaŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ker)", () => {
		expect(p.parse("Zaŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ker)", () => {
		expect(p.parse("Joŋre 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ker)", () => {
		expect(p.parse("Romeŋ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ker)", () => {
		expect(p.parse("I Koreŋtəŋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Koreŋtəŋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ker)", () => {
		expect(p.parse("II Koreŋtəŋ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Koreŋtəŋ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ker)", () => {
		expect(p.parse("Kolosiŋ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ker)", () => {
		expect(p.parse("Galatiŋ 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ker)", () => {
		expect(p.parse("Efesiŋ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ker)", () => {
		expect(p.parse("Filipiŋ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ker)", () => {
		expect(p.parse("1 Tesalonikiŋ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ker)", () => {
		expect(p.parse("II Tesalonikiŋ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonikiŋ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ker)", () => {
		expect(p.parse("I Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ker)", () => {
		expect(p.parse("II Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ker)", () => {
		expect(p.parse("Titi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ker)", () => {
		expect(p.parse("Filemoŋ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ker)", () => {
		expect(p.parse("Hebereŋ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ker)", () => {
		expect(p.parse("Zaki 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ker)", () => {
		expect(p.parse("I Piyer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Piyer 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ker)", () => {
		expect(p.parse("II Piyer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Piyer 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ker)", () => {
		expect(p.parse("Zudi 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (ker)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ker)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Zaŋ - III Zaŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Zaŋ – III Zaŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("I Zaŋ — III Zaŋ").osis()).toEqual("1John.1-3John.1");
	});
});

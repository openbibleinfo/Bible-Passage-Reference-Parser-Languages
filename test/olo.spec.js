"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/olo.js";

describe("Localized book Rev (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (olo)", () => {
		expect(p.parse("Jiävindy Iivanale 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Jiäv. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (olo)", () => {
		expect(p.parse("Matfei 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matf. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (olo)", () => {
		expect(p.parse("Mark. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marku 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (olo)", () => {
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (olo)", () => {
		expect(p.parse("Iivanan enzimäine kirjaine 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (olo)", () => {
		expect(p.parse("Iivanan toine kirjaine 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (olo)", () => {
		expect(p.parse("Iivanan kolmas kirjaine 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Iiv. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (olo)", () => {
		expect(p.parse("1 Iiv. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Iiv. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Enzimäine Iiv. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Enzimäine. Iiv. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (olo)", () => {
		expect(p.parse("2 Iiv. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Iiv. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Toine Iiv. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Toine. Iiv. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (olo)", () => {
		expect(p.parse("Iivan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Iiv. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (olo)", () => {
		expect(p.parse("Apostoloin ruavot 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap.r. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (olo)", () => {
		expect(p.parse("Kirjaine riimalazile 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Riim. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (olo)", () => {
		expect(p.parse("1 kirjaine korinfalazile 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. kirjaine korinfalazile 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Enzimäine kirjaine korinfalazile 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Enzimäine Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Enzimäine. kirjaine korinfalazile 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Enzimäine. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (olo)", () => {
		expect(p.parse("2 kirjaine korinfalazile 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. kirjaine korinfalazile 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toine kirjaine korinfalazile 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toine Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toine. kirjaine korinfalazile 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toine. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (olo)", () => {
		expect(p.parse("Kirjaine kolossalazile 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (olo)", () => {
		expect(p.parse("Kirjaine galatalazile 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (olo)", () => {
		expect(p.parse("Kirjaine efesalazile 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (olo)", () => {
		expect(p.parse("Kirjaine filippalazile 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (olo)", () => {
		expect(p.parse("1 kirjaine fessalonikalazile 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Fess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. kirjaine fessalonikalazile 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Fess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Enzimäine kirjaine fessalonikalazile 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Enzimäine Fess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Enzimäine. kirjaine fessalonikalazile 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Enzimäine. Fess. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (olo)", () => {
		expect(p.parse("2 kirjaine fessalonikalazile 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Fess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. kirjaine fessalonikalazile 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Fess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toine kirjaine fessalonikalazile 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toine Fess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toine. kirjaine fessalonikalazile 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toine. Fess. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (olo)", () => {
		expect(p.parse("1 kirjaine Timofeile 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. kirjaine Timofeile 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Enzimäine kirjaine Timofeile 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Enzimäine. kirjaine Timofeile 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (olo)", () => {
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (olo)", () => {
		expect(p.parse("2 kirjaine Timofeile 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. kirjaine Timofeile 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toine kirjaine Timofeile 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toine Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toine. kirjaine Timofeile 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toine. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (olo)", () => {
		expect(p.parse("Kirjaine Tiitale 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (olo)", () => {
		expect(p.parse("Kirjaine Filimonale 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filim. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (olo)", () => {
		expect(p.parse("Kirjaine jevreilöile 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Jevr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (olo)", () => {
		expect(p.parse("Juakoin kirjaine 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Juak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (olo)", () => {
		expect(p.parse("1 Pedr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Enzimäine Pedr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Enzimäine. Pedr. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (olo)", () => {
		expect(p.parse("2 Pedr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Toine Pedr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Toine. Pedr. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (olo)", () => {
		expect(p.parse("Pedrin enzimäine kirjaine 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (olo)", () => {
		expect(p.parse("Pedrin toine kirjaine 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (olo)", () => {
		expect(p.parse("Juudan kirjaine 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juud. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (olo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (olo)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Iivanan enzimäine kirjaine - Iivanan kolmas kirjaine").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Iivanan enzimäine kirjaine – Iivanan kolmas kirjaine").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Iivanan enzimäine kirjaine — Iivanan kolmas kirjaine").osis()).toEqual("1John.1-3John.1");
	});
});

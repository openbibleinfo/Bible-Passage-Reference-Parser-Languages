"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/krl.js";

describe("Localized book Rev (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (krl)", () => {
		expect(p.parse("Jiävintä Iivanalla 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Jiäv. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (krl)", () => {
		expect(p.parse("Matvein jevanheli 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matv. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (krl)", () => {
		expect(p.parse("Markin jevanheli 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (krl)", () => {
		expect(p.parse("Lukan jevanheli 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (krl)", () => {
		expect(p.parse("Iivanan enšimmäini kirjani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (krl)", () => {
		expect(p.parse("Iivanan toini kirjani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (krl)", () => {
		expect(p.parse("Iivanan kolmaš kirjani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Iiv. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (krl)", () => {
		expect(p.parse("1. Iiv. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Enšimmäini Iiv. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Enšimmäini. Iiv. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (krl)", () => {
		expect(p.parse("2. Iiv. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Toini Iiv. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Toini. Iiv. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (krl)", () => {
		expect(p.parse("Iivanan jevanheli 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Iiv. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (krl)", () => {
		expect(p.parse("Apostolien kirja 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap.k. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (krl)", () => {
		expect(p.parse("Kirjani riimalaisilla 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Riim. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (krl)", () => {
		expect(p.parse("1. kirjani korinfilaisilla 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Enšimmäini kirjani korinfilaisilla 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Enšimmäini Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Enšimmäini. kirjani korinfilaisilla 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Enšimmäini. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (krl)", () => {
		expect(p.parse("2. kirjani korinfilaisilla 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toini kirjani korinfilaisilla 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toini Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toini. kirjani korinfilaisilla 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toini. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (krl)", () => {
		expect(p.parse("Kirjani kolossalaisilla 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (krl)", () => {
		expect(p.parse("Kirjani galatalaisilla 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (krl)", () => {
		expect(p.parse("Kirjani efessalaisilla 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (krl)", () => {
		expect(p.parse("Kirjani hilippiläisillä 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Hil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (krl)", () => {
		expect(p.parse("1. kirjani fessalonikkalaisilla 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Fess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Enšimmäini kirjani fessalonikkalaisilla 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Enšimmäini Fess. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Enšimmäini. kirjani fessalonikkalaisilla 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Enšimmäini. Fess. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (krl)", () => {
		expect(p.parse("2. kirjani fessalonikkalaisilla 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Fess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toini kirjani fessalonikkalaisilla 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toini Fess. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toini. kirjani fessalonikkalaisilla 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toini. Fess. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (krl)", () => {
		expect(p.parse("1. kirjani Timofeilla 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Enšimmäini kirjani Timofeilla 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Enšimmäini Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Enšimmäini. kirjani Timofeilla 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Enšimmäini. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (krl)", () => {
		expect(p.parse("2. kirjani Timofeilla 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toini kirjani Timofeilla 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toini Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toini. kirjani Timofeilla 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toini. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (krl)", () => {
		expect(p.parse("Kirjani Tiitalla 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (krl)", () => {
		expect(p.parse("Kirjani Filimonilla 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (krl)", () => {
		expect(p.parse("Kirjani jevreilöillä 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Jevr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (krl)", () => {
		expect(p.parse("Juakon kirjani 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Juak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (krl)", () => {
		expect(p.parse("1. Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Enšimmäini Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Enšimmäini. Petr. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (krl)", () => {
		expect(p.parse("2. Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Toini Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Toini. Petr. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (krl)", () => {
		expect(p.parse("Petrin enšimmäini kirjani 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (krl)", () => {
		expect(p.parse("Petrin toini kirjani 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (krl)", () => {
		expect(p.parse("Juutan kirjani 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juut. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (krl)", () => {
		expect(p.parse("Enšimmäini kirjani korinfilaisilla 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Iivanan enšimmäini kirjani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Petrin enšimmäini kirjani 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Enšimmäini kirjani fessalonikkalaisilla 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Enšimmäini kirjani Timofeilla 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Iivanan kolmaš kirjani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Kirjani jevreilöillä 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Kirjani hilippiläisillä 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Jiävintä Iivanalla 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Jiäv. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Parser helper should handle book ranges (krl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (krl)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Iivanan enšimmäini kirjani - Iivanan kolmaš kirjani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Iivanan enšimmäini kirjani – Iivanan kolmaš kirjani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Iivanan enšimmäini kirjani — Iivanan kolmaš kirjani").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/vep.js";

describe("Localized book Rev (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (vep)", () => {
		expect(p.parse("Joannan nägudez 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Näg. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (vep)", () => {
		expect(p.parse("Matvei 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matv. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (vep)", () => {
		expect(p.parse("Mark. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (vep)", () => {
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (vep)", () => {
		expect(p.parse("Joannan ezmäine kirjeine 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (vep)", () => {
		expect(p.parse("Joannan toine kirjeine 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (vep)", () => {
		expect(p.parse("Joannan koumanz' kirjeine 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joan. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (vep)", () => {
		expect(p.parse("1. Joan. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ezmäine Joan. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ezmäine. Joan. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (vep)", () => {
		expect(p.parse("2. Joan. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Toine Joan. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Toine. Joan. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (vep)", () => {
		expect(p.parse("Joan. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (vep)", () => {
		expect(p.parse("Apostoloiden tegod 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap.t. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (vep)", () => {
		expect(p.parse("Kirjeine rimalaižile 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rim. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (vep)", () => {
		expect(p.parse("1. kirjeine korinfalaižile 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ezmäine kirjeine korinfalaižile 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ezmäine Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ezmäine. kirjeine korinfalaižile 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ezmäine. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (vep)", () => {
		expect(p.parse("2. kirjeine korinfalaižile 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toine kirjeine korinfalaižile 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toine Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toine. kirjeine korinfalaižile 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Toine. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (vep)", () => {
		expect(p.parse("Kirjeine kolossalaižile 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (vep)", () => {
		expect(p.parse("Kirjeine galatalaižile 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (vep)", () => {
		expect(p.parse("Kirjeine efesalaižile 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (vep)", () => {
		expect(p.parse("Kirjeine filippalaižile 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (vep)", () => {
		expect(p.parse("1. kirjeine fessalonikalaižile 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Fes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ezmäine kirjeine fessalonikalaižile 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ezmäine Fes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ezmäine. kirjeine fessalonikalaižile 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ezmäine. Fes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (vep)", () => {
		expect(p.parse("2. kirjeine fessalonikalaižile 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Fes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toine kirjeine fessalonikalaižile 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toine Fes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toine. kirjeine fessalonikalaižile 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Toine. Fes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (vep)", () => {
		expect(p.parse("1. kirjeine Timofejale 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ezmäine kirjeine Timofejale 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ezmäine Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ezmäine. kirjeine Timofejale 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ezmäine. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (vep)", () => {
		expect(p.parse("2. kirjeine Timofejale 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toine kirjeine Timofejale 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toine Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toine. kirjeine Timofejale 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Toine. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (vep)", () => {
		expect(p.parse("Kirjeine Titale 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (vep)", () => {
		expect(p.parse("Kirjeine Filimonale 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filim. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (vep)", () => {
		expect(p.parse("Kirjeine evrejalaižile 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Evr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (vep)", () => {
		expect(p.parse("Jakovan kirjeine 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (vep)", () => {
		expect(p.parse("1. Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ezmäine Petr. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ezmäine. Petr. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (vep)", () => {
		expect(p.parse("2. Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Toine Petr. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Toine. Petr. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (vep)", () => {
		expect(p.parse("Petran ezmäine kirjeine 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (vep)", () => {
		expect(p.parse("Petran toine kirjeine 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (vep)", () => {
		expect(p.parse("Judan kirjeine 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (vep)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (vep)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Joannan ezmäine kirjeine - Joannan koumanz' kirjeine").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Joannan ezmäine kirjeine – Joannan koumanz' kirjeine").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Joannan ezmäine kirjeine — Joannan koumanz' kirjeine").osis()).toEqual("1John.1-3John.1");
	});
});

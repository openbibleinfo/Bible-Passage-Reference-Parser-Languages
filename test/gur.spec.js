"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gur.js";

describe("Localized book Rev (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gur)", () => {
		expect(p.parse("Lilegere 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pukre 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lil 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Puk 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gur)", () => {
		expect(p.parse("Amatie 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gur)", () => {
		expect(p.parse("Amarkɩ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gur)", () => {
		expect(p.parse("Aluki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luki 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gur)", () => {
		expect(p.parse("1Zã 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gur)", () => {
		expect(p.parse("2Zã 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gur)", () => {
		expect(p.parse("3 Yɔn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Zã 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Zã 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gur)", () => {
		expect(p.parse("1 Yɔn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Zã 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yɔn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zã 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gur)", () => {
		expect(p.parse("2 Yɔn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Zã 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yɔn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zã 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gur)", () => {
		expect(p.parse("Azã 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yɔn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gur)", () => {
		expect(p.parse("Tõoma 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tuuma 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tuum 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tõo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gur)", () => {
		expect(p.parse("Aromduma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("aRom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gur)", () => {
		expect(p.parse("1 Korintiduma 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korẽntɩ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiduma 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korẽntɩ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gur)", () => {
		expect(p.parse("2 Korintiduma 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korẽntɩ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiduma 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korẽntɩ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gur)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gur)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gur)", () => {
		expect(p.parse("Kolosiduma 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolɔsɩ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gur)", () => {
		expect(p.parse("Galatiyaduma 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatɩ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gur)", () => {
		expect(p.parse("Ɛfisuduma 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛɛzɩ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gur)", () => {
		expect(p.parse("Filipiduma 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gur)", () => {
		expect(p.parse("1 Tɛsalonikaduma 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalonikaduma 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gur)", () => {
		expect(p.parse("2 Tɛsalonikaduma 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonikaduma 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gur)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gur)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gur)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timõtɩ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timõtɩ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gur)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timõtɩ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timõtɩ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gur)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gur)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gur)", () => {
		expect(p.parse("Taitusi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Atiti 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tait 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gur)", () => {
		expect(p.parse("Filemɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Afilmõ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Afi 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gur)", () => {
		expect(p.parse("Hiburuduma 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebre 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gur)", () => {
		expect(p.parse("Yemesi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Azakɩ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yem 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gur)", () => {
		expect(p.parse("1 Pɩyɛɛrɩ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɩyɛɛrɩ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gur)", () => {
		expect(p.parse("2 Pɩyɛɛrɩ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɩyɛɛrɩ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gur)", () => {
		expect(p.parse("1Pɩ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gur)", () => {
		expect(p.parse("2Pɩ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gur)", () => {
		expect(p.parse("Azudi 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (gur)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (gur)", () => {
		expect(p.parse("1 Korẽntɩ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Zã 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Timõtɩ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Korẽntɩ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Zã 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Timõtɩ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("3 Zã 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tõoma 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Azã 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Afilmõ 1:1").osis()).toEqual("Phlm.1.1");
	});
});

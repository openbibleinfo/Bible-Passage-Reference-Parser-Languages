"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/eko.js";

describe("Localized book Gen (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (eko)", () => {
		expect(p.parse("Mwanzo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mwa 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (eko)", () => {
		expect(p.parse("Olaawo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ola 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (eko)", () => {
		expect(p.parse("Othoonyeziwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Oth 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (eko)", () => {
		expect(p.parse("Zaapuura 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zaa 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jonah (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (eko)", () => {
		expect(p.parse("Yuunusa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yuu 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (eko)", () => {
		expect(p.parse("Matewuzhu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (eko)", () => {
		expect(p.parse("Maaruku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maa 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (eko)", () => {
		expect(p.parse("Luuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (eko)", () => {
		expect(p.parse("1Ya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (eko)", () => {
		expect(p.parse("2Ya 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (eko)", () => {
		expect(p.parse("3 Yaahaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ya 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (eko)", () => {
		expect(p.parse("1 Yaahaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yaahaya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (eko)", () => {
		expect(p.parse("2 Yaahaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yaahaya 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (eko)", () => {
		expect(p.parse("Yaahaya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yaa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (eko)", () => {
		expect(p.parse("Khaazi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kha 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (eko)", () => {
		expect(p.parse("aRooma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("aRo 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (eko)", () => {
		expect(p.parse("1 Akorintiyu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akorintiyu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (eko)", () => {
		expect(p.parse("2 Akorintiyu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akorintiyu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (eko)", () => {
		expect(p.parse("1Ak 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (eko)", () => {
		expect(p.parse("2Ak 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (eko)", () => {
		expect(p.parse("Akoloosu 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("aKo 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (eko)", () => {
		expect(p.parse("Akaalata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Aka 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (eko)", () => {
		expect(p.parse("Ayeefezu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Aye 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (eko)", () => {
		expect(p.parse("Afiliipu 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("aFi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (eko)", () => {
		expect(p.parse("1 Atizaloonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Atizaloonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (eko)", () => {
		expect(p.parse("2 Atizaloonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Atizaloonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (eko)", () => {
		expect(p.parse("1At 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (eko)", () => {
		expect(p.parse("2At 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (eko)", () => {
		expect(p.parse("1 Timootiyu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timootiyu 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (eko)", () => {
		expect(p.parse("2 Timootiyu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timootiyu 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (eko)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (eko)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (eko)", () => {
		expect(p.parse("Tiitu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tii 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (eko)", () => {
		expect(p.parse("Filimooni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (eko)", () => {
		expect(p.parse("Meepereewu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Mee 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (eko)", () => {
		expect(p.parse("Tiyaaku 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tiy 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (eko)", () => {
		expect(p.parse("1 Pheeturu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pheeturu 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (eko)", () => {
		expect(p.parse("2 Pheeturu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pheeturu 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (eko)", () => {
		expect(p.parse("1Ph 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (eko)", () => {
		expect(p.parse("2Ph 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (eko)", () => {
		expect(p.parse("Yuuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yda 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (eko)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (eko)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Ya - 3 Yaahaya").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Ya – 3 Yaahaya").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Ya — 3 Yaahaya").osis()).toEqual("1John.1-3John.1");
	});
});

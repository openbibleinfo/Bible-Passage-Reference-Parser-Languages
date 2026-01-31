"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bni.js";

describe("Localized book Gen (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bni)", () => {
		expect(p.parse("Mabandela 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mab 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bni)", () => {
		expect(p.parse("Ma Bokusoli 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Bokusoli 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Isa (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bni)", () => {
		expect(p.parse("Yesaya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book Ps (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bni)", () => {
		expect(p.parse("Nzembo 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Dan (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bni)", () => {
		expect(p.parse("Danyele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bni)", () => {
		expect(p.parse("Osea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bni)", () => {
		expect(p.parse("Yeole 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bni)", () => {
		expect(p.parse("Amosa 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bni)", () => {
		expect(p.parse("Obadaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bni)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bni)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bni)", () => {
		expect(p.parse("Nauma 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bni)", () => {
		expect(p.parse("Abakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Abak 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bni)", () => {
		expect(p.parse("Sepanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sep 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bni)", () => {
		expect(p.parse("Agai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bni)", () => {
		expect(p.parse("Zekalaya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bni)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bni)", () => {
		expect(p.parse("Na Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bni)", () => {
		expect(p.parse("Na Malako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Malako 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bni)", () => {
		expect(p.parse("Na Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bni)", () => {
		expect(p.parse("Limbe Yoane 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoane 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bni)", () => {
		expect(p.parse("1 Yoane 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoane 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Limbe Yoane 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Limbe Yoane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Limbe. Yoane 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Limbe. Yoane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ombe Yoane 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ombe Yoane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ombe. Yoane 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ombe. Yoane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bni)", () => {
		expect(p.parse("2 Yoane 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoane 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Limbe Yoane 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Limbe Yoane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Limbe. Yoane 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Limbe. Yoane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ombe Yoane 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ombe Yoane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ombe. Yoane 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ombe. Yoane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bni)", () => {
		expect(p.parse("Na Yoane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoane 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bni)", () => {
		expect(p.parse("Ma Ntoma 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ntoma 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bni)", () => {
		expect(p.parse("Ombe Ba‐Loma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ba-Loma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bni)", () => {
		expect(p.parse("1 Ba‐Kolinto 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ba-Kolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ba‐Kolinto 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ba-Kolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Limbe Ba‐Kolinto 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Limbe Ba-Kolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Limbe. Ba‐Kolinto 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Limbe. Ba-Kolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ombe Ba‐Kolinto 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ombe Ba-Kolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ombe. Ba‐Kolinto 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ombe. Ba-Kolinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bni)", () => {
		expect(p.parse("2 Ba‐Kolinto 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ba-Kolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ba‐Kolinto 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ba-Kolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Limbe Ba‐Kolinto 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Limbe Ba-Kolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Limbe. Ba‐Kolinto 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Limbe. Ba-Kolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ombe Ba‐Kolinto 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ombe Ba-Kolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ombe. Ba‐Kolinto 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ombe. Ba-Kolinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bni)", () => {
		expect(p.parse("Ba‐Kolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosai 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bni)", () => {
		expect(p.parse("Ba‐Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bni)", () => {
		expect(p.parse("Ombe B’Epeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bni)", () => {
		expect(p.parse("Ba‐Pilipoi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilipoi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bni)", () => {
		expect(p.parse("1 Ba‐Tesalonike 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ba-Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ba‐Tesalonike 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ba-Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Limbe Ba‐Tesalonike 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Limbe Ba-Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Limbe. Ba‐Tesalonike 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Limbe. Ba-Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ombe Ba‐Tesalonike 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ombe Ba-Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ombe. Ba‐Tesalonike 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ombe. Ba-Tesalonike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bni)", () => {
		expect(p.parse("2 Ba‐Tesalonike 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ba-Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ba‐Tesalonike 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ba-Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Limbe Ba‐Tesalonike 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Limbe Ba-Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Limbe. Ba‐Tesalonike 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Limbe. Ba-Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ombe Ba‐Tesalonike 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ombe Ba-Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ombe. Ba‐Tesalonike 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ombe. Ba-Tesalonike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bni)", () => {
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Limbe Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Limbe. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ombe Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ombe. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bni)", () => {
		expect(p.parse("Timoteo 1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bni)", () => {
		expect(p.parse("2 Timoteo 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Limbe Timoteo 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Limbe Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Limbe. Timoteo 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Limbe. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ombe Timoteo 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ombe Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ombe. Timoteo 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ombe. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bni)", () => {
		expect(p.parse("Ombe Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bni)", () => {
		expect(p.parse("Ombe Pilemono 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilem 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bni)", () => {
		expect(p.parse("Ombe B’Ebele 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("B’Ebele 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bni)", () => {
		expect(p.parse("Limbe Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bni)", () => {
		expect(p.parse("1 Petelo 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petelo 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Limbe Petelo 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Limbe Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Limbe. Petelo 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Limbe. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ombe Petelo 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ombe Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ombe. Petelo 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ombe. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bni)", () => {
		expect(p.parse("2 Petelo 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petelo 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Limbe Petelo 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Limbe Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Limbe. Petelo 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Limbe. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ombe Petelo 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ombe Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ombe. Petelo 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ombe. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bni)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bni)", () => {
		expect(p.parse("Limbe Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

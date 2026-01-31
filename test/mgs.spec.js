"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mgs.js";

describe("Localized book Rev (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mgs)", () => {
		expect(p.parse("Mafunukuliko 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Maf 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mgs)", () => {
		expect(p.parse("Zaburi Sya Daud 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zabur 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Matt (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mgs)", () => {
		expect(p.parse("Mattayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mgs)", () => {
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mgs)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mgs)", () => {
		expect(p.parse("III Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mgs)", () => {
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mgs)", () => {
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mgs)", () => {
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mgs)", () => {
		expect(p.parse("Makitiko Ga Maapostolo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Makitiko 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mgs)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mgs)", () => {
		expect(p.parse("1 Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Korintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mgs)", () => {
		expect(p.parse("2 Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Korintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mgs)", () => {
		expect(p.parse("Kolosse 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mgs)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mgs)", () => {
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mgs)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mgs)", () => {
		expect(p.parse("1 Thessalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thessalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thessalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mgs)", () => {
		expect(p.parse("2 Thessalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thessalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thessalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mgs)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mgs)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mgs)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mgs)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mgs)", () => {
		expect(p.parse("Hebrayo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mgs)", () => {
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mgs)", () => {
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mgs)", () => {
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mgs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mgs)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

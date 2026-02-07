"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/jaa.js";

describe("Localized book Gen (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (jaa)", () => {
		expect(p.parse("Senisi 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Sen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (jaa)", () => {
		expect(p.parse("Yeso Kirisito ene‑bona 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Teoso ka Yama Namo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yk 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Yn 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Dan (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (jaa)", () => {
		expect(p.parse("Tanieo 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Matt (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (jaa)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (jaa)", () => {
		expect(p.parse("Maroko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (jaa)", () => {
		expect(p.parse("Roka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Rok 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Rk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jaa)", () => {
		expect(p.parse("Yowaho daidi 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yw 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jaa)", () => {
		expect(p.parse("Yowaho yoto‑ke 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yw 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (jaa)", () => {
		expect(p.parse("Yowaho faina 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yowao 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yo 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yw 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (jaa)", () => {
		expect(p.parse("1 Yowao 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yo 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowao 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (jaa)", () => {
		expect(p.parse("2 Yowao 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yo 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowao 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (jaa)", () => {
		expect(p.parse("Yowaho 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yowao 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yw 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (jaa)", () => {
		expect(p.parse("Yeso‑ka yo‑yose mai tamine 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ato 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Yes 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (jaa)", () => {
		expect(p.parse("Homa 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Hom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Hm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jaa)", () => {
		expect(p.parse("Korito daidi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jaa)", () => {
		expect(p.parse("Korito yoto‑ke 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (jaa)", () => {
		expect(p.parse("1 Korito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (jaa)", () => {
		expect(p.parse("2 Korito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (jaa)", () => {
		expect(p.parse("Koroso 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kor 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (jaa)", () => {
		expect(p.parse("Karatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Karasia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kar 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (jaa)", () => {
		expect(p.parse("Efesiyo 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (jaa)", () => {
		expect(p.parse("Firibo 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Frb 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jaa)", () => {
		expect(p.parse("Tesaronika daidi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (jaa)", () => {
		expect(p.parse("Tesaronika yoto‑ke 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (jaa)", () => {
		expect(p.parse("1 Tesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (jaa)", () => {
		expect(p.parse("2 Tesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jaa)", () => {
		expect(p.parse("1 Timotio 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotio 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jaa)", () => {
		expect(p.parse("2 Timotio 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotio 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (jaa)", () => {
		expect(p.parse("Timoti daidi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (jaa)", () => {
		expect(p.parse("Timoti yoto‑ke 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (jaa)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (jaa)", () => {
		expect(p.parse("Firemo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Firimo 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Frm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (jaa)", () => {
		expect(p.parse("Ihayeo Mati 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebereo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Iha 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (jaa)", () => {
		expect(p.parse("Tiyako 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tiako 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tia 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tiy 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jaa)", () => {
		expect(p.parse("1 Betiro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Be 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Betiro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Be 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jaa)", () => {
		expect(p.parse("2 Betiro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Be 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Betiro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Be 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (jaa)", () => {
		expect(p.parse("Bedoro daidi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Be 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (jaa)", () => {
		expect(p.parse("Bedoro yoto‑ke 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Be 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (jaa)", () => {
		expect(p.parse("Yoda‑ka yama hani 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yota 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yod 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yot 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (jaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (jaa)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yowaho daidi - Yowaho faina").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yowaho daidi – Yowaho faina").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yowaho daidi — Yowaho faina").osis()).toEqual("1John.1-3John.1");
	});
});

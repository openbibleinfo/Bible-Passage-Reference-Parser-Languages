"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rwk.js";

describe("Localized book Rev (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rwk)", () => {
		expect(p.parse("Urambuyo lwa Yohane 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ura Yoh 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rwk)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rwk)", () => {
		expect(p.parse("Mariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rwk)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rwk)", () => {
		expect(p.parse("Barua ya Yohane ya kararu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rwk)", () => {
		expect(p.parse("1 ya Yohane ya mbele 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ya Yohane ya mbele 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Barua ya Yohane ya mbele 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Barua Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Barua. ya Yohane ya mbele 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Barua. Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rwk)", () => {
		expect(p.parse("2 ya Yohane ya kavili 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ya Yohane ya kavili 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Barua ya Yohane ya kavili 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Barua Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Barua. ya Yohane ya kavili 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Barua. Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rwk)", () => {
		expect(p.parse("Yohane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rwk)", () => {
		expect(p.parse("Mitanie ya varumi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Var 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rwk)", () => {
		expect(p.parse("Barua ya Varome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("VaRo 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rwk)", () => {
		expect(p.parse("1 ya Vakorinto ya mbele 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Vakor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ya Vakorinto ya mbele 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vakor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Barua ya Vakorinto ya mbele 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Barua Vakor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Barua. ya Vakorinto ya mbele 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Barua. Vakor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rwk)", () => {
		expect(p.parse("2 ya Vakorinto ya kavili 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Vakor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ya Vakorinto ya kavili 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vakor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Barua ya Vakorinto ya kavili 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Barua Vakor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Barua. ya Vakorinto ya kavili 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Barua. Vakor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rwk)", () => {
		expect(p.parse("Barua ya Vakolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Vako 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rwk)", () => {
		expect(p.parse("Barua ya Vagalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Vag 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rwk)", () => {
		expect(p.parse("Barua ya Vaefeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Vae 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rwk)", () => {
		expect(p.parse("Barua ya Vafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Vaf 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rwk)", () => {
		expect(p.parse("1 ya Vatesalonike ya mbele 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Vat 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ya Vatesalonike ya mbele 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vat 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Barua ya Vatesalonike ya mbele 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Barua Vat 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Barua. ya Vatesalonike ya mbele 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Barua. Vat 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rwk)", () => {
		expect(p.parse("2 ya Vatesalonike ya kavili 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Vat 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ya Vatesalonike ya kavili 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vat 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Barua ya Vatesalonike ya kavili 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Barua Vat 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Barua. ya Vatesalonike ya kavili 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Barua. Vat 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rwk)", () => {
		expect(p.parse("1 ya Timoteo ya mbele 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ya Timoteo ya mbele 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Barua ya Timoteo ya mbele 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Barua. ya Timoteo ya mbele 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rwk)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rwk)", () => {
		expect(p.parse("2 ya Timoteo ya kavili 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ya Timoteo ya kavili 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Barua ya Timoteo ya kavili 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Barua Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Barua. ya Timoteo ya kavili 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Barua. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rwk)", () => {
		expect(p.parse("Barua ya Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rwk)", () => {
		expect(p.parse("Barua ya Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rwk)", () => {
		expect(p.parse("Barua ya Vaebrania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Vaeb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rwk)", () => {
		expect(p.parse("Barua ya Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rwk)", () => {
		expect(p.parse("1 ya Petiro ya mbele 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ya Petiro ya mbele 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Barua ya Petiro ya mbele 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Barua. ya Petiro ya mbele 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rwk)", () => {
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rwk)", () => {
		expect(p.parse("2 ya Petiro ya kavili 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ya Petiro ya kavili 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Barua ya Petiro ya kavili 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Barua Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Barua. ya Petiro ya kavili 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Barua. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rwk)", () => {
		expect(p.parse("Barua ya Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (rwk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (rwk)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ya Yohane ya mbele - Barua ya Yohane ya kararu").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ya Yohane ya mbele – Barua ya Yohane ya kararu").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 ya Yohane ya mbele — Barua ya Yohane ya kararu").osis()).toEqual("1John.1-3John.1");
	});
});

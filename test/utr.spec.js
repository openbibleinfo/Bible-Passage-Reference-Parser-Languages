"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/utr.js";

describe("Localized book Rev (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (utr)", () => {
		expect(p.parse("Iba 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (utr)", () => {
		expect(p.parse("iMatiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("iMat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (utr)", () => {
		expect(p.parse("iMaki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("iMak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (utr)", () => {
		expect(p.parse("iLuku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("iLuk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (utr)", () => {
		expect(p.parse("1iJɔn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (utr)", () => {
		expect(p.parse("2iJɔn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (utr)", () => {
		expect(p.parse("3 iJɔn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3iJɔn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (utr)", () => {
		expect(p.parse("1 iJɔn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. iJɔn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (utr)", () => {
		expect(p.parse("2 iJɔn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. iJɔn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (utr)", () => {
		expect(p.parse("iJɔn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (utr)", () => {
		expect(p.parse("Okyɔɔkyɔ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Okyɔ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (utr)", () => {
		expect(p.parse("Emi iRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("EiRo 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (utr)", () => {
		expect(p.parse("1 Emi iKorinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Emi iKorinti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (utr)", () => {
		expect(p.parse("2 Emi iKorinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Emi iKorinti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (utr)", () => {
		expect(p.parse("1iKor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (utr)", () => {
		expect(p.parse("2iKor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (utr)", () => {
		expect(p.parse("Emi iKolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("EiKo 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (utr)", () => {
		expect(p.parse("Emi iGalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("iGal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (utr)", () => {
		expect(p.parse("Emi Efesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (utr)", () => {
		expect(p.parse("Emi iFyilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("EiFy 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (utr)", () => {
		expect(p.parse("1 Emi iTesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Emi iTesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (utr)", () => {
		expect(p.parse("2 Emi iTesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Emi iTesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (utr)", () => {
		expect(p.parse("1EiTe 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (utr)", () => {
		expect(p.parse("2EiTe 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (utr)", () => {
		expect(p.parse("1 Itimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Itimoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (utr)", () => {
		expect(p.parse("2 Itimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Itimoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (utr)", () => {
		expect(p.parse("1iTim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (utr)", () => {
		expect(p.parse("2iTim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (utr)", () => {
		expect(p.parse("iTaitusu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("iTai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (utr)", () => {
		expect(p.parse("iFyilimɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("iFyi 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (utr)", () => {
		expect(p.parse("Emi iHibru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("EiHi 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (utr)", () => {
		expect(p.parse("iJɛnsi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("iJɛn 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (utr)", () => {
		expect(p.parse("1 iPyita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. iPyita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (utr)", () => {
		expect(p.parse("2 iPyita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. iPyita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (utr)", () => {
		expect(p.parse("1iPit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (utr)", () => {
		expect(p.parse("2iPit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (utr)", () => {
		expect(p.parse("iJudu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("iJud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (utr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (utr)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1iJɔn - 3 iJɔn").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1iJɔn – 3 iJɔn").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1iJɔn — 3 iJɔn").osis()).toEqual("1John.1-3John.1");
	});
});

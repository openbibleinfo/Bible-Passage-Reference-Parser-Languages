"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mbj.js";

describe("Localized book Rev (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mbj)", () => {
		expect(p.parse("Apocalipse 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apokarip 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mbj)", () => {
		expect(p.parse("Mateus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matew 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mbj)", () => {
		expect(p.parse("Maah-Ko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marcos 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mbj)", () => {
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Rukas 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mbj)", () => {
		expect(p.parse("1 Jowãw 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 João 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jowãw 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. João 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mbj)", () => {
		expect(p.parse("2 Jowãw 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 João 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jowãw 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. João 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mbj)", () => {
		expect(p.parse("3 Jowãw 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 João 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jowãw 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. João 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mbj)", () => {
		expect(p.parse("Jowãw 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("João 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mbj)", () => {
		expect(p.parse("Atos 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mbj)", () => {
		expect(p.parse("Romanos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mbj)", () => {
		expect(p.parse("1 Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korĩn 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Coríntios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korĩn 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mbj)", () => {
		expect(p.parse("2 Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korĩn 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Coríntios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korĩn 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mbj)", () => {
		expect(p.parse("Colossenses 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Korosa 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mbj)", () => {
		expect(p.parse("Gálatas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Garata 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mbj)", () => {
		expect(p.parse("Efésios 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mbj)", () => {
		expect(p.parse("Filipenses 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pirip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mbj)", () => {
		expect(p.parse("1 Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaronika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mbj)", () => {
		expect(p.parse("2 Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaronika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mbj)", () => {
		expect(p.parse("1 Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tsimoot 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timóteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tsimoot 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mbj)", () => {
		expect(p.parse("2 Tsimoot 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tsimoot 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mbj)", () => {
		expect(p.parse("Timóteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mbj)", () => {
		expect(p.parse("Tiit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mbj)", () => {
		expect(p.parse("Filemom 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Piremon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mbj)", () => {
		expect(p.parse("Hebreus 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eberew 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mbj)", () => {
		expect(p.parse("Tsijaag 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Tiago 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mbj)", () => {
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peed 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peed 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mbj)", () => {
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peed 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peed 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mbj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mbj)", () => {
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
	});
});

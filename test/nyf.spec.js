"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nyf.js";

describe("Localized book Rev (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nyf)", () => {
		expect(p.parse("Ugunulo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ugun 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nyf)", () => {
		expect(p.parse("Math'ayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Math' 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nyf)", () => {
		expect(p.parse("Mariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nyf)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nyf)", () => {
		expect(p.parse("1 Johana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nyf)", () => {
		expect(p.parse("2 Johana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nyf)", () => {
		expect(p.parse("3 Johana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nyf)", () => {
		expect(p.parse("Johana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nyf)", () => {
		expect(p.parse("Mahendo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mahe 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nyf)", () => {
		expect(p.parse("Arumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Arum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nyf)", () => {
		expect(p.parse("1 Akorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Akor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nyf)", () => {
		expect(p.parse("2 Akorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Akor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nyf)", () => {
		expect(p.parse("Akolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("aKol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nyf)", () => {
		expect(p.parse("Agalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("aGal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nyf)", () => {
		expect(p.parse("aEfeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Aefe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nyf)", () => {
		expect(p.parse("aFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("aFil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nyf)", () => {
		expect(p.parse("1 Ath'esalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ath'es 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ath'esalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ath'es 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nyf)", () => {
		expect(p.parse("2 Ath'esalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ath'es 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ath'esalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ath'es 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nyf)", () => {
		expect(p.parse("1 T'imoth'i 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 T'imo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. T'imoth'i 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. T'imo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nyf)", () => {
		expect(p.parse("2 T'imoth'i 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 T'imo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. T'imoth'i 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. T'imo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nyf)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nyf)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nyf)", () => {
		expect(p.parse("Aeburania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Aebu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nyf)", () => {
		expect(p.parse("Jakobu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jako 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nyf)", () => {
		expect(p.parse("1 P'et'ero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P'et 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P'et'ero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P'et 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nyf)", () => {
		expect(p.parse("2 P'et'ero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P'et 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P'et'ero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P'et 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nyf)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (nyf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (nyf)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johana - 3 Johana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johana – 3 Johana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johana — 3 Johana").osis()).toEqual("1John.1-3John.1");
	});
});

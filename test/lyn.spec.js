"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lyn.js";

describe("Localized book Rev (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lyn)", () => {
		expect(p.parse("Sinulo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sin 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lyn)", () => {
		expect(p.parse("Mateu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lyn)", () => {
		expect(p.parse("Maleka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lyn)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lyn)", () => {
		expect(p.parse("1 Jowani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jwn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jowani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jwn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lyn)", () => {
		expect(p.parse("2 Jowani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jwn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jowani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jwn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lyn)", () => {
		expect(p.parse("3 Jowani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jwn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jowani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jwn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lyn)", () => {
		expect(p.parse("Jowani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jwn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lyn)", () => {
		expect(p.parse("Tikezo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tik 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lyn)", () => {
		expect(p.parse("Maloma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Mlm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lyn)", () => {
		expect(p.parse("1 Makolinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Makolinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lyn)", () => {
		expect(p.parse("2 Makolinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Makolinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lyn)", () => {
		expect(p.parse("Makolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Makol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lyn)", () => {
		expect(p.parse("Magalata 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lyn)", () => {
		expect(p.parse("Maefese 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lyn)", () => {
		expect(p.parse("Mafilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Mafil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lyn)", () => {
		expect(p.parse("1 Mateselonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Mate 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Mateselonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Mate 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lyn)", () => {
		expect(p.parse("2 Mateselonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Mate 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Mateselonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Mate 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lyn)", () => {
		expect(p.parse("1 Timoteya 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tmy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteya 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tmy 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lyn)", () => {
		expect(p.parse("2 Timoteya 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tmy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteya 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tmy 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lyn)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lyn)", () => {
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Lim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lyn)", () => {
		expect(p.parse("Mahebelu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Mh 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lyn)", () => {
		expect(p.parse("Jakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lyn)", () => {
		expect(p.parse("1 Pitolosi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitolosi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lyn)", () => {
		expect(p.parse("1Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lyn)", () => {
		expect(p.parse("2 Pitolosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitolosi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lyn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lyn)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

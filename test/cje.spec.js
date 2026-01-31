"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cje.js";

describe("Localized book Rev (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (cje)", () => {
		expect(p.parse("Bơ-àr Pơh Tơbiă Brơi Thơu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pơh 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (cje)", () => {
		expect(p.parse("Mathiơ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cje)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cje)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cje)", () => {
		expect(p.parse("I Jăng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jăng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jng 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cje)", () => {
		expect(p.parse("II Jăng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jăng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jng 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (cje)", () => {
		expect(p.parse("III Jăng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Jng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jăng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Jng 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (cje)", () => {
		expect(p.parse("Jăng 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jng 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cje)", () => {
		expect(p.parse("Bruă Du Mơnih Tơdi-Tơdài 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bruă 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (cje)", () => {
		expect(p.parse("Rôma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rôm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cje)", () => {
		expect(p.parse("I Kôrintô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kôrintô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kô 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cje)", () => {
		expect(p.parse("II Kôrintô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kôrintô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kô 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (cje)", () => {
		expect(p.parse("Kôlôse 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kôl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cje)", () => {
		expect(p.parse("Galati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (cje)", () => {
		expect(p.parse("Ephêsô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (cje)", () => {
		expect(p.parse("Philip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cje)", () => {
		expect(p.parse("I Tesalônika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalônika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cje)", () => {
		expect(p.parse("II Tesalônika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalônika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cje)", () => {
		expect(p.parse("I Timôthe 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timôthe 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cje)", () => {
		expect(p.parse("II Timôthe 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timôthe 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cje)", () => {
		expect(p.parse("Tĭt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (cje)", () => {
		expect(p.parse("Philêmôn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (cje)", () => {
		expect(p.parse("Hebrơ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (cje)", () => {
		expect(p.parse("Jakơ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ja 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cje)", () => {
		expect(p.parse("I Pier 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pier 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cje)", () => {
		expect(p.parse("II Pier 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pier 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (cje)", () => {
		expect(p.parse("Juđe 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ju 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (cje)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (cje)", () => {
		expect(p.parse("I Kôrintô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Jăng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Tesalônika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Timôthe 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("II Kôrintô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Jăng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Tesalônika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Timôthe 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("III Jăng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Bruă Du Mơnih Tơdi-Tơdài 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bruă 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kôlôse 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kôl 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ephêsô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Jăng 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Philêmôn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Bơ-àr Pơh Tơbiă Brơi Thơu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rôma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rôm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Tĭt 1:1").osis()).toEqual("Titus.1.1");
	});
});

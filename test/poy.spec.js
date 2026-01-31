"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/poy.js";

describe("Localized book Rev (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (poy)", () => {
		expect(p.parse("Ugubutulu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ugub 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (poy)", () => {
		expect(p.parse("Matayu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (poy)", () => {
		expect(p.parse("Mariku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (poy)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (poy)", () => {
		expect(p.parse("1Yoha 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (poy)", () => {
		expect(p.parse("2Yoha 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (poy)", () => {
		expect(p.parse("3 Yohani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (poy)", () => {
		expect(p.parse("1 Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (poy)", () => {
		expect(p.parse("2 Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (poy)", () => {
		expect(p.parse("Yohani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoha 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (poy)", () => {
		expect(p.parse("Matendu 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mate 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (poy)", () => {
		expect(p.parse("Warumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("War 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (poy)", () => {
		expect(p.parse("1 Wakorintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Wakorintu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (poy)", () => {
		expect(p.parse("2 Wakorintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Wakorintu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (poy)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (poy)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (poy)", () => {
		expect(p.parse("waKolosayi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Wako 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (poy)", () => {
		expect(p.parse("Wagalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Wag 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (poy)", () => {
		expect(p.parse("Waefesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Waef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (poy)", () => {
		expect(p.parse("waFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Wafi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (poy)", () => {
		expect(p.parse("1 Watesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Watesaloniki 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (poy)", () => {
		expect(p.parse("2 Watesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Watesaloniki 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (poy)", () => {
		expect(p.parse("1Wate 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (poy)", () => {
		expect(p.parse("2Wate 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (poy)", () => {
		expect(p.parse("1 Timotewu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotewu 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (poy)", () => {
		expect(p.parse("2 Timotewu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotewu 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (poy)", () => {
		expect(p.parse("1Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (poy)", () => {
		expect(p.parse("2Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (poy)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (poy)", () => {
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (poy)", () => {
		expect(p.parse("Waebulaniya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Waeb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (poy)", () => {
		expect(p.parse("Yakobu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yako 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (poy)", () => {
		expect(p.parse("1 Peteru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peteru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (poy)", () => {
		expect(p.parse("2 Peteru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peteru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (poy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (poy)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

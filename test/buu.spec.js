"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/buu.js";

describe("Localized book Gen (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (buu)", () => {
		expect(p.parse("Mʉkpanganɨa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mʉkp 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (buu)", () => {
		expect(p.parse("Matakanaka 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pananiso 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mtk 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pan 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (buu)", () => {
		expect(p.parse("Matayɔ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (buu)", () => {
		expect(p.parse("Malɨkɔ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mlk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (buu)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (buu)", () => {
		expect(p.parse("1Yɔa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yʉa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (buu)", () => {
		expect(p.parse("2Yɔa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yʉa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (buu)", () => {
		expect(p.parse("3 Yɔanɨ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yʉanɨ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yɔa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yʉa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (buu)", () => {
		expect(p.parse("1 Yɔanɨ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yʉanɨ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yɔanɨ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yʉanɨ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (buu)", () => {
		expect(p.parse("2 Yɔanɨ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yʉanɨ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yɔanɨ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yʉanɨ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (buu)", () => {
		expect(p.parse("Yɔanɨ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yʉanɨ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yɔa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yʉa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (buu)", () => {
		expect(p.parse("Mɨkyananakɨa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kyananaka 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kyan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kya 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (buu)", () => {
		expect(p.parse("Ɓalɔma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ɓlm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ɓma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (buu)", () => {
		expect(p.parse("1 Ɓakolito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ɓakolito 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (buu)", () => {
		expect(p.parse("2 Ɓakolito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ɓakolito 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (buu)", () => {
		expect(p.parse("1Ɓak 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Klt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (buu)", () => {
		expect(p.parse("2Ɓak 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Klt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (buu)", () => {
		expect(p.parse("Ɓakɔlɔsai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ɓakɔlɔsaɨ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (buu)", () => {
		expect(p.parse("Ɓagalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ɓagalatɨa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (buu)", () => {
		expect(p.parse("Ɓaɛfɛsɔ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfɛ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (buu)", () => {
		expect(p.parse("Ɓafilipo 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ɓaf 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (buu)", () => {
		expect(p.parse("1 Ɓatesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ɓatɛsalɔnɨka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ɓatesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ɓatɛsalɔnɨka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (buu)", () => {
		expect(p.parse("2 Ɓatesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ɓatɛsalɔnɨka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ɓatesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ɓatɛsalɔnɨka 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (buu)", () => {
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tɛs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (buu)", () => {
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tɛs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (buu)", () => {
		expect(p.parse("1 Timɔtɛɔ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tɨmɔtɛɔ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɔtɛɔ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tɨmɔtɛɔ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (buu)", () => {
		expect(p.parse("2 Timɔtɛɔ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tɨmɔtɛɔ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɔtɛɔ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tɨmɔtɛɔ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (buu)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tɨm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (buu)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tɨm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (buu)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (buu)", () => {
		expect(p.parse("Filimɔnɔ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fɨlɛmɔnɔ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fɨl 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (buu)", () => {
		expect(p.parse("Ɓaebelenia 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebl 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (buu)", () => {
		expect(p.parse("Yakɔbɔ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakɔɓɔ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ykb 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (buu)", () => {
		expect(p.parse("1 Pɛtɛlɔ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɛtɛlɔ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (buu)", () => {
		expect(p.parse("2 Pɛtɛlɔ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɛtɛlɔ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (buu)", () => {
		expect(p.parse("1Pɛt 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Ptl 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (buu)", () => {
		expect(p.parse("2Pɛt 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Ptl 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (buu)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (buu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (buu)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yɔa - 3 Yɔanɨ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yɔa – 3 Yɔanɨ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yɔa — 3 Yɔanɨ").osis()).toEqual("1John.1-3John.1");
	});
});

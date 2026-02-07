"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ksf.js";

describe("Localized book Rev (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ksf)", () => {
		expect(p.parse("Àpòkàliɓsɛ̀ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("A. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ksf)", () => {
		expect(p.parse("Matyoo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ksf)", () => {
		expect(p.parse("Marikus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ksf)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ksf)", () => {
		expect(p.parse("1 Zyaŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Zy. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zyaŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zy. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ksf)", () => {
		expect(p.parse("2 Zyaŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Zy. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zyaŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zy. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ksf)", () => {
		expect(p.parse("3 Zyaŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Zy. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zyaŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zy. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ksf)", () => {
		expect(p.parse("Zyaŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zŋ. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ksf)", () => {
		expect(p.parse("Mɛ̀kìkìì Mɛ Ɓɛkɛ̀nì-fìtom 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mkk. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ksf)", () => {
		expect(p.parse("Ròmɛŋ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ksf)", () => {
		expect(p.parse("1 Kɔ̀rɛ̀ŋtyɛŋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kɔr. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔ̀rɛ̀ŋtyɛŋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔr. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ksf)", () => {
		expect(p.parse("2 Kɔ̀rɛ̀ŋtyɛŋ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kɔr. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔ̀rɛ̀ŋtyɛŋ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔr. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ksf)", () => {
		expect(p.parse("Kòlòsyɛŋ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ko. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ksf)", () => {
		expect(p.parse("Gàlat 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ksf)", () => {
		expect(p.parse("Efèzyɛŋ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ksf)", () => {
		expect(p.parse("Fìlìpyɛŋ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fi. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ksf)", () => {
		expect(p.parse("1 Tèsàlònìsyɛŋ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tèsàlònìsyɛŋ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ksf)", () => {
		expect(p.parse("Te. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ksf)", () => {
		expect(p.parse("2 Tèsàlònìsyɛŋ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tèsàlònìsyɛŋ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ksf)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ksf)", () => {
		expect(p.parse("Ti. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ksf)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ksf)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ksf)", () => {
		expect(p.parse("Filemɔŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ksf)", () => {
		expect(p.parse("Ebireegh 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ksf)", () => {
		expect(p.parse("Zyag 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zy. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ksf)", () => {
		expect(p.parse("1 Pyɛɛri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Py. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyɛɛri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Py. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ksf)", () => {
		expect(p.parse("2 Pyɛɛri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Py. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyɛɛri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Py. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ksf)", () => {
		expect(p.parse("Zyuudɛ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zyu. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (ksf)", () => {
		expect(p.parse("TÈSÀLÒNÌSYƐŊ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("2 TÈSÀLÒNÌSYƐŊ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("MƐ̀KÌKÌÌ MƐ ƁƐKƐ̀NÌ-FÌTOM 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("KÒLÒSYƐŊ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("EFÈZYƐŊ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("GÀLAT 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("FÌLÌPYƐŊ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ÀPÒKÀLIƁSƐ̀ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("RÒMƐŊ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Parser helper should handle book ranges (ksf)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ksf)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zyaŋ - 3 Zyaŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zyaŋ – 3 Zyaŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zyaŋ — 3 Zyaŋ").osis()).toEqual("1John.1-3John.1");
	});
});

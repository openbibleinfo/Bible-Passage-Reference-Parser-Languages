"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bri.js";

describe("Localized book Rev (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bri)", () => {
		expect(p.parse("Hwèwulùwèlì 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Hwè 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bri)", () => {
		expect(p.parse("Matiyò 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bri)", () => {
		expect(p.parse("Makòrzì 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bri)", () => {
		expect(p.parse("Lukàrzɛ̀ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bri)", () => {
		expect(p.parse("1Yò 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bri)", () => {
		expect(p.parse("2Yò 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bri)", () => {
		expect(p.parse("3 Yòwanìrzɛ̀ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yò 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bri)", () => {
		expect(p.parse("1 Yòwanìrzɛ̀ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yòwanìrzɛ̀ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bri)", () => {
		expect(p.parse("2 Yòwanìrzɛ̀ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yòwanìrzɛ̀ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bri)", () => {
		expect(p.parse("Yòwanìrzɛ̀ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yòw 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bri)", () => {
		expect(p.parse("Hwègbèèlì 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hwg 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bri)", () => {
		expect(p.parse("Ròmànì 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ròm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bri)", () => {
		expect(p.parse("1 Kɔ̀rintìyà 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔ̀rintìyà 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bri)", () => {
		expect(p.parse("2 Kɔ̀rintìyà 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔ̀rintìyà 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bri)", () => {
		expect(p.parse("1Kɔ̀ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bri)", () => {
		expect(p.parse("2Kɔ̀ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bri)", () => {
		expect(p.parse("Kòlòrzìyà 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kòl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bri)", () => {
		expect(p.parse("Gàletìyà 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gàl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bri)", () => {
		expect(p.parse("Ɛ̀hvìrzìyà 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛ̀hv 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bri)", () => {
		expect(p.parse("Hvìlipìyà 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Hvà 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bri)", () => {
		expect(p.parse("1 Tɛ̀rzàlonìyà 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛ̀rzàlonìyà 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bri)", () => {
		expect(p.parse("2 Tɛ̀rzàlonìyà 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛ̀rzàlonìyà 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bri)", () => {
		expect(p.parse("1Tɛ̀ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bri)", () => {
		expect(p.parse("2Tɛ̀ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bri)", () => {
		expect(p.parse("1 Tìmotì 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tìmotì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bri)", () => {
		expect(p.parse("2 Tìmotì 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tìmotì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bri)", () => {
		expect(p.parse("1Tì 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bri)", () => {
		expect(p.parse("2Tì 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bri)", () => {
		expect(p.parse("Tàyìtùrzì 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tày 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bri)", () => {
		expect(p.parse("Hvìlɛ̀mɔ̀nì 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Hvì 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bri)", () => {
		expect(p.parse("Hibrù 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bri)", () => {
		expect(p.parse("Jèmìrzì 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jèm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bri)", () => {
		expect(p.parse("1 Pètrò 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pètrò 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bri)", () => {
		expect(p.parse("2 Pètrò 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pètrò 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bri)", () => {
		expect(p.parse("1Pè 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bri)", () => {
		expect(p.parse("2Pè 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bri)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bri)", () => {
		expect(p.parse("Judɛ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

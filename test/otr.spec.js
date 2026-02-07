"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/otr.js";

describe("Localized book Rev (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (otr)", () => {
		expect(p.parse("ŋuɽun ŋun ŋaŋinu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (otr)", () => {
		expect(p.parse("maṯa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("mṯ. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (otr)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("mks. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (otr)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (otr)", () => {
		expect(p.parse("3 yuwana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (otr)", () => {
		expect(p.parse("1 Yuwana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuwana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (otr)", () => {
		expect(p.parse("2 yuwana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. yuwana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (otr)", () => {
		expect(p.parse("Yuwana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ywn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (otr)", () => {
		expect(p.parse("ŋɩru ŋun ŋapɩlo duwəjo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (otr)", () => {
		expect(p.parse("rumiya 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (otr)", () => {
		expect(p.parse("1 kurinṯus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kur. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. kurinṯus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kur. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (otr)", () => {
		expect(p.parse("2 kurinṯus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kur 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. kurinṯus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kur 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (otr)", () => {
		expect(p.parse("Kulusi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (otr)", () => {
		expect(p.parse("galaṯia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (otr)", () => {
		expect(p.parse("awisus 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (otr)", () => {
		expect(p.parse("bilibi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (otr)", () => {
		expect(p.parse("1 ṯasaluniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ṯasaluniki 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (otr)", () => {
		expect(p.parse("2 ṯasaluniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ṯasaluniki 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (otr)", () => {
		expect(p.parse("1 ṯimuṯawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ṯimuṯawus 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (otr)", () => {
		expect(p.parse("2 ṯimuṯawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ṯimuṯawus 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (otr)", () => {
		expect(p.parse("ṯitusŋ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (otr)", () => {
		expect(p.parse("Bilimun 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (otr)", () => {
		expect(p.parse("lɩbrani 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (otr)", () => {
		expect(p.parse("Yagub 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (otr)", () => {
		expect(p.parse("1 Buṯrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Buṯrus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (otr)", () => {
		expect(p.parse("2 Buṯrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Buṯrus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (otr)", () => {
		expect(p.parse("yauḏa 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (otr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (otr)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuwana - 3 yuwana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuwana – 3 yuwana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yuwana — 3 yuwana").osis()).toEqual("1John.1-3John.1");
	});
});

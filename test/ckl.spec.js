"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ckl.js";

describe("Localized book Rev (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ckl)", () => {
		expect(p.parse("Wulsu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wul 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ckl)", () => {
		expect(p.parse("Mata 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ckl)", () => {
		expect(p.parse("Markusu 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ckl)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ckl)", () => {
		expect(p.parse("1Yaw 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ckl)", () => {
		expect(p.parse("2Yaw 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ckl)", () => {
		expect(p.parse("3 Yawhana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yaw 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ckl)", () => {
		expect(p.parse("1 Yawhana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yawhana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ckl)", () => {
		expect(p.parse("2 Yawhana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yawhana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ckl)", () => {
		expect(p.parse("Yawhana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yaw 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ckl)", () => {
		expect(p.parse("'Ya Su 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("'YaSu 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ckl)", () => {
		expect(p.parse("Ndzǝr Rauma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rau 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ckl)", () => {
		expect(p.parse("1 Ndzǝr Kwaranti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ndzǝr Kwaranti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ckl)", () => {
		expect(p.parse("2 Ndzǝr Kwaranti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ndzǝr Kwaranti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ckl)", () => {
		expect(p.parse("1Kwa 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ckl)", () => {
		expect(p.parse("2Kwa 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ckl)", () => {
		expect(p.parse("Ndzǝr Kwalausi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kwal 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ckl)", () => {
		expect(p.parse("Ndzǝr Galatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ckl)", () => {
		expect(p.parse("Ndzǝr Afisa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ckl)", () => {
		expect(p.parse("Ndzǝr Filibi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fib 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ckl)", () => {
		expect(p.parse("1 Ndzǝr Tasalaunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ndzǝr Tasalaunika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ckl)", () => {
		expect(p.parse("2 Ndzǝr Tasalaunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ndzǝr Tasalaunika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ckl)", () => {
		expect(p.parse("1Tas 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ckl)", () => {
		expect(p.parse("2Tas 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ckl)", () => {
		expect(p.parse("1 Timathlawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timathlawus 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ckl)", () => {
		expect(p.parse("2 Timathlawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timathlawus 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ckl)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ckl)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ckl)", () => {
		expect(p.parse("Taitus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ckl)", () => {
		expect(p.parse("Filimaun 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ckl)", () => {
		expect(p.parse("Ndzǝr Ibrahim 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ckl)", () => {
		expect(p.parse("Yakubu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ckl)", () => {
		expect(p.parse("1 Bitrusu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bitrusu 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ckl)", () => {
		expect(p.parse("2 Bitrusu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bitrusu 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ckl)", () => {
		expect(p.parse("1Bit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ckl)", () => {
		expect(p.parse("2Bit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ckl)", () => {
		expect(p.parse("Yahuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yah 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (ckl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ckl)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yaw - 3 Yawhana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yaw – 3 Yawhana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yaw — 3 Yawhana").osis()).toEqual("1John.1-3John.1");
	});
});

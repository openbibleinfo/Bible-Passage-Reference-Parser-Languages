"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dow.js";

describe("Localized book Rev (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dow)", () => {
		expect(p.parse("Hinwɔ Hi Mits Yohana 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dow)", () => {
		expect(p.parse("Mata 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dow)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dow)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dow)", () => {
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dow)", () => {
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dow)", () => {
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dow)", () => {
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dow)", () => {
		expect(p.parse("Tɔmsyaadɛ Woosɛ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dow)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dow)", () => {
		expect(p.parse("1 Kɔrɛŋgtu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔrɛŋgtu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dow)", () => {
		expect(p.parse("2 Kɔrɛŋgtu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔrɛŋgtu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dow)", () => {
		expect(p.parse("Kolosiya 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dow)", () => {
		expect(p.parse("Galatiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dow)", () => {
		expect(p.parse("Efesu 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dow)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dow)", () => {
		expect(p.parse("1 Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloniki 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dow)", () => {
		expect(p.parse("2 Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloniki 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dow)", () => {
		expect(p.parse("1 Timɔte 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timɔte 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dow)", () => {
		expect(p.parse("2 Timɔte 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timɔte 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dow)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dow)", () => {
		expect(p.parse("Filmɔŋ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dow)", () => {
		expect(p.parse("Ibraniŋko 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dow)", () => {
		expect(p.parse("Yakuba 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dow)", () => {
		expect(p.parse("1 Piyɛr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyɛr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dow)", () => {
		expect(p.parse("2 Piyɛr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyɛr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dow)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dow)", () => {
		expect(p.parse("Yahuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

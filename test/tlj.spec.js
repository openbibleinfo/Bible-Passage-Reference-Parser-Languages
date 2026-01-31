"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tlj.js";

describe("Localized book Rev (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tlj)", () => {
		expect(p.parse("Ku̱su̱u̱ku̱lu̱lu̱wa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tlj)", () => {
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tlj)", () => {
		expect(p.parse("Maliko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tlj)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tlj)", () => {
		expect(p.parse("1 Yohaana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohaana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tlj)", () => {
		expect(p.parse("2 Yohaana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohaana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tlj)", () => {
		expect(p.parse("3 Yohaana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohaana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tlj)", () => {
		expect(p.parse("Yohaana 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tlj)", () => {
		expect(p.parse("Bikoluwa 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tlj)", () => {
		expect(p.parse("Balooma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tlj)", () => {
		expect(p.parse("1 Bakoli̱nto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bakoli̱nto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tlj)", () => {
		expect(p.parse("2 Bakoli̱nto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bakoli̱nto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tlj)", () => {
		expect(p.parse("Bakolosaai̱ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tlj)", () => {
		expect(p.parse("Bagalati̱ya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tlj)", () => {
		expect(p.parse("Beefeeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tlj)", () => {
		expect(p.parse("Bafi̱li̱pi̱ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tlj)", () => {
		expect(p.parse("1 Batesolonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Batesolonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tlj)", () => {
		expect(p.parse("2 Batesolonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Batesolonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tlj)", () => {
		expect(p.parse("1 Ti̱mi̱seewa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti̱mi̱seewa 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tlj)", () => {
		expect(p.parse("2 Ti̱mi̱seewa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti̱mi̱seewa 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tlj)", () => {
		expect(p.parse("Ti̱to 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tlj)", () => {
		expect(p.parse("Fi̱li̱mooni̱ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tlj)", () => {
		expect(p.parse("Bahebbulaayo 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tlj)", () => {
		expect(p.parse("Yakobbo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tlj)", () => {
		expect(p.parse("1 Peetelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peetelo 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tlj)", () => {
		expect(p.parse("2 Peetelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peetelo 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tlj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tlj)", () => {
		expect(p.parse("Yu̱da 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ndh.js";

describe("Localized book Rev (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ndh)", () => {
		expect(p.parse("Bhusetuli 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ndh)", () => {
		expect(p.parse("Mataayi 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ndh)", () => {
		expect(p.parse("Maalika 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ndh)", () => {
		expect(p.parse("Luuka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ndh)", () => {
		expect(p.parse("1 Yoohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoohani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ndh)", () => {
		expect(p.parse("2 Yoohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoohani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ndh)", () => {
		expect(p.parse("3 Yoohani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoohani 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ndh)", () => {
		expect(p.parse("Yoohani 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ndh)", () => {
		expect(p.parse("Mbombo isha Bhatumighwa 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ndh)", () => {
		expect(p.parse("Bhalooma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ndh)", () => {
		expect(p.parse("1 Bhakolinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Bhakolinti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ndh)", () => {
		expect(p.parse("2 Bhakolinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Bhakolinti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ndh)", () => {
		expect(p.parse("Bhakolosaayi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ndh)", () => {
		expect(p.parse("Bhaghalatiiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ndh)", () => {
		expect(p.parse("Bhaefesi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ndh)", () => {
		expect(p.parse("Bhafilipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ndh)", () => {
		expect(p.parse("1 Bhatesaloniike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bhatesaloniike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ndh)", () => {
		expect(p.parse("2 Bhatesaloniike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bhatesaloniike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ndh)", () => {
		expect(p.parse("1 Tiimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tiimoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ndh)", () => {
		expect(p.parse("2 Tiimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tiimoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ndh)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ndh)", () => {
		expect(p.parse("Filimooni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ndh)", () => {
		expect(p.parse("Bhahibhuli 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ndh)", () => {
		expect(p.parse("Yaakobhu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ndh)", () => {
		expect(p.parse("1 Peeteli 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peeteli 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ndh)", () => {
		expect(p.parse("2 Peeteli 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peeteli 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ndh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ndh)", () => {
		expect(p.parse("Yuuta 1:1").osis()).toEqual("Jude.1.1");
	});
});

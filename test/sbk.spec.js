"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sbk.js";

describe("Localized book Rev (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sbk)", () => {
		expect(p.parse("ɨNyʉʉbhʉlo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sbk)", () => {
		expect(p.parse("Mataayo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sbk)", () => {
		expect(p.parse("Maalʉko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sbk)", () => {
		expect(p.parse("Luuka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sbk)", () => {
		expect(p.parse("1 Yoohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoohani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sbk)", () => {
		expect(p.parse("2 Yoohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoohani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sbk)", () => {
		expect(p.parse("3 Yoohani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoohani 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sbk)", () => {
		expect(p.parse("Yoohani 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sbk)", () => {
		expect(p.parse("ɨMbombo ɨzya Bhasontwa 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sbk)", () => {
		expect(p.parse("aBhaluumi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sbk)", () => {
		expect(p.parse("1 Abhakolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abhakolinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sbk)", () => {
		expect(p.parse("2 Abhakolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abhakolinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sbk)", () => {
		expect(p.parse("aBhakolosaayi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sbk)", () => {
		expect(p.parse("aBhagalatiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sbk)", () => {
		expect(p.parse("aBhaefeeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sbk)", () => {
		expect(p.parse("aBhafiliipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sbk)", () => {
		expect(p.parse("1 Abhatesaloniike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abhatesaloniike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sbk)", () => {
		expect(p.parse("2 Abhatesaloniike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abhatesaloniike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sbk)", () => {
		expect(p.parse("1 Tiimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tiimoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sbk)", () => {
		expect(p.parse("2 Tiimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tiimoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sbk)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sbk)", () => {
		expect(p.parse("Filimooni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sbk)", () => {
		expect(p.parse("aBhaebulaniya 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sbk)", () => {
		expect(p.parse("Yaakobo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sbk)", () => {
		expect(p.parse("1 Peeteli 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peeteli 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sbk)", () => {
		expect(p.parse("2 Peeteli 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peeteli 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sbk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sbk)", () => {
		expect(p.parse("Yuuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

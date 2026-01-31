"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kya.js";

describe("Localized book Rev (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kya)", () => {
		expect(p.parse("Obhusomboorerwa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kya)", () => {
		expect(p.parse("Mataayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kya)", () => {
		expect(p.parse("Maariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kya)", () => {
		expect(p.parse("Ruuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ruk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kya)", () => {
		expect(p.parse("1 Yowana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kya)", () => {
		expect(p.parse("2 Yowana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kya)", () => {
		expect(p.parse("3 Yowana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yowana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kya)", () => {
		expect(p.parse("Yowana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yow 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kya)", () => {
		expect(p.parse("Ebhikorwa bhya Abhatumwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ebhikorwa 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kya)", () => {
		expect(p.parse("Abharuumi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kya)", () => {
		expect(p.parse("1 Abhakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abhakorinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kya)", () => {
		expect(p.parse("2 Abhakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abhakorinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kya)", () => {
		expect(p.parse("Abhakorosaayi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kya)", () => {
		expect(p.parse("Abhagaraatiya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kya)", () => {
		expect(p.parse("Abhaefeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kya)", () => {
		expect(p.parse("Abhafiripi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kya)", () => {
		expect(p.parse("1 Abhateesaroonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abhateesaroonike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kya)", () => {
		expect(p.parse("2 Abhateesaroonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abhateesaroonike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kya)", () => {
		expect(p.parse("1 Timoteeyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteeyo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kya)", () => {
		expect(p.parse("2 Timoteeyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteeyo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kya)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kya)", () => {
		expect(p.parse("Firimooni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kya)", () => {
		expect(p.parse("Abhaebhuraaniya 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kya)", () => {
		expect(p.parse("Yakobho 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kya)", () => {
		expect(p.parse("1 Peetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peetero 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kya)", () => {
		expect(p.parse("2 Peetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peetero 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kya)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kya)", () => {
		expect(p.parse("Yuuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

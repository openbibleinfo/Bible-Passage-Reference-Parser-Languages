"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bds.js";

describe("Localized book Rev (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bds)", () => {
		expect(p.parse("Hiitlaaꞌasa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bds)", () => {
		expect(p.parse("Mataayo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bds)", () => {
		expect(p.parse("Maariko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bds)", () => {
		expect(p.parse("Luuka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bds)", () => {
		expect(p.parse("1 Yohaana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohaana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bds)", () => {
		expect(p.parse("2 Yohaana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohaana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bds)", () => {
		expect(p.parse("3 Yohaana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohaana 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bds)", () => {
		expect(p.parse("Yohaana 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bds)", () => {
		expect(p.parse("Yondu gu Ya⁄abimiisee 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bds)", () => {
		expect(p.parse("Waruumi 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bds)", () => {
		expect(p.parse("1 Wakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Wakorinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bds)", () => {
		expect(p.parse("2 Wakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Wakorinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bds)", () => {
		expect(p.parse("Wakolosaay 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bds)", () => {
		expect(p.parse("Wagalatiyaa 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bds)", () => {
		expect(p.parse("Waefeeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bds)", () => {
		expect(p.parse("Wafiliipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bds)", () => {
		expect(p.parse("1 Watesaloniike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Watesaloniike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bds)", () => {
		expect(p.parse("2 Watesaloniike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Watesaloniike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bds)", () => {
		expect(p.parse("1 Timoteeyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteeyo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bds)", () => {
		expect(p.parse("2 Timoteeyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteeyo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bds)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bds)", () => {
		expect(p.parse("Filimooni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bds)", () => {
		expect(p.parse("Waeburaaniyaa 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bds)", () => {
		expect(p.parse("Yakoobo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bds)", () => {
		expect(p.parse("1 Peetiro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peetiro 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bds)", () => {
		expect(p.parse("2 Peetiro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peetiro 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bds)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bds)", () => {
		expect(p.parse("Yuuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

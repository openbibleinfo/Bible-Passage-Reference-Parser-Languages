"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kdt.js";

describe("Localized book Gen (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kdt)", () => {
		expect(p.parse("លោកុប្បត្តិ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kdt)", () => {
		expect(p.parse("វិវរណៈ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kdt)", () => {
		expect(p.parse("នាងរស់ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kdt)", () => {
		expect(p.parse("យ៉ូណាស 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kdt)", () => {
		expect(p.parse("ម៉ាថាយ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kdt)", () => {
		expect(p.parse("ម៉ាកុស 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kdt)", () => {
		expect(p.parse("លូកា 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kdt)", () => {
		expect(p.parse("១យ៉ូហាន 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kdt)", () => {
		expect(p.parse("២យ៉ូហាន 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kdt)", () => {
		expect(p.parse("៣យ៉ូហាន 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kdt)", () => {
		expect(p.parse("យ៉ូហាន 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kdt)", () => {
		expect(p.parse("កិច្ចការ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kdt)", () => {
		expect(p.parse("រ៉ូម 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kdt)", () => {
		expect(p.parse("១កូរិនថូស 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kdt)", () => {
		expect(p.parse("២កូរិនថូស 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kdt)", () => {
		expect(p.parse("កូឡូស 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kdt)", () => {
		expect(p.parse("កាឡាទី 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kdt)", () => {
		expect(p.parse("អេភេសូរ៍ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kdt)", () => {
		expect(p.parse("ភីលីព 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kdt)", () => {
		expect(p.parse("១ថែស្សាឡូនីច 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kdt)", () => {
		expect(p.parse("២ថែស្សាឡូនីច 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kdt)", () => {
		expect(p.parse("១ធីម៉ូថេ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kdt)", () => {
		expect(p.parse("២ធីម៉ូថេ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kdt)", () => {
		expect(p.parse("ទីតុស 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kdt)", () => {
		expect(p.parse("ភីលេម៉ូន 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kdt)", () => {
		expect(p.parse("ហេព្រើរ៍ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kdt)", () => {
		expect(p.parse("យ៉ាកុប 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kdt)", () => {
		expect(p.parse("១ពេត្រុស 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kdt)", () => {
		expect(p.parse("២ពេត្រុស 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kdt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kdt)", () => {
		expect(p.parse("យូដាស 1:1").osis()).toEqual("Jude.1.1");
	});
});

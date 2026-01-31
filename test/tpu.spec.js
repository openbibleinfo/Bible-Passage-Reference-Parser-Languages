"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tpu.js";

describe("Localized book Rev (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tpu)", () => {
		expect(p.parse("សារ តាំបាង 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("វិវរណៈ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tpu)", () => {
		expect(p.parse("ម៉ាថាយ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tpu)", () => {
		expect(p.parse("ម៉ាកុះ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tpu)", () => {
		expect(p.parse("លូកា 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tpu)", () => {
		expect(p.parse("១ យូហាន 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("១. យូហាន 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tpu)", () => {
		expect(p.parse("២ យូហាន 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("២. យូហាន 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tpu)", () => {
		expect(p.parse("៣ យូហាន 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("៣. យូហាន 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tpu)", () => {
		expect(p.parse("យូហាន 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tpu)", () => {
		expect(p.parse("ង៉ារ មួត រ៉ះ ប៉ាតាង យីស៊ូ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("កិច្ច 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ការ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tpu)", () => {
		expect(p.parse("រ៉ូម 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tpu)", () => {
		expect(p.parse("១ កូរិនថូះ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("១. កូរិនថូះ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tpu)", () => {
		expect(p.parse("២ កូរិនថូះ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("២. កូរិនថូះ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tpu)", () => {
		expect(p.parse("កូឡូះ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tpu)", () => {
		expect(p.parse("កាឡាទី 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tpu)", () => {
		expect(p.parse("អេភេសូ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tpu)", () => {
		expect(p.parse("ភីលីប 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tpu)", () => {
		expect(p.parse("១ ថេសាឡូនិក 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("១. ថេសាឡូនិក 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tpu)", () => {
		expect(p.parse("២ ថេសាឡូនិក 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("២. ថេសាឡូនិក 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tpu)", () => {
		expect(p.parse("១ ធីម៉ូថេ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("១. ធីម៉ូថេ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tpu)", () => {
		expect(p.parse("២ ធីម៉ូថេ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("២. ធីម៉ូថេ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tpu)", () => {
		expect(p.parse("ទីតុះ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tpu)", () => {
		expect(p.parse("ភីលេម៉ូន 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tpu)", () => {
		expect(p.parse("ហេព្រឺ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tpu)", () => {
		expect(p.parse("យ៉ាកុប 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tpu)", () => {
		expect(p.parse("១ ពេត្រុះ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("១. ពេត្រុះ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tpu)", () => {
		expect(p.parse("២ ពេត្រុះ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("២. ពេត្រុះ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tpu)", () => {
		expect(p.parse("យូដះ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (tpu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (tpu)", () => {
		expect(p.parse("ង៉ារ មួត រ៉ះ ប៉ាតាង យីស៊ូ (កិច្ច/ការ) 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("សារ តាំបាង (វិវរណៈ) 1:1").osis()).toEqual("Rev.1.1");
	});
});

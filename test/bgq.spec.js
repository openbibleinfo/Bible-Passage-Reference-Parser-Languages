"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bgq.js";

describe("Localized book Rev (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bgq)", () => {
		expect(p.parse("दरसण 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bgq)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bgq)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bgq)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bgq)", () => {
		expect(p.parse("1 यूहना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहना 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bgq)", () => {
		expect(p.parse("2 यूहना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहना 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bgq)", () => {
		expect(p.parse("3 यूहना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहना 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bgq)", () => {
		expect(p.parse("यूहना 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bgq)", () => {
		expect(p.parse("खास चेला 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bgq)", () => {
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bgq)", () => {
		expect(p.parse("1 कुरुन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरुन्थी 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bgq)", () => {
		expect(p.parse("2 कुरुन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरुन्थी 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bgq)", () => {
		expect(p.parse("कुलुसी 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bgq)", () => {
		expect(p.parse("गलाती 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bgq)", () => {
		expect(p.parse("इफिसुस 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bgq)", () => {
		expect(p.parse("फिलिप्पी 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bgq)", () => {
		expect(p.parse("1 थिस्सलुनिकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनिकियों 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bgq)", () => {
		expect(p.parse("2 थिस्सलुनिकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनिकियों 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bgq)", () => {
		expect(p.parse("1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bgq)", () => {
		expect(p.parse("2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bgq)", () => {
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bgq)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bgq)", () => {
		expect(p.parse("इब्रानी 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bgq)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bgq)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bgq)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bgq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bgq)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/esg.js";

describe("Localized book Rev (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (esg)", () => {
		expect(p.parse("पेन हुपिस्‍ता पोल्‍लें 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (esg)", () => {
		expect(p.parse("मत्‍तयाल 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (esg)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (esg)", () => {
		expect(p.parse("लूकाल 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (esg)", () => {
		expect(p.parse("1 योहान 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. योहान 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (esg)", () => {
		expect(p.parse("2 योहान 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. योहान 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (esg)", () => {
		expect(p.parse("3 योहान 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. योहान 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (esg)", () => {
		expect(p.parse("योहान 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (esg)", () => {
		expect(p.parse("प्रेरितुल्‍कुना कबाह्‍क 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (esg)", () => {
		expect(p.parse("रोम 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (esg)", () => {
		expect(p.parse("1 कुरेंति 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरेंति 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (esg)", () => {
		expect(p.parse("2 कुरेंति 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरेंति 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (esg)", () => {
		expect(p.parse("कुलुसि 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (esg)", () => {
		expect(p.parse("गलातिया 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (esg)", () => {
		expect(p.parse("इपीसि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (esg)", () => {
		expect(p.parse("पिलिपिया 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (esg)", () => {
		expect(p.parse("1 तेसलोनि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. तेसलोनि 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (esg)", () => {
		expect(p.parse("2 तेसलोनि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. तेसलोनि 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (esg)", () => {
		expect(p.parse("1 तिमोति 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमोति 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (esg)", () => {
		expect(p.parse("2 तिमोति 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमोति 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (esg)", () => {
		expect(p.parse("तीतु 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (esg)", () => {
		expect(p.parse("पिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (esg)", () => {
		expect(p.parse("इब्रि 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (esg)", () => {
		expect(p.parse("याकोब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (esg)", () => {
		expect(p.parse("1 पत्रु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत्रु 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (esg)", () => {
		expect(p.parse("2 पत्रु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत्रु 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (esg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (esg)", () => {
		expect(p.parse("यहुदा 1:1").osis()).toEqual("Jude.1.1");
	});
});

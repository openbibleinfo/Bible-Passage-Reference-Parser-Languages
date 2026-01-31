"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bra.js";

describe("Localized book Rev (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bra)", () => {
		expect(p.parse("प्रकासित बाक्य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रका 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bra)", () => {
		expect(p.parse("मत्‍ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bra)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bra)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bra)", () => {
		expect(p.parse("1 यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bra)", () => {
		expect(p.parse("2 यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bra)", () => {
		expect(p.parse("3 यूहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bra)", () => {
		expect(p.parse("यूहन्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bra)", () => {
		expect(p.parse("प्रेरितन के काम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरि 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bra)", () => {
		expect(p.parse("रोमियों 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमि 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bra)", () => {
		expect(p.parse("1 कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरि 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bra)", () => {
		expect(p.parse("2 कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरि 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bra)", () => {
		expect(p.parse("कुलुस्सियों 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलु 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bra)", () => {
		expect(p.parse("गलातियों 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bra)", () => {
		expect(p.parse("इफिसियों 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bra)", () => {
		expect(p.parse("फिलिप्पियों 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bra)", () => {
		expect(p.parse("1 थिस्सलुनिकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनिकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bra)", () => {
		expect(p.parse("2 थिस्सलुनिकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनिकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bra)", () => {
		expect(p.parse("1 तिमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमु 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमु 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bra)", () => {
		expect(p.parse("2 तिमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमु 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमु 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bra)", () => {
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतु 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bra)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bra)", () => {
		expect(p.parse("इब्रानियों 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रा 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bra)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकू 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bra)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bra)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bra)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bra)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू 1:1").osis()).toEqual("Jude.1.1");
	});
});

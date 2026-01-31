"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kfs.js";

describe("Localized book Rev (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kfs)", () => {
		expect(p.parse("प्रकाशितवाक्य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रका. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kfs)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kfs)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kfs)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kfs)", () => {
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूह. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूह. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kfs)", () => {
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूह. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूह. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kfs)", () => {
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूह. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूह. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kfs)", () => {
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूह. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kfs)", () => {
		expect(p.parse("प्रेरितां 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरि. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kfs)", () => {
		expect(p.parse("रोमियो 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमी. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kfs)", () => {
		expect(p.parse("1 कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरि. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरि. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kfs)", () => {
		expect(p.parse("2 कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरि. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kfs)", () => {
		expect(p.parse("कुलुस्सियां 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलु. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kfs)", () => {
		expect(p.parse("गलातियां 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kfs)", () => {
		expect(p.parse("इफिसियां 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kfs)", () => {
		expect(p.parse("फिलिप्पियां 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kfs)", () => {
		expect(p.parse("1 थिस्सलुनीकियां 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनीकियां 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kfs)", () => {
		expect(p.parse("2 थिस्सलुनीकियां 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनीकियां 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kfs)", () => {
		expect(p.parse("1 तिमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तिमु. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमु. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kfs)", () => {
		expect(p.parse("2 तिमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तिमु. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमु. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kfs)", () => {
		expect(p.parse("तीतु. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kfs)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kfs)", () => {
		expect(p.parse("इब्रानियों 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रा. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kfs)", () => {
		expect(p.parse("याकू. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kfs)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kfs)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kfs)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kfs)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू. 1:1").osis()).toEqual("Jude.1.1");
	});
});

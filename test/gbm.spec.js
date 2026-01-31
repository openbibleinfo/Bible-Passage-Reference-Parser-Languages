"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gbm.js";

describe("Localized book Rev (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gbm)", () => {
		expect(p.parse("प्रकाशित वाक्य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("दिब्य दरस 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकाशित 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gbm)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gbm)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मरक 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gbm)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gbm)", () => {
		expect(p.parse("1 यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gbm)", () => {
		expect(p.parse("2 यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gbm)", () => {
		expect(p.parse("3 यूहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gbm)", () => {
		expect(p.parse("यूहन्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gbm)", () => {
		expect(p.parse("प्रेरितों के काम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("खास चेलों 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरितों 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("खास चे 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gbm)", () => {
		expect(p.parse("रोमियों 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमि 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gbm)", () => {
		expect(p.parse("1 कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरिन्थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरि 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gbm)", () => {
		expect(p.parse("2 कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरिन्थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरि 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gbm)", () => {
		expect(p.parse("कुलुस्सियों 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलुसी 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलु 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gbm)", () => {
		expect(p.parse("गलातियों 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलाति 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गल 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gbm)", () => {
		expect(p.parse("इफिसियों 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफिसुस 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gbm)", () => {
		expect(p.parse("फिलिप्पियों 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gbm)", () => {
		expect(p.parse("1 थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्सलुनीकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनीकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gbm)", () => {
		expect(p.parse("2 थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्सलुनीकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनीकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gbm)", () => {
		expect(p.parse("1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमुथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमु 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमु 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gbm)", () => {
		expect(p.parse("2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमुथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमु 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमु 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gbm)", () => {
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतु 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gbm)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gbm)", () => {
		expect(p.parse("इब्रानियों 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रानी 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रा 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gbm)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकू 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gbm)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gbm)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gbm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gbm)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू 1:1").osis()).toEqual("Jude.1.1");
	});
});

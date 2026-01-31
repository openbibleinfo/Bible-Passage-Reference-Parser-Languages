"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bfz.js";

describe("Localized book Rev (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bfz)", () => {
		expect(p.parse("प्रकाशितवाक्य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकाशित. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकाशित 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bfz)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bfz)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मरक 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bfz)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bfz)", () => {
		expect(p.parse("1 यहुन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूहन् 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यहुन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन् 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bfz)", () => {
		expect(p.parse("2 यहुन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूहन् 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यहुन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन् 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bfz)", () => {
		expect(p.parse("3 यहुन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूहन् 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यहुन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन् 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bfz)", () => {
		expect(p.parse("यहुन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहन् 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bfz)", () => {
		expect(p.parse("प्रेरितों 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bfz)", () => {
		expect(p.parse("रोमियों 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमियो 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bfz)", () => {
		expect(p.parse("1 कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरिन्थ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरि. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरि. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरि 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bfz)", () => {
		expect(p.parse("2 कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरिन्थ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरि 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bfz)", () => {
		expect(p.parse("कुलुस्सियों 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलुस् 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलु. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलु 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bfz)", () => {
		expect(p.parse("गलातियों 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलाति 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गल 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bfz)", () => {
		expect(p.parse("इफिसियों 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफिसि 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bfz)", () => {
		expect(p.parse("फिलिप्पियो 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप् 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bfz)", () => {
		expect(p.parse("1 थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्सलुनी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bfz)", () => {
		expect(p.parse("2 थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्सलुनी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bfz)", () => {
		expect(p.parse("1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमुथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमु. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमु 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमु. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमु 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bfz)", () => {
		expect(p.parse("2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमुथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमु. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमु 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमु. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमु 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bfz)", () => {
		expect(p.parse("तितुस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bfz)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bfz)", () => {
		expect(p.parse("इब्रानियों 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रानी 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रा. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रा 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bfz)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bfz)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bfz)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bfz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bfz)", () => {
		expect(p.parse("यहुदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
	});
});

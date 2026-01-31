"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gok.js";

describe("Localized book Rev (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gok)", () => {
		expect(p.parse("प्रकाशित वाक्य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ದರ್ಶಾನ್ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रका. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gok)", () => {
		expect(p.parse("ಮತ್ತಾಯಾ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ಮತ್ತಾಯ್ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gok)", () => {
		expect(p.parse("ಮಾರ್ಕ್ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gok)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ಲುಕ್ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gok)", () => {
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ಯೊಹಾನ್ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूह. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ಯೊಹಾನ್ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूह. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gok)", () => {
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ಯೊಹಾನ್ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूह. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ಯೊಹಾನ್ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूह. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gok)", () => {
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ಯೊಹಾನ್ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूह. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. ಯೊಹಾನ್ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूह. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gok)", () => {
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ಯೊಹಾನ್ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ಯೋಹಾನ್ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gok)", () => {
		expect(p.parse("प्रेरितों के काम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ಅಪೊಸ್ತಲ್ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gok)", () => {
		expect(p.parse("ರೊಮಾಪುರಾತ್‌ಲ್ಯಾನಾ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ರೋಮಾಪುರಾತ್‌ಲ್ಯಾನಾ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमियो 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोम. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gok)", () => {
		expect(p.parse("1 कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ಕೋರಿಂಥ್ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೋರಿಂಥ್ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ಕೊರಿಂಥ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gok)", () => {
		expect(p.parse("1कुरि. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gok)", () => {
		expect(p.parse("2 कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ಕೊರಿಂಥ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरि. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gok)", () => {
		expect(p.parse("कुलुस्सियों 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ಕೊಲೊಸ್ಸೆ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलु. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gok)", () => {
		expect(p.parse("ಗಲಾತ್ಯಾತ್‌ಲ್ಯಾನಾ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलातियों 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ಗಲಾಥ್ಯ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gok)", () => {
		expect(p.parse("ಎಫೆಸಾತ್‌ಲ್ಯಾನಾ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफिसियों 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ಎಫೆಸ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gok)", () => {
		expect(p.parse("फिलिप्पियों 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ಪಿಲಿಪ್ಪಿ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gok)", () => {
		expect(p.parse("1 थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ತೆಸಲೊನಿಕ್ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ಥೆಸಲೊನಿಕ್ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ತೆಸಲೊನಿಕ್ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ಥೆಸಲೊನಿಕ್ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gok)", () => {
		expect(p.parse("2 थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ತೆಸಲೊನಿಕ್ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ಥೆಸಲೊನಿಕ್ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ತೆಸಲೊನಿಕ್ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ಥೆಸಲೊನಿಕ್ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gok)", () => {
		expect(p.parse("1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ತಿಮೊತಿ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ತಿಮೊಥಿ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमु. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊತಿ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ತಿಮೊಥಿ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमु. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gok)", () => {
		expect(p.parse("2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ತಿಮೊತಿ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ತಿಮೊಥಿ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमु. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊತಿ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ತಿಮೊಥಿ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमु. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gok)", () => {
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ತೀತ್ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ती. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gok)", () => {
		expect(p.parse("ಪಿಲೊಮೊನ್ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gok)", () => {
		expect(p.parse("इब्रानियों 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रा. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ಇಬ್ರಿಯ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gok)", () => {
		expect(p.parse("ಯಾಕೊಬ್ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकू. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gok)", () => {
		expect(p.parse("1 ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ಪೇತ್ರ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gok)", () => {
		expect(p.parse("2 ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ಪೇತ್ರ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gok)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gok)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ಯುದ್ 1:1").osis()).toEqual("Jude.1.1");
	});
});

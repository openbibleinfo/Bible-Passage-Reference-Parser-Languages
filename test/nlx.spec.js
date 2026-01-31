"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nlx.js";

describe("Localized book Rev (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nlx)", () => {
		expect(p.parse("प्रकाशितवाक्य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रका. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nlx)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nlx)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nlx)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nlx)", () => {
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 योहान 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यूह. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. योहान 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूह. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nlx)", () => {
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 योहान 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यूह. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. योहान 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूह. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nlx)", () => {
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 योहान 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यूह. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. योहान 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूह. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nlx)", () => {
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("योहान 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूह. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nlx)", () => {
		expect(p.parse("प्रेरितान कामे 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरितान काम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरी. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nlx)", () => {
		expect(p.parse("रोमियो 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमीयो 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोम. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nlx)", () => {
		expect(p.parse("1 कुरिन्थियो 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरिंथीयो 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरि. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थियो 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिंथीयो 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरि. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nlx)", () => {
		expect(p.parse("2 कुरिन्थियो 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरिंथीयो 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थियो 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिंथीयो 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरि. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nlx)", () => {
		expect(p.parse("कुलीसियो 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलुसी 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलु. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nlx)", () => {
		expect(p.parse("गलतियो पत्र 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलातीयो 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गल. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nlx)", () => {
		expect(p.parse("इफीसीयोन पत्र 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफिसीयो 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nlx)", () => {
		expect(p.parse("फिलिपि च्या पत्र 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलेपियो 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिली. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nlx)", () => {
		expect(p.parse("1 थिस्सलुनिक्यो 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थीस्सलुनीकियो 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनिक्यो 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थीस्सलुनीकियो 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nlx)", () => {
		expect(p.parse("1थीस्स. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nlx)", () => {
		expect(p.parse("2 थीस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्सलुनिक्यो 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थीस्स. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थीस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनिक्यो 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थीस्स. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nlx)", () => {
		expect(p.parse("1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमुथीयुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमु. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथीयुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमु. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nlx)", () => {
		expect(p.parse("2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमुथीयुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमु. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथीयुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमु. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nlx)", () => {
		expect(p.parse("तीतु. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nlx)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nlx)", () => {
		expect(p.parse("इब्रानियो 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रा. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nlx)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकू. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nlx)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nlx)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nlx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nlx)", () => {
		expect(p.parse("यहुदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू. 1:1").osis()).toEqual("Jude.1.1");
	});
});

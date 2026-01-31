"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dhi.js";

describe("Localized book Rev (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dhi)", () => {
		expect(p.parse("प्रकास 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रका 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dhi)", () => {
		expect(p.parse("मत्‍ति 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मति 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत् 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dhi)", () => {
		expect(p.parse("मर्कुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कु 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dhi)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लुक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dhi)", () => {
		expect(p.parse("3 युहान्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ युहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 युह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ युह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dhi)", () => {
		expect(p.parse("1 युहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 युह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. युहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. युह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ युहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ युह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dhi)", () => {
		expect(p.parse("2 युहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 युह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. युहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. युह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ युहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ युह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dhi)", () => {
		expect(p.parse("युहान्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युहन्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युहा 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dhi)", () => {
		expect(p.parse("साल्‍तेङ दिङगिल्‍का 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("साल्न्हाका चात्या 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रे 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("साल् 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dhi)", () => {
		expect(p.parse("रोमि 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोम 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dhi)", () => {
		expect(p.parse("1 कोरिन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कोरिन्थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कोरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोरिन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोरिन्थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोरिन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोरिन्थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरिन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरिन्थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोर 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dhi)", () => {
		expect(p.parse("2 कोरिन्थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कोरिन्थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोरिन्थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरिन्थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोर 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dhi)", () => {
		expect(p.parse("कलस्‍सि 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कलस्सि 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कल 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dhi)", () => {
		expect(p.parse("गलाति 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dhi)", () => {
		expect(p.parse("एफिसि 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dhi)", () => {
		expect(p.parse("फिलिप्‍पि 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलिप्पि 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dhi)", () => {
		expect(p.parse("1 थेसोलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थेस्लोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थेसो 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थेसोलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थेस्लोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थेसो 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेसोलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेस्लोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेसो 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसोलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस्लोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसो 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dhi)", () => {
		expect(p.parse("2 थेसोलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थेस्लोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थेसो 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थेसोलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थेस्लोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थेसो 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेसोलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेस्लोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेसो 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसोलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस्लोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसो 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dhi)", () => {
		expect(p.parse("1 तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dhi)", () => {
		expect(p.parse("2 तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dhi)", () => {
		expect(p.parse("1तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dhi)", () => {
		expect(p.parse("तितस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तित 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dhi)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dhi)", () => {
		expect(p.parse("हिब्रु 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dhi)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकु 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याक 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dhi)", () => {
		expect(p.parse("1 पत्‍रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत् 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत्‍रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत् 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत्‍रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत् 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्‍रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत् 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dhi)", () => {
		expect(p.parse("2 पत्‍रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत् 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत्‍रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत् 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत्‍रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत् 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्‍रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत् 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dhi)", () => {
		expect(p.parse("1पतरुस 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dhi)", () => {
		expect(p.parse("पतरुस 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dhi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dhi)", () => {
		expect(p.parse("यहुदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहु 1:1").osis()).toEqual("Jude.1.1");
	});
});

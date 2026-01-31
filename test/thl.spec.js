"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/thl.js";

describe("Localized book Rev (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (thl)", () => {
		expect(p.parse("प्रका. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकाश 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रका 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (thl)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (thl)", () => {
		expect(p.parse("मर्कू. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कूस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्क 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (thl)", () => {
		expect(p.parse("लूक. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (thl)", () => {
		expect(p.parse("१ यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ यूह. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ यूह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूह. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (thl)", () => {
		expect(p.parse("२ यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ यूह. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ यूह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूह. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (thl)", () => {
		expect(p.parse("३ यूहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ यूह. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ यूह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. यूहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. यूह. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. यूह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (thl)", () => {
		expect(p.parse("यूहन्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूह. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (thl)", () => {
		expect(p.parse("निउत. का. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("निउतरह्या 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रे 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (thl)", () => {
		expect(p.parse("रोम. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोम 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (thl)", () => {
		expect(p.parse("१ कोरिन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोरि. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरिन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरि. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोर 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (thl)", () => {
		expect(p.parse("२ कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोरि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोर 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (thl)", () => {
		expect(p.parse("कलस्सी 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कल. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कल 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (thl)", () => {
		expect(p.parse("गलाती 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (thl)", () => {
		expect(p.parse("एफिसी 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफि. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (thl)", () => {
		expect(p.parse("फिलिप्पी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (thl)", () => {
		expect(p.parse("१ थेसलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेस. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (thl)", () => {
		expect(p.parse("२ थेसलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेस. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (thl)", () => {
		expect(p.parse("१ तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमो. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमो. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (thl)", () => {
		expect(p.parse("२ तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमो. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमो. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (thl)", () => {
		expect(p.parse("तीत. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीत 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (thl)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (thl)", () => {
		expect(p.parse("हिब्रू 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("हिब. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("हिब 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (thl)", () => {
		expect(p.parse("याकू. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याक 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (thl)", () => {
		expect(p.parse("१ पत्रु. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत्र 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रु. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्र 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (thl)", () => {
		expect(p.parse("२ पत्रु. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रु. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्र 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (thl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (thl)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dty.js";

describe("Localized book Rev (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dty)", () => {
		expect(p.parse("प्रकाश 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रका 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dty)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dty)", () => {
		expect(p.parse("मर्कुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्क 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dty)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लुक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dty)", () => {
		expect(p.parse("१ यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ यूह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dty)", () => {
		expect(p.parse("२ यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ यूह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dty)", () => {
		expect(p.parse("३ यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ यूह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. यूह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dty)", () => {
		expect(p.parse("यूह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dty)", () => {
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरि 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रे 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dty)", () => {
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोम 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dty)", () => {
		expect(p.parse("१ कोरिन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरिन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरि 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dty)", () => {
		expect(p.parse("२ कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरि 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dty)", () => {
		expect(p.parse("कलस्सी 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कल 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dty)", () => {
		expect(p.parse("गलाती 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गल 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dty)", () => {
		expect(p.parse("एफिसी 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dty)", () => {
		expect(p.parse("फिलिप्पी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dty)", () => {
		expect(p.parse("१ थेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dty)", () => {
		expect(p.parse("२ थेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dty)", () => {
		expect(p.parse("१थेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dty)", () => {
		expect(p.parse("२थेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dty)", () => {
		expect(p.parse("१ तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dty)", () => {
		expect(p.parse("२ तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dty)", () => {
		expect(p.parse("१तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dty)", () => {
		expect(p.parse("२तिमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dty)", () => {
		expect(p.parse("तितस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तित 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dty)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dty)", () => {
		expect(p.parse("हिब्रु 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dty)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकु 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dty)", () => {
		expect(p.parse("१ पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत्रु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रु 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dty)", () => {
		expect(p.parse("२ पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत्रु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रु 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dty)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dty)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू 1:1").osis()).toEqual("Jude.1.1");
	});
});

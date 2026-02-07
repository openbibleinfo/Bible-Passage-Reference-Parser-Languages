"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xsr.js";

describe("Localized book Rev (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (xsr)", () => {
		expect(p.parse("ज्‍यल्‍का 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xsr)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xsr)", () => {
		expect(p.parse("मर्कूस 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xsr)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xsr)", () => {
		expect(p.parse("१ यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूहन्‍ना 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xsr)", () => {
		expect(p.parse("२ यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूहन्‍ना 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (xsr)", () => {
		expect(p.parse("३ यूहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. यूहन्‍ना 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xsr)", () => {
		expect(p.parse("यूहन्‍ना 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (xsr)", () => {
		expect(p.parse("लोमा छ्‍येतिवी लाका 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (xsr)", () => {
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xsr)", () => {
		expect(p.parse("१ कोरिन्‍थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरिन्‍थी 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xsr)", () => {
		expect(p.parse("२ कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरिन्थी 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (xsr)", () => {
		expect(p.parse("कलस्सी 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (xsr)", () => {
		expect(p.parse("गलाती 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (xsr)", () => {
		expect(p.parse("एफिसी 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (xsr)", () => {
		expect(p.parse("फिलिप्पी 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xsr)", () => {
		expect(p.parse("१ थेसलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xsr)", () => {
		expect(p.parse("२ थेसलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xsr)", () => {
		expect(p.parse("१ तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xsr)", () => {
		expect(p.parse("२ तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (xsr)", () => {
		expect(p.parse("तीतस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (xsr)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (xsr)", () => {
		expect(p.parse("हिब्रू 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (xsr)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xsr)", () => {
		expect(p.parse("१ पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xsr)", () => {
		expect(p.parse("२ पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (xsr)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (xsr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (xsr)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ यूहन्‍ना - ३ यूहन्‍ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ यूहन्‍ना – ३ यूहन्‍ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ यूहन्‍ना — ३ यूहन्‍ना").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lbr.js";

describe("Localized book Rev (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lbr)", () => {
		expect(p.parse("सेन्‍चि 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lbr)", () => {
		expect(p.parse("मट्‌टि 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lbr)", () => {
		expect(p.parse("मारकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मारकु 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lbr)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lbr)", () => {
		expect(p.parse("१ युहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ युहा 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहा 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lbr)", () => {
		expect(p.parse("२ युहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ युहा 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहा 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lbr)", () => {
		expect(p.parse("३ युहान्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ युहा 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युहान्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युहा 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lbr)", () => {
		expect(p.parse("युहान्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युहा 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lbr)", () => {
		expect(p.parse("सॆःक्‍ढुङ्‌पा 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("सॆःक्‍ढु 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lbr)", () => {
		expect(p.parse("रोमि 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lbr)", () => {
		expect(p.parse("१ कोरेन्‍ठि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ को 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरेन्‍ठि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. को 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lbr)", () => {
		expect(p.parse("२ कोरेन्‍ठि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ को 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरेन्‍ठि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. को 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lbr)", () => {
		expect(p.parse("कालास्‍सि 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("काला 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lbr)", () => {
		expect(p.parse("गालाटि 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lbr)", () => {
		expect(p.parse("एफिसि 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lbr)", () => {
		expect(p.parse("फिलिप्‍पि 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lbr)", () => {
		expect(p.parse("१ ठेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ ठेस्‍स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. ठेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. ठेस्‍स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lbr)", () => {
		expect(p.parse("२ ठेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ ठेस्‍स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. ठेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. ठेस्‍स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lbr)", () => {
		expect(p.parse("१ टिमोठि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ टिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. टिमोठि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. टिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lbr)", () => {
		expect(p.parse("२ टिमोठि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ टिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. टिमोठि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. टिमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lbr)", () => {
		expect(p.parse("टिटस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("टिट 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lbr)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lbr)", () => {
		expect(p.parse("हिबुरु 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("हिबु 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lbr)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकु 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lbr)", () => {
		expect(p.parse("१ पाट्‌रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पाट् 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पाट्‌रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पाट् 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lbr)", () => {
		expect(p.parse("२ पाट्‌रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पाट् 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पाट्‌रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पाट् 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lbr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lbr)", () => {
		expect(p.parse("याहुडा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("याहु 1:1").osis()).toEqual("Jude.1.1");
	});
});

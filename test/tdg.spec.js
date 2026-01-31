"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tdg.js";

describe("Localized book Rev (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tdg)", () => {
		expect(p.parse("प्रकास 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tdg)", () => {
		expect(p.parse("मत्‍ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tdg)", () => {
		expect(p.parse("मर्‌कुस् 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tdg)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tdg)", () => {
		expect(p.parse("१ युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tdg)", () => {
		expect(p.parse("२ युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tdg)", () => {
		expect(p.parse("३ युहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युहन्‍ना 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tdg)", () => {
		expect(p.parse("युहन्‍ना 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tdg)", () => {
		expect(p.parse("प्रेरीत् 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tdg)", () => {
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tdg)", () => {
		expect(p.parse("१ कोरीन्‍थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरीन्‍थी 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tdg)", () => {
		expect(p.parse("२ कोरीन्‍थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरीन्‍थी 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tdg)", () => {
		expect(p.parse("कलस्‍सी 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tdg)", () => {
		expect(p.parse("गलाती 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tdg)", () => {
		expect(p.parse("एफीसी 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tdg)", () => {
		expect(p.parse("फीलीप्‍पी 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tdg)", () => {
		expect(p.parse("१ थेस्‍लोनीकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस्‍लोनीकी 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tdg)", () => {
		expect(p.parse("२ थेस्‍लोनीकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस्‍लोनीकी 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tdg)", () => {
		expect(p.parse("१ तीमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तीमोथी 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tdg)", () => {
		expect(p.parse("२ तीमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तीमोथी 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tdg)", () => {
		expect(p.parse("तीतस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tdg)", () => {
		expect(p.parse("फीलेमोन 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tdg)", () => {
		expect(p.parse("हीब्रु 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tdg)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tdg)", () => {
		expect(p.parse("१ पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tdg)", () => {
		expect(p.parse("२ पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tdg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tdg)", () => {
		expect(p.parse("यहुदा 1:1").osis()).toEqual("Jude.1.1");
	});
});

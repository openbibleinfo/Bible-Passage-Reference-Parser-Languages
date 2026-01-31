"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/goj.js";

describe("Localized book Rev (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (goj)", () => {
		expect(p.parse("प्रकाशन 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (goj)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (goj)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (goj)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (goj)", () => {
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (goj)", () => {
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (goj)", () => {
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (goj)", () => {
		expect(p.parse("यहून्ना 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (goj)", () => {
		expect(p.parse("प्रेरितहोन 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (goj)", () => {
		expect(p.parse("रोमीयो 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (goj)", () => {
		expect(p.parse("1 कुरिन्थिहोन 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थिहोन 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (goj)", () => {
		expect(p.parse("2 कुरिन्थिहोन 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थिहोन 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (goj)", () => {
		expect(p.parse("कुलुस्सियो 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (goj)", () => {
		expect(p.parse("गलतिया 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (goj)", () => {
		expect(p.parse("इपिसियो 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (goj)", () => {
		expect(p.parse("फिलीपियो 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (goj)", () => {
		expect(p.parse("1 थिस्‍सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्‍सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (goj)", () => {
		expect(p.parse("2 थिस्‍सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्‍सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (goj)", () => {
		expect(p.parse("1 तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (goj)", () => {
		expect(p.parse("2 तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (goj)", () => {
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (goj)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (goj)", () => {
		expect(p.parse("इब्रानीहोन 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (goj)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (goj)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (goj)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (goj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (goj)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
	});
});

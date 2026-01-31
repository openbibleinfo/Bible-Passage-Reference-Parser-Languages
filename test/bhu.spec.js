"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bhu.js";

describe("Localized book Rev (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bhu)", () => {
		expect(p.parse("परकासितवाक्य 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bhu)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bhu)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bhu)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bhu)", () => {
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bhu)", () => {
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bhu)", () => {
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bhu)", () => {
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bhu)", () => {
		expect(p.parse("प्रेरितो 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bhu)", () => {
		expect(p.parse("रोमियो 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bhu)", () => {
		expect(p.parse("1 कुरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरि 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bhu)", () => {
		expect(p.parse("2 कुरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरि 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bhu)", () => {
		expect(p.parse("कुलुस्सियो 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bhu)", () => {
		expect(p.parse("गलातियों 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bhu)", () => {
		expect(p.parse("इफिसियों 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bhu)", () => {
		expect(p.parse("फिलिप्पियन 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bhu)", () => {
		expect(p.parse("1 थिस्स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bhu)", () => {
		expect(p.parse("2 थिस्स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bhu)", () => {
		expect(p.parse("1 तीमु 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमु 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bhu)", () => {
		expect(p.parse("2 तीमु 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमु 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bhu)", () => {
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bhu)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bhu)", () => {
		expect(p.parse("इब्रानिन 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bhu)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bhu)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bhu)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bhu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bhu)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
	});
});

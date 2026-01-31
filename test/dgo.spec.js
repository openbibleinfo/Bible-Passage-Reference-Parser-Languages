"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dgo.js";

describe("Localized book Rev (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dgo)", () => {
		expect(p.parse("प्रकाशितवाक्य 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रकाशित. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dgo)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dgo)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dgo)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dgo)", () => {
		expect(p.parse("1 यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dgo)", () => {
		expect(p.parse("2 यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dgo)", () => {
		expect(p.parse("3 यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dgo)", () => {
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dgo)", () => {
		expect(p.parse("प्रेरितों के कम 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रेरितों. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dgo)", () => {
		expect(p.parse("रोमियो 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dgo)", () => {
		expect(p.parse("1 कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरि. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिन्थियों 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरि. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dgo)", () => {
		expect(p.parse("2 कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरि. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिन्थियों 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरि. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dgo)", () => {
		expect(p.parse("कुलुस्सियों 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलु. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dgo)", () => {
		expect(p.parse("गलातियों 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dgo)", () => {
		expect(p.parse("इफिसियों 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dgo)", () => {
		expect(p.parse("फिलिप्पियों 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dgo)", () => {
		expect(p.parse("1 थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्सलुनीकियों 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिस्स. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dgo)", () => {
		expect(p.parse("2 थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्सलुनीकियों 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिस्स. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dgo)", () => {
		expect(p.parse("1 तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तीमु. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमुथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमु. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dgo)", () => {
		expect(p.parse("2 तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तीमु. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमुथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमु. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dgo)", () => {
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dgo)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dgo)", () => {
		expect(p.parse("इब्रानियों 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dgo)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dgo)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dgo)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dgo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dgo)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
	});
});

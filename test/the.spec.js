"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/the.js";

describe("Localized book Rev (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (the)", () => {
		expect(p.parse("प्रकास 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (the)", () => {
		expect(p.parse("मति 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (the)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मरकु 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (the)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (the)", () => {
		expect(p.parse("१ युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ युह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (the)", () => {
		expect(p.parse("२ युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ युह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (the)", () => {
		expect(p.parse("३ युहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ युह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (the)", () => {
		expect(p.parse("युहन्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (the)", () => {
		expect(p.parse("प्रेरित 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (the)", () => {
		expect(p.parse("रोमि 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (the)", () => {
		expect(p.parse("१ कोरिन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ को 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरिन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. को 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (the)", () => {
		expect(p.parse("२ कोरिन्‍थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ को 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरिन्‍थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. को 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (the)", () => {
		expect(p.parse("कल्‍लसि 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कल 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (the)", () => {
		expect(p.parse("गलाति 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (the)", () => {
		expect(p.parse("एफिसि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (the)", () => {
		expect(p.parse("फिलिप्‍पि 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (the)", () => {
		expect(p.parse("१ थेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (the)", () => {
		expect(p.parse("२ थेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (the)", () => {
		expect(p.parse("१ तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (the)", () => {
		expect(p.parse("२ तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (the)", () => {
		expect(p.parse("तितस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (the)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (the)", () => {
		expect(p.parse("हिब्रु 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (the)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (the)", () => {
		expect(p.parse("१ पतरुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पतरुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (the)", () => {
		expect(p.parse("२ पतरुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पतरुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (the)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (the)", () => {
		expect(p.parse("यहुदा 1:1").osis()).toEqual("Jude.1.1");
	});
});

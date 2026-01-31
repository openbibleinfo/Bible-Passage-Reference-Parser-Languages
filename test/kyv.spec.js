"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kyv.js";

describe("Localized book Rev (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kyv)", () => {
		expect(p.parse("प्रकाश 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("प्रका 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kyv)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kyv)", () => {
		expect(p.parse("मर्कूस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्कू 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kyv)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kyv)", () => {
		expect(p.parse("१ यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ यूह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूहन्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यूह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kyv)", () => {
		expect(p.parse("२ यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ यूह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूहन्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यूह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kyv)", () => {
		expect(p.parse("३ यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ यूह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. यूहन्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. यूह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kyv)", () => {
		expect(p.parse("यूहन्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यूह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kyv)", () => {
		expect(p.parse("चुन्ल आर भेज्ल चेलासब 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("प्रे 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kyv)", () => {
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रो 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kyv)", () => {
		expect(p.parse("१ कोरन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोर 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kyv)", () => {
		expect(p.parse("२ कोरन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोर 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kyv)", () => {
		expect(p.parse("कलस्सी 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कल 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kyv)", () => {
		expect(p.parse("गलाती 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kyv)", () => {
		expect(p.parse("एफिसी 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kyv)", () => {
		expect(p.parse("फिलिप्पी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kyv)", () => {
		expect(p.parse("१ थेसलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसलोनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kyv)", () => {
		expect(p.parse("२ थेसलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसलोनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kyv)", () => {
		expect(p.parse("१ तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kyv)", () => {
		expect(p.parse("२ तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kyv)", () => {
		expect(p.parse("तीतस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीत 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kyv)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kyv)", () => {
		expect(p.parse("हिब्रू 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kyv)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकू 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kyv)", () => {
		expect(p.parse("१ पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत्र 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्र 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kyv)", () => {
		expect(p.parse("२ पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्र 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kyv)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lhm.js";

describe("Localized book Rev (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lhm)", () => {
		expect(p.parse("ॱसाल्‍केत् 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ॱसाल् 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lhm)", () => {
		expect(p.parse("मत्‍ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lhm)", () => {
		expect(p.parse("मर्कुस् 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्क 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lhm)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लुक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lhm)", () => {
		expect(p.parse("१ युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ युह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहन्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lhm)", () => {
		expect(p.parse("२ युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ युह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहन्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lhm)", () => {
		expect(p.parse("३ युहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ युह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युहन्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lhm)", () => {
		expect(p.parse("युहन्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lhm)", () => {
		expect(p.parse("ठीक्‍नल 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ठीक् 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lhm)", () => {
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("रोम 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lhm)", () => {
		expect(p.parse("१ कोरीन्‍थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरीन्‍थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोर 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lhm)", () => {
		expect(p.parse("२ कोरीन्‍थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरीन्‍थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोर 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lhm)", () => {
		expect(p.parse("कलस्‍सी 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कल 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lhm)", () => {
		expect(p.parse("गलाती 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lhm)", () => {
		expect(p.parse("एफीसस् 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफी 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lhm)", () => {
		expect(p.parse("फीलीप्‍पी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फीली 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lhm)", () => {
		expect(p.parse("१ थीस्‍सलोनीका 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थीस्‍स 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थीस्‍सलोनीका 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थीस्‍स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lhm)", () => {
		expect(p.parse("२ थीस्‍सलोनीका 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थीस्‍स 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थीस्‍सलोनीका 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थीस्‍स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lhm)", () => {
		expect(p.parse("१ तीमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तीमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तीमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तीमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lhm)", () => {
		expect(p.parse("२ तीमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तीमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तीमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तीमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lhm)", () => {
		expect(p.parse("तीतस् 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीत 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lhm)", () => {
		expect(p.parse("फीलेमोन् 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फीले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lhm)", () => {
		expect(p.parse("हीब्रु 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lhm)", () => {
		expect(p.parse("याकुब् 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याक 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lhm)", () => {
		expect(p.parse("१ पत्रुस् 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत्र 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रुस् 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्र 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lhm)", () => {
		expect(p.parse("२ पत्रुस् 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत्र 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रुस् 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्र 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lhm)", () => {
		expect(p.parse("यहुदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहु 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (lhm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lhm)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहन्‍ना - ३ युहन्‍ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहन्‍ना – ३ युहन्‍ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहन्‍ना — ३ युहन्‍ना").osis()).toEqual("1John.1-3John.1");
	});
});

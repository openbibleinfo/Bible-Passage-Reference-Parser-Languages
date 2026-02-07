"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cdm.js";

describe("Localized book Rev (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (cdm)", () => {
		expect(p.parse("प्रकाश 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (cdm)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cdm)", () => {
		expect(p.parse("मर्‌कस् 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्‌कुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर्‌क 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cdm)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लुक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cdm)", () => {
		expect(p.parse("१ युहना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहना 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cdm)", () => {
		expect(p.parse("२ युहना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहना 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (cdm)", () => {
		expect(p.parse("३ युहना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युहना 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (cdm)", () => {
		expect(p.parse("युहना 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cdm)", () => {
		expect(p.parse("प्रेरीत् 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("खबरदुत 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("खबर 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (cdm)", () => {
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cdm)", () => {
		expect(p.parse("१ कोरीन्‍थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरीन्‍थी 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cdm)", () => {
		expect(p.parse("२ कोरीन्‍थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरीन्‍थी 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (cdm)", () => {
		expect(p.parse("कोलसी 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cdm)", () => {
		expect(p.parse("गालाती 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (cdm)", () => {
		expect(p.parse("एफेसस् 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (cdm)", () => {
		expect(p.parse("फीलीपी 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cdm)", () => {
		expect(p.parse("१ थेसालोनीका 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसालोनीका 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेसलोनिकि 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cdm)", () => {
		expect(p.parse("२ थेसालोनीका 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसालोनीका 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेसलोनिकि 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cdm)", () => {
		expect(p.parse("१थेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cdm)", () => {
		expect(p.parse("२थेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cdm)", () => {
		expect(p.parse("१ तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तीमोथी 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तीमोथी 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cdm)", () => {
		expect(p.parse("२ तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तीमोथी 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तीमोथी 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cdm)", () => {
		expect(p.parse("१तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cdm)", () => {
		expect(p.parse("२तिमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cdm)", () => {
		expect(p.parse("तीतस् 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तितस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तित 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (cdm)", () => {
		expect(p.parse("फीलेमोन् 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (cdm)", () => {
		expect(p.parse("हेब्रैनी 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (cdm)", () => {
		expect(p.parse("याकुब् 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cdm)", () => {
		expect(p.parse("१ पत्रुस् 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत्रुस् 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cdm)", () => {
		expect(p.parse("२ पत्रुस् 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत्रुस् 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (cdm)", () => {
		expect(p.parse("यहुदा 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (cdm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (cdm)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहना - ३ युहना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहना – ३ युहना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहना — ३ युहना").osis()).toEqual("1John.1-3John.1");
	});
});

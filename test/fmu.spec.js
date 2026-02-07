"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fmu.js";

describe("Localized book Rev (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (fmu)", () => {
		expect(p.parse("तोह 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fmu)", () => {
		expect(p.parse("मत्ति 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (fmu)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (fmu)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fmu)", () => {
		expect(p.parse("३ युहनाल 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ युह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fmu)", () => {
		expect(p.parse("१ युहनाल 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ युह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहनाल 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book John (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fmu)", () => {
		expect(p.parse("युहनाल 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 2John (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fmu)", () => {
		expect(p.parse("२ यहुनाल 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ युह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यहुनाल 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (fmu)", () => {
		expect(p.parse("बुतोंग 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (fmu)", () => {
		expect(p.parse("रोमि 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fmu)", () => {
		expect(p.parse("१ कुरिन्थुस 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ कुरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कुरिन्थुस 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कुरि 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fmu)", () => {
		expect(p.parse("२ कुरिन्थुस 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ कुरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कुरिन्थुस 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कुरि 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (fmu)", () => {
		expect(p.parse("कुलुसि 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलु 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (fmu)", () => {
		expect(p.parse("गलाति 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (fmu)", () => {
		expect(p.parse("इफिसुस 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (fmu)", () => {
		expect(p.parse("फिलिप्पि 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fmu)", () => {
		expect(p.parse("१ तिस्लुनि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ तिस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. तिस्लुनि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. तिस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fmu)", () => {
		expect(p.parse("२ तिस्लुनि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ तिस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. तिस्लुनि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. तिस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fmu)", () => {
		expect(p.parse("१ तिमुति 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमु 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमुति 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमु 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fmu)", () => {
		expect(p.parse("२ तिमुति 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमु 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमुति 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमु 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (fmu)", () => {
		expect(p.parse("तितुस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तितु 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (fmu)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (fmu)", () => {
		expect(p.parse("यहुदि 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (fmu)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकु 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fmu)", () => {
		expect(p.parse("१ पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पत 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पत 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fmu)", () => {
		expect(p.parse("२ पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पत 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पत 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (fmu)", () => {
		expect(p.parse("यहुदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहु 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (fmu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (fmu)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहनाल - ३ युहनाल").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहनाल – ३ युहनाल").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहनाल — ३ युहनाल").osis()).toEqual("1John.1-3John.1");
	});
});

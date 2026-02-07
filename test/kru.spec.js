"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kru.js";

describe("Localized book Rev (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kru)", () => {
		expect(p.parse("दहदर मंजका कत्‍था 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("दहद 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kru)", () => {
		expect(p.parse("मत्तायोस 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्ता 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kru)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kru)", () => {
		expect(p.parse("लू‍कस 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kru)", () => {
		expect(p.parse("1यॊ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kru)", () => {
		expect(p.parse("2यॊ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kru)", () => {
		expect(p.parse("3 यॊहन 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3यॊ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kru)", () => {
		expect(p.parse("1 यॊहन 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यॊहन 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kru)", () => {
		expect(p.parse("2 यॊहन 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यॊहन 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kru)", () => {
		expect(p.parse("यॊहनस 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यॊ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kru)", () => {
		expect(p.parse("त‍इरकर 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("त‍इ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kru)", () => {
		expect(p.parse("रोमी 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kru)", () => {
		expect(p.parse("1 कोरिन्‍थ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कोरिन्‍थ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kru)", () => {
		expect(p.parse("2 कोरिन्‍थ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कोरिन्‍थ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kru)", () => {
		expect(p.parse("1कोरि 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kru)", () => {
		expect(p.parse("2कोरि 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kru)", () => {
		expect(p.parse("कोलोस्से 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कोलो 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kru)", () => {
		expect(p.parse("गलातिया 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kru)", () => {
		expect(p.parse("इफेसुस 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफे 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kru)", () => {
		expect(p.parse("फिलिप्‍पी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kru)", () => {
		expect(p.parse("1 थेस्‍सलोनिकॆयर 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थेस्‍सलोनिकॆयर 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kru)", () => {
		expect(p.parse("2 थेस्‍सलोनिकॆयर 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थेस्‍सलोनिकॆयर 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kru)", () => {
		expect(p.parse("1थेस्‍स 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kru)", () => {
		expect(p.parse("2थेस्‍स 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kru)", () => {
		expect(p.parse("1 तीमोथियुस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तीमोथियुस 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kru)", () => {
		expect(p.parse("2 तीमोथियुस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तीमोथियुस 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kru)", () => {
		expect(p.parse("1तीमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kru)", () => {
		expect(p.parse("2तीमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kru)", () => {
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तीतु 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kru)", () => {
		expect(p.parse("फिलॆमॊन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिलॆ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kru)", () => {
		expect(p.parse("इब्रानी 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब्रा 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kru)", () => {
		expect(p.parse("याकॊब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकॊ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kru)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kru)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kru)", () => {
		expect(p.parse("1पत 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kru)", () => {
		expect(p.parse("2पत 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kru)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (kru)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kru)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1यॊ - 3 यॊहन").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1यॊ – 3 यॊहन").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1यॊ — 3 यॊहन").osis()).toEqual("1John.1-3John.1");
	});
});

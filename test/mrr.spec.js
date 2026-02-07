"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mrr.js";

describe("Localized book Rev (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mrr)", () => {
		expect(p.parse("तोहचीतव पोल्‍लोङ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mrr)", () => {
		expect(p.parse("मत्याल 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mrr)", () => {
		expect(p.parse("मार्कल 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mrr)", () => {
		expect(p.parse("लूकाल 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mrr)", () => {
		expect(p.parse("1 योहन 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. योहन 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mrr)", () => {
		expect(p.parse("2 योहन 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. योहन 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mrr)", () => {
		expect(p.parse("3 योहन 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. योहन 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mrr)", () => {
		expect(p.parse("योहन 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mrr)", () => {
		expect(p.parse("बळयिर 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mrr)", () => {
		expect(p.parse("रोम सहरतोर 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mrr)", () => {
		expect(p.parse("1 कुरिंततोर 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिंततोर 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mrr)", () => {
		expect(p.parse("2 कुरिंततोर 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिंततोर 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mrr)", () => {
		expect(p.parse("कुलुसितोर 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mrr)", () => {
		expect(p.parse("गलातितोर 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mrr)", () => {
		expect(p.parse("इपिसुसतोर 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mrr)", () => {
		expect(p.parse("पिलिपितोर 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mrr)", () => {
		expect(p.parse("1 तिसलुनितोर 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. तिसलुनितोर 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mrr)", () => {
		expect(p.parse("2 तिसलुनितोर 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. तिसलुनितोर 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mrr)", () => {
		expect(p.parse("1 तिमोति 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमोति 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mrr)", () => {
		expect(p.parse("2 तिमोति 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमोति 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mrr)", () => {
		expect(p.parse("तीतुस 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mrr)", () => {
		expect(p.parse("पिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mrr)", () => {
		expect(p.parse("इब्रितोर 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mrr)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mrr)", () => {
		expect(p.parse("1 पत्रु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत्रु 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mrr)", () => {
		expect(p.parse("2 पत्रु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत्रु 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mrr)", () => {
		expect(p.parse("यहुदाल 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (mrr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (mrr)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 योहन - 3 योहन").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 योहन – 3 योहन").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 योहन — 3 योहन").osis()).toEqual("1John.1-3John.1");
	});
});

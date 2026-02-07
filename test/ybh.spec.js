"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ybh.js";

describe("Localized book Rev (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ybh)", () => {
		expect(p.parse("पार्कास 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("पार 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ybh)", () => {
		expect(p.parse("मात्‍ति 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ybh)", () => {
		expect(p.parse("मार्कुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मार्कु 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ybh)", () => {
		expect(p.parse("लुका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ybh)", () => {
		expect(p.parse("१ युहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१ यु 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. युहान्‍ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("१. यु 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ybh)", () => {
		expect(p.parse("२ युहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२ यु 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. युहान्‍ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("२. यु 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ybh)", () => {
		expect(p.parse("३ युहान्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३ यु 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. युहान्‍ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("३. यु 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ybh)", () => {
		expect(p.parse("युहान्‍ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("युहा 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ybh)", () => {
		expect(p.parse("सेगुम्‍पाक 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("सेगुम 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ybh)", () => {
		expect(p.parse("रोमि 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ybh)", () => {
		expect(p.parse("१ कोरिन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१ को 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. कोरिन्‍थि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("१. को 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ybh)", () => {
		expect(p.parse("२ कोरिन्‍थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२ को 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. कोरिन्‍थि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("२. को 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ybh)", () => {
		expect(p.parse("कालास्‍सि 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("काला 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ybh)", () => {
		expect(p.parse("गालाति 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गाला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ybh)", () => {
		expect(p.parse("एफिसि 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("एफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ybh)", () => {
		expect(p.parse("फिलिप्‍पि 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ybh)", () => {
		expect(p.parse("१ थेस्‍लोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१ थेस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस्‍लोनिकि 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("१. थेस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ybh)", () => {
		expect(p.parse("२ थेस्‍लोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२ थेस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस्‍लोनिकि 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("२. थेस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ybh)", () => {
		expect(p.parse("१ तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१ तिमो 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमोथि 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("१. तिमो 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ybh)", () => {
		expect(p.parse("२ तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२ तिमो 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमोथि 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("२. तिमो 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ybh)", () => {
		expect(p.parse("तितास 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तिता 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ybh)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिल 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ybh)", () => {
		expect(p.parse("हिब्‍रु 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ybh)", () => {
		expect(p.parse("याकुब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकु 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ybh)", () => {
		expect(p.parse("१ पात्‍तुरुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१ पात्‍तु 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पात्‍तुरुस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("१. पात्‍तु 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ybh)", () => {
		expect(p.parse("२ पात्‍तुरुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२ पात्‍तु 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पात्‍तुरुस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("२. पात्‍तु 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ybh)", () => {
		expect(p.parse("याहुदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("याहु 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (ybh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ybh)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहान्‍ना - ३ युहान्‍ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहान्‍ना – ३ युहान्‍ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("१ युहान्‍ना — ३ युहान्‍ना").osis()).toEqual("1John.1-3John.1");
	});
});

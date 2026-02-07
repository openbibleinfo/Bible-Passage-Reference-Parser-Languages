"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/swv.js";

describe("Localized book Rev (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (swv)", () => {
		expect(p.parse("दरसाव 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("दरसा 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (swv)", () => {
		expect(p.parse("मत्ती 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("मत्त 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (swv)", () => {
		expect(p.parse("मरकुस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (swv)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("लूक 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (swv)", () => {
		expect(p.parse("1 यहून्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 यह 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यहून्ना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. यह 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (swv)", () => {
		expect(p.parse("2 यहून्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 यह 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यहून्ना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. यह 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (swv)", () => {
		expect(p.parse("3 यहून्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 यह 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यहून्ना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. यह 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (swv)", () => {
		expect(p.parse("यहून्ना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("यह 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (swv)", () => {
		expect(p.parse("काम 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (swv)", () => {
		expect(p.parse("रोम 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (swv)", () => {
		expect(p.parse("1 कुरन्थीयो 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरन्थी 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरन्थीयो 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरन्थी 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (swv)", () => {
		expect(p.parse("2 कुरन्थीयो 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरन्थी 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरन्थीयो 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरन्थी 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (swv)", () => {
		expect(p.parse("कलुसीयो 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कलु 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (swv)", () => {
		expect(p.parse("गलातियो 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गलाति 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (swv)", () => {
		expect(p.parse("इफिसुस 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इफि 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (swv)", () => {
		expect(p.parse("फलिपी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("फलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (swv)", () => {
		expect(p.parse("1 थिसलूनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 थिसलू 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिसलूनिकी 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. थिसलू 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (swv)", () => {
		expect(p.parse("2 थिसलूनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 थिसलू 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिसलूनिकी 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. थिसलू 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (swv)", () => {
		expect(p.parse("1 तिमूतियूस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तिमू 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमूतियूस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमू 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (swv)", () => {
		expect(p.parse("2 तिमूतियूस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तिमू 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमूतियूस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमू 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (swv)", () => {
		expect(p.parse("तितूस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तितू 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (swv)", () => {
		expect(p.parse("फिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("फिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (swv)", () => {
		expect(p.parse("इबरानीआ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इबरा 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (swv)", () => {
		expect(p.parse("याकूब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("याकू 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (swv)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (swv)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (swv)", () => {
		expect(p.parse("यहूदा 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("यहू 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (swv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (swv)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 यहून्ना - 3 यहून्ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 यहून्ना – 3 यहून्ना").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 यहून्ना — 3 यहून्ना").osis()).toEqual("1John.1-3John.1");
	});
});

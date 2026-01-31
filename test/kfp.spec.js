"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kfp.js";

describe("Localized book Rev (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kfp)", () => {
		expect(p.parse("उदुःतो कताकून 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("उदुःतो कता 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kfp)", () => {
		expect(p.parse("मती 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kfp)", () => {
		expect(p.parse("मरकूस 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("मर 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kfp)", () => {
		expect(p.parse("लूका 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kfp)", () => {
		expect(p.parse("1 एहुना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 एहु 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. एहुना 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. एहु 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kfp)", () => {
		expect(p.parse("2 एहुना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 एहु 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. एहुना 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. एहु 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kfp)", () => {
		expect(p.parse("3 एहुना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 एहु 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. एहुना 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. एहु 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kfp)", () => {
		expect(p.parse("एहुना 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("एहु 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kfp)", () => {
		expect(p.parse("मूक चेलाकू 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("मूक चेला 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kfp)", () => {
		expect(p.parse("रूमी 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kfp)", () => {
		expect(p.parse("1 कुरिंती 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 कुरि 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरिंती 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. कुरि 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kfp)", () => {
		expect(p.parse("2 कुरिंती 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 कुरि 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरिंती 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. कुरि 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kfp)", () => {
		expect(p.parse("कुलूसी 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("कुलू 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kfp)", () => {
		expect(p.parse("गलातिया 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("गला 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kfp)", () => {
		expect(p.parse("इपीसी 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("इपी 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kfp)", () => {
		expect(p.parse("पिलिपी 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("पिलि 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kfp)", () => {
		expect(p.parse("1 तिसलूनिका 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 तिस 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. तिसलूनिका 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. तिस 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kfp)", () => {
		expect(p.parse("2 तिसलूनिका 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 तिस 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. तिसलूनिका 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. तिस 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kfp)", () => {
		expect(p.parse("1 तिमुतियूस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 तिमु 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमुतियूस 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. तिमु 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kfp)", () => {
		expect(p.parse("2 तिमुतियूस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 तिमु 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमुतियूस 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. तिमु 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kfp)", () => {
		expect(p.parse("तितूस 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("तितू 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kfp)", () => {
		expect(p.parse("पिलेमोन 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("पिले 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kfp)", () => {
		expect(p.parse("इबरानी 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("इब 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kfp)", () => {
		expect(p.parse("एकूब 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("एकू 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kfp)", () => {
		expect(p.parse("1 पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 पत 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पतरस 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. पत 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kfp)", () => {
		expect(p.parse("2 पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 पत 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पतरस 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. पत 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kfp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kfp)", () => {
		expect(p.parse("जूदा 1:1").osis()).toEqual("Jude.1.1");
	});
});

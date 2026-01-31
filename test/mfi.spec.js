"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mfi.js";

describe("Localized book Gen (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mfi)", () => {
		expect(p.parse("Gav. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mfi)", () => {
		expect(p.parse("Wahayu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mfi)", () => {
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mata 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mfi)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mfi)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mfi)", () => {
		expect(p.parse("1 Yuhanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuhanna 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mfi)", () => {
		expect(p.parse("2 Yuhanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuhanna 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mfi)", () => {
		expect(p.parse("3 Yuhanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yuhanna 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mfi)", () => {
		expect(p.parse("Yuhanna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mfi)", () => {
		expect(p.parse("Sler. emnde 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Slera-aha 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mfi)", () => {
		expect(p.parse("Rauma-aha 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mfi)", () => {
		expect(p.parse("1 Kaurintus-aha 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kaur. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kaurintus-aha 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kaur. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mfi)", () => {
		expect(p.parse("2 Kaurintus-aha 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kaur. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kaurintus-aha 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kaur. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mfi)", () => {
		expect(p.parse("Kaulausiya-aha 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mfi)", () => {
		expect(p.parse("Galatiya-aha 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mfi)", () => {
		expect(p.parse("Aifaisus-aha 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mfi)", () => {
		expect(p.parse("Filipi-aha 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mfi)", () => {
		expect(p.parse("1 Taisalauniki-aha 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Taisalauniki-aha 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mfi)", () => {
		expect(p.parse("2 Taisalauniki-aha 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Taisalauniki-aha 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mfi)", () => {
		expect(p.parse("1 Timaute 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timaute 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mfi)", () => {
		expect(p.parse("2 Timaute 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timaute 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mfi)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mfi)", () => {
		expect(p.parse("Filaimaun 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mfi)", () => {
		expect(p.parse("Ibraniŋkau-aha 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mfi)", () => {
		expect(p.parse("Yakuba 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mfi)", () => {
		expect(p.parse("1 Piyer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyer 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mfi)", () => {
		expect(p.parse("2 Piyer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyer 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mfi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mfi)", () => {
		expect(p.parse("Yahuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

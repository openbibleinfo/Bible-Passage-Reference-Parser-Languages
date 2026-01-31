"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tao.js";

describe("Localized book Rev (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tao)", () => {
		expect(p.parse("Ipaziman 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tao)", () => {
		expect(p.parse("Matay 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tao)", () => {
		expect(p.parse("Make 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tao)", () => {
		expect(p.parse("Locya 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tao)", () => {
		expect(p.parse("1 Yowani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tao)", () => {
		expect(p.parse("2 Yowani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tao)", () => {
		expect(p.parse("3 Yowani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yowani 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tao)", () => {
		expect(p.parse("Yowani 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tao)", () => {
		expect(p.parse("Nimlivolivon 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tao)", () => {
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tao)", () => {
		expect(p.parse("1 Kedinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kedinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tao)", () => {
		expect(p.parse("2 Kedinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kedinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tao)", () => {
		expect(p.parse("Kelosi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tao)", () => {
		expect(p.parse("Cyalatay 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tao)", () => {
		expect(p.parse("Ivoso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tao)", () => {
		expect(p.parse("Veydipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tao)", () => {
		expect(p.parse("1 Tesalonicya 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonicya 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tao)", () => {
		expect(p.parse("2 Tesalonicya 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonicya 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tao)", () => {
		expect(p.parse("1 Timotay 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotay 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tao)", () => {
		expect(p.parse("2 Timotay 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotay 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tao)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tao)", () => {
		expect(p.parse("Veydimeng 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tao)", () => {
		expect(p.parse("Sipolay 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tao)", () => {
		expect(p.parse("Yake 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tao)", () => {
		expect(p.parse("1 Pite 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pite 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tao)", () => {
		expect(p.parse("2 Pite 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pite 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tao)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tao)", () => {
		expect(p.parse("Yota 1:1").osis()).toEqual("Jude.1.1");
	});
});

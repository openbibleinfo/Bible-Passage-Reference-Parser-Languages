"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lee.js";

describe("Localized book Rev (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lee)", () => {
		expect(p.parse("Kɔn dɛ̀bɛ́ Zhã nɔ mɔ́ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lee)", () => {
		expect(p.parse("Məco 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lee)", () => {
		expect(p.parse("Markɛ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lee)", () => {
		expect(p.parse("Lwiki 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lee)", () => {
		expect(p.parse("1 Zhã 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zhã 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lee)", () => {
		expect(p.parse("2 Zhã 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zhã 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lee)", () => {
		expect(p.parse("3 Zhã 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zhã 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lee)", () => {
		expect(p.parse("Zhã 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lee)", () => {
		expect(p.parse("Tùntúmə́ bé 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lee)", () => {
		expect(p.parse("Orɔm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lee)", () => {
		expect(p.parse("1 Kɔrɛ̃tɛ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kɔrɛ̃tɛ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lee)", () => {
		expect(p.parse("2 Kɔrɛ̃tɛ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kɔrɛ̃tɛ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lee)", () => {
		expect(p.parse("Kɔlɔɔsɛ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lee)", () => {
		expect(p.parse("Galəshi 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lee)", () => {
		expect(p.parse("Efɛɛzɛ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lee)", () => {
		expect(p.parse("Shilipu 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lee)", () => {
		expect(p.parse("1 Tesəloniki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesəloniki 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lee)", () => {
		expect(p.parse("2 Tesəloniki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesəloniki 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lee)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lee)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lee)", () => {
		expect(p.parse("Titi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lee)", () => {
		expect(p.parse("Shəlamɔ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lee)", () => {
		expect(p.parse("Ebərəbá 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lee)", () => {
		expect(p.parse("Zhakɛ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lee)", () => {
		expect(p.parse("1 Pyɛɛrɛ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyɛɛrɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lee)", () => {
		expect(p.parse("2 Pyɛɛrɛ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyɛɛrɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lee)", () => {
		expect(p.parse("Zhidi 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (lee)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (lee)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zhã - 3 Zhã").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zhã – 3 Zhã").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zhã — 3 Zhã").osis()).toEqual("1John.1-3John.1");
	});
});

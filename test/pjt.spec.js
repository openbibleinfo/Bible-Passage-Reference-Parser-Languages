"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pjt.js";

describe("Localized book Gen (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pjt)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pjt)", () => {
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pjt)", () => {
		expect(p.parse("Revelation 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pjt)", () => {
		expect(p.parse("Ruthaku 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pjt)", () => {
		expect(p.parse("Aitjayaku 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pjt)", () => {
		expect(p.parse("1 Samuelku 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelku 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book Neh (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pjt)", () => {
		expect(p.parse("Niyamayaku 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pjt)", () => {
		expect(p.parse("Esther-ku 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Ps (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (pjt)", () => {
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (pjt)", () => {
		expect(p.parse("Proverbs 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Ezek (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pjt)", () => {
		expect(p.parse("Itjikilku 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pjt)", () => {
		expect(p.parse("Danielku 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Joel (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pjt)", () => {
		expect(p.parse("Tjawilku 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pjt)", () => {
		expect(p.parse("Aimatjaku 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Jonah (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pjt)", () => {
		expect(p.parse("Jonah-ku 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pjt)", () => {
		expect(p.parse("Maikaku 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Hag (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pjt)", () => {
		expect(p.parse("Akaiku 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Mal (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pjt)", () => {
		expect(p.parse("Malakaiku 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pjt)", () => {
		expect(p.parse("Matthew-ku 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pjt)", () => {
		expect(p.parse("Markaku 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pjt)", () => {
		expect(p.parse("Luke-aku 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pjt)", () => {
		expect(p.parse("1 Johnku 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johnku 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pjt)", () => {
		expect(p.parse("2 Johnku 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johnku 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pjt)", () => {
		expect(p.parse("3 Johnku 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johnku 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pjt)", () => {
		expect(p.parse("Johnku 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pjt)", () => {
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pjt)", () => {
		expect(p.parse("Rome-aku 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pjt)", () => {
		expect(p.parse("1 Kaṟintjaku 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kaṟintjaku 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pjt)", () => {
		expect(p.parse("2 Kaṟintjaku 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kaṟintjaku 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pjt)", () => {
		expect(p.parse("Kalatjiku 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pjt)", () => {
		expect(p.parse("Kalaitjiyaku 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pjt)", () => {
		expect(p.parse("Ipitjaku 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pjt)", () => {
		expect(p.parse("Pilipaiku 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pjt)", () => {
		expect(p.parse("1 Tjitja-lanikaku 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tjitja-lanikaku 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pjt)", () => {
		expect(p.parse("2 Tjitja-lanikaku 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tjitja-lanikaku 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pjt)", () => {
		expect(p.parse("1 Timitjiku 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timitjiku 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pjt)", () => {
		expect(p.parse("2 Timitjiku 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timitjiku 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pjt)", () => {
		expect(p.parse("Tayitatjaku 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pjt)", () => {
		expect(p.parse("Paalimanku 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pjt)", () => {
		expect(p.parse("Iipuṟuku 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pjt)", () => {
		expect(p.parse("Jamesaku 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pjt)", () => {
		expect(p.parse("1 Peterku 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peterku 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pjt)", () => {
		expect(p.parse("2 Peterku 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peterku 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pjt)", () => {
		expect(p.parse("Jude-aku 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (pjt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (pjt)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johnku - 3 Johnku").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johnku – 3 Johnku").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johnku — 3 Johnku").osis()).toEqual("1John.1-3John.1");
	});
});

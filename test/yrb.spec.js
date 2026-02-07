"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/yrb.js";

describe("Localized book Rev (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (yrb)", () => {
		expect(p.parse("Jonibai We Ma Boroyari Sina 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (yrb)", () => {
		expect(p.parse("Matiunu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (yrb)", () => {
		expect(p.parse("Makanu 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (yrb)", () => {
		expect(p.parse("Rukanu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (yrb)", () => {
		expect(p.parse("1 Joninu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joninu 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (yrb)", () => {
		expect(p.parse("2 Joninu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joninu 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (yrb)", () => {
		expect(p.parse("3 Joninu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joninu 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (yrb)", () => {
		expect(p.parse("Joninu 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (yrb)", () => {
		expect(p.parse("Afosoro 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (yrb)", () => {
		expect(p.parse("Romani 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (yrb)", () => {
		expect(p.parse("1 Korinita 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinita 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (yrb)", () => {
		expect(p.parse("2 Korinita 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinita 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (yrb)", () => {
		expect(p.parse("Korose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (yrb)", () => {
		expect(p.parse("Gareisia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (yrb)", () => {
		expect(p.parse("Efesa 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (yrb)", () => {
		expect(p.parse("Firifai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (yrb)", () => {
		expect(p.parse("1 Tesoronaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesoronaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (yrb)", () => {
		expect(p.parse("2 Tesaronaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaronaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (yrb)", () => {
		expect(p.parse("1 Timotibai 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotibai 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (yrb)", () => {
		expect(p.parse("2 Timotibai 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotibai 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (yrb)", () => {
		expect(p.parse("Taitasibai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (yrb)", () => {
		expect(p.parse("Fairimonibai 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (yrb)", () => {
		expect(p.parse("Iburu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (yrb)", () => {
		expect(p.parse("Jeimisinu 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (yrb)", () => {
		expect(p.parse("1 Fitanu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Fitanu 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (yrb)", () => {
		expect(p.parse("2 Fitanu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Fitanu 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (yrb)", () => {
		expect(p.parse("Judenu 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (yrb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (yrb)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Joninu - 3 Joninu").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Joninu – 3 Joninu").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Joninu — 3 Joninu").osis()).toEqual("1John.1-3John.1");
	});
});

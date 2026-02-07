"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nnw.js";

describe("Localized book Rev (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nnw)", () => {
		expect(p.parse("Apokalisə 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nnw)", () => {
		expect(p.parse("Matiə 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nnw)", () => {
		expect(p.parse("Marəkə 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nnw)", () => {
		expect(p.parse("Likə 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nnw)", () => {
		expect(p.parse("1 Zwan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zwan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nnw)", () => {
		expect(p.parse("2 Zwan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zwan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nnw)", () => {
		expect(p.parse("3 Zwan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zwan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nnw)", () => {
		expect(p.parse("Zwan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nnw)", () => {
		expect(p.parse("Tʋtʋnan 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nnw)", () => {
		expect(p.parse("Romə tɩ̀án 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nnw)", () => {
		expect(p.parse("1 Korɛntə tɩ̀án 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɛntə tɩ̀án 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nnw)", () => {
		expect(p.parse("2 Korɛntə tɩ̀án 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɛntə tɩ̀án 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nnw)", () => {
		expect(p.parse("Kolosə tɩ̀án 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nnw)", () => {
		expect(p.parse("Galasi tɩ̀án 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nnw)", () => {
		expect(p.parse("Efɛzə tɩ̀án 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nnw)", () => {
		expect(p.parse("Filipə tɩ̀án 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nnw)", () => {
		expect(p.parse("1 Tɛsalonikə tɩ̀án 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalonikə tɩ̀án 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nnw)", () => {
		expect(p.parse("2 Tɛsalonikə tɩ̀án 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonikə tɩ̀án 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nnw)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nnw)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nnw)", () => {
		expect(p.parse("Titə 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nnw)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nnw)", () => {
		expect(p.parse("Ebərə-ba 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nnw)", () => {
		expect(p.parse("Zwakə 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nnw)", () => {
		expect(p.parse("1 Piyɛrə 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyɛrə 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nnw)", () => {
		expect(p.parse("2 Piyɛrə 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyɛrə 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nnw)", () => {
		expect(p.parse("Zwidə 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (nnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (nnw)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zwan - 3 Zwan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zwan – 3 Zwan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Zwan — 3 Zwan").osis()).toEqual("1John.1-3John.1");
	});
});

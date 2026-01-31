"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/any.js";

describe("Localized book Rev (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (any)", () => {
		expect(p.parse("Ayɩkele 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (any)", () => {
		expect(p.parse("Matie 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (any)", () => {
		expect(p.parse("Maakɩ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (any)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (any)", () => {
		expect(p.parse("1 Zʊan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Zʋan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zʊan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zʋan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (any)", () => {
		expect(p.parse("2 Zʊan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Zʋan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zʊan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zʋan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (any)", () => {
		expect(p.parse("3 Zʊan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Zʋan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zʊan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Zʋan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (any)", () => {
		expect(p.parse("Zʊan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zʋan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (any)", () => {
		expect(p.parse("Junman'n 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Junman 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (any)", () => {
		expect(p.parse("Lɔmʊn 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lɔmʋn 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (any)", () => {
		expect(p.parse("1 Kolɩntɩ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolɩntɩ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (any)", () => {
		expect(p.parse("2 Kolɩntɩ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolɩntɩ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (any)", () => {
		expect(p.parse("Kolɔsʊ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolɔsʋ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (any)", () => {
		expect(p.parse("Galasi 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (any)", () => {
		expect(p.parse("Efɛzɩ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (any)", () => {
		expect(p.parse("Filipʊ Asɔnɩn Mma 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipʋ Asɔnɩn Mma 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (any)", () => {
		expect(p.parse("1 Tesaloninki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloninki 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (any)", () => {
		expect(p.parse("2 Tesaloninki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloninki 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (any)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (any)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (any)", () => {
		expect(p.parse("Titɩ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (any)", () => {
		expect(p.parse("Filemʊn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemʋn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (any)", () => {
		expect(p.parse("Ebele'n-Mɔ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (any)", () => {
		expect(p.parse("Zʊakɩ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zʋakɩ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (any)", () => {
		expect(p.parse("1 Pɩɛlɩ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɩɛlɩ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (any)", () => {
		expect(p.parse("2 Pɩɛlɩ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɩɛlɩ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (any)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (any)", () => {
		expect(p.parse("Zudɩ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zʋdɩ 1:1").osis()).toEqual("Jude.1.1");
	});
});

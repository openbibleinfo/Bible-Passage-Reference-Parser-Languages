"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/csk.js";

describe("Localized book Rev (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (csk)", () => {
		expect(p.parse("Búhiisenumabu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (csk)", () => {
		expect(p.parse("Máciya 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (csk)", () => {
		expect(p.parse("Maak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (csk)", () => {
		expect(p.parse("Lík 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (csk)", () => {
		expect(p.parse("1 Saŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Saŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (csk)", () => {
		expect(p.parse("2 Saŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Saŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (csk)", () => {
		expect(p.parse("3 Saŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Saŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (csk)", () => {
		expect(p.parse("Saŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (csk)", () => {
		expect(p.parse("Bakaanelabu 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (csk)", () => {
		expect(p.parse("Kata Lom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lomeŋ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (csk)", () => {
		expect(p.parse("1 Kata Koolent 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Koolentiyeŋ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kata Koolent 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koolentiyeŋ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (csk)", () => {
		expect(p.parse("2 Kata Koolent 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Koolentiyeŋ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kata Koolent 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koolentiyeŋ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (csk)", () => {
		expect(p.parse("Kata Kolos 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosiyeŋ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (csk)", () => {
		expect(p.parse("Kata Galasi 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galasi 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (csk)", () => {
		expect(p.parse("Kata Efées 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efées 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (csk)", () => {
		expect(p.parse("Kata Fílib 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fílib 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (csk)", () => {
		expect(p.parse("1 Kata Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Kata Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonik 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (csk)", () => {
		expect(p.parse("2 Kata Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Kata Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonik 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (csk)", () => {
		expect(p.parse("1 Tímote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tím 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tím 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (csk)", () => {
		expect(p.parse("2 Tímote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tím 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tímote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tím 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (csk)", () => {
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (csk)", () => {
		expect(p.parse("Filemoŋ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (csk)", () => {
		expect(p.parse("Eébulo 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (csk)", () => {
		expect(p.parse("Saak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (csk)", () => {
		expect(p.parse("1 Fiyeel 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Fiyeel 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (csk)", () => {
		expect(p.parse("2 Fiyeel 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Fiyeel 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (csk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (csk)", () => {
		expect(p.parse("Súd 1:1").osis()).toEqual("Jude.1.1");
	});
});

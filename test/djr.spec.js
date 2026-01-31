"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/djr.js";

describe("Localized book Rev (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (djr)", () => {
		expect(p.parse("God-waŋarrwuŋ maŋutji-gurrupanawuy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Revelation 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (djr)", () => {
		expect(p.parse("Mathuyu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (djr)", () => {
		expect(p.parse("Mäk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (djr)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (djr)", () => {
		expect(p.parse("1 Djonguŋ dhäwu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Djon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Djonguŋ dhäwu 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Djon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (djr)", () => {
		expect(p.parse("2 Djonguŋ dhäwu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Djon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Djonguŋ dhäwu 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Djon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (djr)", () => {
		expect(p.parse("3 Djonguŋ dhäwu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Djon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Djonguŋ dhäwu 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Djon 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (djr)", () => {
		expect(p.parse("Djon 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (djr)", () => {
		expect(p.parse("God-waŋarrwuŋ djämapuy mala 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (djr)", () => {
		expect(p.parse("Rawumlil dhäwu 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romans 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (djr)", () => {
		expect(p.parse("1 gorinlil dhäwu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corinthians 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. gorinlil dhäwu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthians 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (djr)", () => {
		expect(p.parse("2 gorinlil dhäwu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corinthians 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. gorinlil dhäwu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthians 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (djr)", () => {
		expect(p.parse("Gulutjaylil dhäwu 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colossians 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (djr)", () => {
		expect(p.parse("Galatjiyalil dhäwu 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatians 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (djr)", () => {
		expect(p.parse("Yipatjatjlil dhäwu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ephesians 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (djr)", () => {
		expect(p.parse("Bilipaylil dhäwu 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philippians 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (djr)", () => {
		expect(p.parse("1 Dhatjalunikalil dhäwu 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Dhatjalunikalil dhäwu 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonians 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (djr)", () => {
		expect(p.parse("2 Dhatjalunikalil dhäwu 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Dhatjalunikalil dhäwu 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonians 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (djr)", () => {
		expect(p.parse("1 Dimithiw dhäwu bolwuŋ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Dimithi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Dimithiw dhäwu bolwuŋ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Dimithi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (djr)", () => {
		expect(p.parse("2 Dimithiw dhäwu bolwuŋ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Dimithi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Dimithiw dhäwu bolwuŋ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Dimithi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (djr)", () => {
		expect(p.parse("Dätitjku dhäwu bolwuŋ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Dätitj 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (djr)", () => {
		expect(p.parse("Bilimungu dhäwu bolwuŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Bilimun 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (djr)", () => {
		expect(p.parse("Yeburuw 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Yeburu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (djr)", () => {
		expect(p.parse("Djayimguŋ dhäwu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Djayim 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (djr)", () => {
		expect(p.parse("1 Betawuŋ dhäwu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Beta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Betawuŋ dhäwu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Beta 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (djr)", () => {
		expect(p.parse("2 Betawuŋ dhäwu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Beta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Betawuŋ dhäwu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Beta 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (djr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (djr)", () => {
		expect(p.parse("Djotkuŋ dhäwu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Djot 1:1").osis()).toEqual("Jude.1.1");
	});
});

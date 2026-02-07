"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/aeu.js";

describe("Localized book Gen (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (aeu)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (aeu)", () => {
		expect(p.parse("Phaodaiq 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Phd 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (aeu)", () => {
		expect(p.parse("Tsiqeeq 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Matt (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (aeu)", () => {
		expect(p.parse("Maqthaiq 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mth 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (aeu)", () => {
		expect(p.parse("Maqkul 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (aeu)", () => {
		expect(p.parse("Lulkavq 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (aeu)", () => {
		expect(p.parse("1 Yaolhaq 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yaolhaq 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (aeu)", () => {
		expect(p.parse("2 Yaolhaq 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yaolhaq 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (aeu)", () => {
		expect(p.parse("3 Yaolhaq 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yaolhaq 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (aeu)", () => {
		expect(p.parse("Yaolhaq 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (aeu)", () => {
		expect(p.parse("Gaqkhoel 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gkh 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (aeu)", () => {
		expect(p.parse("Lolmav 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (aeu)", () => {
		expect(p.parse("1 Gaolliqthu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Glth 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Gaolliqthu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Glth 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (aeu)", () => {
		expect(p.parse("2 Gaolliqthu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Glth 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Gaolliqthu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Glth 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (aeu)", () => {
		expect(p.parse("Gaollaolsail 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Gls 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (aeu)", () => {
		expect(p.parse("Gaqlaqtil 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Glt 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (aeu)", () => {
		expect(p.parse("Eilpheilsu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eiphs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (aeu)", () => {
		expect(p.parse("Pillilpiv 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Plp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (aeu)", () => {
		expect(p.parse("1 Theilsaqlolni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thsln 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Theilsaqlolni 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thsln 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (aeu)", () => {
		expect(p.parse("2 Theilsaqlolni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thsln 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Theilsaqlolni 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thsln 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (aeu)", () => {
		expect(p.parse("1 Tilmolseiq 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tms 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tilmolseiq 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tms 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (aeu)", () => {
		expect(p.parse("2 Tilmolseiq 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tms 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tilmolseiq 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tms 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (aeu)", () => {
		expect(p.parse("Tiltuv 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (aeu)", () => {
		expect(p.parse("Philleilmoq 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Plm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (aeu)", () => {
		expect(p.parse("Heiqbhail 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hbh 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (aeu)", () => {
		expect(p.parse("Yaqkov 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (aeu)", () => {
		expect(p.parse("1 Bheiqtuvluv 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Bhtl 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bheiqtuvluv 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bhtl 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (aeu)", () => {
		expect(p.parse("2 Bheiqtuvluv 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Bhtl 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bheiqtuvluv 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bhtl 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (aeu)", () => {
		expect(p.parse("Yuldav 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (aeu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (aeu)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yaolhaq - 3 Yaolhaq").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yaolhaq – 3 Yaolhaq").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Yaolhaq — 3 Yaolhaq").osis()).toEqual("1John.1-3John.1");
	});
});

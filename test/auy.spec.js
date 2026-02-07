"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/auy.js";

describe("Localized book Rev (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (auy)", () => {
		expect(p.parse("Paápé uráin-aai 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Pa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (auy)", () => {
		expect(p.parse("Mátíyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (auy)", () => {
		expect(p.parse("Mááka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (auy)", () => {
		expect(p.parse("Rúku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Rk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (auy)", () => {
		expect(p.parse("1Yn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (auy)", () => {
		expect(p.parse("2Yn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (auy)", () => {
		expect(p.parse("3 Yóni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (auy)", () => {
		expect(p.parse("1 Yóni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yóni 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (auy)", () => {
		expect(p.parse("2 Yóni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yóni 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (auy)", () => {
		expect(p.parse("Yóni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (auy)", () => {
		expect(p.parse("Aantá-waasi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Aant 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (auy)", () => {
		expect(p.parse("Rómu 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (auy)", () => {
		expect(p.parse("1 Kórinti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kórinti 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (auy)", () => {
		expect(p.parse("2 Kórinti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kórinti 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (auy)", () => {
		expect(p.parse("1Kór 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (auy)", () => {
		expect(p.parse("2Kór 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (auy)", () => {
		expect(p.parse("Kórósi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kór 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (auy)", () => {
		expect(p.parse("Kárésíya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kár 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (auy)", () => {
		expect(p.parse("Éfésási 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Éf 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (auy)", () => {
		expect(p.parse("Fírípái 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fír 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (auy)", () => {
		expect(p.parse("1 Tésáróníka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tésáróníka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (auy)", () => {
		expect(p.parse("2 Tésáróníka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tésáróníka 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (auy)", () => {
		expect(p.parse("1Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (auy)", () => {
		expect(p.parse("2Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (auy)", () => {
		expect(p.parse("1 Tímóti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tímóti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (auy)", () => {
		expect(p.parse("2 Tímóti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tímóti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (auy)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (auy)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (auy)", () => {
		expect(p.parse("Táítási 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Táí 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (auy)", () => {
		expect(p.parse("Fírímóni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Frm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (auy)", () => {
		expect(p.parse("Ípúru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Íp 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (auy)", () => {
		expect(p.parse("Yémísi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ym 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (auy)", () => {
		expect(p.parse("1 Pítaa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pítaa 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (auy)", () => {
		expect(p.parse("2 Pítaa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pítaa 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (auy)", () => {
		expect(p.parse("1Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (auy)", () => {
		expect(p.parse("2Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (auy)", () => {
		expect(p.parse("Yúti 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yt 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (auy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (auy)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yn - 3 Yóni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yn – 3 Yóni").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yn — 3 Yóni").osis()).toEqual("1John.1-3John.1");
	});
});

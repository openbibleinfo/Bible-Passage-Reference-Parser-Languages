"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nla.js";

describe("Localized book Rev (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nla)", () => {
		expect(p.parse("Mənjwo Jâŋ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mjw 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nla)", () => {
		expect(p.parse("Matyê 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nla)", () => {
		expect(p.parse("Máakúsʉ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mks 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nla)", () => {
		expect(p.parse("Lúʼkáasʉ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lks 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nla)", () => {
		expect(p.parse("1Jŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nla)", () => {
		expect(p.parse("2Jŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nla)", () => {
		expect(p.parse("3 Jâŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nla)", () => {
		expect(p.parse("1 Jâŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jâŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nla)", () => {
		expect(p.parse("2 Jâŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jâŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nla)", () => {
		expect(p.parse("Jâŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nla)", () => {
		expect(p.parse("Məfaʼ Pəghaŋə-ntə̂u 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mpt 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nla)", () => {
		expect(p.parse("Lóma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lóm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nla)", () => {
		expect(p.parse("1 Korêŋtə 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korêŋtə 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nla)", () => {
		expect(p.parse("2 Korêŋtə 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korêŋtə 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nla)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nla)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nla)", () => {
		expect(p.parse("Kolósʉ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nla)", () => {
		expect(p.parse("Galâtə 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nla)", () => {
		expect(p.parse("Efêzə 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efz 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nla)", () => {
		expect(p.parse("Filîpə 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nla)", () => {
		expect(p.parse("1 Tesalonîkə 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonîkə 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nla)", () => {
		expect(p.parse("2 Tesalonîkə 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonîkə 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nla)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nla)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nla)", () => {
		expect(p.parse("1 Timotêi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotêi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nla)", () => {
		expect(p.parse("2 Timotêi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotêi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nla)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nla)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nla)", () => {
		expect(p.parse("Tîtə 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tît 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nla)", () => {
		expect(p.parse("Filemôŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nla)", () => {
		expect(p.parse("Hebələ̂ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nla)", () => {
		expect(p.parse("Jâghʼ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jâg 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nla)", () => {
		expect(p.parse("1 Pyêh 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyêh 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nla)", () => {
		expect(p.parse("2 Pyêh 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyêh 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nla)", () => {
		expect(p.parse("1Py 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nla)", () => {
		expect(p.parse("2Py 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nla)", () => {
		expect(p.parse("Jwîdə 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jwd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (nla)", () => {
		expect(p.parse("1 Korêŋtə 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Jâŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Pyêh 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Tesalonîkə 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Timotêi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("2 Korêŋtə 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Jâŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Pyêh 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Tesalonîkə 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Timotêi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("3 Jâŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Kolósʉ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Efêzə 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Galâtə 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Jâghʼ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jâg 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jâŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jwîdə 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Lúʼkáasʉ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Máakúsʉ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Matyê 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Filîpə 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filemôŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Mənjwo Jâŋ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lóma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lóm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Tîtə 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tît 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Parser helper should handle book ranges (nla)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (nla)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jŋ - 3 Jâŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jŋ – 3 Jâŋ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jŋ — 3 Jâŋ").osis()).toEqual("1John.1-3John.1");
	});
});

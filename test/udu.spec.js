"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/udu.js";

describe("Localized book Gen (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (udu)", () => {
		expect(p.parse("Ṯakwiin 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (udu)", () => {
		expect(p.parse("Mmo/ii ka Pije/ mo 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (udu)", () => {
		expect(p.parse("Gwo Jin ’Ceenu Mo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (udu)", () => {
		expect(p.parse("Gway Gi Idawuu’d 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Matt (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (udu)", () => {
		expect(p.parse("Maṯṯa 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (udu)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (udu)", () => {
		expect(p.parse("Luuka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (udu)", () => {
		expect(p.parse("Yohaan ’De/ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (udu)", () => {
		expect(p.parse("Yohaan Su/ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (udu)", () => {
		expect(p.parse("Yohaan Kwara 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (udu)", () => {
		expect(p.parse("Yohaan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (udu)", () => {
		expect(p.parse("Mii Gun Miinu Mo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (udu)", () => {
		expect(p.parse("Ruumiya 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (udu)", () => {
		expect(p.parse("Kurinṯẖuus ’De/ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (udu)", () => {
		expect(p.parse("Kurinṯẖuus Su/ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (udu)", () => {
		expect(p.parse("Kulussi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (udu)", () => {
		expect(p.parse("Galathiyya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (udu)", () => {
		expect(p.parse("Ep̱asus 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (udu)", () => {
		expect(p.parse("P̱ilibbi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (udu)", () => {
		expect(p.parse("Tasaluniiki ’De 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (udu)", () => {
		expect(p.parse("Tasaluniiki Su/ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (udu)", () => {
		expect(p.parse("Ṯimuṯẖawuus ’De/ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (udu)", () => {
		expect(p.parse("Ṯimuṯẖawuus Su/ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (udu)", () => {
		expect(p.parse("Tiithus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (udu)", () => {
		expect(p.parse("P̱ilimuun 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (udu)", () => {
		expect(p.parse("Ibraniyiin 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (udu)", () => {
		expect(p.parse("Yakuub 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (udu)", () => {
		expect(p.parse("Buṯerus ’De/ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (udu)", () => {
		expect(p.parse("Buṯerus Su/ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (udu)", () => {
		expect(p.parse("Yahuusa 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (udu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (udu)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaan ’De/ - Yohaan Kwara").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaan ’De/ – Yohaan Kwara").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Yohaan ’De/ — Yohaan Kwara").osis()).toEqual("1John.1-3John.1");
	});
});

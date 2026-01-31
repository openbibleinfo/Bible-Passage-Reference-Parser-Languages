"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mtt.js";

describe("Localized book Exod (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mtt)", () => {
		expect(p.parse("Exodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mtt)", () => {
		expect(p.parse("Ŋaŋalue 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ŋaŋa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ps (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mtt)", () => {
		expect(p.parse("Psalms 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Ezek (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mtt)", () => {
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mtt)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Matt (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mtt)", () => {
		expect(p.parse("Mathew 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mtt)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mtt)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mtt)", () => {
		expect(p.parse("III John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 John 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mtt)", () => {
		expect(p.parse("1 John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Munra John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Munra. John 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mtt)", () => {
		expect(p.parse("2 John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Munra John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Munra. John 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mtt)", () => {
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mtt)", () => {
		expect(p.parse("O Gagagapalag 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Gagag 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mtt)", () => {
		expect(p.parse("Munra ta Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mtt)", () => {
		expect(p.parse("1 ta Korinth I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ta Korinth I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I ta Korinth I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. ta Korinth I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Munra ta Korinth I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Munra Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Munra. ta Korinth I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Munra. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mtt)", () => {
		expect(p.parse("2 ta Korinth II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ta Korinth II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II ta Korinth II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. ta Korinth II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Munra ta Korinth II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Munra Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Munra. ta Korinth II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Munra. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mtt)", () => {
		expect(p.parse("Munra ta Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mtt)", () => {
		expect(p.parse("Munra ta Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mtt)", () => {
		expect(p.parse("Munra ta Ephesus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ephes 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mtt)", () => {
		expect(p.parse("Munra ta Philipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Philip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mtt)", () => {
		expect(p.parse("1 ta Thesalonika I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ta Thesalonika I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I ta Thesalonika I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. ta Thesalonika I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Munra ta Thesalonika I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Munra Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Munra. ta Thesalonika I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Munra. Thess 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mtt)", () => {
		expect(p.parse("2 ta Thesalonika II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ta Thesalonika II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II ta Thesalonika II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. ta Thesalonika II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Munra ta Thesalonika II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Munra Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Munra. ta Thesalonika II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Munra. Thess 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mtt)", () => {
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Munra Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Munra. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mtt)", () => {
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Munra Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Munra. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mtt)", () => {
		expect(p.parse("Mun i Timothe I 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mtt)", () => {
		expect(p.parse("Mun i Timothe II 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mtt)", () => {
		expect(p.parse("Mun i Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mtt)", () => {
		expect(p.parse("Mun i Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philem 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mtt)", () => {
		expect(p.parse("Munra Hebrew 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebrew 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mtt)", () => {
		expect(p.parse("James 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mtt)", () => {
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Munra Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Munra. Peter 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mtt)", () => {
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Munra Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Munra. Peter 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mtt)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mtt)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
	});
});

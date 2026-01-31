"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/sav.js";

describe("Localized book Gen (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (sav)", () => {
		expect(p.parse("Camba 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Cam 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (sav)", () => {
		expect(p.parse("Pula 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Pul 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (sav)", () => {
		expect(p.parse("Teeɓ ki 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Tee 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Jonah (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (sav)", () => {
		expect(p.parse("Yunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (sav)", () => {
		expect(p.parse("Macce 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mce 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (sav)", () => {
		expect(p.parse("Maarko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (sav)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sav)", () => {
		expect(p.parse("1Sŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sav)", () => {
		expect(p.parse("2Sŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (sav)", () => {
		expect(p.parse("3 Saaŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Sŋ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (sav)", () => {
		expect(p.parse("1 Saaŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Saaŋ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (sav)", () => {
		expect(p.parse("2 Saaŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Saaŋ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (sav)", () => {
		expect(p.parse("Saaŋ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Saŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (sav)", () => {
		expect(p.parse("Tum ci 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tum 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (sav)", () => {
		expect(p.parse("Ɓi Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sav)", () => {
		expect(p.parse("1 Korenta 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korenta 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sav)", () => {
		expect(p.parse("2 Korenta 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korenta 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (sav)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (sav)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (sav)", () => {
		expect(p.parse("Ɓi Kolos 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (sav)", () => {
		expect(p.parse("Ɓi Galaat 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (sav)", () => {
		expect(p.parse("Ɓi Efes 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (sav)", () => {
		expect(p.parse("Ɓi Filippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sav)", () => {
		expect(p.parse("1 Tessalonik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalonik 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sav)", () => {
		expect(p.parse("2 Tessalonik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalonik 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (sav)", () => {
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (sav)", () => {
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sav)", () => {
		expect(p.parse("1 Timoote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sav)", () => {
		expect(p.parse("2 Timoote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (sav)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (sav)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (sav)", () => {
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (sav)", () => {
		expect(p.parse("Filemoon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (sav)", () => {
		expect(p.parse("Heber ci 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (sav)", () => {
		expect(p.parse("Saak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sav)", () => {
		expect(p.parse("1 Piyeer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyeer 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sav)", () => {
		expect(p.parse("2 Piyeer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyeer 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (sav)", () => {
		expect(p.parse("1Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (sav)", () => {
		expect(p.parse("2Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (sav)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (sav)", () => {
		expect(p.parse("Yuud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuu 1:1").osis()).toEqual("Jude.1.1");
	});
});

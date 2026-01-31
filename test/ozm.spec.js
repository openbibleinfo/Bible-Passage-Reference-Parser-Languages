"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ozm.js";

describe("Localized book Rev (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ozm)", () => {
		expect(p.parse("Mɨngwiha 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mɨng 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Twóm 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ozm)", () => {
		expect(p.parse("Matthieu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mataos 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ozm)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ozm)", () => {
		expect(p.parse("Lʉkas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ozm)", () => {
		expect(p.parse("1Yʉ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ozm)", () => {
		expect(p.parse("2Yʉ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ozm)", () => {
		expect(p.parse("3 Yʉanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yʉánɛs 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yʉ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ozm)", () => {
		expect(p.parse("1 Yʉanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yʉánɛs 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yʉanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yʉánɛs 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ozm)", () => {
		expect(p.parse("2 Yʉanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yʉánɛs 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yʉanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yʉánɛs 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ozm)", () => {
		expect(p.parse("Yʉanes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yʉánɛs 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yʉ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ozm)", () => {
		expect(p.parse("Milʉ́mlʉ́ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mɨlʉmlʉ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mɨl 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ozm)", () => {
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rôm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ozm)", () => {
		expect(p.parse("1 Korɛnt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kórɨnt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɛnt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kórɨnt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ozm)", () => {
		expect(p.parse("2 Korɛnt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kórɨnt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɛnt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kórɨnt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ozm)", () => {
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ozm)", () => {
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ozm)", () => {
		expect(p.parse("Kolósia 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ozm)", () => {
		expect(p.parse("Galásia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galat 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ozm)", () => {
		expect(p.parse("Éfɛsɔs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛɛz 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ozm)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fílipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ozm)", () => {
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaloníka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloníka 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ozm)", () => {
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaloníka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloníka 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ozm)", () => {
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ozm)", () => {
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ozm)", () => {
		expect(p.parse("1 Timotɛ̂ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timotɛ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotɛ̂ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotɛ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ozm)", () => {
		expect(p.parse("2 Timotɛ̂ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timotɛ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotɛ̂ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotɛ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ozm)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ozm)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ozm)", () => {
		expect(p.parse("Títos 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ozm)", () => {
		expect(p.parse("Filémɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemɔŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ozm)", () => {
		expect(p.parse("Ebrœ̂ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebrœ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ozm)", () => {
		expect(p.parse("Jacques 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jac 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ozm)", () => {
		expect(p.parse("1 Pétrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pyɛr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pétrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pyɛr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ozm)", () => {
		expect(p.parse("2 Pétrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pyɛr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pétrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pyɛr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ozm)", () => {
		expect(p.parse("1P 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ozm)", () => {
		expect(p.parse("2P 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ozm)", () => {
		expect(p.parse("Yʉ̂d 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yʉd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (ozm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (ozm)", () => {
		expect(p.parse("1 Pétrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("2 Pétrus 1:1").osis()).toEqual("2Pet.1.1");
	});
});

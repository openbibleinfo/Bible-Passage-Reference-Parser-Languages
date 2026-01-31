"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fuv.js";

describe("Localized book Rev (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (fuv)", () => {
		expect(p.parse("Wahayu Yahaya 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("وَحَيُ يَحَيَ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wy 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fuv)", () => {
		expect(p.parse("Maatiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَاتِيُ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Maat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (fuv)", () => {
		expect(p.parse("مَرْکُسْ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (fuv)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لُکَ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fuv)", () => {
		expect(p.parse("1Yah 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fuv)", () => {
		expect(p.parse("2Yah 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fuv)", () => {
		expect(p.parse("3 Yahaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 يَحَيَ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yah 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fuv)", () => {
		expect(p.parse("1 Yahaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يَحَيَ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yahaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يَحَيَ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fuv)", () => {
		expect(p.parse("2 Yahaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 يَحَيَ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yahaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يَحَيَ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fuv)", () => {
		expect(p.parse("Yahaya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يَحَيَ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yah 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (fuv)", () => {
		expect(p.parse("Kuuɗe Lilaaɓe 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("کُوطٜ لِلَاٻٜ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kl 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (fuv)", () => {
		expect(p.parse("رٛومَنْکٛعٜنْ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roomanko'en 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Room 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fuv)", () => {
		expect(p.parse("1 کٛرِنْتِيَنْکٛعٜنْ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintiyanko'en 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. کٛرِنْتِيَنْکٛعٜنْ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintiyanko'en 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fuv)", () => {
		expect(p.parse("2 کٛرِنْتِيَنْکٛعٜنْ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintiyanko'en 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. کٛرِنْتِيَنْکٛعٜنْ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintiyanko'en 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fuv)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fuv)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (fuv)", () => {
		expect(p.parse("کٛلٛوسِيَنْکٛعٜنْ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Koloosiyanko'en 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (fuv)", () => {
		expect(p.parse("غَلَاتِيَنْکٛعٜنْ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galaatiyanko'en 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (fuv)", () => {
		expect(p.parse("اَافِسَنْکٛعٜنْ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Aafisanko'en 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Aaf 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (fuv)", () => {
		expect(p.parse("فِلِبِيَنْکٛعٜنْ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filibiyanko'en 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filib 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fuv)", () => {
		expect(p.parse("1 تَسَلٛونِکَنْکٛعٜنْ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tasaloonikanko'en 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تَسَلٛونِکَنْکٛعٜنْ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasaloonikanko'en 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fuv)", () => {
		expect(p.parse("2 تَسَلٛونِکَنْکٛعٜنْ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tasaloonikanko'en 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تَسَلٛونِکَنْکٛعٜنْ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasaloonikanko'en 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fuv)", () => {
		expect(p.parse("1Tas 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fuv)", () => {
		expect(p.parse("2Tas 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fuv)", () => {
		expect(p.parse("1 Timooti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تِمٛوتِ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timooti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تِمٛوتِ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fuv)", () => {
		expect(p.parse("2 Timooti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تِمٛوتِ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timooti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تِمٛوتِ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fuv)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fuv)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (fuv)", () => {
		expect(p.parse("تِيتُسْ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiitus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (fuv)", () => {
		expect(p.parse("فِلِمٛنْ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (fuv)", () => {
		expect(p.parse("اِبْرَانِيَنْکٛعٜنْ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibraaniyanko'en 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (fuv)", () => {
		expect(p.parse("Yaakubu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يَاکُبُ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fuv)", () => {
		expect(p.parse("1 بِيتُرُسْ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Biiturus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. بِيتُرُسْ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Biiturus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fuv)", () => {
		expect(p.parse("2 بِيتُرُسْ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Biiturus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. بِيتُرُسْ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Biiturus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fuv)", () => {
		expect(p.parse("1Biit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fuv)", () => {
		expect(p.parse("2Biit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (fuv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (fuv)", () => {
		expect(p.parse("Yahuuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يَحُودَ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yahu 1:1").osis()).toEqual("Jude.1.1");
	});
});

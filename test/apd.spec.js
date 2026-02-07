"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/apd.js";

describe("Localized book Rev (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (apd)", () => {
		expect(p.parse("Ru’ya 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("رؤيا 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (apd)", () => {
		expect(p.parse("مَتَّى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (apd)", () => {
		expect(p.parse("Ingīl Marqus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مَرْقُس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marqus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (apd)", () => {
		expect(p.parse("لُوقَا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luuga 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (apd)", () => {
		expect(p.parse("٣ يُوحَنَّا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yuuḥanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yuuḥ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (apd)", () => {
		expect(p.parse("1 يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yuuḥanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yuuḥ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuuḥanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuuḥ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("١ يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("١ Yuuḥanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("١ Yuuḥ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("١. يُوحَنَّا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("١. Yuuḥanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("١. Yuuḥ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (apd)", () => {
		expect(p.parse("2 يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yuuḥanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yuuḥ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuuḥanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuuḥ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("٢ يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("٢ Yuuḥanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("٢ Yuuḥ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("٢. يُوحَنَّا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("٢. Yuuḥanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("٢. Yuuḥ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (apd)", () => {
		expect(p.parse("يُوحَنَّا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuuḥanna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuuḥ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (apd)", () => {
		expect(p.parse("أعمال الرُّسُل 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Avmaal 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Avm 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (apd)", () => {
		expect(p.parse("رُومِيَه 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ruumiya 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ruum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (apd)", () => {
		expect(p.parse("1 كُورِنْثُوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kuurintuus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kuur 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. كُورِنْثُوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kuurintuus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kuur 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("١ كُورِنْثُوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("١ Kuurintuus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("١ Kuur 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("١. كُورِنْثُوس 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("١. Kuurintuus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("١. Kuur 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (apd)", () => {
		expect(p.parse("2 كُورِنْثُوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kuurintuus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kuur 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. كُورِنْثُوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kuurintuus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kuur 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("٢ كُورِنْثُوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("٢ Kuurintuus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("٢ Kuur 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("٢. كُورِنْثُوس 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("٢. Kuurintuus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("٢. Kuur 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (apd)", () => {
		expect(p.parse("كُولُوسِّي 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kuuluussi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kuul 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (apd)", () => {
		expect(p.parse("Ghalaaṭiyya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غَلَاطِيَّه 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ghal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (apd)", () => {
		expect(p.parse("Afasus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أفَسُس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afas 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (apd)", () => {
		expect(p.parse("Fiilibbi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فيلِبّي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fiilib 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (apd)", () => {
		expect(p.parse("1 تَسَالُونِيكِي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tasaluniiki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tas 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تَسَالُونِيكِي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tasaluniiki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tas 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("١ تَسَالُونِيكِي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("١ Tasaluniiki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("١ Tas 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("١. تَسَالُونِيكِي 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("١. Tasaluniiki 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("١. Tas 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (apd)", () => {
		expect(p.parse("2 تَسَالُونِيكِي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tasaluniiki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tas 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تَسَالُونِيكِي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tasaluniiki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tas 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("٢ تَسَالُونِيكِي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("٢ Tasaluniiki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("٢ Tas 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("٢. تَسَالُونِيكِي 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("٢. Tasaluniiki 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("٢. Tas 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (apd)", () => {
		expect(p.parse("1 تِيمُوثَاوُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timutaawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تِيمُوثَاوُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timutaawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("١ تِيمُوثَاوُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("١ Timutaawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("١ Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("١. تِيمُوثَاوُس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("١. Timutaawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("١. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (apd)", () => {
		expect(p.parse("2 تِيمُوثَاوُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timutaawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تِيمُوثَاوُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timutaawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("٢ تِيمُوثَاوُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("٢ Timutaawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("٢ Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("٢. تِيمُوثَاوُس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("٢. Timutaawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("٢. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (apd)", () => {
		expect(p.parse("Tiiṭus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تِيطُس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tiiṭ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (apd)", () => {
		expect(p.parse("فِلِيمُون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimuun 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filiim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (apd)", () => {
		expect(p.parse("Vibraaniyyiin 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عِبرانيين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Vib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (apd)", () => {
		expect(p.parse("يَعْقُوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yavkuub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yav 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (apd)", () => {
		expect(p.parse("1 بُطْرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Buṭrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Buṭ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. بُطْرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Buṭrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Buṭ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("١ بُطْرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("١ Buṭrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("١ Buṭ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("١. بُطْرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("١. Buṭrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("١. Buṭ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (apd)", () => {
		expect(p.parse("2 بُطْرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Buṭrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Buṭ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. بُطْرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Buṭrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Buṭ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("٢ بُطْرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("٢ Buṭrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("٢ Buṭ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("٢. بُطْرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("٢. Buṭrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("٢. Buṭ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (apd)", () => {
		expect(p.parse("يَهُوذَا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yahuuza 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yah 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (apd)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (apd)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 يُوحَنَّا - ٣ يُوحَنَّا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 يُوحَنَّا – ٣ يُوحَنَّا").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 يُوحَنَّا — ٣ يُوحَنَّا").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rif.js";

describe("Localized book Rev (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rif)", () => {
		expect(p.parse("لواحي ن يوحنا 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Lwaḥi 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Waḥ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("واح 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rif)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متى 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مت 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rif)", () => {
		expect(p.parse("Marqus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرقس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrq 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("مرق 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rif)", () => {
		expect(p.parse("Luqa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luq 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوق 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rif)", () => {
		expect(p.parse("1Yuḥ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1يوح 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rif)", () => {
		expect(p.parse("2Yuḥ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2يوح 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rif)", () => {
		expect(p.parse("3 Yuḥanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 يوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yuḥ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3يوح 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rif)", () => {
		expect(p.parse("1 Yuḥanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 يوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuḥanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. يوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rif)", () => {
		expect(p.parse("2 Yuḥanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 يوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuḥanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. يوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rif)", () => {
		expect(p.parse("Yuḥanna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuḥ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("يوح 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rif)", () => {
		expect(p.parse("Ȓexḏayem 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ڒخذايم 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ȓx 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ڒخ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rif)", () => {
		expect(p.parse("Ayṯ-Ruma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("أيث-روما 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rum 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("روم 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rif)", () => {
		expect(p.parse("1 Ayṯ-Kurinṯ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 أيث-كورينث 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ayṯ-Kurinṯ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. أيث-كورينث 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rif)", () => {
		expect(p.parse("2 Ayṯ-Kurinṯ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 أيث-كورينث 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ayṯ-Kurinṯ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. أيث-كورينث 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rif)", () => {
		expect(p.parse("1Kur 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1كور 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rif)", () => {
		expect(p.parse("2Kur 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2كور 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rif)", () => {
		expect(p.parse("Ayṯ-Kulus 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("أيث-كولوس 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kul 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("كول 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rif)", () => {
		expect(p.parse("Ayṯ-Galaṭya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("أيث-ݣلاطيا 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ݣل 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rif)", () => {
		expect(p.parse("Ayṯ-Ufasus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أيث-ؤفسوس 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("أفس 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rif)", () => {
		expect(p.parse("Ayṯ-Filippas 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("أيث-فيليـپـي 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فلپ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rif)", () => {
		expect(p.parse("1 Ayṯ-Salunik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 أيث-سلونيك 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ayṯ-Salunik 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. أيث-سلونيك 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rif)", () => {
		expect(p.parse("2 Ayṯ-Salunik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 أيث-سلونيك 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ayṯ-Salunik 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. أيث-سلونيك 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rif)", () => {
		expect(p.parse("1Sal 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1سلن 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rif)", () => {
		expect(p.parse("2Sal 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2سلن 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rif)", () => {
		expect(p.parse("1 Timutawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timutawus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تيموتاوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rif)", () => {
		expect(p.parse("2 Timutawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timutawus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تيموتاوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rif)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1تيم 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rif)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2تيم 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rif)", () => {
		expect(p.parse("ثبرات غار تيتوس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تيت 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rif)", () => {
		expect(p.parse("ثبرات غار فليمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimun 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فلم 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rif)", () => {
		expect(p.parse("Iƹibraniyen 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("يعيبرانيين 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Iƹb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("عب 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rif)", () => {
		expect(p.parse("ثبرات غار يعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaƹqub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaƹ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("يعق 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rif)", () => {
		expect(p.parse("1 Buṭrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 بطرس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Buṭrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. بطرس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rif)", () => {
		expect(p.parse("2 Buṭrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 بطرس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Buṭrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. بطرس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rif)", () => {
		expect(p.parse("1Buṭ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1بط 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rif)", () => {
		expect(p.parse("2Buṭ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2بط 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rif)", () => {
		expect(p.parse("ثبرات زي يهوذا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yahuḏa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yah 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("يه 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (rif)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (rif)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (rif)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (rif)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yuḥ - 3 Yuḥanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yuḥ – 3 Yuḥanna").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yuḥ — 3 Yuḥanna").osis()).toEqual("1John.1-3John.1");
	});
});

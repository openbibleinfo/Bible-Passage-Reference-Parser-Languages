"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gag.js";

describe("Localized book Rev (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gag)", () => {
		expect(p.parse("Apokalіpsіs 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Апокалипсис 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gag)", () => {
		expect(p.parse("Matfey 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матфей 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gag)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gag)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gag)", () => {
		expect(p.parse("1 İoanın 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Иоанын 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. İoanın 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иоанын 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gag)", () => {
		expect(p.parse("2 İoanın 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Иоанын 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. İoanın 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иоанын 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gag)", () => {
		expect(p.parse("3 İoanın 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Иоанын 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. İoanın 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Иоанын 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gag)", () => {
		expect(p.parse("İoan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Иоан 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gag)", () => {
		expect(p.parse("Yaptıklar 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Йаптыклар 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gag)", () => {
		expect(p.parse("Romalılara 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ромалылара 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gag)", () => {
		expect(p.parse("1 Korіnflіlerä 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринфлилерӓ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korіnflіlerä 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфлилерӓ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gag)", () => {
		expect(p.parse("2 Korіnflіlerä 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринфлилерӓ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korіnflіlerä 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфлилерӓ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gag)", () => {
		expect(p.parse("Koloslulara 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колослулара 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gag)", () => {
		expect(p.parse("Galatіyalılara 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатийалылара 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gag)", () => {
		expect(p.parse("Efeslіlerä 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефеслилерӓ 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gag)", () => {
		expect(p.parse("Fіlіplіlerä 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филиплилерӓ 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gag)", () => {
		expect(p.parse("1 Salonіklіlerä 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Салониклилерӓ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Salonіklіlerä 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Салониклилерӓ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gag)", () => {
		expect(p.parse("2 Salonіklіlerä 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Салониклилерӓ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Salonіklіlerä 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Салониклилерӓ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gag)", () => {
		expect(p.parse("1 Tіmofeyä 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимофейӓ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tіmofeyä 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофейӓ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gag)", () => {
		expect(p.parse("2 Tіmofeyä 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимофейӓ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tіmofeyä 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофейӓ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gag)", () => {
		expect(p.parse("Tіta 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тита 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gag)", () => {
		expect(p.parse("Fіlіmona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимона 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gag)", () => {
		expect(p.parse("Çıfıtlara 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Чыфытлара 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gag)", () => {
		expect(p.parse("İakovun 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Иаковун 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gag)", () => {
		expect(p.parse("1 Petrіnіn 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петринин 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrіnіn 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петринин 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gag)", () => {
		expect(p.parse("2 Petrіnіn 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петринин 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrіnіn 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петринин 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gag)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gag)", () => {
		expect(p.parse("İudanın 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуданын 1:1").osis()).toEqual("Jude.1.1");
	});
});

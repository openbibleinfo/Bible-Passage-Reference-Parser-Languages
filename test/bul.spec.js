"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bul.js";

describe("Localized book Gen (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bul)", () => {
		expect(p.parse("Първа Моисеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Първа. Моисеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Първо Моисеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Първо. Моисеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Моисеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Моисеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Моисеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Моисеева 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bul)", () => {
		expect(p.parse("Втора Моисеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Втора. Моисеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Второ Моисеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Второ. Моисеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Моисеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Моисеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Моисеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Моисеева 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bul)", () => {
		expect(p.parse("Трета Моисеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трета. Моисеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трето Моисеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трето. Моисеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Моисеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Моисеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Моисеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Моисеева 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bul)", () => {
		expect(p.parse("Четвърта Моисеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Четвърта. Моисеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Четвърто Моисеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Четвърто. Моисеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Моисеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Моисеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Моисеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Моисеева 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Gen (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bul)", () => {
		expect(p.parse("Първа книга Моисеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Битие 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Бит 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bul)", () => {
		expect(p.parse("Втора книга Моисеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Изход 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Изх 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (bul)", () => {
		expect(p.parse("Вил и змеят 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Бел 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Вил 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bul)", () => {
		expect(p.parse("Трета книга Моисеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Левит 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bul)", () => {
		expect(p.parse("Четвърта книга Моисеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Числа 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Числ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Чис 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (bul)", () => {
		expect(p.parse("Книга Премъдрост на Иисуса, син Сирахов 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Премъдрост на Иисус, син Сирахов 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Книга на Сирах 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Сирахов 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Сирах 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Сир 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (bul)", () => {
		expect(p.parse("Книга Премъдрост Соломонова 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Премъдрост Соломонова 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Премъдрост на Соломон 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Книга на мъдростта 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Премъдрост 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Прем 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bul)", () => {
		expect(p.parse("Книга Плач Иеремиев 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плачът на Йеремия 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плачът на Еремия 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плач Иеремиев 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плач Еремиев 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плач Иер 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("П. Йер 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("П Йер 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плач 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (bul)", () => {
		expect(p.parse("Послание на Иеремия 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Послание на Йеремия 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Поел. Иер 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Поел Иер 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Пос. Йер 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Пос Йер 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bul)", () => {
		expect(p.parse("Откровение на св. Иоана Богослова 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Откровение на св Иоана Богослова 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Откровението на Йоан 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Откровение на Йоан 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Апокалипсис 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Откровение 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Откр 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Отк 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (bul)", () => {
		expect(p.parse("Молитвата на Манасия 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("Манасия 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("М. Ман 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("М Ман 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bul)", () => {
		expect(p.parse("Пета книга Моисеева 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Второзаконие 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Моисеева 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Второзак 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Втор 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Вт 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bul)", () => {
		expect(p.parse("Книга на Исус Навиев 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Книга Иисус Навин 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Иисус Навин 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Исус Навиев 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Исус Навин 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Иис. Нав 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Иис Нав 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ис. Нав 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ис Нав 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("И Н 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("И. Н 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("И.Н 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bul)", () => {
		expect(p.parse("Книга Съдии Израилеви 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Книга на съдиите 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Съдии Израилеви 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Съдии 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Съд 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bul)", () => {
		expect(p.parse("Книга Рут 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (bul)", () => {
		expect(p.parse("Първа книга на Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ездр 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Езд 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (bul)", () => {
		expect(p.parse("Втора книга на Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ездр 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3 Ездр 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Езд 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (bul)", () => {
		expect(p.parse("Първа Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Първа. Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Първо Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Първо. Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ездра 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (bul)", () => {
		expect(p.parse("Втора Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Втора. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Второ Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Второ. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ездра 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 2Esd (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (bul)", () => {
		expect(p.parse("Трета Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Трета. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Трето Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Трето. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3 Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("III Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("III. Ездра 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bul)", () => {
		expect(p.parse("Ездра 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bul)", () => {
		expect(p.parse("Книга на пророк Исаия 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Исаия 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Исая 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ис 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bul)", () => {
		expect(p.parse("Първа Книга на царете 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първа Царства 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първа Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първа Царе 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първа Цар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първа. Книга на царете 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първа. Царства 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първа. Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първа. Царе 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първа. Цар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо Книга на царете 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо Царства 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо Царе 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо Цар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо. Книга на царете 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо. Царства 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо. Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо. Царе 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо. Цар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Книга на царете 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Царства 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Царе 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Цар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Книга на царете 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Царства 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Царе 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Цар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Книга на царете 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Царства 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Царе 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Цар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Книга на царете 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Царства 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Царе 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Цар 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bul)", () => {
		expect(p.parse("Втора Книга на царете 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора Царства 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора Царе 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора Цар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора. Книга на царете 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора. Царства 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора. Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора. Царе 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора. Цар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ Книга на царете 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ Царства 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ Царе 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ Цар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ. Книга на царете 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ. Царства 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ. Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ. Царе 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ. Цар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Книга на царете 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Царства 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Царе 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Цар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Книга на царете 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Царства 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Царе 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Цар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Книга на царете 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Царства 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Царе 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Цар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Книга на царете 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Царства 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Царе 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Цар 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bul)", () => {
		expect(p.parse("Трета Книга на царете 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трета Царства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трета Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трета Царе 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трета Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трета. Книга на царете 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трета. Царства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трета. Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трета. Царе 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трета. Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трето Книга на царете 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трето Царства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трето Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трето Царе 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трето Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трето. Книга на царете 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трето. Царства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трето. Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трето. Царе 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трето. Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Книга на царете 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Царства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Царе 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Книга на царете 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Царства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Царе 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Книга на царете 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Царства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Царе 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Книга на царете 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Царства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Царе 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Цар 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bul)", () => {
		expect(p.parse("Четвърта Книга на царете 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърта Царства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърта Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърта Царе 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърта Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърта. Книга на царете 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърта. Царства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърта. Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърта. Царе 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърта. Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърто Книга на царете 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърто Царства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърто Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърто Царе 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърто Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърто. Книга на царете 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърто. Царства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърто. Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърто. Царе 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърто. Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Книга на царете 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Царства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Царе 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Книга на царете 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Царства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Царе 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Книга на царете 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Царства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Царе 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Книга на царете 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Царства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Царе 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Цар 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bul)", () => {
		expect(p.parse("Първа Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първа. Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първо. Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Самуил 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bul)", () => {
		expect(p.parse("Втора Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора. Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Второ. Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Самуил 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bul)", () => {
		expect(p.parse("Втора книга на Самуил 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Втора книга Царства 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Царе 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Ц 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bul)", () => {
		expect(p.parse("Първа книга на Самуил 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Първа книга Царства 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Царе 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Ц 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Kgs (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bul)", () => {
		expect(p.parse("Четвърта книга на царете 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четвърта книга Царства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Царе 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Ц 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bul)", () => {
		expect(p.parse("Трета книга на царете 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трета книга Царства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Царе 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Ц 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bul)", () => {
		expect(p.parse("Първа Книга на летописите 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първа Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първа Парал 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първа Лет 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първа. Книга на летописите 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първа. Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първа. Парал 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първа. Лет 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първо Книга на летописите 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първо Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първо Парал 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първо Лет 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първо. Книга на летописите 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първо. Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първо. Парал 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първо. Лет 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Книга на летописите 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Парал 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Лет 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Книга на летописите 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Парал 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Лет 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Книга на летописите 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Парал 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Лет 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Книга на летописите 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Парал 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Лет 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bul)", () => {
		expect(p.parse("Втора Книга на летописите 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора Парал 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора Лет 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора. Книга на летописите 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора. Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора. Парал 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора. Лет 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ Книга на летописите 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ Парал 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ Лет 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ. Книга на летописите 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ. Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ. Парал 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Второ. Лет 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Книга на летописите 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Парал 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Лет 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Книга на летописите 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Парал 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Лет 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Книга на летописите 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Парал 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Лет 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Книга на летописите 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Парал 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Лет 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bul)", () => {
		expect(p.parse("или Втора книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Втора книга на летописите 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Летописи 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Лет 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bul)", () => {
		expect(p.parse("или Първа книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първа книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Първа книга на летописите 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Летописи 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Лет 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bul)", () => {
		expect(p.parse("Книга на Ездра 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езд 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bul)", () => {
		expect(p.parse("Книга на Неемия 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неемия 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неем 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (bul)", () => {
		expect(p.parse("Книга Естир (според Септуагинта) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Естир (според Септуагинта) 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ест. Септ 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("Ест Септ 1:1").osis()).toEqual("GkEsth.1.1");
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bul)", () => {
		expect(p.parse("Книга Естир 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Естир 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ест 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bul)", () => {
		expect(p.parse("Книга на Иова 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Книга на Йов 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Иов 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Йов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bul)", () => {
		expect(p.parse("Псалтир 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалми 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалом 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Пс 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (bul)", () => {
		expect(p.parse("Молитвата на Азария 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("М. Аза 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("М Аза 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bul)", () => {
		expect(p.parse("Книга Притчи Соломонови 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Притчи Соломонови 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Притчи 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Притч 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Пр 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bul)", () => {
		expect(p.parse("Книга на Еклисиаста или Проповедника 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Проповедника 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Еклисиаста 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Еклесиаст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Еклисиаст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Екл 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (bul)", () => {
		expect(p.parse("Песента на тримата младежи 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("П. Мл 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("П Мл 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bul)", () => {
		expect(p.parse("Книга Песен на Песните, от Соломона 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Песен на песните 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Пес. на песн 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Пес на песн 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("П. П 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("П П 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Пес 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bul)", () => {
		expect(p.parse("Книга на пророк Йеремия 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Книга на пророк Еремия 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Иеремия 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Йеремия 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Еремия 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Иер 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Йер 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ер 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bul)", () => {
		expect(p.parse("Книга на пророк Иезекииля 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Книга на пророк Езекиил 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Иезекииля 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Йезекиил 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езекиил 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езекил 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езек 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Иез 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Йез 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bul)", () => {
		expect(p.parse("Книга на пророк Даниила 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Книга на пророк Даниил 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Даниила 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Данаил 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Даниил 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bul)", () => {
		expect(p.parse("Книга на пророк Осия 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Осия 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ос 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bul)", () => {
		expect(p.parse("Книга на пророк Иоиля 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Книга на пророк Иоил 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Иоиля 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Иоил 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Йоил 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bul)", () => {
		expect(p.parse("Книга на пророк Амоса 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Книга на пророк Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амоса 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ам 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bul)", () => {
		expect(p.parse("Книга на пророк Авдий 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авдий 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авд 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bul)", () => {
		expect(p.parse("Книга на пророк Иона 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Иона 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Йона 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Йон 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bul)", () => {
		expect(p.parse("Книга на пророк Михей 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Михей 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мих 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bul)", () => {
		expect(p.parse("Книга на пророк Наума 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Книга на пророк Наум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Наума 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Наум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bul)", () => {
		expect(p.parse("Книга на пророк Авакума 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Книга на пророк Авакум 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авакума 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авакум 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авак 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авк 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ав 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bul)", () => {
		expect(p.parse("Книга на пророк Софония 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Софоний 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Софония 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Соф 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bul)", () => {
		expect(p.parse("Книга на пророк Агей 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Агей 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Аг 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bul)", () => {
		expect(p.parse("Книга на пророк Захария 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Захария 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зах 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bul)", () => {
		expect(p.parse("Книга на пророк Малахия 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малахия 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bul)", () => {
		expect(p.parse("От Матея свето Евангелие 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Евангелие от Матей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("От Матея 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bul)", () => {
		expect(p.parse("От Марка свето Евангелие 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Евангелие от Марко 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("От Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марко 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bul)", () => {
		expect(p.parse("От Лука свето Евангелие 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Евангелие от Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("От Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лук 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bul)", () => {
		expect(p.parse("Първа Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Първа. Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Първо Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Първо. Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Йоаново 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bul)", () => {
		expect(p.parse("Втора Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Втора. Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ. Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Йоаново 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bul)", () => {
		expect(p.parse("Трета Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трета. Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето. Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Йоаново 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bul)", () => {
		expect(p.parse("Първо съборно послание на св. ап. Иоана Богослова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Първо съборно послание на св ап. Иоана Богослова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Първо съборно послание на св. ап Иоана Богослова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Първо съборно послание на св ап Иоана Богослова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Първо послание на Йоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Йоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Йн 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bul)", () => {
		expect(p.parse("Второ съборно послание на св. ап. Иоана Богослова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ съборно послание на св ап. Иоана Богослова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ съборно послание на св. ап Иоана Богослова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ съборно послание на св ап Иоана Богослова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ послание на Йоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Йоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Йн 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bul)", () => {
		expect(p.parse("Трето съборно послание на св. ап. Иоана Богослова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето съборно послание на св ап. Иоана Богослова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето съборно послание на св. ап Иоана Богослова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето съборно послание на св ап Иоана Богослова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето послание на Йоан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Йоан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Йн 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bul)", () => {
		expect(p.parse("Първа Йоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Първа. Йоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Първо Йоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Първо. Йоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Йоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Йоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Йоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Йоан 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bul)", () => {
		expect(p.parse("Втора Йоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Втора. Йоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ Йоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Второ. Йоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Йоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Йоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Йоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Йоан 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bul)", () => {
		expect(p.parse("Трета Йоан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трета. Йоан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето Йоан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трето. Йоан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Йоан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Йоан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Йоан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Йоан 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bul)", () => {
		expect(p.parse("Йоан 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bul)", () => {
		expect(p.parse("От Иоана свето Евангелие 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Евангелие от Йоан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("От Иоана 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Иоан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Йн 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bul)", () => {
		expect(p.parse("Деяния на светите Апостоли 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Деянията на апостолите 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Деяния на апостолите 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Апостол 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Деяния 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Д. А 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дела 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Деян 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Д А 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bul)", () => {
		expect(p.parse("Послание на св. ап. Павла до Римляни 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Послание на св ап. Павла до Римляни 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Послание на св. ап Павла до Римляни 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Послание на св ап Павла до Римляни 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Послание към римляните 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("римляните 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римляни 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римл 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bul)", () => {
		expect(p.parse("Първа Коринтяните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първа Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първа Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първа. Коринтяните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първа. Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първа. Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първо Коринтяните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първо Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първо Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първо. Коринтяните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първо. Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първо. Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринтяните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринтяните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Коринтяните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Коринтяните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bul)", () => {
		expect(p.parse("Втора Коринтяните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Втора Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Втора Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Втора. Коринтяните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Втора. Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Втора. Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ Коринтяните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ. Коринтяните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ. Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ. Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринтяните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринтяните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Коринтяните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Коринтяните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bul)", () => {
		expect(p.parse("Второ послание на св. ап. Павла до Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ послание на св ап. Павла до Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ послание на св. ап Павла до Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ послание на св ап Павла до Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Второ послание към коринтяните 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bul)", () => {
		expect(p.parse("Първо послание на св. ап. Павла до Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първо послание на св ап. Павла до Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първо послание на св. ап Павла до Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първо послание на св ап Павла до Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Първо послание към коринтяните 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bul)", () => {
		expect(p.parse("Послание на св. ап. Павла до Галатяни 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Послание на св ап. Павла до Галатяни 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Послание на св. ап Павла до Галатяни 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Послание на св ап Павла до Галатяни 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Послание към галатяните 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатяните 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатяни 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bul)", () => {
		expect(p.parse("Послание на св. ап. Павла до Ефесяни 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Послание на св ап. Павла до Ефесяни 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Послание на св. ап Павла до Ефесяни 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Послание на св ап Павла до Ефесяни 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Послание към ефесяните 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефесяните 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефесяни 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bul)", () => {
		expect(p.parse("Послание на св. ап. Павла до Филипяни 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Послание на св ап. Павла до Филипяни 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Послание на св. ап Павла до Филипяни 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Послание на св ап Павла до Филипяни 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Послание към филипяните 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филипяните 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филипяни 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bul)", () => {
		expect(p.parse("Послание на св. ап. Павла до Колосяни 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Послание на св ап. Павла до Колосяни 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Послание на св. ап Павла до Колосяни 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Послание на св ап Павла до Колосяни 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Послание към колосяните 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колосяните 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колосяни 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bul)", () => {
		expect(p.parse("Първа Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първа Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първа Солунци 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първа Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първа. Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първа. Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първа. Солунци 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първа. Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо Солунци 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо. Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо. Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо. Солунци 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо. Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Солунци 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Солунци 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Солунци 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Солунци 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Сол 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bul)", () => {
		expect(p.parse("Втора Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора Солунци 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора. Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора. Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора. Солунци 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Втора. Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ Солунци 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ. Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ. Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ. Солунци 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ. Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Солунци 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Солунци 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Солунци 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Солунци 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Сол 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bul)", () => {
		expect(p.parse("Второ послание на св. ап. Павла до Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ послание на св ап. Павла до Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ послание на св. ап Павла до Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ послание на св ап Павла до Солуняни 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Второ послание към солунците 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Солунци 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Сол 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bul)", () => {
		expect(p.parse("Първо послание на св. ап. Павла до Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо послание на св ап. Павла до Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо послание на св. ап Павла до Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо послание на св ап Павла до Солуняни 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Първо послание към солунците 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Солунци 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Сол 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bul)", () => {
		expect(p.parse("Първа Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Първа Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Първа. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Първа. Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Първо Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Първо Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Първо. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Първо. Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bul)", () => {
		expect(p.parse("Втора Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Втора Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Втора. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Втора. Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ. Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bul)", () => {
		expect(p.parse("Второ послание на св. ап. Павла до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ послание на св ап. Павла до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ послание на св. ап Павла до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ послание на св ап Павла до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Второ послание към Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bul)", () => {
		expect(p.parse("Първо послание на св. ап. Павла до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Първо послание на св ап. Павла до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Първо послание на св. ап Павла до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Първо послание на св ап Павла до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Първо послание към Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bul)", () => {
		expect(p.parse("Послание на св. ап. Павла до Тита 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Послание на св ап. Павла до Тита 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Послание на св. ап Павла до Тита 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Послание на св ап Павла до Тита 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Послание към Тит 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bul)", () => {
		expect(p.parse("Послание на св. ап. Павла до Филимона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Послание на св ап. Павла до Филимона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Послание на св. ап Павла до Филимона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Послание на св ап Павла до Филимона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Послание към Филимон 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимон 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филим 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bul)", () => {
		expect(p.parse("Послание на св. ап. Павла до Евреите 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Послание на св ап. Павла до Евреите 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Послание на св. ап Павла до Евреите 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Послание на св ап Павла до Евреите 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Послание към евреите 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евреите 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евреи 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bul)", () => {
		expect(p.parse("Съборно послание на св. ап. Иакова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Съборно послание на св ап. Иакова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Съборно послание на св. ап Иакова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Съборно послание на св ап Иакова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Послание на Яков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Яков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Иак 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Як 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bul)", () => {
		expect(p.parse("Първа Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първа Петър 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първа Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първа Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първа. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първа. Петър 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първа. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първа. Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо Петър 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо. Петър 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо. Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петър 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петър 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Петър 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Петър 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Пет 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bul)", () => {
		expect(p.parse("Втора Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора Петър 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора. Петър 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Втора. Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ Петър 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ. Петър 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ. Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петър 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петър 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Петър 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Петър 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Пет 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bul)", () => {
		expect(p.parse("Второ съборно послание на св. ап. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ съборно послание на св ап. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ съборно послание на св. ап Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ съборно послание на св ап Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Второ послание на Петър 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bul)", () => {
		expect(p.parse("Първо съборно послание на св. ап. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо съборно послание на св ап. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо съборно послание на св. ап Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо съборно послание на св ап Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Първо послание на Петър 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bul)", () => {
		expect(p.parse("Съборно послание на св. ап. Иуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Съборно послание на св ап. Иуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Съборно послание на св. ап Иуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Съборно послание на св ап Иуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Послание на Юда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуд 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Юда 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (bul)", () => {
		expect(p.parse("Книга на Товита 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Книга за Тобия 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Книга на Товит 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Товита 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Тобия 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Товит 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Тов 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (bul)", () => {
		expect(p.parse("Книга за Юдита 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Книга Иудит 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Иудит 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Юдит 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Юд 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (bul)", () => {
		expect(p.parse("Книга на пророк Варуха 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Книга на Барух 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Варуха 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Варух 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Вар 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (bul)", () => {
		expect(p.parse("Сусана 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Сус 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (bul)", () => {
		expect(p.parse("Първа Макавеи 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Първа. Макавеи 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Първо Макавеи 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Първо. Макавеи 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Макавеи 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Макавеи 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Макавеи 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Макавеи 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (bul)", () => {
		expect(p.parse("Втора Макавеи 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Втора. Макавеи 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Второ Макавеи 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Второ. Макавеи 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Макавеи 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Макавеи 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Макавеи 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Макавеи 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (bul)", () => {
		expect(p.parse("Трета Макавеи 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трета. Макавеи 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трето Макавеи 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трето. Макавеи 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Макавеи 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Макавеи 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Макавеи 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Макавеи 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (bul)", () => {
		expect(p.parse("Четвърта Макавеи 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Четвърта. Макавеи 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Четвърто Макавеи 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Четвърто. Макавеи 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Макавеи 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Макавеи 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Макавеи 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Макавеи 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (bul)", () => {
		expect(p.parse("Втора книга на Макавеите 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Втора книга Макавейска 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Макавеи 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Мак 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (bul)", () => {
		expect(p.parse("Трето книга на Макавеите 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трета книга Макавейска 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Макавеи 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Мак 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (bul)", () => {
		expect(p.parse("Четвърта книга на Макавеите 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Макавеи 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Мак 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (bul)", () => {
		expect(p.parse("Първа книга на Макавеите 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Първа книга Макавейска 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Макавеи 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Мак 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book Hab,Obad (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab,Obad (bul)", () => {
		expect(p.parse("Ав 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Ezek,Ezra (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek,Ezra (bul)", () => {
		expect(p.parse("Ез 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Parser helper should handle ranges (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (bul)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1-2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 - 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1–2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 – 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1—2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 — 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (bul)", () => {
		expect(p.parse("Titus 1:1, глава 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 глава 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, глави 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 глави 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, гл 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 гл 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (bul)", () => {
		expect(p.parse("Exod 1:1 ст 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm ст 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (bul)", () => {
		expect(p.parse("Exod 1:1 и 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 и 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (bul)", () => {
		expect(p.parse("Ps 3 title, 4:2, 5:title").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (bul)", () => {
		expect(p.parse("Rev 3и сл, 4:2и сл").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (bul)", () => {
		expect(p.parse("Lev 1 (ERV)").osis_and_translations()).toEqual([["Lev.1","ERV"]]);
		expect(p.parse("Lev 1 (BPB)").osis_and_translations()).toEqual([["Lev.1","BPB"]]);
	});
});
describe("Parser helper should handle book ranges (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bul)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Първа Йоаново - Трета Йоаново").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Първа Йоаново – Трета Йоаново").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Първа Йоаново — Трета Йоаново").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (bul)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (bul)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

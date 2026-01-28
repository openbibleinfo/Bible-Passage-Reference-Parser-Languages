"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ukr.js";

describe("Localized book Gen (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ukr)", () => {
		expect(p.parse("Перша книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Перша. книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Перше книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Перше. книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1-ше книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1-ше. книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1-а книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1-а. книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1-е книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1-е. книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. книга Мойсеева 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ukr)", () => {
		expect(p.parse("Друга книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Друга. книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Друге книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Друге. книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2-ге книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2-ге. книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2-а книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2-а. книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2-е книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2-е. книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. книга Мойсеева 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ukr)", () => {
		expect(p.parse("Третя книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Третя. книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Третє книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Третє. книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3-тє книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3-тє. книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3-а книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3-а. книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3-е книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3-е. книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. книга Мойсеева 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ukr)", () => {
		expect(p.parse("Четверта книга Мойсеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Четверта. книга Мойсеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 книга Мойсеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. книга Мойсеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV книга Мойсеева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. книга Мойсеева 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Gen (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ukr)", () => {
		expect(p.parse("Buttja 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Буття 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 М 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Буг 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Бут 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ukr)", () => {
		expect(p.parse("Vyȟid 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Вихід 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 М 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Вих 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (ukr)", () => {
		expect(p.parse("Бел і дракон 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Бел 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ukr)", () => {
		expect(p.parse("Levyt 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Левит 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 М 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ukr)", () => {
		expect(p.parse("Čysla 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Числа 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 М 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Чис 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (ukr)", () => {
		expect(p.parse("Премудрість Ісуса, сина Сирахова 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Книга Сираха 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Бен Сираха 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Еклесіаст 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Сираха 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Сир 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (ukr)", () => {
		expect(p.parse("Книга Премудрості Соломона 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Премудрість Соломона 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Книга Мудрости 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Мудрости 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Прем 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Муд 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ukr)", () => {
		expect(p.parse("Plač Jeremiï 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плач Єремії 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плач 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (ukr)", () => {
		expect(p.parse("Послання Єремії 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Лист Єремії 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ukr)", () => {
		expect(p.parse("Об'явлення св. Івана Богослова 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Об'явлення св. Йоана Богослова 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Об'явлення св Івана Богослова 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Об'явлення св Йоана Богослова 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ob'javlennja Ivana Bohoslova 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Об'явлення Івана Богослова 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Одкровення Івана Богослова 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Відкриття Івана 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Апока́ліпсис 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Апокáліпсис 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Апокалíпсис 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Апокаліпсис 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Об'явлення 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Одкриттє 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Об 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (ukr)", () => {
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ukr)", () => {
		expect(p.parse("П'ята книга Мойсеева 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Povtorennja Zakonu 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Повторення Закону 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Второзаконня 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Повт. Закону 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Повт Закону 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Втор 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Повт 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 М 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ukr)", () => {
		expect(p.parse("Книга Ісуса Навина 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ісуса Навина 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Книга Єгошуї 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Isus Navyn 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ісус Навин 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Єгошуї 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("І. Нав 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("І Нав 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Нав 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Єг 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ukr)", () => {
		expect(p.parse("Knyha Suddiv 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Книга Суддів 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Суддів 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Суд 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ukr)", () => {
		expect(p.parse("Книга Рут 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ukr)", () => {
		expect(p.parse("1 Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Езд 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ukr)", () => {
		expect(p.parse("Друга книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друга. книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друге книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друге. книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-ге книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-ге. книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-а книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-а. книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-е книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-е. книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. книга Ездри 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 2Esd (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ukr)", () => {
		expect(p.parse("2 Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Езд 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (ukr)", () => {
		expect(p.parse("Перша Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Перша Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Перша. Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Перша. Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Перше Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Перше Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Перше. Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Перше. Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-ше Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-ше Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-ше. Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-ше. Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-а Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-а Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-а. Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-а. Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-е Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-е Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-е. Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1-е. Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ездри 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ездра 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ездри 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (ukr)", () => {
		expect(p.parse("Друга Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друга Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друга. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друга. Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друге Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друге Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друге. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друге. Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-ге Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-ге Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-ге. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-ге. Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-а Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-а Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-а. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-а. Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-е Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-е Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-е. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2-е. Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ездри 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ездра 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ездри 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ukr)", () => {
		expect(p.parse("Ездра 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ездри 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ukr)", () => {
		expect(p.parse("Книга пророка Ісаї 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Книга Ісайї 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ісая 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ісаї 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Іс 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ukr)", () => {
		expect(p.parse("Перша книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перша Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перша Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перша Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перша Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перша. книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перша. Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перша. Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перша. Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перша. Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перше книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перше Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перше Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перше Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перше Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перше. книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перше. Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перше. Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перше. Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Перше. Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-ше книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-ше Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-ше Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-ше Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-ше Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-ше. книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-ше. Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-ше. Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-ше. Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-ше. Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-а книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-а Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-а Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-а Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-а Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-а. книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-а. Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-а. Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-а. Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-а. Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е. книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е. Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е. Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е. Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е. Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Самуїл 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. книга Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Книга Самуїла 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuïl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Самуїл 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ukr)", () => {
		expect(p.parse("Друга книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга. книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга. Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга. Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга. Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга. Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друге книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друге Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друге Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друге Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друге Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друге. книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друге. Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друге. Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друге. Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друге. Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-ге книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-ге Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-ге Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-ге Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-ге Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-ге. книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-ге. Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-ге. Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-ге. Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-ге. Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-а книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-а Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-а Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-а Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-а Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-а. книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-а. Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-а. Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-а. Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-а. Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е. книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е. Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е. Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е. Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е. Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Самуїл 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. книга Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Книга Самуїла 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuïl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Самуїл 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ukr)", () => {
		expect(p.parse("2 Самуїлова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Сам 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ukr)", () => {
		expect(p.parse("1 Самуїлова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Сам 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ukr)", () => {
		expect(p.parse("Перша книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Перша Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Перша царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Перша. книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Перша. Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Перша. царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Перше книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Перше Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Перше царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Перше. книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Перше. Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Перше. царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-ше книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-ше Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-ше царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-ше. книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-ше. Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-ше. царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-а книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-а Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-а царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-а. книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-а. Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-а. царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-е книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-е Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-е царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-е. книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-е. Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-е. царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. книга царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Cariv 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. царів 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ukr)", () => {
		expect(p.parse("Друга книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга. книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга. Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга. царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друге книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друге Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друге царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друге. книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друге. Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друге. царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-ге книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-ге Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-ге царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-ге. книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-ге. Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-ге. царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-а книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-а Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-а царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-а. книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-а. Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-а. царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-е книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-е Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-е царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-е. книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-е. Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-е. царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. книга царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Cariv 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. царів 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ukr)", () => {
		expect(p.parse("Третя Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Третя. Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Третє Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Третє. Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-тє Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-тє. Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-а Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-а. Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-е Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-е. Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III Царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. Царів 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ukr)", () => {
		expect(p.parse("Четверта Царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четверта. Царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV Царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. Царів 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ukr)", () => {
		expect(p.parse("2 царів 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ukr)", () => {
		expect(p.parse("1 царів 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ukr)", () => {
		expect(p.parse("Перша книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша. книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша. книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша. Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша. Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша. Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша. хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перша. Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше. книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше. книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше. Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше. Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше. Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше. хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Перше. Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше. книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше. книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше. Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше. Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше. Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше. хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-ше. Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а. книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а. книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а. Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а. Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а. Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а. хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-а. Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е. книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е. книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е. Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е. Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е. Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е. хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е. Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. книга хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. книга хронік 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Літопису 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Ȟroniky 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Хроніка 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Хронік 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ukr)", () => {
		expect(p.parse("Друга книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге. книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге. книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге. Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге. Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге. Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге. хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друге. Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге. книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге. книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге. Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге. Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге. Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге. хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-ге. Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а. книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а. книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а. Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а. Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а. Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а. хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-а. Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е. книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е. книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е. Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е. Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е. Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е. хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е. Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. книга хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. книга хронік 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Літопису 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Ȟroniky 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Хроніка 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Хронік 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ukr)", () => {
		expect(p.parse("2 хроніки 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Хр 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ukr)", () => {
		expect(p.parse("1 хроніки 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Хр 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ukr)", () => {
		expect(p.parse("Книга Ездри 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Книга Езри 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezdra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Єздри 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езри 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Єзд 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езд 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ukr)", () => {
		expect(p.parse("Книга Неемії 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neemija 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неемія 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неемії 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неємії 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неем 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неєм 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (ukr)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ukr)", () => {
		expect(p.parse("Книга Естер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Книга Есфір 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Естер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Есфір 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ест 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ukr)", () => {
		expect(p.parse("Книга Іова 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Книга Йова 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Іова 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Йова 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Jov 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Йов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ukr)", () => {
		expect(p.parse("Книга Псалмів 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалти́р 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалмів 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmy 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалми 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Пс 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (ukr)", () => {
		expect(p.parse("Молитва Азарії 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ukr)", () => {
		expect(p.parse("Книга Приповістей Соломонових 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Книга Приказок Соломонових 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Приповістей соломонових 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Притчі Соломона 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Приповістей 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prypovisti 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Приповідок 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Приповісті 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Приказки 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Приказок 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Притчі 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Притч 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Пр 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ukr)", () => {
		expect(p.parse("Книга Екклезіястова 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Книга Еклезіястова 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Екклезіястова 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Еклезіястова 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Проповідника 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ekklezijast 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Екклезіяста 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Екклезіаст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Екклезіяст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Коге́лет 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Еккл 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Екл 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (ukr)", () => {
		expect(p.parse("Пісня трьох отроків 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ukr)", () => {
		expect(p.parse("Книга Пісні Пісень Соломона 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Пісня над піснями Соломона 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pisnja nad pisnjamy 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Пісня над піснями 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Пісня Пісней 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Пісні Пісень 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("П. П. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("П. П 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Пісн 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("П П. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("П П 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ukr)", () => {
		expect(p.parse("Книга пророка Єремії 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremija 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Єремія 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Єремії 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Єр 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ukr)", () => {
		expect(p.parse("Книга Пророка Езекиїла 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Книга пророка Єзекіїля 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Jezekiïl' 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Єзекіїла 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Єзекіїль 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Єзекіїля 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езекиїла 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Єз 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ukr)", () => {
		expect(p.parse("Книга пророка Даниїла 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Даниїла 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Danyïl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Даниїл 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ukr)", () => {
		expect(p.parse("Книга пророка Осії 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osija 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Осія 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Осії 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ос 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ukr)", () => {
		expect(p.parse("Книга пророка Йоіла 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Книга Йоіла 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Йоіла 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Йоїла 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joïl 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Йоіл 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Йоїл 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Йоїн 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ukr)", () => {
		expect(p.parse("Книга пророка Амоса 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амоса 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ам 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ukr)", () => {
		expect(p.parse("Книга пророка Авдія 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Книга пророка Овдія 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ovdij 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авдія 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Овдій 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Овдія 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Овд 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ов 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ukr)", () => {
		expect(p.parse("Книга пророка Йони 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Йона 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Йони 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ukr)", () => {
		expect(p.parse("Книга пророка Михея 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Книга пророка Міхея 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Myȟej 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Михей 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Михея 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Міхея 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мих 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Міх 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ukr)", () => {
		expect(p.parse("Книга пророка Наума 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Наума 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Наум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ukr)", () => {
		expect(p.parse("Книга пророка Авакума 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Аваккума 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авакума 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Avakum 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авакум 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ав 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ukr)", () => {
		expect(p.parse("Книга пророка Софонії 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofonija 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Софонія 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Софонії 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Соф 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ukr)", () => {
		expect(p.parse("Книга пророка Огія 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Книга Огія 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Аггея 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ohij 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Огій 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Огія 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Оґія 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ог 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ukr)", () => {
		expect(p.parse("Книга пророка Захарія 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Книга Захарії 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaȟarij 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Захарій 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Захарія 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Захарії 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зах 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ukr)", () => {
		expect(p.parse("Книга пророка Малахії 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Книга Малахії 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaȟija 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малахія 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малахії 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ukr)", () => {
		expect(p.parse("Євангелія від св. Матвія 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Євангеліє від св. Матвія 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Jevanhelije vid Matvija 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Євангелія від св Матвія 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Євангеліє від св Матвія 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Євангелія від Матвія 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Євангеліє від Матвія 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Євангеліє від Матея 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Від Матвія 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матвія 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book 1Macc (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ukr)", () => {
		expect(p.parse("Перша книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Перша Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Перша. книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Перша. Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Перше книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Перше Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Перше. книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Перше. Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-ше книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-ше Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-ше. книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-ше. Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-а книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-а Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-а. книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-а. Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-е книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-е Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-е. книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-е. Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ukr)", () => {
		expect(p.parse("Друга книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друга. книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друга. Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друге книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друге Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друге. книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друге. Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-ге книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-ге Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-ге. книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-ге. Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-а книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-а Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-а. книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-а. Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-е книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-е Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-е. книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-е. Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (ukr)", () => {
		expect(p.parse("Третя книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Третя Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Третя. книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Третя. Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Третє книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Третє Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Третє. книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Третє. Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-тє книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-тє Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-тє. книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-тє. Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-а книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-а Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-а. книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-а. Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-е книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-е Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-е. книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-е. Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (ukr)", () => {
		expect(p.parse("Четверта книга Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Четверта Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Четверта. книга Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Четверта. Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 книга Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. книга Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV книга Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. книга Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ukr)", () => {
		expect(p.parse("Друга книга Макавеїв 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Мак 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Мк 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (ukr)", () => {
		expect(p.parse("Третя книга Макавеїв 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Мак 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Мк 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (ukr)", () => {
		expect(p.parse("Четверта книга Макавеїв 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Мак 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Мк 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ukr)", () => {
		expect(p.parse("Перша книга Макавеїв 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Мак 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Мк 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book Mark (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ukr)", () => {
		expect(p.parse("Євангелія від св. Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Євангеліє від св. Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Євангелія від св Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Євангеліє від св Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Jevanhelije vid Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Євангелія від Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Євангеліє від Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Від Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марко 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мр 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ukr)", () => {
		expect(p.parse("Євангелія від св. Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Євангеліє від св. Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Євангелія від св Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Євангеліє від св Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Jevanhelije vid Luky 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Євангеліє від Лу ки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Євангелія від Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Євангеліє від Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Від Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ukr)", () => {
		expect(p.parse("Перша соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша. соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша. послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша. Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша. Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша. Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша. Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше. соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше. послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше. Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше. Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше. Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше. Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше. соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше. послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше. Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше. Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше. Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше. Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а. соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а. послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а. Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а. Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а. Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а. Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. соборне послання св апостола Іоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. послання апостола Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Послання Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Послання Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Йоаново 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Іоанна 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ukr)", () => {
		expect(p.parse("Друга соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге. соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге. послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге. Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге. Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге. Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге. Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге. соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге. послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге. Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге. Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге. Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге. Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а. соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а. послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а. Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а. Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а. Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а. Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. соборне послання св апостола Іоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. послання апостола Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Послання Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Послання Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Йоаново 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Іоанна 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ukr)", () => {
		expect(p.parse("Третя соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя. соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя. послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя. Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя. Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя. Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя. Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє. соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє. послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє. Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє. Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє. Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє. Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє. соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє. послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє. Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє. Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє. Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє. Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а. соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а. послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а. Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а. Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а. Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а. Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. соборне послання св. апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. соборне послання св апостола Іоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. послання апостола Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Послання Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Послання Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Йоаново 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Іоанна 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ukr)", () => {
		expect(p.parse("Perše poslannja apostola Ivana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ів 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ukr)", () => {
		expect(p.parse("Druhe poslannja apostola Ivana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Послання до Тита 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ів 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ukr)", () => {
		expect(p.parse("Tretje poslannja apostola Ivana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ів 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ukr)", () => {
		expect(p.parse("Перша Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша. Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перша. Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше. Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Перше. Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше. Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-ше. Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а. Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-а. Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Іоана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Івана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Іоана 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ukr)", () => {
		expect(p.parse("Друга Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге. Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друге. Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге. Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-ге. Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а. Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-а. Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Іоана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Івана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Іоана 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ukr)", () => {
		expect(p.parse("Третя Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя. Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третя. Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє. Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Третє. Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє. Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-тє. Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а. Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-а. Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Іоана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Івана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Іоана 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ukr)", () => {
		expect(p.parse("Івана 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Іоана 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ukr)", () => {
		expect(p.parse("Євангелія від св. Івана 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Євангеліє від св. Йоана 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Євангелія від св Івана 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Євангеліє від св Йоана 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jevanhelije vid Ivana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Євангелія від Івана 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Євангеліє від Івана 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Від Івана 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Від Іоана 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Йоана 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Йоан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ів 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ін 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ukr)", () => {
		expect(p.parse("Dijannja svjatyȟ apostoliv 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Діяння Святих Апостолів 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дії святих апостолів 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дії Апостолів 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Діяння 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Діян 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дії 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ukr)", () => {
		expect(p.parse("Послання св. апостола Павла до римлян 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Послання св апостола Павла до римлян 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Poslannja apostola Pavla do rymljan 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Послання апостола Павла до римлян 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Послання до римлян 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("До римлян 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римляни 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римлян 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ukr)", () => {
		expect(p.parse("Перша послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перша Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перша до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перша Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перша Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перша коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перша. послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перша. Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перша. до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перша. Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перша. Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перша. коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше. послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше. Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше. до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше. Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше. Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Перше. коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше. послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше. Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше. до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше. Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше. Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-ше. коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а. послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а. Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а. до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а. Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а. Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-а. коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е. послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е. Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е. до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е. Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е. Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е. коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. послання апостола Павла до коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Послання до Коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Коринтяни 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Коринфян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. коринтян 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ukr)", () => {
		expect(p.parse("Друга послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга. послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга. Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга. до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга. Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга. Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга. коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге. послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге. Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге. до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге. Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге. Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друге. коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге. послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге. Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге. до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге. Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге. Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-ге. коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а. послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а. Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а. до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а. Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а. Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-а. коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е. послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е. Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е. до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е. Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е. Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е. коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. послання апостола Павла до коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Послання до Коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Коринтяни 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Коринфян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. коринтян 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ukr)", () => {
		expect(p.parse("Druhe poslannja apostola Pavla do korynfjan 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 до коринтян 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ukr)", () => {
		expect(p.parse("Perše poslannja apostola Pavla do korynfjan 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 до коринтян 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ukr)", () => {
		expect(p.parse("Послання св. апостола Павла до галатів 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Послання св апостола Павла до галатів 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Poslannja apostola Pavla do halativ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Послання апостола Павла до галатів 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("По слання до Галатів 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Послання до галатів 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("До галатів 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатяни 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатів 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ukr)", () => {
		expect(p.parse("Послання св. апостола Павла до ефесян 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Послання св апостола Павла до ефесян 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Poslannja apostola Pavla do efesjan 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Послання апостола Павла до ефесян 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("По слан ня до Єфесян 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Послання до ефесян 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("До ефесян 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефесяни 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефесян 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Єф 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ukr)", () => {
		expect(p.parse("Послання св. апостола Павла до филип'ян 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Послання св апостола Павла до филип'ян 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Poslannja apostola Pavla do fylyp'jan 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Послання апостола Павла до филип'ян 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Послання до Філіп'ян 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Послання до филип'ян 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("До филип'ян 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филип'яни 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филип'ян 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филипяни 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ukr)", () => {
		expect(p.parse("Послання св. апостола Павла до колосян 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Послання св апостола Павла до колосян 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Poslannja apostola Pavla do kolosjan 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Послання апостола Павла до колосян 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Послання до Колосян 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("До колоссян 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колоссян 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колосяни 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колосян 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ukr)", () => {
		expect(p.parse("Перша послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша. послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша. послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша. послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша. послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша. послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша. послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша. фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша. до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша. Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перша. Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше. послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше. послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше. послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше. послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше. послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше. послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше. фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше. до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше. Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Перше. Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше. послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше. послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше. послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше. послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше. послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше. послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше. фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше. до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше. Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-ше. Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а. послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а. послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а. послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а. послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а. послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а. послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а. фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а. до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а. Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-а. Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. послання св. апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. послання св апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. послання апостола Павла до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. послання до фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. послання до салонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. послання до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. фессалонікійців 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Солуньці 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Солунян 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ukr)", () => {
		expect(p.parse("Друга послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге. послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге. послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге. послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге. послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге. послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге. послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге. фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге. до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге. Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друге. Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге. послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге. послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге. послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге. послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге. послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге. послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге. фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге. до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге. Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-ге. Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а. послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а. послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а. послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а. послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а. послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а. послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а. фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а. до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а. Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-а. Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. послання св. апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. послання св апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. послання апостола Павла до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. послання до фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. послання до салонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. послання до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. фессалонікійців 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Солуньці 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Солунян 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ukr)", () => {
		expect(p.parse("Druhe poslannja apostola Pavla do solunjan 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 до солунян 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Сол 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ukr)", () => {
		expect(p.parse("Perše poslannja apostola Pavla do solunjan 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 до солунян 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Сол 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ukr)", () => {
		expect(p.parse("Перша послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша. послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша. послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша. послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша. послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша. Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перша. Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше. послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше. послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше. послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше. послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше. Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Перше. Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше. послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше. послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше. послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше. послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше. Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-ше. Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а. послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а. послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а. послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а. послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а. Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-а. Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. послання апостола Павла до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. послання до Тимотея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. послання до Тимофія 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. послання Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Тимофія 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ukr)", () => {
		expect(p.parse("Друга послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге. послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге. послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге. послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге. послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге. Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друге. Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге. послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге. послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге. послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге. послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге. Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-ге. Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а. послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а. послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а. послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а. послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а. Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-а. Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. послання св. апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. послання св апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. послання апостола Павла до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. послання до Тимотея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. послання до Тимофія 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. послання Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Тимофія 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ukr)", () => {
		expect(p.parse("Druhe poslannja apostola Pavla do Tymofija 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимофію 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ukr)", () => {
		expect(p.parse("Perše poslannja apostola Pavla do Tymofija 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимофію 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ukr)", () => {
		expect(p.parse("Послання св. апостола Павла до Тита 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Послання св апостола Павла до Тита 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Poslannja apostola Pavla do Tyta 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Послання апостола Павла до Тита 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Послан ня до Тита 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("До Тита 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тита 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ukr)", () => {
		expect(p.parse("Послання св. апостола Павла до Филимона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Послання св апостола Павла до Филимона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Poslannja apostola Pavla do Fylymona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Послання апостола Павла до Филимона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Послання до Филипійців 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Послання до Филимона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("До Филимона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимон 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филим 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ukr)", () => {
		expect(p.parse("Poslannja do jevreïv 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Послан ня до Євреїв 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Послання до євреїв 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("До євреїв 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Євреїв 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Євреї 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Євр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ukr)", () => {
		expect(p.parse("Соборне послання св. апостола Якова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Соборне послання св апостола Якова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Poslannja apostola Jakova 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Послання апостола Якова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Соборне послання Якова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Послання Якова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Якова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Яков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Як 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ukr)", () => {
		expect(p.parse("Перша соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша. соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша. соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша. соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша. послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша. соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша. послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перша. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше. соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше. соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше. соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше. послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше. соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше. послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Перше. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше. соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше. соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше. соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше. послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше. соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше. послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-ше. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а. соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а. соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а. соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а. послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а. соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а. послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-а. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. соборне послання св. апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. соборне послання св апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. соборне послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. послання апостола Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. соборне послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. послання Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Петрово 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Петра 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ukr)", () => {
		expect(p.parse("Друга соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге. соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге. соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге. соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге. послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге. соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге. послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друге. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге. соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге. соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге. соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге. послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге. соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге. послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-ге. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а. соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а. соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а. соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а. послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а. соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а. послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-а. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. соборне послання св. апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. соборне послання св апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. соборне послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. послання апостола Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. соборне послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. послання Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Петрово 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Петра 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ukr)", () => {
		expect(p.parse("Druhe poslannja apostola Petra 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ukr)", () => {
		expect(p.parse("Perše poslannja apostola Petra 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ukr)", () => {
		expect(p.parse("Соборне послання св. апостола Юди 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Соборне послання св апостола Юди 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Poslannja apostola Judy 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Послання апостола Юди 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Соборне послання Юди 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Послання Іуди 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Послання Юди 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Іуд 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Юда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Юди 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Юд 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (ukr)", () => {
		expect(p.parse("Книга Товита 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Товита 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Товит 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Тов 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (ukr)", () => {
		expect(p.parse("Книга Юдити 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Юдити 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (ukr)", () => {
		expect(p.parse("Варуха 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Вар 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (ukr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (ukr)", () => {
		expect(p.parse("Сусанна 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Сус 1:1").osis()).toEqual("Sus.1.1");
	});
});

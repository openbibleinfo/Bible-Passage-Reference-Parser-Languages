"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rus.js";

describe("Localized book Gen (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (rus)", () => {
		expect(p.parse("Книга Бытия 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Начало 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Бытие 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Быт 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Нач 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (rus)", () => {
		expect(p.parse("Книга Исход 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Исход 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Исх 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (rus)", () => {
		expect(p.parse("Виле и драконе 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Бел и Дракон 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Беле 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
		expect(p.parse("Бел 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (rus)", () => {
		expect(p.parse("Книга Левит 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Левит 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (rus)", () => {
		expect(p.parse("Книга Чисел 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Числа 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Чис 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (rus)", () => {
		expect(p.parse("Премудрости Иисуса, сына Сирахова 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Премудрость Сираха 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Ekkleziastik 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Сирахова 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Сир 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (rus)", () => {
		expect(p.parse("Премудрости Соломона 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Прем 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (rus)", () => {
		expect(p.parse("Плач Иеремии 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плач 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (rus)", () => {
		expect(p.parse("Послание Иеремии 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rus)", () => {
		expect(p.parse("Откровение 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Откр 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Отк 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (rus)", () => {
		expect(p.parse("Молитва Манассии 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (rus)", () => {
		expect(p.parse("Второзаконие 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Втор 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (rus)", () => {
		expect(p.parse("Книга Иисуса Навина 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Иисуса Навина 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Иисус Навин 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Иешуа 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Навин 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Иеш 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Нав 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (rus)", () => {
		expect(p.parse("Книга Судей Израилевых 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Книга Судей 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Судей 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Судьи 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Суд 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (rus)", () => {
		expect(p.parse("Книга Руфи 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Руфь 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Руф 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (rus)", () => {
		expect(p.parse("2 Ездры 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2 Езд 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (rus)", () => {
		expect(p.parse("3 Ездры 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3 Езд 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (rus)", () => {
		expect(p.parse("2я Ездры 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2я. Ездры 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2-я Ездры 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2-я. Ездры 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2е Ездры 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2е. Ездры 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2-е Ездры 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2-е. Ездры 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2 Ездры 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2. Ездры 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (rus)", () => {
		expect(p.parse("3я Ездры 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3я. Ездры 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3-я Ездры 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3-я. Ездры 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3е Ездры 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3е. Ездры 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3-е Ездры 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3-е. Ездры 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3 Ездры 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3. Ездры 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (rus)", () => {
		expect(p.parse("Ездры 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (rus)", () => {
		expect(p.parse("Книга пророка Исаии 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Исаии 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Исаия 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Исаи 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ис 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (rus)", () => {
		expect(p.parse("1я Книга Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1я Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1я. Книга Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1я. Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-я Книга Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-я Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-я. Книга Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-я. Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1е Книга Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1е Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1е. Книга Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1е. Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е Книга Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е. Книга Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е. Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Книга Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Книга Царств 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Царств 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (rus)", () => {
		expect(p.parse("2я Книга Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2я Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2я. Книга Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2я. Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-я Книга Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-я Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-я. Книга Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-я. Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2е Книга Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2е Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2е. Книга Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2е. Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е Книга Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е. Книга Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е. Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Книга Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Книга Царств 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Царств 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (rus)", () => {
		expect(p.parse("3я Книга Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3я Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3я. Книга Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3я. Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-я Книга Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-я Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-я. Книга Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-я. Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3е Книга Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3е Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3е. Книга Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3е. Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-е Книга Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-е Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-е. Книга Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3-е. Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Книга Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Книга Царств 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. Царств 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (rus)", () => {
		expect(p.parse("4я Книга Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4я Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4я. Книга Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4я. Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4-я Книга Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4-я Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4-я. Книга Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4-я. Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4е Книга Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4е Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4е. Книга Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4е. Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4-е Книга Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4-е Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4-е. Книга Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4-е. Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Книга Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Книга Царств 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. Царств 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (rus)", () => {
		expect(p.parse("1я Самуила 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1я. Самуила 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-я Самуила 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-я. Самуила 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1е Самуила 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1е. Самуила 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е Самуила 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1-е. Самуила 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Самуила 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Самуила 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (rus)", () => {
		expect(p.parse("2я Самуила 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2я. Самуила 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-я Самуила 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-я. Самуила 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2е Самуила 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2е. Самуила 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е Самуила 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2-е. Самуила 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Самуила 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Самуила 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (rus)", () => {
		expect(p.parse("2 Самуила 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Цар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (rus)", () => {
		expect(p.parse("1 Самуила 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Цар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (rus)", () => {
		expect(p.parse("1я Царей 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1я. Царей 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-я Царей 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-я. Царей 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1е Царей 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1е. Царей 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-е Царей 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1-е. Царей 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Царей 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Царей 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (rus)", () => {
		expect(p.parse("2я Царей 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2я. Царей 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-я Царей 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-я. Царей 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2е Царей 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2е. Царей 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-е Царей 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2-е. Царей 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Царей 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Царей 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (rus)", () => {
		expect(p.parse("2 Царей 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (rus)", () => {
		expect(p.parse("1 Царей 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (rus)", () => {
		expect(p.parse("1я Книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1я Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1я Летопись 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1я Хроник 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1я. Книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1я. Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1я. Летопись 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1я. Хроник 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-я Книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-я Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-я Летопись 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-я Хроник 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-я. Книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-я. Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-я. Летопись 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-я. Хроник 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1е Книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1е Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1е Летопись 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1е Хроник 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1е. Книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1е. Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1е. Летопись 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1е. Хроник 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е Книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е Летопись 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е Хроник 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е. Книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е. Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е. Летопись 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1-е. Хроник 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Летопись 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Хроник 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Книга Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Летопись 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Хроник 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (rus)", () => {
		expect(p.parse("2я Книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2я Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2я Летопись 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2я Хроник 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2я. Книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2я. Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2я. Летопись 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2я. Хроник 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-я Книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-я Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-я Летопись 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-я Хроник 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-я. Книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-я. Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-я. Летопись 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-я. Хроник 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2е Книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2е Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2е Летопись 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2е Хроник 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2е. Книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2е. Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2е. Летопись 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2е. Хроник 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е Книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е Летопись 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е Хроник 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е. Книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е. Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е. Летопись 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2-е. Хроник 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Летопись 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Хроник 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Книга Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Летопись 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Хроник 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (rus)", () => {
		expect(p.parse("2 Хроник 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Лет 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Пар 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (rus)", () => {
		expect(p.parse("1 Хроник 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Лет 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Пар 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (rus)", () => {
		expect(p.parse("Первая Ездры 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Книга Ездры 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("1 Езд 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ездра 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Узайр 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езд 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (rus)", () => {
		expect(p.parse("Книга Неемии 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неемии 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неемия 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неем 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (rus)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (rus)", () => {
		expect(p.parse("Книга Есфири 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Есфирь 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Есф 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (rus)", () => {
		expect(p.parse("Книга Иова 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Иова 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Аюб 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Иов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (rus)", () => {
		expect(p.parse("Псалтирь 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалмы 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалом 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Забур 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псал 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Заб 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Пс 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (rus)", () => {
		expect(p.parse("Молитва Азария 1:1").osis()).toEqual("PrAzar.1.1");
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (rus)", () => {
		expect(p.parse("Книга притчей Соломоновых 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Мудрые изречения 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Притчи 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Мудр 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Прит 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Пр 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (rus)", () => {
		expect(p.parse("Книга Екклесиаста 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Размышления 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Екклесиаст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Разм 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Екк 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (rus)", () => {
		expect(p.parse("Благодарственная песнь отроков 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Молитва святых трех отроков 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("Песнь трёх отроков 1:1").osis()).toEqual("SgThree.1.1");
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (rus)", () => {
		expect(p.parse("Песнь песней Соломона 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Песнь Сулаймона 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Песнь Сулеймана 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Песни Песней 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Песнь 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Песн 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (rus)", () => {
		expect(p.parse("Книга пророка Иеремии 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Иеремии 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Иеремия 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Иер 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (rus)", () => {
		expect(p.parse("Книга пророка Иезекииля 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Иезекииль 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Иезекииля 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езекиил 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езек 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Иез 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (rus)", () => {
		expect(p.parse("Книга пророка Даниила 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Даниила 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Даниил 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Даниял 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дониёл 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дон 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (rus)", () => {
		expect(p.parse("Книга пророка Осии 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Осии 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Осия 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ос 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (rus)", () => {
		expect(p.parse("Книга пророка Иоиля 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Иоиль 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Иоиля 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Иоил 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (rus)", () => {
		expect(p.parse("Книга пророка Амоса 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амоса 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ам 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (rus)", () => {
		expect(p.parse("Книга пророка Авдия 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авдий 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авдия 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авд 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (rus)", () => {
		expect(p.parse("Книга пророка Ионы 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Иона 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ионы 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юнус 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (rus)", () => {
		expect(p.parse("Книга пророка Михея 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Михей 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Михея 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мих 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (rus)", () => {
		expect(p.parse("Книга пророка Наума 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Наума 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Наум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (rus)", () => {
		expect(p.parse("Книга пророка Аввакума 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Аввакума 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Аввакум 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авв 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (rus)", () => {
		expect(p.parse("Книга пророка Софонии 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Софонии 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Софония 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Соф 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (rus)", () => {
		expect(p.parse("Книга пророка Аггея 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Аггей 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Аггея 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Агг 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (rus)", () => {
		expect(p.parse("Книга пророка Захарии 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Закария 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Захарии 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Захария 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зак 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зах 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (rus)", () => {
		expect(p.parse("Книга пророка Малахии 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малахии 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малахия 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rus)", () => {
		expect(p.parse("Евангелие от Матфея 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("От Матфея 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матфея 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матай 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матто 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мф 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rus)", () => {
		expect(p.parse("Евангелие от Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("От Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мр 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rus)", () => {
		expect(p.parse("Евангелие от Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("От Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Луко 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rus)", () => {
		expect(p.parse("1я послание Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1я Иохана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1я. послание Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1я. Иохана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-я послание Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-я Иохана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-я. послание Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-я. Иохана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1е послание Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1е Иохана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1е. послание Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1е. Иохана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е послание Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е Иохана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. послание Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. Иохана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 послание Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Иохана 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. послание Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иохана 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rus)", () => {
		expect(p.parse("2я послание Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2я Иохана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2я. послание Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2я. Иохана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-я послание Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-я Иохана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-я. послание Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-я. Иохана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2е послание Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2е Иохана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2е. послание Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2е. Иохана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е послание Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е Иохана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. послание Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. Иохана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 послание Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Иохана 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. послание Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иохана 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rus)", () => {
		expect(p.parse("3я послание Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3я Иохана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3я. послание Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3я. Иохана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-я послание Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-я Иохана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-я. послание Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-я. Иохана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3е послание Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3е Иохана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3е. послание Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3е. Иохана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е послание Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е Иохана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. послание Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. Иохана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 послание Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Иохана 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. послание Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Иохана 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rus)", () => {
		expect(p.parse("1 Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ин 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rus)", () => {
		expect(p.parse("2 Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ин 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rus)", () => {
		expect(p.parse("3 Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ин 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rus)", () => {
		expect(p.parse("1я Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1я. Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-я Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-я. Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1е Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1е. Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1-е. Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иоанна 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rus)", () => {
		expect(p.parse("2я Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2я. Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-я Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-я. Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2е Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2е. Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2-е. Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иоанна 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rus)", () => {
		expect(p.parse("3я Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3я. Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-я Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-я. Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3е Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3е. Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3-е. Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Иоанна 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rus)", () => {
		expect(p.parse("Иоанна 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rus)", () => {
		expect(p.parse("Евангелие от Иоанна 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("От Иоанна 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Иохан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ин 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rus)", () => {
		expect(p.parse("Деяния 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Деян 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rus)", () => {
		expect(p.parse("Послание к Римлянам 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("К Римлянам 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римлянам 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rus)", () => {
		expect(p.parse("1я к Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1я Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1я. к Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1я. Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-я к Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-я Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-я. к Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-я. Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1е к Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1е Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1е. к Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1е. Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е к Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е. к Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1-е. Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 к Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. к Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rus)", () => {
		expect(p.parse("2я к Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2я Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2я. к Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2я. Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-я к Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-я Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-я. к Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-я. Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2е к Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2е Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2е. к Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2е. Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е к Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е. к Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2-е. Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 к Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. к Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rus)", () => {
		expect(p.parse("2 Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rus)", () => {
		expect(p.parse("1 Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rus)", () => {
		expect(p.parse("Послание к Галатам 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("К Галатам 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатам 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rus)", () => {
		expect(p.parse("Послание к Ефесянам 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("К Ефесянам 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефесянам 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфесянам 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rus)", () => {
		expect(p.parse("Послание к Филиппийцам 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("К Филиппийцам 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филиппийцам 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rus)", () => {
		expect(p.parse("Послание к Колоссянам 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("К Колоссянам 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колоссянам 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rus)", () => {
		expect(p.parse("1я к Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1я Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1я. к Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1я. Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-я к Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-я Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-я. к Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-я. Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1е к Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1е Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1е. к Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1е. Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е к Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. к Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1-е. Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 к Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. к Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rus)", () => {
		expect(p.parse("2я к Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2я Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2я. к Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2я. Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-я к Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-я Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-я. к Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-я. Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2е к Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2е Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2е. к Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2е. Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е к Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. к Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2-е. Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 к Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. к Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rus)", () => {
		expect(p.parse("2 Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фес 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rus)", () => {
		expect(p.parse("1 Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фес 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rus)", () => {
		expect(p.parse("1я к Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1я Тиметею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1я Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1я. к Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1я. Тиметею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1я. Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-я к Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-я Тиметею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-я Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-я. к Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-я. Тиметею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-я. Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1е к Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1е Тиметею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1е Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1е. к Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1е. Тиметею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1е. Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е к Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е Тиметею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. к Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. Тиметею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1-е. Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 к Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тиметею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. к Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тиметею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофею 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rus)", () => {
		expect(p.parse("2я к Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2я Тиметею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2я Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2я. к Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2я. Тиметею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2я. Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-я к Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-я Тиметею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-я Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-я. к Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-я. Тиметею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-я. Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2е к Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2е Тиметею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2е Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2е. к Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2е. Тиметею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2е. Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е к Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е Тиметею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. к Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. Тиметею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2-е. Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 к Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тиметею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. к Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тиметею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофею 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rus)", () => {
		expect(p.parse("2 Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rus)", () => {
		expect(p.parse("1 Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rus)", () => {
		expect(p.parse("Послание к Титу 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("К Титу 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Титу 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rus)", () => {
		expect(p.parse("Послание к Филимону 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("К Филимону 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимону 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rus)", () => {
		expect(p.parse("Послание к Евреям 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("К Евреям 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евреям 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rus)", () => {
		expect(p.parse("Послание Иакова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Иакова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Якуб 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Иак 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rus)", () => {
		expect(p.parse("1я послание Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1я Петруса 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1я Петира 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1я Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1я. послание Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1я. Петруса 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1я. Петира 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1я. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-я послание Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-я Петруса 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-я Петира 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-я Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-я. послание Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-я. Петруса 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-я. Петира 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-я. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1е послание Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1е Петруса 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1е Петира 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1е Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1е. послание Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1е. Петруса 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1е. Петира 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1е. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е послание Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е Петруса 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е Петира 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. послание Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. Петруса 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. Петира 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1-е. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 послание Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петруса 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петира 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. послание Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петруса 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петира 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петра 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rus)", () => {
		expect(p.parse("2я послание Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2я Петруса 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2я Петира 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2я Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2я. послание Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2я. Петруса 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2я. Петира 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2я. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-я послание Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-я Петруса 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-я Петира 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-я Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-я. послание Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-я. Петруса 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-я. Петира 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-я. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2е послание Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2е Петруса 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2е Петира 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2е Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2е. послание Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2е. Петруса 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2е. Петира 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2е. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е послание Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е Петруса 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е Петира 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. послание Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. Петруса 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. Петира 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2-е. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 послание Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петруса 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петира 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. послание Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петруса 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петира 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петра 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rus)", () => {
		expect(p.parse("2 Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rus)", () => {
		expect(p.parse("1 Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rus)", () => {
		expect(p.parse("Послание Иуды 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуды 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуд 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (rus)", () => {
		expect(p.parse("Товита 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Тов 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (rus)", () => {
		expect(p.parse("Юдифь 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Юди 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (rus)", () => {
		expect(p.parse("Книга пророка Вару́ха 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Книга Варуха 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Бару́ха 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Варуха 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Вар 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (rus)", () => {
		expect(p.parse("Сказанию о Сусанне и Данииле 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Сусанна и старцы 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Сусанна 1:1").osis()).toEqual("Sus.1.1");
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});
describe("Localized book 1Macc (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (rus)", () => {
		expect(p.parse("1я Маккавеев 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1я. Маккавеев 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-я Маккавеев 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-я. Маккавеев 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1е Маккавеев 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1е. Маккавеев 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-е Маккавеев 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1-е. Маккавеев 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Маккавеев 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Маккавеев 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (rus)", () => {
		expect(p.parse("2я Маккавеев 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2я. Маккавеев 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-я Маккавеев 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-я. Маккавеев 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2е Маккавеев 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2е. Маккавеев 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-е Маккавеев 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2-е. Маккавеев 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Маккавеев 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Маккавеев 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (rus)", () => {
		expect(p.parse("3я Маккавеев 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3я. Маккавеев 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-я Маккавеев 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-я. Маккавеев 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3е Маккавеев 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3е. Маккавеев 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-е Маккавеев 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3-е. Маккавеев 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Маккавеев 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Маккавеев 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (rus)", () => {
		expect(p.parse("4я Маккавеев 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4я. Маккавеев 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4-я Маккавеев 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4-я. Маккавеев 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4е Маккавеев 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4е. Маккавеев 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4-е Маккавеев 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4-е. Маккавеев 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Маккавеев 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Маккавеев 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (rus)", () => {
		expect(p.parse("Вторая книга Маккавейская 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Маккавеев 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Макк 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (rus)", () => {
		expect(p.parse("Третья книга Маккавейская 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Маккавеев 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Макк 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (rus)", () => {
		expect(p.parse("4 Маккавеев 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Макк 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (rus)", () => {
		expect(p.parse("Первая книга Маккавейская 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Маккавеев 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Макк 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Parser helper should handle ranges (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (rus)", () => {
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Matt 1—2").osis()).toEqual("Matt.1-Matt.2");
		expect(p.parse("Phlm 2 — 3").osis()).toEqual("Phlm.1.2-Phlm.1.3");
	});
});
describe("Parser helper should handle chapters (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (rus)", () => {
		expect(p.parse("Titus 1:1, главы 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 главы 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, глав 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 глав 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, гл. 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 гл. 6").osis()).toEqual("Matt.3.4,Matt.6");
		expect(p.parse("Titus 1:1, гл 2").osis()).toEqual("Titus.1.1,Titus.2");
		expect(p.parse("Matt 3:4 гл 6").osis()).toEqual("Matt.3.4,Matt.6");
	});
});
describe("Parser helper should handle verses (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle verses (rus)", () => {
		expect(p.parse("Exod 1:1 стихи 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm стихи 6").osis()).toEqual("Phlm.1.6");
		expect(p.parse("Exod 1:1 стих 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm стих 6").osis()).toEqual("Phlm.1.6");
	});
});
describe("Parser helper should handle 'and' (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'and' (rus)", () => {
		expect(p.parse("Exod 1:1 и 3").osis()).toEqual("Exod.1.1,Exod.1.3");
		expect(p.parse("Phlm 2 и 6").osis()).toEqual("Phlm.1.2,Phlm.1.6");
	});
});
describe("Parser helper should handle titles (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle titles (rus)", () => {
		expect(p.parse("Ps 3 надписаниях, 4:2, 5:надписаниях").osis()).toEqual("Ps.3.1,Ps.4.2,Ps.5.1");
	});
});
describe("Parser helper should handle 'ff' (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (rus)", () => {
		expect(p.parse("Rev 3и далее, 4:2и далее").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (rus)", () => {
		expect(p.parse("Lev 1 (RUSV)").osis_and_translations()).toEqual([["Lev.1","RUSV"]]);
		expect(p.parse("Lev 1 (SZ)").osis_and_translations()).toEqual([["Lev.1","SZ"]]);
	});
});
describe("Parser helper should handle book ranges (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (rus)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1я послание Иоанна — 3я послание Иоанна").osis()).toEqual("1John.1-3John.1");
	});
});
describe("Parser helper should handle boundaries (rus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle boundaries (rus)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("—Matt—").osis()).toEqual("Matt.1-Matt.28");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
		expect(p.parse("“Matt 1:1”").osis()).toEqual("Matt.1.1");
	});
});

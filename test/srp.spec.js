"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/srp.js";

describe("Localized book Gen (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (srp)", () => {
		expect(p.parse("Прва Мојсијева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Прва Мојс 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Прва Мој 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Прва. Мојсијева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Прва. Мојс 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Прва. Мој 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Мојсијева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Мојс 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1 Мој 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Мојсијева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Мојс 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1. Мој 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Мојсијева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Мојс 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I Мој 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Мојсијева 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Мојс 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("I. Мој 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (srp)", () => {
		expect(p.parse("Друга Мојсијева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Друга Мојс 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Друга Мој 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Друга. Мојсијева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Друга. Мојс 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Друга. Мој 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Мојсијева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Мојс 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Мој 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Мојсијева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Мојс 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2. Мој 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Мојсијева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Мојс 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II Мој 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Мојсијева 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Мојс 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("II. Мој 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (srp)", () => {
		expect(p.parse("Трећом Мојсијева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трећом Мојс 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трећом Мој 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трећом. Мојсијева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трећом. Мојс 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трећом. Мој 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трећа Мојсијева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трећа Мојс 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трећа Мој 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трећа. Мојсијева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трећа. Мојс 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Трећа. Мој 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Мојсијева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Мојс 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Мој 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Мојсијева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Мојс 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3. Мој 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Мојсијева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Мојс 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III Мој 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Мојсијева 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Мојс 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("III. Мој 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (srp)", () => {
		expect(p.parse("Четврта Мојсијева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Четврта Мојс 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Четврта Мој 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Четврта. Мојсијева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Четврта. Мојс 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Четврта. Мој 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Мојсијева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Мојс 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Мој 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Мојсијева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Мојс 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4. Мој 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Мојсијева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Мојс 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV Мој 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Мојсијева 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Мојс 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("IV. Мој 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Deut (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (srp)", () => {
		expect(p.parse("Пета Мојсијева 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Пета Мојс 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Пета Мој 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Пета. Мојсијева 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Пета. Мојс 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Пета. Мој 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Мојсијева 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Мојс 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5 Мој 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Мојсијева 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Мојс 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5. Мој 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Мојсијева 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Мојс 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V Мој 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Мојсијева 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Мојс 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("V. Мој 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Gen (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (srp)", () => {
		expect(p.parse("Постање 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Пост 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (srp)", () => {
		expect(p.parse("Егзодус 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Излазак 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Изл 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Bel (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bel (srp)", () => {
		expect(p.parse("Bel 1:1").osis()).toEqual("Bel.1.1");
	});
});
describe("Localized book Lev (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (srp)", () => {
		expect(p.parse("Левитска 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (srp)", () => {
		expect(p.parse("Бројеви 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Бр 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (srp)", () => {
		expect(p.parse("Премудрости Исуса сина Сирахова 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Еклезијастикус 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Сирина 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("ИсС 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Сир 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (srp)", () => {
		expect(p.parse("Премудорсти Соломонове 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Мудрости Соломонове 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Мудрости 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Прем Сол 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Wis 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (srp)", () => {
		expect(p.parse("Плач Јеремијин 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плач 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (srp)", () => {
		expect(p.parse("Посланица Јеремијина 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("Писма Јеремије 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("EpJer 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (srp)", () => {
		expect(p.parse("Откривење Јованово 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Откровење Јованово 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Откривење 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Отк 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book PrMan (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrMan (srp)", () => {
		expect(p.parse("Молитва Манасијина 1:1").osis()).toEqual("PrMan.1.1");
		expect(p.parse("PrMan 1:1").osis()).toEqual("PrMan.1.1");
	});
});
describe("Localized book Deut (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (srp)", () => {
		expect(p.parse("Поновљени закони 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Понз 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (srp)", () => {
		expect(p.parse("Књига Исуса Навина 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Исус Навин 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ис Нав 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josh 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ИНав 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (srp)", () => {
		expect(p.parse("Књига о судијама 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Судија 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Судије 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Judg 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Суд 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (srp)", () => {
		expect(p.parse("Књига о Рути 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рута 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (srp)", () => {
		expect(p.parse("Прва Ездрина 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Прва. Ездрина 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Ездрина 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Ездрина 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Ездрина 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Ездрина 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (srp)", () => {
		expect(p.parse("Друга Ездрина 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друга. Ездрина 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Ездрина 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Ездрина 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Ездрина 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Ездрина 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (srp)", () => {
		expect(p.parse("1 Јездрина 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Јез 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1Esd 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (srp)", () => {
		expect(p.parse("2 Јездрина 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Јез 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2Esd 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book 1Esd (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (srp)", () => {
		expect(p.parse("Прва Јездрина 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("Прва. Јездрина 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1 Јездрина 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("1. Јездрина 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I Јездрина 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("I. Јездрина 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (srp)", () => {
		expect(p.parse("Друга Јездрина 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("Друга. Јездрина 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2 Јездрина 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("2. Јездрина 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II Јездрина 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("II. Јездрина 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Ezra (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (srp)", () => {
		expect(p.parse("Јездрина 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Isa (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (srp)", () => {
		expect(p.parse("Књига пророка Исаије 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Исаија 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Иса 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ис 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (srp)", () => {
		expect(p.parse("Прва Књига Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прва Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прва Сам 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прва. Књига Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прва. Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прва. Сам 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Књига Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Сам 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Књига Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Сам 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Књига Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Сам 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Књига Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Сам 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (srp)", () => {
		expect(p.parse("Друга Књига Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга Сам 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга. Књига Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга. Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга. Сам 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Књига Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Сам 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Књига Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Сам 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Књига Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Сам 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Књига Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Сам 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (srp)", () => {
		expect(p.parse("Прва краљевима 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Прва. краљевима 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 краљевима 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. краљевима 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I краљевима 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. краљевима 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (srp)", () => {
		expect(p.parse("Друга краљевима 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Друга. краљевима 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 краљевима 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. краљевима 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II краљевима 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. краљевима 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (srp)", () => {
		expect(p.parse("Трећом краљевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трећом. краљевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трећа краљевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трећа. краљевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 краљевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. краљевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III краљевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. краљевима 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (srp)", () => {
		expect(p.parse("Четврта краљевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четврта. краљевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 краљевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. краљевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV краљевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. краљевима 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Sam (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (srp)", () => {
		expect(p.parse("2 Самуилова 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Сам 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (srp)", () => {
		expect(p.parse("1 Самуилова 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Сам 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Kgs (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (srp)", () => {
		expect(p.parse("Прва Књига о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва краљева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва Царева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва. Књига о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва. о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва. краљева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва. Царева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Прва. Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Књига о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 краљева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Царева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Књига о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. краљева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Царева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Књига о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I краљева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Царева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Књига о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. о царевима 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. краљева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Царева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Цар 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (srp)", () => {
		expect(p.parse("Друга Књига о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга краљева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга Царева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга. Књига о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга. о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга. краљева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга. Царева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Друга. Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Књига о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 краљева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Царева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Књига о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. краљева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Царева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Књига о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II краљева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Царева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Књига о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. о царевима 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. краљева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Царева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Цар 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (srp)", () => {
		expect(p.parse("Трећом краљевства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трећом. краљевства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трећа краљевства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Трећа. краљевства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 краљевства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3. краљевства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III краљевства 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("III. краљевства 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (srp)", () => {
		expect(p.parse("Четврта краљевства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Четврта. краљевства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 краљевства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4. краљевства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV краљевства 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("IV. краљевства 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (srp)", () => {
		expect(p.parse("2 Царева 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Цар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kgs 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (srp)", () => {
		expect(p.parse("1 Царева 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Цар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kgs 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Chr (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (srp)", () => {
		expect(p.parse("Прва Књига дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва Паралипоменону 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва хроника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва Днв 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва Дн 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва. Књига дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва. Паралипоменону 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва. дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва. хроника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва. Днв 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Прва. Дн 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Књига дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Паралипоменону 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 хроника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Днв 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Дн 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Књига дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Паралипоменону 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. хроника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Днв 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Дн 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Књига дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Паралипоменону 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I хроника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Днв 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I Дн 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Књига дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Паралипоменону 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. хроника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Днв 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Дн 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (srp)", () => {
		expect(p.parse("Друга Књига дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга Паралипоменону 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга хроника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга Днв 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга Дн 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. Књига дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. Паралипоменону 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. хроника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. Днв 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Друга. Дн 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Књига дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Паралипоменону 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 хроника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Днв 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Дн 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Књига дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Паралипоменону 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. хроника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Днв 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Дн 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Књига дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Паралипоменону 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II хроника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Днв 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II Дн 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Књига дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Паралипоменону 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. хроника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Днв 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Дн 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (srp)", () => {
		expect(p.parse("2 Дневника 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 хрон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Chr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Дн 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (srp)", () => {
		expect(p.parse("1 Дневника 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 хрон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Chr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Дн 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book Ezra (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (srp)", () => {
		expect(p.parse("Јездра 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езрина 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Језд 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езр 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (srp)", () => {
		expect(p.parse("Књига Немијина 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Немија 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нем 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book GkEsth (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: GkEsth (srp)", () => {
		expect(p.parse("GkEsth 1:1").osis()).toEqual("GkEsth.1.1");
	});
});
describe("Localized book Esth (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (srp)", () => {
		expect(p.parse("Књига о Јестири 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Јестира 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Естер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esth 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Јест 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Јес 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (srp)", () => {
		expect(p.parse("Књига о Јову 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Јов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (srp)", () => {
		expect(p.parse("Псалми Давидови 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалам 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалми 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Пс 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book PrAzar (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: PrAzar (srp)", () => {
		expect(p.parse("PrAzar 1:1").osis()).toEqual("PrAzar.1.1");
	});
});
describe("Localized book Prov (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (srp)", () => {
		expect(p.parse("Приче Соломонове 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Приче Соломунове 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Изреке 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Prov 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("При 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Пр 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (srp)", () => {
		expect(p.parse("Књига проповедникова 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Проповедник 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eccl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Проп 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Про 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book SgThree (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: SgThree (srp)", () => {
		expect(p.parse("SgThree 1:1").osis()).toEqual("SgThree.1.1");
	});
});
describe("Localized book Song (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (srp)", () => {
		expect(p.parse("Песма над песмама 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Песма Соломонова 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Song 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Пес 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Пнп 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (srp)", () => {
		expect(p.parse("Књига пророка Јеремије 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Јеремија 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Јер 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (srp)", () => {
		expect(p.parse("Књига пророка Језекиља 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Језекиљ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Јез 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (srp)", () => {
		expect(p.parse("Књига пророка Данила 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Данило 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (srp)", () => {
		expect(p.parse("Књига пророка Осије 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Осија 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Хошеа 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ос 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (srp)", () => {
		expect(p.parse("Књига пророка Јоила 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Јоил 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Јоиљ 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Јл 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (srp)", () => {
		expect(p.parse("Књига пророка Амоса 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ам 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (srp)", () => {
		expect(p.parse("Књига пророка Авдије 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авдија 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авдије 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авд 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (srp)", () => {
		expect(p.parse("Књига пророка Јоне 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Јона 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Јон 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (srp)", () => {
		expect(p.parse("Књига пророка Михеја 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Михеј 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мих 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (srp)", () => {
		expect(p.parse("Књига пророка Наума 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Наум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Нм 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (srp)", () => {
		expect(p.parse("Књига пророка Авакума 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авакум 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ав 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (srp)", () => {
		expect(p.parse("Књига пророка Софоније 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Софонија 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Софоније 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Соф 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (srp)", () => {
		expect(p.parse("Књига пророка Агеја 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Агеј 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Аг 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (srp)", () => {
		expect(p.parse("Књига пророка Захарије 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Захарија 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зах 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (srp)", () => {
		expect(p.parse("Књига пророка Малахије 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малахија 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (srp)", () => {
		expect(p.parse("Јеванђеље по Матеју 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Еванђеље по Матеју 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матеја 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матеј 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book 1Macc (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (srp)", () => {
		expect(p.parse("Прва Макабејаца 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Прва Макавејска 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Прва Макавеја 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Прва. Макабејаца 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Прва. Макавејска 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Прва. Макавеја 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Макабејаца 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Макавејска 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Макавеја 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Макабејаца 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Макавејска 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Макавеја 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Макабејаца 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Макавејска 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I Макавеја 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Макабејаца 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Макавејска 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Макавеја 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (srp)", () => {
		expect(p.parse("Друга Макабејаца 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друга Макавејска 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друга Макавеја 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друга. Макабејаца 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друга. Макавејска 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Друга. Макавеја 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Макабејаца 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Макавејска 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Макавеја 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Макабејаца 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Макавејска 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Макавеја 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Макабејаца 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Макавејска 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II Макавеја 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Макабејаца 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Макавејска 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Макавеја 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (srp)", () => {
		expect(p.parse("Трећом Макабејаца 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трећом Макавејска 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трећом Макавеја 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трећом. Макабејаца 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трећом. Макавејска 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трећом. Макавеја 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трећа Макабејаца 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трећа Макавејска 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трећа Макавеја 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трећа. Макабејаца 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трећа. Макавејска 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("Трећа. Макавеја 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Макабејаца 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Макавејска 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Макавеја 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Макабејаца 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Макавејска 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3. Макавеја 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Макабејаца 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Макавејска 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III Макавеја 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Макабејаца 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Макавејска 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("III. Макавеја 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (srp)", () => {
		expect(p.parse("Четврта Макабејаца 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Четврта Макавејска 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Четврта Макавеја 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Четврта. Макабејаца 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Четврта. Макавејска 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("Четврта. Макавеја 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Макабејаца 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Макавејска 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Макавеја 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Макабејаца 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Макавејска 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4. Макавеја 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Макабејаца 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Макавејска 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV Макавеја 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Макабејаца 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Макавејска 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("IV. Макавеја 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 2Macc (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (srp)", () => {
		expect(p.parse("2 Макавеја 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Macc 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Мк 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 3Macc (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (srp)", () => {
		expect(p.parse("3 Макавеја 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Macc 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3 Мк 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 4Macc (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 4Macc (srp)", () => {
		expect(p.parse("4 Макавеја 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4Macc 1:1").osis()).toEqual("4Macc.1.1");
		expect(p.parse("4 Мк 1:1").osis()).toEqual("4Macc.1.1");
	});
});
describe("Localized book 1Macc (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (srp)", () => {
		expect(p.parse("1 Макавеја 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Macc 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Мк 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book Mark (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (srp)", () => {
		expect(p.parse("Јеванђеље по Марку 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Еванђеље по Марку 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Маркo 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марко 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (srp)", () => {
		expect(p.parse("Јеванђеље по Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Еванђеље по Луки 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luke 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лукa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (srp)", () => {
		expect(p.parse("Прва посланица Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прва Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прва. посланица Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прва. Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 посланица Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. посланица Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I посланица Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. посланица Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Јованова 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (srp)", () => {
		expect(p.parse("Друга посланица Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. посланица Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 посланица Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. посланица Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II посланица Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. посланица Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Јованова 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (srp)", () => {
		expect(p.parse("Трећом посланица Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трећом Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трећом. посланица Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трећом. Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трећа посланица Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трећа Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трећа. посланица Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трећа. Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 посланица Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. посланица Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III посланица Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. посланица Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Јованова 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (srp)", () => {
		expect(p.parse("1 Јованова 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1John 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Јн 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (srp)", () => {
		expect(p.parse("2 Јованова 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2John 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Јн 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (srp)", () => {
		expect(p.parse("3 Јованова 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3John 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Јн 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (srp)", () => {
		expect(p.parse("Прва Јн 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Прва. Јн 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Јн 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Јн 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Јн 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Јн 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (srp)", () => {
		expect(p.parse("Друга Јн 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Друга. Јн 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Јн 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Јн 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Јн 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Јн 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (srp)", () => {
		expect(p.parse("Трећом Јн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трећом. Јн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трећа Јн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Трећа. Јн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Јн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Јн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Јн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Јн 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (srp)", () => {
		expect(p.parse("Јн 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book John (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (srp)", () => {
		expect(p.parse("Јеванђеље по Јовану 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Еванђеље по Јовану 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Јован 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("John 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Јвн 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (srp)", () => {
		expect(p.parse("Дела Апостолска 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Acts 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дела 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дап 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (srp)", () => {
		expect(p.parse("Посланица Римљанима 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римљанима 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (srp)", () => {
		expect(p.parse("Прва посланица Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прва Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прва Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прва. посланица Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прва. Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Прва. Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 посланица Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. посланица Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I посланица Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. посланица Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (srp)", () => {
		expect(p.parse("Друга посланица Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга. посланица Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга. Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Друга. Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 посланица Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. посланица Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II посланица Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. посланица Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (srp)", () => {
		expect(p.parse("2 Коринћанима 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (srp)", () => {
		expect(p.parse("1 Коринћанима 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book Gal (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (srp)", () => {
		expect(p.parse("Посланица Галаћанима 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Посланица Галатима 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галаћанима 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатима 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (srp)", () => {
		expect(p.parse("Посланица Ефесцима 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефесцима 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (srp)", () => {
		expect(p.parse("Посланица Филипљанима 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филипљанима 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book Col (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (srp)", () => {
		expect(p.parse("Посланица Колошанима 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колошанима 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book 1Thess (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (srp)", () => {
		expect(p.parse("Прва посланица Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прва Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прва Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прва. посланица Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прва. Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Прва. Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 посланица Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. посланица Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I посланица Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Сол 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. посланица Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Сол 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (srp)", () => {
		expect(p.parse("Друга посланица Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. посланица Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Друга. Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 посланица Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. посланица Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II посланица Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Сол 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. посланица Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Сол 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (srp)", () => {
		expect(p.parse("2 Солуњанима 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Thess 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Сол 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (srp)", () => {
		expect(p.parse("1 Солуњанима 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Thess 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Сол 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Tim (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (srp)", () => {
		expect(p.parse("Прва посланица Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прва Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прва Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прва. посланица Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прва. Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Прва. Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 посланица Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. посланица Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I посланица Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. посланица Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (srp)", () => {
		expect(p.parse("Друга посланица Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. посланица Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Друга. Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 посланица Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. посланица Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II посланица Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. посланица Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (srp)", () => {
		expect(p.parse("2 Тимотеју 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (srp)", () => {
		expect(p.parse("1 Тимотеју 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book Titus (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (srp)", () => {
		expect(p.parse("Посланица Титу 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Титу 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (srp)", () => {
		expect(p.parse("Посланица Филимону 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимону 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Фил 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (srp)", () => {
		expect(p.parse("Посланица Јеврејима 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Јеврејима 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Јев 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (srp)", () => {
		expect(p.parse("Посланица Јаковљева 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Јаковљева 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Јаковова 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Јаков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Јак 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (srp)", () => {
		expect(p.parse("Прва посланица Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва. посланица Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва. Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Прва. Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 посланица Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. посланица Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I посланица Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. посланица Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Пет 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (srp)", () => {
		expect(p.parse("Друга посланица Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. посланица Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Друга. Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 посланица Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. посланица Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II посланица Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. посланица Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Пет 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (srp)", () => {
		expect(p.parse("2 Петрова 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (srp)", () => {
		expect(p.parse("1 Петрова 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book Jude (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (srp)", () => {
		expect(p.parse("Посланица Јудина 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Јаковљевог 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Јудина 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Јуде 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Јуд 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Јд 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (srp)", () => {
		expect(p.parse("Књига Товијина 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Тобија 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Товит 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Тов 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (srp)", () => {
		expect(p.parse("Књига о Јудити 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Јудита 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Jdt 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (srp)", () => {
		expect(p.parse("Барух 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Варух 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Вар 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book Sus (srp)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sus (srp)", () => {
		expect(p.parse("Sus 1:1").osis()).toEqual("Sus.1.1");
	});
});

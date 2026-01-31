"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bel.js";

describe("Localized book Gen (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bel)", () => {
		expect(p.parse("Кніга Роду 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Быцьцё 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Быццё 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Род. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bel)", () => {
		expect(p.parse("Кніга Выхаду 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Выхад 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Вых. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bel)", () => {
		expect(p.parse("Кніга Святарская 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Святар. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лявіт 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bel)", () => {
		expect(p.parse("Кніга Лічбаў 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Лікі 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ліч. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (bel)", () => {
		expect(p.parse("Мудрасць Ісуса, сына Сіраха 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Эклезіясціка 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Сірах. 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (bel)", () => {
		expect(p.parse("Кніга Мудрасці 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Мудр. 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bel)", () => {
		expect(p.parse("Ламентацыі Ярэміі 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ламен. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Плач 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bel)", () => {
		expect(p.parse("Адкрыццё Яна 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Адкрыцьцё 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Адкрыццё 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Адкр. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Адкр 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bel)", () => {
		expect(p.parse("Кніга Паўторанага Закону 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Другазаконьне 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Другі Закон 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Паўт. Зак. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bel)", () => {
		expect(p.parse("Кніга Ешуа 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Егошуа 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ісуса 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Еш. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bel)", () => {
		expect(p.parse("Кніга Суддзяў 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Судзьдзяў 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Суд. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bel)", () => {
		expect(p.parse("Кніга Рут 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bel)", () => {
		expect(p.parse("Кніга Ісаі 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ісаі 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ісая 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Іс. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bel)", () => {
		expect(p.parse("1Сам. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bel)", () => {
		expect(p.parse("2Сам. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bel)", () => {
		expect(p.parse("1 кніга Цароў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Валадароў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. кніга Цароў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Валадароў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Першая кніга Цароў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Першая Валадароў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Першая. кніга Цароў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Першая. Валадароў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Першы кніга Цароў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Першы Валадароў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Першы. кніга Цароў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Першы. Валадароў 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bel)", () => {
		expect(p.parse("2 кніга Цароў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Валадароў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. кніга Цароў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Валадароў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Другая кніга Цароў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Другая Валадароў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Другая. кніга Цароў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Другая. Валадароў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Другі кніга Цароў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Другі Валадароў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Другі. кніга Цароў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Другі. Валадароў 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bel)", () => {
		expect(p.parse("3 Царстваў 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Цар. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bel)", () => {
		expect(p.parse("4 Царстваў 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Цар. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bel)", () => {
		expect(p.parse("1 кніга Самуэля 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Царстваў 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Самуэля 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. кніга Самуэля 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Царстваў 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Самуэля 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першая кніга Самуэля 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першая Царстваў 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першая Самуэля 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першая. кніга Самуэля 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першая. Царстваў 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першая. Самуэля 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першы кніга Самуэля 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першы Царстваў 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першы Самуэля 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першы. кніга Самуэля 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першы. Царстваў 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Першы. Самуэля 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bel)", () => {
		expect(p.parse("2 кніга Самуэля 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Царстваў 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Самуэля 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. кніга Самуэля 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Царстваў 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Самуэля 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другая кніга Самуэля 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другая Царстваў 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другая Самуэля 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другая. кніга Самуэля 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другая. Царстваў 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другая. Самуэля 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другі кніга Самуэля 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другі Царстваў 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другі Самуэля 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другі. кніга Самуэля 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другі. Царстваў 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Другі. Самуэля 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bel)", () => {
		expect(p.parse("1 кніга Хронікаў 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Летапісаў 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. кніга Хронікаў 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Летапісаў 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Першая кніга Хронікаў 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Першая Летапісаў 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Першая. кніга Хронікаў 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Першая. Летапісаў 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Першы кніга Хронікаў 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Першы Летапісаў 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Першы. кніга Хронікаў 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Першы. Летапісаў 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bel)", () => {
		expect(p.parse("2 кніга Хронікаў 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Летапісаў 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. кніга Хронікаў 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Летапісаў 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Другая кніга Хронікаў 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Другая Летапісаў 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Другая. кніга Хронікаў 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Другая. Летапісаў 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Другі кніга Хронікаў 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Другі Летапісаў 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Другі. кніга Хронікаў 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Другі. Летапісаў 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bel)", () => {
		expect(p.parse("1Пар. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bel)", () => {
		expect(p.parse("2Пар. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bel)", () => {
		expect(p.parse("Кніга Эздры 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Эздр. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Эздры 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Эзра 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bel)", () => {
		expect(p.parse("Кніга Нэгэміі 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нэгэм. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нээміі 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нээмія 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bel)", () => {
		expect(p.parse("Кніга Эстэр 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эстэр 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bel)", () => {
		expect(p.parse("Кніга Ёва 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ёва 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ёў 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bel)", () => {
		expect(p.parse("Кніга Псальмаў 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалтыр 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псальмы 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Пс. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bel)", () => {
		expect(p.parse("Кніга Выслоўяў Саламонавых 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Прыповесьці 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Выслоўі 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Высл. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Прп 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bel)", () => {
		expect(p.parse("Кніга Эклезіяста 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Эклезіяста 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Эклезіяст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Экл. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bel)", () => {
		expect(p.parse("Песня з Песняў Саламонава 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Песьня 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Песн. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bel)", () => {
		expect(p.parse("Кніга Ярэміі 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ераміі 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ярэмія 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ярэм. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bel)", () => {
		expect(p.parse("Кніга Эзэкіэля 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езэкііля 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Эзэкіэль 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Эзэк. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bel)", () => {
		expect(p.parse("Кніга Даніэля 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Данііла 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Данііл 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bel)", () => {
		expect(p.parse("Кніга Осіі 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Асіі 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Осія 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ос. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bel)", () => {
		expect(p.parse("Кніга Ёэля 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ёіля 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ёэль 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bel)", () => {
		expect(p.parse("Кніга Амоса 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амоса 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ам. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bel)", () => {
		expect(p.parse("Кніга Абдыі 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Абадыя 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Аўдзея 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Абд. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bel)", () => {
		expect(p.parse("Кніга Ёны 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ёна 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ёны 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bel)", () => {
		expect(p.parse("Кніга Міхея 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Міхей 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Міхея 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Міх. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bel)", () => {
		expect(p.parse("Кніга Навума 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Навума 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Навум 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bel)", () => {
		expect(p.parse("Кніга Абакука 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Абакума 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Абакум 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Абак. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bel)", () => {
		expect(p.parse("Кніга Сафоніі 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Сафонія 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Сафона 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Саф. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bel)", () => {
		expect(p.parse("Кніга Агэя 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Агей 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Агея 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Аг. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bel)", () => {
		expect(p.parse("Кніга Захарыі 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Захарыі 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Захарыя 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зах. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bel)", () => {
		expect(p.parse("Кніга Малахіі 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малахіі 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малахія 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bel)", () => {
		expect(p.parse("Евангелле паводле Мацвея 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мацьвея 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мц. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мц 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bel)", () => {
		expect(p.parse("Евангелле паводле Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марка 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bel)", () => {
		expect(p.parse("Евангелле паводле Лукі 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лукаша 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лукі 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bel)", () => {
		expect(p.parse("1Ян. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bel)", () => {
		expect(p.parse("2Ян. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bel)", () => {
		expect(p.parse("Трэці ліст Яна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Яна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ян 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ян. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bel)", () => {
		expect(p.parse("Евангелле паводле Яна 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ян. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Яна 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ян 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bel)", () => {
		expect(p.parse("1 ліст Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ян 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ліст Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ян 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першая ліст Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першая Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першая Ян 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першая. ліст Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першая. Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першая. Ян 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першы ліст Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першы Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першы Ян 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першы. ліст Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першы. Яна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Першы. Ян 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bel)", () => {
		expect(p.parse("2 ліст Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ян 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ліст Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ян 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другая ліст Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другая Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другая Ян 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другая. ліст Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другая. Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другая. Ян 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другі ліст Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другі Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другі Ян 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другі. ліст Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другі. Яна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Другі. Ян 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bel)", () => {
		expect(p.parse("Дзеі святых Апосталаў 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дзеі 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Дз 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bel)", () => {
		expect(p.parse("Ліст да Рымлянаў 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рымлянаў 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рым. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рым 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bel)", () => {
		expect(p.parse("1 ліст да Карынцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Карыньцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Карынфянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кар 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ліст да Карынцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Карыньцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Карынфянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кар 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першая ліст да Карынцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першая Карыньцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першая Карынфянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першая Кар 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першая. ліст да Карынцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першая. Карыньцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першая. Карынфянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першая. Кар 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першы ліст да Карынцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першы Карыньцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першы Карынфянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першы Кар 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першы. ліст да Карынцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першы. Карыньцянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першы. Карынфянаў 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Першы. Кар 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bel)", () => {
		expect(p.parse("2 ліст да Карынцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Карыньцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Карынфянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кар 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ліст да Карынцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Карыньцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Карынфянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кар 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другая ліст да Карынцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другая Карыньцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другая Карынфянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другая Кар 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другая. ліст да Карынцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другая. Карыньцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другая. Карынфянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другая. Кар 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другі ліст да Карынцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другі Карыньцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другі Карынфянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другі Кар 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другі. ліст да Карынцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другі. Карыньцянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другі. Карынфянаў 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Другі. Кар 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bel)", () => {
		expect(p.parse("1Кар. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bel)", () => {
		expect(p.parse("2Кар. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bel)", () => {
		expect(p.parse("Ліст да Калосцаў 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Каласянаў 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Клс. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кал 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bel)", () => {
		expect(p.parse("Ліст да Галатаў 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галятаў 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bel)", () => {
		expect(p.parse("Ліст да Эфесцаў 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфэсянаў 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфэсцаў 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bel)", () => {
		expect(p.parse("Ліст да Піліпцаў 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Піліпянаў 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Філіпянаў 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Плп. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bel)", () => {
		expect(p.parse("1 ліст да Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фесалонікійцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Тэс 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ліст да Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фесалонікійцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Тэс 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першая ліст да Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першая Фесалонікійцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першая Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першая Тэс 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першая. ліст да Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першая. Фесалонікійцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першая. Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першая. Тэс 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першы ліст да Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першы Фесалонікійцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першы Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першы Тэс 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першы. ліст да Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першы. Фесалонікійцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першы. Тэсалонцаў 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Першы. Тэс 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bel)", () => {
		expect(p.parse("2 ліст да Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фесалонікійцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Тэс 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ліст да Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фесалонікійцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Тэс 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другая ліст да Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другая Фесалонікійцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другая Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другая Тэс 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другая. ліст да Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другая. Фесалонікійцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другая. Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другая. Тэс 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другі ліст да Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другі Фесалонікійцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другі Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другі Тэс 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другі. ліст да Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другі. Фесалонікійцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другі. Тэсалонцаў 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Другі. Тэс 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bel)", () => {
		expect(p.parse("1Тэс. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bel)", () => {
		expect(p.parse("2Тэс. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bel)", () => {
		expect(p.parse("1 ліст да Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Цім 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ліст да Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Цім 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першая ліст да Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першая Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першая Цім 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першая. ліст да Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першая. Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першая. Цім 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першы ліст да Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першы Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першы Цім 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першы. ліст да Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першы. Цімафея 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Першы. Цім 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bel)", () => {
		expect(p.parse("2 ліст да Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Цім 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ліст да Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Цім 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другая ліст да Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другая Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другая Цім 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другая. ліст да Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другая. Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другая. Цім 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другі ліст да Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другі Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другі Цім 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другі. ліст да Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другі. Цімафея 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Другі. Цім 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bel)", () => {
		expect(p.parse("1Цім. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bel)", () => {
		expect(p.parse("2Цім. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bel)", () => {
		expect(p.parse("Ліст да Ціта 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ціт. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ціта 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ціт 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bel)", () => {
		expect(p.parse("Ліст да Філімона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Філімона 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bel)", () => {
		expect(p.parse("Ліст да Гебраяў 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Габрэяў 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Гебраяў 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Геб. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Гебр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bel)", () => {
		expect(p.parse("Ліст Якуба 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Якава 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Якуба 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Як. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Як 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bel)", () => {
		expect(p.parse("1 ліст Пётры 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пятра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пт 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ліст Пётры 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пятра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пт 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першая ліст Пётры 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першая Пятра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першая Пт 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першая. ліст Пётры 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першая. Пятра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першая. Пт 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першы ліст Пётры 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першы Пятра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першы Пт 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першы. ліст Пётры 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першы. Пятра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Першы. Пт 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bel)", () => {
		expect(p.parse("2 ліст Пётры 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пятра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пт 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ліст Пётры 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пятра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пт 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другая ліст Пётры 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другая Пятра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другая Пт 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другая. ліст Пётры 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другая. Пятра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другая. Пт 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другі ліст Пётры 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другі Пятра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другі Пт 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другі. ліст Пётры 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другі. Пятра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Другі. Пт 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bel)", () => {
		expect(p.parse("1Пёт. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bel)", () => {
		expect(p.parse("2Пёт. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bel)", () => {
		expect(p.parse("Ліст Юды 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Юда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Юды 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (bel)", () => {
		expect(p.parse("Кніга Тобіі 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Тоб. 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (bel)", () => {
		expect(p.parse("Кніга Юдыт 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Юдыт 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (bel)", () => {
		expect(p.parse("Кніга Баруха 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Барух 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (bel)", () => {
		expect(p.parse("1-я Кніга Макабэяў 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Мак. 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (bel)", () => {
		expect(p.parse("2-я Кніга Макабэяў 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Мак. 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Preferred book names (bel)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (bel)", () => {
		expect(p.parse("Эклезіясціка (Мудрасць Ісуса, сына Сіраха) 1:1").osis()).toEqual("Sir.1.1");
	});
});

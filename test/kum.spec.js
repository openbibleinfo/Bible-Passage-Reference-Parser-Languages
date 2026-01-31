"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kum.js";

describe("Localized book Rev (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kum)", () => {
		expect(p.parse("Вагьий 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Вагь 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kum)", () => {
		expect(p.parse("Маттай 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kum)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kum)", () => {
		expect(p.parse("Лукъа 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лкъ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kum)", () => {
		expect(p.parse("1 Югьан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Югь 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Югьан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Югь 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kum)", () => {
		expect(p.parse("2 Югьан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Югь 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Югьан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Югь 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kum)", () => {
		expect(p.parse("3 Югьан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Югь 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Югьан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Югь 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kum)", () => {
		expect(p.parse("Югьан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Югь 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kum)", () => {
		expect(p.parse("Элчилер 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Элч 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kum)", () => {
		expect(p.parse("Румдагъылагъа 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рум 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kum)", () => {
		expect(p.parse("1 Коринфдегилеге 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфдегилеге 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kum)", () => {
		expect(p.parse("2 Коринфдегилеге 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфдегилеге 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kum)", () => {
		expect(p.parse("Колосдагъылагъа 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kum)", () => {
		expect(p.parse("Галатиядагъылагъа 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kum)", () => {
		expect(p.parse("Эфесдегилеге 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kum)", () => {
		expect(p.parse("Филиппадагъылагъа 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kum)", () => {
		expect(p.parse("1 Салоникдегилеге 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Сал 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Салоникдегилеге 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Сал 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kum)", () => {
		expect(p.parse("2 Салоникдегилеге 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Сал 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Салоникдегилеге 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Сал 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kum)", () => {
		expect(p.parse("1 Тимофейге 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофейге 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kum)", () => {
		expect(p.parse("2 Тимофейге 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофейге 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kum)", () => {
		expect(p.parse("Титге 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kum)", () => {
		expect(p.parse("Филимонгъа 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филим 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kum)", () => {
		expect(p.parse("Ягьудилеге 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ягь 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kum)", () => {
		expect(p.parse("Якъуб 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Якъ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kum)", () => {
		expect(p.parse("1 Петер 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петер 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пет 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kum)", () => {
		expect(p.parse("2 Петер 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петер 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пет 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kum)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kum)", () => {
		expect(p.parse("Ягьуда 1:1").osis()).toEqual("Jude.1.1");
	});
});

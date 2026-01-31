"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kjh.js";

describe("Localized book Rev (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kjh)", () => {
		expect(p.parse("Азых чоох 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Аз.ч. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kjh)", () => {
		expect(p.parse("Матфей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мф 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kjh)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kjh)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kjh)", () => {
		expect(p.parse("1 Иоанның 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ин 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иоанның 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ин 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kjh)", () => {
		expect(p.parse("2 Иоанның 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ин 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иоанның 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ин 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kjh)", () => {
		expect(p.parse("3 Иоанның 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ин 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Иоанның 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ин 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kjh)", () => {
		expect(p.parse("Иоанн 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ин 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kjh)", () => {
		expect(p.parse("Илҷілернің 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Илҷ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kjh)", () => {
		expect(p.parse("Римдегілерге 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kjh)", () => {
		expect(p.parse("1 Коринфтегілерге 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфтегілерге 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kjh)", () => {
		expect(p.parse("2 Коринфтегілерге 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфтегілерге 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kjh)", () => {
		expect(p.parse("Колоссадағыларға 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kjh)", () => {
		expect(p.parse("Галат чиріндегілерге 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kjh)", () => {
		expect(p.parse("Ефестегілерге 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kjh)", () => {
		expect(p.parse("Филипптегілерге 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kjh)", () => {
		expect(p.parse("1 Фессалониктегілерге 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фес 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фессалониктегілерге 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фес 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kjh)", () => {
		expect(p.parse("2 Фессалониктегілерге 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фес 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фессалониктегілерге 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фес 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kjh)", () => {
		expect(p.parse("1 Тимофейге 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофейге 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kjh)", () => {
		expect(p.parse("2 Тимофейге 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофейге 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kjh)", () => {
		expect(p.parse("Титке 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kjh)", () => {
		expect(p.parse("Филимонға 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kjh)", () => {
		expect(p.parse("Еврейлерге 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kjh)", () => {
		expect(p.parse("Иаковтың 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Иак 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kjh)", () => {
		expect(p.parse("1 Петрның 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петрның 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пет 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kjh)", () => {
		expect(p.parse("2 Петрның 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петрның 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пет 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kjh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kjh)", () => {
		expect(p.parse("Иуданың 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуд 1:1").osis()).toEqual("Jude.1.1");
	});
});

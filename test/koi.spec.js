"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/koi.js";

describe("Localized book Rev (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (koi)", () => {
		expect(p.parse("Осьтӧм 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Осьт. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (koi)", () => {
		expect(p.parse("Матвей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (koi)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (koi)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (koi)", () => {
		expect(p.parse("3 Иоан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ин. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (koi)", () => {
		expect(p.parse("1 Иоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ин. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ин. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (koi)", () => {
		expect(p.parse("2 Иоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ин. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ин. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (koi)", () => {
		expect(p.parse("Иоан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ин. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (koi)", () => {
		expect(p.parse("Ап. керӧммез 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ап.кер. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (koi)", () => {
		expect(p.parse("Римын оліссезлӧ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (koi)", () => {
		expect(p.parse("1 Коринфын оліссезлӧ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфын оліссезлӧ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (koi)", () => {
		expect(p.parse("2 Коринфын оліссезлӧ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфын оліссезлӧ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (koi)", () => {
		expect(p.parse("Колосын оліссезлӧ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (koi)", () => {
		expect(p.parse("Галатияын оліссезлӧ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (koi)", () => {
		expect(p.parse("Ефесын оліссезлӧ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (koi)", () => {
		expect(p.parse("Филипын оліссезлӧ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (koi)", () => {
		expect(p.parse("1 Фессалоникаын оліссезлӧ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фесс. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фессалоникаын оліссезлӧ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фесс. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (koi)", () => {
		expect(p.parse("2 Фессалоникаын оліссезлӧ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фесс. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фессалоникаын оліссезлӧ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фесс. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (koi)", () => {
		expect(p.parse("1 Тимофейлӧ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофейлӧ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (koi)", () => {
		expect(p.parse("2 Тимофейлӧ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофейлӧ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (koi)", () => {
		expect(p.parse("Титлӧ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (koi)", () => {
		expect(p.parse("Филимонлӧ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филем. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (koi)", () => {
		expect(p.parse("Еврейезлӧ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (koi)", () => {
		expect(p.parse("Яков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Як. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (koi)", () => {
		expect(p.parse("1 Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пет. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (koi)", () => {
		expect(p.parse("2 Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пет. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (koi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (koi)", () => {
		expect(p.parse("Иуд. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуда 1:1").osis()).toEqual("Jude.1.1");
	});
});

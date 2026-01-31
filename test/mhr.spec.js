"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mhr.js";

describe("Localized book Rev (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mhr)", () => {
		expect(p.parse("Почм 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mhr)", () => {
		expect(p.parse("Мф 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mhr)", () => {
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mhr)", () => {
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mhr)", () => {
		expect(p.parse("1 Ин 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ин 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mhr)", () => {
		expect(p.parse("2 Ин 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ин 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mhr)", () => {
		expect(p.parse("3 Ин 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ин 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mhr)", () => {
		expect(p.parse("Ин 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mhr)", () => {
		expect(p.parse("Ап.паш 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mhr)", () => {
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mhr)", () => {
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mhr)", () => {
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mhr)", () => {
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mhr)", () => {
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mhr)", () => {
		expect(p.parse("Еф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mhr)", () => {
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mhr)", () => {
		expect(p.parse("1 Фес 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фес 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mhr)", () => {
		expect(p.parse("2 Фес 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фес 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mhr)", () => {
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mhr)", () => {
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mhr)", () => {
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mhr)", () => {
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mhr)", () => {
		expect(p.parse("Евр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mhr)", () => {
		expect(p.parse("Иак 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mhr)", () => {
		expect(p.parse("1 Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mhr)", () => {
		expect(p.parse("2 Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mhr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mhr)", () => {
		expect(p.parse("Иуд 1:1").osis()).toEqual("Jude.1.1");
	});
});

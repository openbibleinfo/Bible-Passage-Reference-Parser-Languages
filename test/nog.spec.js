"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nog.js";

describe("Localized book Rev (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nog)", () => {
		expect(p.parse("Ашылув 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ашы. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nog)", () => {
		expect(p.parse("Матай 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nog)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nog)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nog)", () => {
		expect(p.parse("1 Яхъя 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Яхъя 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nog)", () => {
		expect(p.parse("2 Яхъя 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Яхъя 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nog)", () => {
		expect(p.parse("3 Яхъя 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Яхъя 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nog)", () => {
		expect(p.parse("Яхья 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nog)", () => {
		expect(p.parse("Ислер 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nog)", () => {
		expect(p.parse("Урымшылар 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nog)", () => {
		expect(p.parse("1 Коринтшилер 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринтшилер 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nog)", () => {
		expect(p.parse("2 Коринтшилер 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринтшилер 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nog)", () => {
		expect(p.parse("Колосшылар 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nog)", () => {
		expect(p.parse("Галатияшылар 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nog)", () => {
		expect(p.parse("Эфесшилер 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nog)", () => {
		expect(p.parse("Пилипшилер 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nog)", () => {
		expect(p.parse("1 Салоникшилер 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Салоникшилер 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nog)", () => {
		expect(p.parse("2 Салоникшилер 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Салоникшилер 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nog)", () => {
		expect(p.parse("1 Тимотей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимотей 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nog)", () => {
		expect(p.parse("2 Тимотей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимотей 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nog)", () => {
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nog)", () => {
		expect(p.parse("Пилимон 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nog)", () => {
		expect(p.parse("Ювытлар 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nog)", () => {
		expect(p.parse("Якуп 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nog)", () => {
		expect(p.parse("1 Петер 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петер 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nog)", () => {
		expect(p.parse("2 Петер 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петер 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nog)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nog)", () => {
		expect(p.parse("Юда 1:1").osis()).toEqual("Jude.1.1");
	});
});

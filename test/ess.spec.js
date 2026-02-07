"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ess.js";

describe("Localized book Rev (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ess)", () => {
		expect(p.parse("Откровение 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ess)", () => {
		expect(p.parse("От Матфея 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ess)", () => {
		expect(p.parse("От Марка 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ess)", () => {
		expect(p.parse("От Луки 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book John (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ess)", () => {
		expect(p.parse("От Иоанна 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ess)", () => {
		expect(p.parse("1е Иоанна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1е. Иоанна 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ess)", () => {
		expect(p.parse("2е Иоанна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2е. Иоанна 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ess)", () => {
		expect(p.parse("3е Иоанна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3е. Иоанна 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ess)", () => {
		expect(p.parse("Деяния 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ess)", () => {
		expect(p.parse("К Римлянам 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ess)", () => {
		expect(p.parse("1е Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1е. Коринфянам 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ess)", () => {
		expect(p.parse("2е Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2е. Коринфянам 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ess)", () => {
		expect(p.parse("К Колоссянам 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ess)", () => {
		expect(p.parse("К Галатам 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ess)", () => {
		expect(p.parse("К Ефесянам 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ess)", () => {
		expect(p.parse("К Филиппийцам 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ess)", () => {
		expect(p.parse("1е Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1е. Фессалоникийцам 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ess)", () => {
		expect(p.parse("2е Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2е. Фессалоникийцам 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ess)", () => {
		expect(p.parse("1е Тимофею 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1е. Тимофею 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ess)", () => {
		expect(p.parse("2е Тимофею 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2е. Тимофею 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ess)", () => {
		expect(p.parse("К Титу 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ess)", () => {
		expect(p.parse("К Филимону 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ess)", () => {
		expect(p.parse("К Евреям 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ess)", () => {
		expect(p.parse("От Иакова 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ess)", () => {
		expect(p.parse("1е Петра 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1е. Петра 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ess)", () => {
		expect(p.parse("2е Петра 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2е. Петра 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ess)", () => {
		expect(p.parse("От Иуды 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (ess)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ess)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1е Иоанна - 3е Иоанна").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1е Иоанна – 3е Иоанна").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1е Иоанна — 3е Иоанна").osis()).toEqual("1John.1-3John.1");
	});
});

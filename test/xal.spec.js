"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/xal.js";

describe("Localized book Gen (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (xal)", () => {
		expect(p.parse("Эклц 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (xal)", () => {
		expect(p.parse("Нүүдл 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (xal)", () => {
		expect(p.parse("Левит 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (xal)", () => {
		expect(p.parse("Әмтнә то авлһн 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (xal)", () => {
		expect(p.parse("Апокалипсис 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (xal)", () => {
		expect(p.parse("Давтх Закан 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Ruth (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (xal)", () => {
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Job (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (xal)", () => {
		expect(p.parse("Йов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (xal)", () => {
		expect(p.parse("Псалмс 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (xal)", () => {
		expect(p.parse("Цецн селвгүд 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (xal)", () => {
		expect(p.parse("Цецн Ухана Багш 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (xal)", () => {
		expect(p.parse("Соломона хамгин сән дун 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jonah (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (xal)", () => {
		expect(p.parse("Йона 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (xal)", () => {
		expect(p.parse("Матай 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (xal)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (xal)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (xal)", () => {
		expect(p.parse("1 Йохан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Йохан 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (xal)", () => {
		expect(p.parse("2 Йохан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Йохан 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (xal)", () => {
		expect(p.parse("3 Йохан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Йохан 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (xal)", () => {
		expect(p.parse("Йохан 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (xal)", () => {
		expect(p.parse("Апостолмуд 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (xal)", () => {
		expect(p.parse("Риминхн 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (xal)", () => {
		expect(p.parse("1 Көринтинхн 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Көринтинхн 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (xal)", () => {
		expect(p.parse("2 Көринтинхн 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Көринтинхн 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (xal)", () => {
		expect(p.parse("Калосинхн 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (xal)", () => {
		expect(p.parse("Һалатьянхн 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (xal)", () => {
		expect(p.parse("Епесинхн 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (xal)", () => {
		expect(p.parse("Пилипинхн 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (xal)", () => {
		expect(p.parse("1 Тесалоникинхн 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Тесалоникинхн 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (xal)", () => {
		expect(p.parse("2 Тесалоникинхн 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Тесалоникинхн 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (xal)", () => {
		expect(p.parse("1 Тимофей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофей 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (xal)", () => {
		expect(p.parse("2 Тимофей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофей 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (xal)", () => {
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (xal)", () => {
		expect(p.parse("Пилемон 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (xal)", () => {
		expect(p.parse("Евреймүд 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (xal)", () => {
		expect(p.parse("Яков 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (xal)", () => {
		expect(p.parse("1 Пётр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пётр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (xal)", () => {
		expect(p.parse("2 Пётр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пётр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (xal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (xal)", () => {
		expect(p.parse("Йуда 1:1").osis()).toEqual("Jude.1.1");
	});
});

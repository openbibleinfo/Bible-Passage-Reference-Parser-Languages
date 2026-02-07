"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bak.js";

describe("Localized book Gen (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bak)", () => {
		expect(p.parse("Башланмыш 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Баш 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bak)", () => {
		expect(p.parse("Сығыу 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Сығ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bak)", () => {
		expect(p.parse("Левиҙәр 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bak)", () => {
		expect(p.parse("Иҫәп алыу 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Иҫәп 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Иҫп 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bak)", () => {
		expect(p.parse("Һыҡтау 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Һҡт 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bak)", () => {
		expect(p.parse("Асылыш 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Асл 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bak)", () => {
		expect(p.parse("Ҡабатлап әйтелгән ҡанун 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ҡабат 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ҡанун 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ҡнн 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bak)", () => {
		expect(p.parse("Йушағ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Йуш 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bak)", () => {
		expect(p.parse("Хакимдар 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Хак 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bak)", () => {
		expect(p.parse("Руҫ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bak)", () => {
		expect(p.parse("Ишағыяһ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Иша 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ишғ 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bak)", () => {
		expect(p.parse("Ііі Батшалар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Бат 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bak)", () => {
		expect(p.parse("Іv Батшалар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Бат 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bak)", () => {
		expect(p.parse("1 Батшалар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Бат 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Батшалар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Бат 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("І Батшалар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("І Бат 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("І. Батшалар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("І. Бат 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bak)", () => {
		expect(p.parse("2 Батшалар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Бат 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Батшалар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Бат 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Іі Батшалар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Іі Бат 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Іі. Батшалар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Іі. Бат 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bak)", () => {
		expect(p.parse("1 Йылъяҙма 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Йыл 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Йылъяҙма 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Йыл 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("І Йылъяҙма 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("І Йыл 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("І. Йылъяҙма 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("І. Йыл 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bak)", () => {
		expect(p.parse("2 Йылъяҙма 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Йыл 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Йылъяҙма 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Йыл 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Іі Йылъяҙма 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Іі Йыл 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Іі. Йылъяҙма 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Іі. Йыл 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bak)", () => {
		expect(p.parse("Ғөзәйер 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ғөз 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bak)", () => {
		expect(p.parse("Нөхәмияһ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нөх 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bak)", () => {
		expect(p.parse("Эстер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эст 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bak)", () => {
		expect(p.parse("Әйүп 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Әйп 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bak)", () => {
		expect(p.parse("Зәбүр 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Зәб 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bak)", () => {
		expect(p.parse("Әйтемдәре 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Хикмәттәр 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Әйтем 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Хик 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bak)", () => {
		expect(p.parse("Вәғәзсе 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Вәғ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bak)", () => {
		expect(p.parse("Йырҙар йыры 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Йыр 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bak)", () => {
		expect(p.parse("Йермеяһ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Йер 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bak)", () => {
		expect(p.parse("Зөлкифел 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Зөл 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bak)", () => {
		expect(p.parse("Даниил 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Днл 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bak)", () => {
		expect(p.parse("Һошеяғ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Һош 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bak)", () => {
		expect(p.parse("Йоил пәйғәмбәр китабы 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Йоил 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Йои 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bak)", () => {
		expect(p.parse("Ғамос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ғам 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bak)", () => {
		expect(p.parse("Ғовадъяһ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ғовад 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ғов 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bak)", () => {
		expect(p.parse("Юныс 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юнс 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bak)", () => {
		expect(p.parse("Миха 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мих 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bak)", () => {
		expect(p.parse("Нахум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Нхм 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bak)", () => {
		expect(p.parse("Хаваҡҡуҡ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хаваҡ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хав 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bak)", () => {
		expect(p.parse("Сефанъяһ 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Сеф 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bak)", () => {
		expect(p.parse("Хаггай 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хаг 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bak)", () => {
		expect(p.parse("Зәкәрьяһ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зәк 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bak)", () => {
		expect(p.parse("Малахи 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Млх 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bak)", () => {
		expect(p.parse("Маҫҫайос 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матфей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Маҫ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bak)", () => {
		expect(p.parse("Маркус 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мрк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bak)", () => {
		expect(p.parse("Лукас 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bak)", () => {
		expect(p.parse("Ііі Яхъя 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Яхъя 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ях 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bak)", () => {
		expect(p.parse("1 Яхъя 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ях 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Яхъя 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ях 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("І Яхъя 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("І Ях 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("І. Яхъя 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("І. Ях 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bak)", () => {
		expect(p.parse("2 Яхъя 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ях 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Яхъя 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ях 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Іі Яхъя 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Іі Ях 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Іі. Яхъя 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Іі. Ях 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bak)", () => {
		expect(p.parse("Яхъя 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ях 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bak)", () => {
		expect(p.parse("Ғәмәлдәр 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ғмл 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bak)", () => {
		expect(p.parse("Римдарға 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bak)", () => {
		expect(p.parse("1 Коринҫостарға 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринфтарға 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринҫостарға 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфтарға 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("І Коринҫостарға 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("І Коринфтарға 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("І Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("І. Коринҫостарға 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("І. Коринфтарға 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("І. Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bak)", () => {
		expect(p.parse("2 Коринҫостарға 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринфтарға 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринҫостарға 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфтарға 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Іі Коринҫостарға 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Іі Коринфтарға 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Іі Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Іі. Коринҫостарға 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Іі. Коринфтарға 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Іі. Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bak)", () => {
		expect(p.parse("Колоссайҙарға 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колосстарға 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bak)", () => {
		expect(p.parse("Галаттарға 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Глт 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bak)", () => {
		expect(p.parse("Ефестарға 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфестарға 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфс 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bak)", () => {
		expect(p.parse("Филиппойҙарға 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филиптарға 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bak)", () => {
		expect(p.parse("1 Тессалоникеларға 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фессалоникаларға 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Тес 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Тессалоникеларға 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фессалоникаларға 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Тес 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("І Тессалоникеларға 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("І Фессалоникаларға 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("І Тес 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("І. Тессалоникеларға 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("І. Фессалоникаларға 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("І. Тес 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bak)", () => {
		expect(p.parse("2 Тессалоникеларға 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фессалоникаларға 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Тес 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Тессалоникеларға 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фессалоникаларға 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Тес 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Іі Тессалоникеларға 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Іі Фессалоникаларға 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Іі Тес 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Іі. Тессалоникеларға 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Іі. Фессалоникаларға 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Іі. Тес 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bak)", () => {
		expect(p.parse("1 Тимоҫеусҡа 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимофейға 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимоҫеусҡа 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофейға 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("І Тимоҫеусҡа 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("І Тимофейға 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("І Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("І. Тимоҫеусҡа 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("І. Тимофейға 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("І. Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bak)", () => {
		expect(p.parse("2 Тимоҫеусҡа 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимофейға 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимоҫеусҡа 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофейға 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Іі Тимоҫеусҡа 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Іі Тимофейға 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Іі Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Іі. Тимоҫеусҡа 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Іі. Тимофейға 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Іі. Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bak)", () => {
		expect(p.parse("Титусҡа 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Титҡа 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bak)", () => {
		expect(p.parse("Филемонға 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимонға 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bak)", () => {
		expect(p.parse("Ғивриҙәргә 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Еврейҙарға 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ғвр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bak)", () => {
		expect(p.parse("Яҡуб 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Яҡуп 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Яҡ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bak)", () => {
		expect(p.parse("1 Петрус 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Птр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петрус 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Птр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("І Петрус 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("І Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("І Птр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("І. Петрус 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("І. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("І. Птр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bak)", () => {
		expect(p.parse("2 Петрус 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Птр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петрус 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Птр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Іі Петрус 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Іі Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Іі Птр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Іі. Петрус 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Іі. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Іі. Птр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bak)", () => {
		expect(p.parse("Йәһүҙә 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Йһҙ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (bak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (bak)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Яхъя - Ііі Яхъя").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Яхъя – Ііі Яхъя").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Яхъя — Ііі Яхъя").osis()).toEqual("1John.1-3John.1");
	});
});

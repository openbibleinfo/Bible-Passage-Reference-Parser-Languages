"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ava.js";

describe("Localized book Rev (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ava)", () => {
		expect(p.parse("Иоанние Аллагьас загьир гьарурал ишал 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ava)", () => {
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Kgs (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ava)", () => {
		expect(p.parse("3 Пачаби 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Пач. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ava)", () => {
		expect(p.parse("4 Пачаби 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Пач. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ava)", () => {
		expect(p.parse("1 Пачаби 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Пач. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Пачаби 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Пач. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ava)", () => {
		expect(p.parse("2 Пачаби 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Пач. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Пачаби 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Пач. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book Esth (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ava)", () => {
		expect(p.parse("Эстер 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Prov (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ava)", () => {
		expect(p.parse("Гӏакъилал рагӀаби 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Dan (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ava)", () => {
		expect(p.parse("Даниял 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Jonah (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ava)", () => {
		expect(p.parse("Юнус 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ava)", () => {
		expect(p.parse("Матфейица бицараб Рохалил хабар 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матфей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ava)", () => {
		expect(p.parse("Маркица бицараб Рохалил хабар 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мар. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ava)", () => {
		expect(p.parse("Лукаца бицараб Рохалил хабар 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лук. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ava)", () => {
		expect(p.parse("Иоаннил тӀоцебесеб кагъат 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ava)", () => {
		expect(p.parse("Иоаннил кӀиабилеб кагъат 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ava)", () => {
		expect(p.parse("Иоаннил лъабабилеб кагъат 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ин. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ava)", () => {
		expect(p.parse("1 Ин. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ин. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ava)", () => {
		expect(p.parse("2 Ин. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ин. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ava)", () => {
		expect(p.parse("Иоанница бицараб Рохалил хабар 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Иоанн 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ин. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ava)", () => {
		expect(p.parse("Чапарзабазул ишал 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Чап. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ava)", () => {
		expect(p.parse("Румазухъе кагъат 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рум. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ava)", () => {
		expect(p.parse("1 Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ava)", () => {
		expect(p.parse("2 Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ava)", () => {
		expect(p.parse("Коринфиязухъе тӀоцебесеб кагъат 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ava)", () => {
		expect(p.parse("Коринфиязухъе кӀиабилеб кагъат 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ava)", () => {
		expect(p.parse("Колоссиязухъе кагъат 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ava)", () => {
		expect(p.parse("Галатиязухъе кагъат 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ava)", () => {
		expect(p.parse("Эфесиязухъе кагъат 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ava)", () => {
		expect(p.parse("Филиппиязухъе кагъат 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филип. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ava)", () => {
		expect(p.parse("1 Фес. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фес. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ava)", () => {
		expect(p.parse("2 Фес. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фес. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ava)", () => {
		expect(p.parse("Фессалоникиязухъе тӀоцебесеб кагъат 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ava)", () => {
		expect(p.parse("Фессалоникиязухъе кӀиабилеб кагъат 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ava)", () => {
		expect(p.parse("1 Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ava)", () => {
		expect(p.parse("2 Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ava)", () => {
		expect(p.parse("Тимофейихъе тӀоцебесеб кагъат 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ava)", () => {
		expect(p.parse("Тимофейихъе кӀиабилеб кагъат 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ava)", () => {
		expect(p.parse("Титихъе кагъат 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ava)", () => {
		expect(p.parse("Филемонихъе кагъат 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филим. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ava)", () => {
		expect(p.parse("ЖугьутӀазухъе кагъат 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Жугь. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ava)", () => {
		expect(p.parse("Якъубил кагъат 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Якъ. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ava)", () => {
		expect(p.parse("1 Пёт. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пёт. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ava)", () => {
		expect(p.parse("2 Пёт. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пёт. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ava)", () => {
		expect(p.parse("Пётрил тӀоцебесеб кагъат 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ava)", () => {
		expect(p.parse("Пётрил кӀиабилеб кагъат 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ava)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ava)", () => {
		expect(p.parse("Ягьудал кагъат 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ягь. 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rml.js";

describe("Localized book Gen (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (rml)", () => {
		expect(p.parse("Джиибэ́н 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Džiibén 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (rml)", () => {
		expect(p.parse("Vygiiben 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Выгиибэн 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (rml)", () => {
		expect(p.parse("Lievito 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Левито 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (rml)", () => {
		expect(p.parse("Čysly 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Чыслы 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (rml)", () => {
		expect(p.parse("Roiben 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Роибэн 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rml)", () => {
		expect(p.parse("Сыкадыипэ́н 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sykadyipén 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Сыкад 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (rml)", () => {
		expect(p.parse("Яви́р Зако́но 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Javír Zakóno 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (rml)", () => {
		expect(p.parse("Ису́со 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Isúso 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (rml)", () => {
		expect(p.parse("Sendar'jengiri Lylvarí 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Сэндарьенгири Лылвари́ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Лылвари́ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (rml)", () => {
		expect(p.parse("Ruta 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рута 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (rml)", () => {
		expect(p.parse("Isajos 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Исаёс 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (rml)", () => {
		expect(p.parse("3 Kralip 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Кралип 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (rml)", () => {
		expect(p.parse("4 Kralip 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Кралип 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (rml)", () => {
		expect(p.parse("1 Kralip 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Кралип 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Kralip 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Кралип 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (rml)", () => {
		expect(p.parse("2 Kralip 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Кралип 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Kralip 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Кралип 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (rml)", () => {
		expect(p.parse("1 Paralipomienono 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Паралипоменоно 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Парал 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Paralipomienono 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Паралипоменоно 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Парал 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (rml)", () => {
		expect(p.parse("2 Paralipomienono 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Паралипоменоно 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Парал 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Paralipomienono 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Паралипоменоно 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Парал 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (rml)", () => {
		expect(p.parse("Jézdra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Е́здра 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (rml)", () => {
		expect(p.parse("Nijemíia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ниеми́я 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (rml)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эстэр 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (rml)", () => {
		expect(p.parse("Ио́во 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ióvo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (rml)", () => {
		expect(p.parse("Psalmy 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалм 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (rml)", () => {
		expect(p.parse("Pritčy 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Притчы 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (rml)", () => {
		expect(p.parse("Ekliesiastos 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Эклес 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (rml)", () => {
		expect(p.parse("Giliengiri Gilý 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Гил 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (rml)", () => {
		expect(p.parse("Jeriemiéjo 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ереме́ё 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (rml)", () => {
		expect(p.parse("Jezekiljo 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езэкилё 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (rml)", () => {
		expect(p.parse("Danijéljo 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дание́лё 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (rml)", () => {
		expect(p.parse("Osija 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Осия 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (rml)", () => {
		expect(p.parse("Ioil 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Иоил 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (rml)", () => {
		expect(p.parse("Amoso 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амосо 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (rml)", () => {
		expect(p.parse("Avdijos 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авдиёс 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (rml)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ёна 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (rml)", () => {
		expect(p.parse("Mihiejo 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Михеё 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (rml)", () => {
		expect(p.parse("Naumo 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Наумо 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (rml)", () => {
		expect(p.parse("Avakumo 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авакумо 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (rml)", () => {
		expect(p.parse("Sofonija 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Софония 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (rml)", () => {
		expect(p.parse("Agiejo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Агеё 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (rml)", () => {
		expect(p.parse("Zahárija 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Заха́рия 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (rml)", () => {
		expect(p.parse("Malahiia 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малахия 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rml)", () => {
		expect(p.parse("Matfiejo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матфеё 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rml)", () => {
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марко 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rml)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rml)", () => {
		expect(p.parse("1 Ian 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Иан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ian 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иан 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rml)", () => {
		expect(p.parse("2 Ian 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Иан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ian 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иан 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rml)", () => {
		expect(p.parse("3 Ian 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Иан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ian 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Иан 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rml)", () => {
		expect(p.parse("Joannostir 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Иа́но 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Iáno 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rml)", () => {
		expect(p.parse("Апостолэнгири Буты́ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apostolengiri Butý 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Буты́ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rml)", () => {
		expect(p.parse("Rimlianenge 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римлянэнгэ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римл 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rml)", () => {
		expect(p.parse("1 Korinfianenge 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринфянэнгэ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринф 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinfianenge 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфянэнгэ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринф 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rml)", () => {
		expect(p.parse("2 Korinfianenge 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринфянэнгэ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринф 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinfianenge 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфянэнгэ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринф 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rml)", () => {
		expect(p.parse("Kolosianenge 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колосянэнгэ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колос 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rml)", () => {
		expect(p.parse("Galatenge 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатэнгэ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галат 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rml)", () => {
		expect(p.parse("Efiesianenge 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфесянэнгэ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфес 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rml)", () => {
		expect(p.parse("Filipiicenge 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филипийцэнгэ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филип 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rml)", () => {
		expect(p.parse("1 Fiesalonikiicenge 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фесалоникийцэнгэ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фесал 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Fiesalonikiicenge 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фесалоникийцэнгэ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фесал 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rml)", () => {
		expect(p.parse("2 Fiesalonikiicenge 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фесалоникийцэнгэ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фесал 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Fiesalonikiicenge 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фесалоникийцэнгэ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фесал 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rml)", () => {
		expect(p.parse("1 Ximaske 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Химаскэ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ximaske 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Химаскэ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rml)", () => {
		expect(p.parse("2 Ximaske 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Химаскэ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ximaske 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Химаскэ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rml)", () => {
		expect(p.parse("Titoske 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Титоскэ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тито 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rml)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимон 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филим 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rml)", () => {
		expect(p.parse("Judénge 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Юдэ́нгэ 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rml)", () => {
		expect(p.parse("Jakov 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Яков 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rml)", () => {
		expect(p.parse("1 Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пэтр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пэтр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rml)", () => {
		expect(p.parse("2 Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пэтр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пэтр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rml)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Юда 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (rml)", () => {
		expect(p.parse("Apostolengiri Butý 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Danijéljo 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Javír Zakóno 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Jézdra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Džiibén 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Judénge 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Jeriemiéjo 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ióvo 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iáno 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Isúso 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Sendar'jengiri Lylvarí 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Nijemíia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Sykadyipén 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Giliengiri Gilý 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Zahárija 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Parser helper should handle book ranges (rml)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (rml)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ian - 3 Ian").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ian – 3 Ian").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Ian — 3 Ian").osis()).toEqual("1John.1-3John.1");
	});
});

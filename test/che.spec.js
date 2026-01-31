"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/che.js";

describe("Localized book Gen (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (che)", () => {
		expect(p.parse("Доладалар 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Дол 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (che)", () => {
		expect(p.parse("Арадаккхар 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ара 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (che)", () => {
		expect(p.parse("Ӏамалъяр 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ӏам 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (che)", () => {
		expect(p.parse("Лелар 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Лел 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (che)", () => {
		expect(p.parse("Тийжамаш 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Тийж 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (che)", () => {
		expect(p.parse("Довзийтинарг 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Довз 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (che)", () => {
		expect(p.parse("Карлабаьккхинарг 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Кар 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (che)", () => {
		expect(p.parse("ЮшаӀ 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Юш 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (che)", () => {
		expect(p.parse("Куьйгалхой 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Куьйг 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (che)", () => {
		expect(p.parse("Рути 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (che)", () => {
		expect(p.parse("ЕшаӀ-ЯхӀу 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Еш 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (che)", () => {
		expect(p.parse("Шамъал 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Шам 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (che)", () => {
		expect(p.parse("Дауд 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Дад 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (che)", () => {
		expect(p.parse("Сулим 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Сул 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (che)", () => {
		expect(p.parse("Тӏаьххьарнаш 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Тӏаьххь 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (che)", () => {
		expect(p.parse("1 Шерашкахь 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ше 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Шерашкахь 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ше 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (che)", () => {
		expect(p.parse("2 Шерашкахь 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ше 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Шерашкахь 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ше 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (che)", () => {
		expect(p.parse("Ӏезар 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (che)", () => {
		expect(p.parse("Нахьми-ЯхӀу 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нахь 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (che)", () => {
		expect(p.parse("Эсират 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эси 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (che)", () => {
		expect(p.parse("Аюб 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (che)", () => {
		expect(p.parse("Забур 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Заб 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (che)", () => {
		expect(p.parse("Кицанаш 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Киц 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (che)", () => {
		expect(p.parse("Устаз 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Уст 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (che)", () => {
		expect(p.parse("Илли 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (che)", () => {
		expect(p.parse("Ярми-ЯхӀу 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ярм 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (che)", () => {
		expect(p.parse("Яхьазкхиал 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Яхь 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (che)", () => {
		expect(p.parse("Даниал 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (che)", () => {
		expect(p.parse("Хӏушаӏ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Хӏуш 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (che)", () => {
		expect(p.parse("Юал 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (che)", () => {
		expect(p.parse("Ӏамос 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (che)", () => {
		expect(p.parse("Ӏабди-ЯхӀу 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ӏаб 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (che)", () => {
		expect(p.parse("Юнус 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юн 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (che)", () => {
		expect(p.parse("Мика-ЯхӀу 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мик 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (che)", () => {
		expect(p.parse("Нахьум 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (che)", () => {
		expect(p.parse("Хьабукъа 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хьаб 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (che)", () => {
		expect(p.parse("Цапни-ЯхӀу 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Цап 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (che)", () => {
		expect(p.parse("Хьагай 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хьаг 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (che)", () => {
		expect(p.parse("Закри-ЯхӀу 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зак 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (che)", () => {
		expect(p.parse("Малъаки 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (che)", () => {
		expect(p.parse("Маттай 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (che)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мрк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (che)", () => {
		expect(p.parse("Лака 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лак 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (che)", () => {
		expect(p.parse("1 Яхьъяс 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Я 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Яхьъяс 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Я 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (che)", () => {
		expect(p.parse("2 Яхьъяс 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Я 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Яхьъяс 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Я 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (che)", () => {
		expect(p.parse("3 Яхьъяс 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Я 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Яхьъяс 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Я 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (che)", () => {
		expect(p.parse("Яхьъя 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Яй 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (che)", () => {
		expect(p.parse("Векалийн 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Век 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (che)", () => {
		expect(p.parse("Римхошка 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (che)", () => {
		expect(p.parse("1 Коринтхошка 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ко 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринтхошка 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ко 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (che)", () => {
		expect(p.parse("2 Коринтхошка 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ко 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринтхошка 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ко 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (che)", () => {
		expect(p.parse("Ковлусихошка 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ков 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (che)", () => {
		expect(p.parse("Галатахошка 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (che)", () => {
		expect(p.parse("Эпасхошка 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эпа 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (che)", () => {
		expect(p.parse("Пилапхошка 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Пил 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (che)", () => {
		expect(p.parse("1 Тассалникахошка 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Та 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Тассалникахошка 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Та 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (che)", () => {
		expect(p.parse("2 Тассалникахошка 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Та 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Тассалникахошка 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Та 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (che)", () => {
		expect(p.parse("1 Тимапига 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ти 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимапига 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ти 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (che)", () => {
		expect(p.parse("2 Тимапига 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ти 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимапига 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ти 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (che)", () => {
		expect(p.parse("Тите 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (che)", () => {
		expect(p.parse("Пхьалмане 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Пхьал 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (che)", () => {
		expect(p.parse("Ӏебархошка 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ӏеб 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (che)", () => {
		expect(p.parse("Якъуба 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Якъ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (che)", () => {
		expect(p.parse("1 Кипин 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ки 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Кипин 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ки 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (che)", () => {
		expect(p.parse("2 Кипин 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ки 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Кипин 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ки 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (che)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (che)", () => {
		expect(p.parse("ЯхӀуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ЯхӀ 1:1").osis()).toEqual("Jude.1.1");
	});
});

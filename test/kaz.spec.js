"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kaz.js";

describe("Localized book Gen (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kaz)", () => {
		expect(p.parse("Жаратылыстың баст. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Жар 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kaz)", () => {
		expect(p.parse("Мысырдан шығу 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Мыс 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kaz)", () => {
		expect(p.parse("Леуіліктер 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Леу 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kaz)", () => {
		expect(p.parse("Руларды санау 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Рул 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kaz)", () => {
		expect(p.parse("Жоқтау 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Жоқт 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kaz)", () => {
		expect(p.parse("Аян 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kaz)", () => {
		expect(p.parse("Заңды қайталау 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Заң 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kaz)", () => {
		expect(p.parse("Ешуа 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Еш 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kaz)", () => {
		expect(p.parse("Билер 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Бил 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kaz)", () => {
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kaz)", () => {
		expect(p.parse("Ишая 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Иш 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kaz)", () => {
		expect(p.parse("Пат1 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kaz)", () => {
		expect(p.parse("Пат2 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kaz)", () => {
		expect(p.parse("Патшалықтар 3-ж. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Патшалықтар. 3-ж. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kaz)", () => {
		expect(p.parse("Пат3 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kaz)", () => {
		expect(p.parse("Патшалықтар 4-ж. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Патшалықтар. 4-ж. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kaz)", () => {
		expect(p.parse("Пат4 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kaz)", () => {
		expect(p.parse("Шежірелер 1-ж. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Шеж1 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Sam (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kaz)", () => {
		expect(p.parse("Патшалықтар 1-ж. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Патшалықтар. 1-ж. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Chr (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kaz)", () => {
		expect(p.parse("Шежірелер 2-ж. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Шеж2 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Sam (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kaz)", () => {
		expect(p.parse("Патшалықтар 2-ж. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Патшалықтар. 2-ж. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book Ezra (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kaz)", () => {
		expect(p.parse("Езра 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езр 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kaz)", () => {
		expect(p.parse("Нехемия 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нех 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kaz)", () => {
		expect(p.parse("Естер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ест 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kaz)", () => {
		expect(p.parse("Әйүп 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kaz)", () => {
		expect(p.parse("Забур жырлары 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Жыр 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kaz)", () => {
		expect(p.parse("Нақыл сөздер 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Нқл 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kaz)", () => {
		expect(p.parse("Уағыздаушы 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Уағ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kaz)", () => {
		expect(p.parse("Таңдаулы ән 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ән 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kaz)", () => {
		expect(p.parse("Еремия 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ерм 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kaz)", () => {
		expect(p.parse("Езекиел 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езк 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kaz)", () => {
		expect(p.parse("Даниял 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kaz)", () => {
		expect(p.parse("Ошия 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ош 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kaz)", () => {
		expect(p.parse("Жоел 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Жое 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kaz)", () => {
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амо 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kaz)", () => {
		expect(p.parse("Абди 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Абд 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kaz)", () => {
		expect(p.parse("Жүніс 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Жүн 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kaz)", () => {
		expect(p.parse("Миха 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мих 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kaz)", () => {
		expect(p.parse("Нақұм 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Нқм 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kaz)", () => {
		expect(p.parse("Аббақұқ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Абқ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kaz)", () => {
		expect(p.parse("Софония 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Соф 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kaz)", () => {
		expect(p.parse("Хаққай 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хақ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kaz)", () => {
		expect(p.parse("Зәкәрия 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зәк 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kaz)", () => {
		expect(p.parse("Малахи 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kaz)", () => {
		expect(p.parse("Матай 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kaz)", () => {
		expect(p.parse("Марқа 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мар 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kaz)", () => {
		expect(p.parse("Лұқа 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лұқ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kaz)", () => {
		expect(p.parse("Жоханның 1-хаты 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Жохан 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Жох 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Жох1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kaz)", () => {
		expect(p.parse("Жоханның 2-хаты 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Жохан 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Жох 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Жох2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kaz)", () => {
		expect(p.parse("Жоханның 3-хаты 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Жохан 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Жох 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Жох3 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kaz)", () => {
		expect(p.parse("Жохан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Жох 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kaz)", () => {
		expect(p.parse("Елшіл. істері 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Елшілер 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Елш 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kaz)", () => {
		expect(p.parse("Римдіктерге хат 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римдіктерге 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kaz)", () => {
		expect(p.parse("Қорынттықт. 1-хат 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Қорынттықтарға 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Қор 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Қор1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kaz)", () => {
		expect(p.parse("Қорынттықт. 2-хат 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Қорынттықтарға 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Қор 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Қор2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kaz)", () => {
		expect(p.parse("Қолостықт. хат 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Қолостықтарға 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Қол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kaz)", () => {
		expect(p.parse("Ғалаттықт. хат 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ғалаттықтарға 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ғал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kaz)", () => {
		expect(p.parse("Ефестікт. хат 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефестіктерге 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kaz)", () => {
		expect(p.parse("Філіпілікт. хат 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Філіпіліктерге 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kaz)", () => {
		expect(p.parse("Салониқалықтарға 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Салониқал. 1-хат 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Сал 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Сал1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kaz)", () => {
		expect(p.parse("Салониқалықтарға 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Салониқал. 2-хат 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Сал 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Сал2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kaz)", () => {
		expect(p.parse("Тімотеге 1-хат 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Тимотейге 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Тім 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Тім1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kaz)", () => {
		expect(p.parse("Тімотеге 2-хат 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Тимотейге 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Тім 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Тім2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kaz)", () => {
		expect(p.parse("Титке хат 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Титке 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kaz)", () => {
		expect(p.parse("Філимонға хат 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Філимонға 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kaz)", () => {
		expect(p.parse("Еврейлерге хат 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Еврейлерге 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kaz)", () => {
		expect(p.parse("Жақыптың хаты 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Жақып 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Жақ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kaz)", () => {
		expect(p.parse("Петірдің 1-хаты 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Петір 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Пет 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Пет1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kaz)", () => {
		expect(p.parse("Петірдің 2-хаты 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Петір 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Пет 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Пет2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kaz)", () => {
		expect(p.parse("Яһуданың хаты 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Яһуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Яһд 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (kaz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kaz)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Жоханның 1-хаты - Жоханның 3-хаты").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Жоханның 1-хаты – Жоханның 3-хаты").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Жоханның 1-хаты — Жоханның 3-хаты").osis()).toEqual("1John.1-3John.1");
	});
});

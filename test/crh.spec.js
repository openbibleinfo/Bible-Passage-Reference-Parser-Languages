"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/crh.js";

describe("Localized book Gen (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (crh)", () => {
		expect(p.parse("Башланув 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Баш 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (crh)", () => {
		expect(p.parse("Чыкъыш 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Чыкъ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (crh)", () => {
		expect(p.parse("Левийлилер 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (crh)", () => {
		expect(p.parse("Сайылар 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Сай 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (crh)", () => {
		expect(p.parse("Агълав йырлары 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Агъл 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (crh)", () => {
		expect(p.parse("Сырларнынъ ачылувы 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Сыр 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (crh)", () => {
		expect(p.parse("Къануннынъ текрары 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Текр 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (crh)", () => {
		expect(p.parse("Нун огълу Ехошуа 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ехо 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (crh)", () => {
		expect(p.parse("Къадылар 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Къад 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (crh)", () => {
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (crh)", () => {
		expect(p.parse("Ешая 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Еш 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (crh)", () => {
		expect(p.parse("3 Падишалар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Пад 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (crh)", () => {
		expect(p.parse("4 Падишалар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Пад 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (crh)", () => {
		expect(p.parse("1 Падишалар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Пад 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Падишалар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Пад 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (crh)", () => {
		expect(p.parse("2 Падишалар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Пад 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Падишалар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Пад 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (crh)", () => {
		expect(p.parse("1 Тарих вакъиалары 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Тар 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Тарих вакъиалары 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Тар 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (crh)", () => {
		expect(p.parse("2 Тарих вакъиалары 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Тар 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Тарих вакъиалары 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Тар 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (crh)", () => {
		expect(p.parse("Узеир 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (crh)", () => {
		expect(p.parse("Нехемья 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нех 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (crh)", () => {
		expect(p.parse("Эстер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эст 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (crh)", () => {
		expect(p.parse("Эюп 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (crh)", () => {
		expect(p.parse("Зебур 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Збр 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (crh)", () => {
		expect(p.parse("Икметли сёзлер 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Икм 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (crh)", () => {
		expect(p.parse("Джемаат башы 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Джем 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (crh)", () => {
		expect(p.parse("Энъ яхшы йыр 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Йыр 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (crh)", () => {
		expect(p.parse("Йирмея 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Йрм 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (crh)", () => {
		expect(p.parse("Ехезкель 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ехез 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (crh)", () => {
		expect(p.parse("Даниял 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (crh)", () => {
		expect(p.parse("Хошеа 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Хош 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (crh)", () => {
		expect(p.parse("Ёэль 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (crh)", () => {
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ам 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (crh)", () => {
		expect(p.parse("Овадья 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ов 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (crh)", () => {
		expect(p.parse("Юнус 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (crh)", () => {
		expect(p.parse("Микъа 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (crh)", () => {
		expect(p.parse("Нахум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Нах 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (crh)", () => {
		expect(p.parse("Хавакъкъукъ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хав 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (crh)", () => {
		expect(p.parse("Цефанья 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Цеф 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (crh)", () => {
		expect(p.parse("Хагъгъай 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хагъ 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (crh)", () => {
		expect(p.parse("Зекерья 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зек 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (crh)", () => {
		expect(p.parse("Малакий 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (crh)", () => {
		expect(p.parse("Матта 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (crh)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (crh)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (crh)", () => {
		expect(p.parse("1 Юхан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Юх 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Юхан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Юх 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (crh)", () => {
		expect(p.parse("2 Юхан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Юх 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Юхан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Юх 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (crh)", () => {
		expect(p.parse("3 Юхан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Юх 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Юхан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Юх 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (crh)", () => {
		expect(p.parse("Юхан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Юх 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (crh)", () => {
		expect(p.parse("Фаалиет 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Фаал 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (crh)", () => {
		expect(p.parse("Римлилерге 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (crh)", () => {
		expect(p.parse("1 Коринтлилерге 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринтлилерге 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (crh)", () => {
		expect(p.parse("2 Коринтлилерге 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринтлилерге 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (crh)", () => {
		expect(p.parse("Колоссайлыларгъа 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (crh)", () => {
		expect(p.parse("Галатиядакилерге 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (crh)", () => {
		expect(p.parse("Эфеслилерге 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (crh)", () => {
		expect(p.parse("Филиплердекилерге 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (crh)", () => {
		expect(p.parse("1 Тессалоникелилерге 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Тес 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Тессалоникелилерге 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Тес 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (crh)", () => {
		expect(p.parse("2 Тессалоникелилерге 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Тес 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Тессалоникелилерге 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Тес 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (crh)", () => {
		expect(p.parse("1 Тимотейге 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимотейге 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (crh)", () => {
		expect(p.parse("2 Тимотейге 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимотейге 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (crh)", () => {
		expect(p.parse("Титке 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (crh)", () => {
		expect(p.parse("Филимонгъа 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (crh)", () => {
		expect(p.parse("Еудийлерге 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Еуд 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (crh)", () => {
		expect(p.parse("Якъуп 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Якъ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (crh)", () => {
		expect(p.parse("1 Пётр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пётр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (crh)", () => {
		expect(p.parse("2 Пётр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пётр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (crh)", () => {
		expect(p.parse("Иуда 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (crh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (crh)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Юхан - 3 Юхан").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Юхан – 3 Юхан").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Юхан — 3 Юхан").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/oss.js";

describe("Localized book Gen (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (oss)", () => {
		expect(p.parse("Райдиан 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Райд 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (oss)", () => {
		expect(p.parse("Рацыд 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Рац 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (oss)", () => {
		expect(p.parse("Левит 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (oss)", () => {
		expect(p.parse("Нымӕцтӕ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ным 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (oss)", () => {
		expect(p.parse("Хъарӕг 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Хъар 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (oss)", () => {
		expect(p.parse("Ӕргомад 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ӕрг 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (oss)", () => {
		expect(p.parse("Фӕлхатгонд ӕгъдау 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Фӕл 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (oss)", () => {
		expect(p.parse("Нуны фырт Йешуа 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Нун 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (oss)", () => {
		expect(p.parse("Фӕтӕгтӕ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Фӕт 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (oss)", () => {
		expect(p.parse("Руф 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (oss)", () => {
		expect(p.parse("Исайа 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ис 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (oss)", () => {
		expect(p.parse("3 Паддзахӕдтӕ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Пад 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (oss)", () => {
		expect(p.parse("4 Паддзахӕдтӕ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Пад 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (oss)", () => {
		expect(p.parse("1 Паддзахӕдтӕ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Пад 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Паддзахӕдтӕ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Пад 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (oss)", () => {
		expect(p.parse("2 Паддзахӕдтӕ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Пад 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Паддзахӕдтӕ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Пад 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (oss)", () => {
		expect(p.parse("1 Азфыстытӕ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Азф 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Азфыстытӕ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Азф 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (oss)", () => {
		expect(p.parse("2 Азфыстытӕ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Азф 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Азфыстытӕ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Азф 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (oss)", () => {
		expect(p.parse("Езра 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езр 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (oss)", () => {
		expect(p.parse("Неемиа 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неем 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (oss)", () => {
		expect(p.parse("Естер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ест 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (oss)", () => {
		expect(p.parse("Иов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (oss)", () => {
		expect(p.parse("Псаломттӕ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псаломтӕ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псал 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Пс 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (oss)", () => {
		expect(p.parse("Ӕмбисӕндтӕ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ӕмб 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (oss)", () => {
		expect(p.parse("Екклесиаст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Экклесиаст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Эккл 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Екк 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (oss)", () => {
		expect(p.parse("Зарджыты зарӕг 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Зар 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (oss)", () => {
		expect(p.parse("Йеремиа 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Йер 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (oss)", () => {
		expect(p.parse("Езекиел 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езек 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (oss)", () => {
		expect(p.parse("Даниил 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (oss)", () => {
		expect(p.parse("Осиа 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ос 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (oss)", () => {
		expect(p.parse("Иоел 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (oss)", () => {
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ам 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (oss)", () => {
		expect(p.parse("Авадиа 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авад 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (oss)", () => {
		expect(p.parse("Ионӕ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (oss)", () => {
		expect(p.parse("Михей 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мих 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (oss)", () => {
		expect(p.parse("Наум 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (oss)", () => {
		expect(p.parse("Аввакум 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авв 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (oss)", () => {
		expect(p.parse("Софониа 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Соф 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (oss)", () => {
		expect(p.parse("Аггей 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Агг 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (oss)", () => {
		expect(p.parse("Захариа 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зах 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (oss)", () => {
		expect(p.parse("Малахиа 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (oss)", () => {
		expect(p.parse("Матфей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (oss)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (oss)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (oss)", () => {
		expect(p.parse("1 Иоанн 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ин 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иоанн 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ин 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (oss)", () => {
		expect(p.parse("2 Иоанн 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ин 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иоанн 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ин 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (oss)", () => {
		expect(p.parse("3 Иоанн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ин 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Иоанн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ин 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (oss)", () => {
		expect(p.parse("Иоанн 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ин 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (oss)", () => {
		expect(p.parse("Апостолты хъуыддӕгтӕ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Хъуыд 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (oss)", () => {
		expect(p.parse("Ромӕгтӕм 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ром 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (oss)", () => {
		expect(p.parse("1 Коринфӕгтӕм 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфӕгтӕм 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (oss)", () => {
		expect(p.parse("2 Коринфӕгтӕм 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфӕгтӕм 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (oss)", () => {
		expect(p.parse("Колоссӕгтӕм 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (oss)", () => {
		expect(p.parse("Галатӕгтӕм 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (oss)", () => {
		expect(p.parse("Эфесӕгтӕм 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (oss)", () => {
		expect(p.parse("Филиппӕгтӕм 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (oss)", () => {
		expect(p.parse("1 Фессалоникӕгтӕм 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фес 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фессалоникӕгтӕм 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фес 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (oss)", () => {
		expect(p.parse("2 Фессалоникӕгтӕм 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фес 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фессалоникӕгтӕм 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фес 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (oss)", () => {
		expect(p.parse("1 Тимофеймӕ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофеймӕ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (oss)", () => {
		expect(p.parse("2 Тимофеймӕ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофеймӕ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (oss)", () => {
		expect(p.parse("Титмӕ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (oss)", () => {
		expect(p.parse("Филимонмӕ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Фил 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (oss)", () => {
		expect(p.parse("Дзуттӕгтӕм 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Дзут 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (oss)", () => {
		expect(p.parse("Йаков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Йак 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (oss)", () => {
		expect(p.parse("1 Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пет 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (oss)", () => {
		expect(p.parse("2 Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пет 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (oss)", () => {
		expect(p.parse("Иудӕ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (oss)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (oss)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Иоанн - 3 Иоанн").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Иоанн – 3 Иоанн").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Иоанн — 3 Иоанн").osis()).toEqual("1John.1-3John.1");
	});
});

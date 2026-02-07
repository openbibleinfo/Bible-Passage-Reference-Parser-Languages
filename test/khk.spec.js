"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/khk.js";

describe("Localized book Gen (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (khk)", () => {
		expect(p.parse("Эхлэл 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Эх 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (khk)", () => {
		expect(p.parse("Египетээс Гарсан Нь 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Гэтлэл 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Гэт 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ег 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (khk)", () => {
		expect(p.parse("Левит 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Леви 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ле 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (khk)", () => {
		expect(p.parse("Тооллого 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Тоо 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("То 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (khk)", () => {
		expect(p.parse("Гашуудал 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Гаш 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (khk)", () => {
		expect(p.parse("Илчлэлт 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Илчлэл 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Илч 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (khk)", () => {
		expect(p.parse("Дэд хууль 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Дх 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (khk)", () => {
		expect(p.parse("Иошуа 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Иош 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (khk)", () => {
		expect(p.parse("Шүүгчид 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Шүү 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Шү 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (khk)", () => {
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (khk)", () => {
		expect(p.parse("Исаиа 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Иса 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (khk)", () => {
		expect(p.parse("1 Самуел 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Самуел 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (khk)", () => {
		expect(p.parse("2 Самуел 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Самуел 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (khk)", () => {
		expect(p.parse("1Самуел 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1См 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (khk)", () => {
		expect(p.parse("2Самуел 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2См 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (khk)", () => {
		expect(p.parse("Хаадын Дээд 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Хаад 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Ха 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (khk)", () => {
		expect(p.parse("Хаадын Дэд 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Хаад 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Ха 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (khk)", () => {
		expect(p.parse("Шастирын Дээд 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Шастир 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Шс 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (khk)", () => {
		expect(p.parse("Шастирын Дэд 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Шастир 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Шс 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (khk)", () => {
		expect(p.parse("Езра 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езр 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (khk)", () => {
		expect(p.parse("Нехемиа 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нех 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (khk)", () => {
		expect(p.parse("Естер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ест 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (khk)", () => {
		expect(p.parse("Иов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (khk)", () => {
		expect(p.parse("Дуулал 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Дуу 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (khk)", () => {
		expect(p.parse("Сургаалт үгс 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Сур 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (khk)", () => {
		expect(p.parse("Номлогчийн үгс 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ном 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (khk)", () => {
		expect(p.parse("Соломоны дуун 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Сд 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (khk)", () => {
		expect(p.parse("Иеремиа 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Иер 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (khk)", () => {
		expect(p.parse("Езекиел 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езк 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (khk)", () => {
		expect(p.parse("Даниел 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (khk)", () => {
		expect(p.parse("Хосеа 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Хос 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (khk)", () => {
		expect(p.parse("Иоел 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Иое 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (khk)", () => {
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амо 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (khk)", () => {
		expect(p.parse("Обадиа 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Оба 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (khk)", () => {
		expect(p.parse("Иона 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ион 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (khk)", () => {
		expect(p.parse("Мика 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мик 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (khk)", () => {
		expect(p.parse("Нахум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Нах 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (khk)", () => {
		expect(p.parse("Хабаккук 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хаб 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (khk)", () => {
		expect(p.parse("Зефаниа 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Зеф 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (khk)", () => {
		expect(p.parse("Хаггаи 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хаг 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (khk)", () => {
		expect(p.parse("Зехариа 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зех 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (khk)", () => {
		expect(p.parse("Малахи 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (khk)", () => {
		expect(p.parse("Матай 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (khk)", () => {
		expect(p.parse("Марk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (khk)", () => {
		expect(p.parse("Лук 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (khk)", () => {
		expect(p.parse("1Иохан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Ио 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (khk)", () => {
		expect(p.parse("2Иохан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Ио 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (khk)", () => {
		expect(p.parse("3 Иохан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Иохан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ио 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (khk)", () => {
		expect(p.parse("1 Иохан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иохан 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (khk)", () => {
		expect(p.parse("2 Иохан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иохан 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (khk)", () => {
		expect(p.parse("Иохан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Иох 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (khk)", () => {
		expect(p.parse("Үйлс 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Үйл 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (khk)", () => {
		expect(p.parse("Ром 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (khk)", () => {
		expect(p.parse("1 Коринт 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринт 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (khk)", () => {
		expect(p.parse("2 Коринт 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринт 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (khk)", () => {
		expect(p.parse("1Коринт 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Ко 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (khk)", () => {
		expect(p.parse("2Коринт 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Ко 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (khk)", () => {
		expect(p.parse("Колоссай 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (khk)", () => {
		expect(p.parse("Галат 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (khk)", () => {
		expect(p.parse("Ефес 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (khk)", () => {
		expect(p.parse("Филиппой 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (khk)", () => {
		expect(p.parse("1 Тесалоник 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Тесалоник 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (khk)", () => {
		expect(p.parse("2 Тесалоник 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Тесалоник 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (khk)", () => {
		expect(p.parse("1Тесалоник 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Тс 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (khk)", () => {
		expect(p.parse("2Тесалоник 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Тс 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (khk)", () => {
		expect(p.parse("1 Тимот 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимот 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (khk)", () => {
		expect(p.parse("2 Тимот 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимот 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (khk)", () => {
		expect(p.parse("1Тимот 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Тм 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (khk)", () => {
		expect(p.parse("2Тимот 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Тм 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (khk)", () => {
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (khk)", () => {
		expect(p.parse("Филемон 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (khk)", () => {
		expect(p.parse("Еврей 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (khk)", () => {
		expect(p.parse("Иаков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Иак 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (khk)", () => {
		expect(p.parse("1 Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (khk)", () => {
		expect(p.parse("2 Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (khk)", () => {
		expect(p.parse("1Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Пт 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (khk)", () => {
		expect(p.parse("2Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Пт 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (khk)", () => {
		expect(p.parse("Иуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуд 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (khk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (khk)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Иохан - 3 Иохан").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Иохан – 3 Иохан").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Иохан — 3 Иохан").osis()).toEqual("1John.1-3John.1");
	});
});

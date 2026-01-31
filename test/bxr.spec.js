"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bxr.js";

describe("Localized book Gen (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bxr)", () => {
		expect(p.parse("Эхин 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Эх 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bxr)", () => {
		expect(p.parse("Египедһээ гаралга 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Гар 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bxr)", () => {
		expect(p.parse("Левит 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bxr)", () => {
		expect(p.parse("Тоололго 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Тоо 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bxr)", () => {
		expect(p.parse("Гашуудал 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Гаш 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bxr)", () => {
		expect(p.parse("Гэршэлгэ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Гэр 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bxr)", () => {
		expect(p.parse("Хуули дабталга 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Хуу 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bxr)", () => {
		expect(p.parse("Нүүнэй Иисүүс 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Нүүн 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bxr)", () => {
		expect(p.parse("Ударидагшад 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Уд 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bxr)", () => {
		expect(p.parse("Рүүт 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bxr)", () => {
		expect(p.parse("Исай 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Иса 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bxr)", () => {
		expect(p.parse("3 Хаан түрэнүүд 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Хаан 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bxr)", () => {
		expect(p.parse("4 Хаан түрэнүүд 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Хаан 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bxr)", () => {
		expect(p.parse("1 Хаан түрэнүүд 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Хаан 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Хаан түрэнүүд 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Хаан 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bxr)", () => {
		expect(p.parse("2 Хаан түрэнүүд 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Хаан 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Хаан түрэнүүд 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Хаан 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bxr)", () => {
		expect(p.parse("1 Угай бэшэг 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Уг 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Угай бэшэг 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Уг 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bxr)", () => {
		expect(p.parse("2 Угай бэшэг 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Уг 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Угай бэшэг 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Уг 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bxr)", () => {
		expect(p.parse("Эзраа 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Эзр 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bxr)", () => {
		expect(p.parse("Нэхэмьяа 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нэх 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bxr)", () => {
		expect(p.parse("Эстээр 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эст 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bxr)", () => {
		expect(p.parse("Иоов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bxr)", () => {
		expect(p.parse("Псалманууд 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псалм 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Псал 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bxr)", () => {
		expect(p.parse("Һургаал 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Һур 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bxr)", () => {
		expect(p.parse("Экклезиаст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Экк 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bxr)", () => {
		expect(p.parse("Дуунай дуун 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Дуун 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bxr)", () => {
		expect(p.parse("Ерэмияа 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ер 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bxr)", () => {
		expect(p.parse("Эзэкээл 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Эзэк 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bxr)", () => {
		expect(p.parse("Даниил 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bxr)", () => {
		expect(p.parse("Һошээ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Һош 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bxr)", () => {
		expect(p.parse("Ёһээл 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ёһ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bxr)", () => {
		expect(p.parse("Амоос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ам 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bxr)", () => {
		expect(p.parse("Авдии 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авд 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bxr)", () => {
		expect(p.parse("Иона 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ион 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bxr)", () => {
		expect(p.parse("Михей 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мих 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bxr)", () => {
		expect(p.parse("Наум 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bxr)", () => {
		expect(p.parse("Аввакуум 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авв 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bxr)", () => {
		expect(p.parse("Цэпаанияа 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Цэп 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bxr)", () => {
		expect(p.parse("Хаггай 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хаг 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bxr)", () => {
		expect(p.parse("Захарияа 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зах 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bxr)", () => {
		expect(p.parse("Малаахи 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bxr)", () => {
		expect(p.parse("Матвей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bxr)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bxr)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bxr)", () => {
		expect(p.parse("Иоаннай 1-дэхи хандалга 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bxr)", () => {
		expect(p.parse("Иоаннай 2-дохи хандалга 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bxr)", () => {
		expect(p.parse("Иоаннай 3-дахи хандалга 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ин 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bxr)", () => {
		expect(p.parse("1 Ин 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ин 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bxr)", () => {
		expect(p.parse("2 Ин 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ин 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bxr)", () => {
		expect(p.parse("Иоанн 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ин 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bxr)", () => {
		expect(p.parse("Элшэнэрэй бүтээһэн хэрэгүүд 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Хэрэгүүд 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Хэр 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bxr)", () => {
		expect(p.parse("Римэйхиндэ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bxr)", () => {
		expect(p.parse("1 Кор 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bxr)", () => {
		expect(p.parse("2 Кор 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bxr)", () => {
		expect(p.parse("Коринфынхидтэ 1-дэхи 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bxr)", () => {
		expect(p.parse("Коринфынхидтэ 2-дохи 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bxr)", () => {
		expect(p.parse("Колоссынхидтэ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bxr)", () => {
		expect(p.parse("Галаадуудта 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галадуудта 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bxr)", () => {
		expect(p.parse("Эфесэйхиндэ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bxr)", () => {
		expect(p.parse("Филиппынхидтэ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bxr)", () => {
		expect(p.parse("1 Фес 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фес 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bxr)", () => {
		expect(p.parse("2 Фес 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фес 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bxr)", () => {
		expect(p.parse("Фессалоникиинхидтэ 1-дэхи 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bxr)", () => {
		expect(p.parse("Фессалоникиинхидтэ 2-дохи 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bxr)", () => {
		expect(p.parse("1 Тим 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bxr)", () => {
		expect(p.parse("2 Тим 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bxr)", () => {
		expect(p.parse("Тимофейдэ 1-дэхи 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bxr)", () => {
		expect(p.parse("Тимофейдэ 2-дохи 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bxr)", () => {
		expect(p.parse("Тидтэ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bxr)", () => {
		expect(p.parse("Филимондо 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bxr)", () => {
		expect(p.parse("Еврейнүүдтэ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bxr)", () => {
		expect(p.parse("Яковай хандалга 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Як 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bxr)", () => {
		expect(p.parse("1 Пёт 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пёт 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bxr)", () => {
		expect(p.parse("2 Пёт 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пёт 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bxr)", () => {
		expect(p.parse("Пётрой 1-дэхи хандалга 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bxr)", () => {
		expect(p.parse("Пётрой 2-дохи хандалга 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bxr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bxr)", () => {
		expect(p.parse("Иудын хандалга 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуд 1:1").osis()).toEqual("Jude.1.1");
	});
});

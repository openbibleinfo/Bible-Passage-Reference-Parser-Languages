"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tuk.js";

describe("Localized book Gen (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tuk)", () => {
		expect(p.parse("Gelip çykyş 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Гелип чыкыш 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gçk 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Гчк 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tuk)", () => {
		expect(p.parse("Müsürden çykyş 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Мүсүрден чыкыш 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Msr 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Мср 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tuk)", () => {
		expect(p.parse("Lewiler 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Левилер 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lew 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tuk)", () => {
		expect(p.parse("Çölde 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Чөлде 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Çöl 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Чөл 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tuk)", () => {
		expect(p.parse("Ýermeýanyň agysy 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ермеяның агысы 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Agy 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Агы 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tuk)", () => {
		expect(p.parse("Aýanlyk 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("آیانلیق 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Аянлык 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Aýn 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tuk)", () => {
		expect(p.parse("Kanun taglymaty 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Канун таглыматы 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kan 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Кан 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tuk)", () => {
		expect(p.parse("Ýeşuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ешува 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ýeş 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ешу 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tuk)", () => {
		expect(p.parse("Ysraýyl serdarlary 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ысрайыл сердарлары 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ser 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Сер 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tuk)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tuk)", () => {
		expect(p.parse("Işaýa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ишая 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Işa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Иша 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tuk)", () => {
		expect(p.parse("1 Şamuwel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Шамувел 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Şamuwel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Шамувел 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱ Şamuwel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱ Шамувел 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱. Şamuwel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("۱. Шамувел 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tuk)", () => {
		expect(p.parse("2 Şamuwel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Шамувел 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Şamuwel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Шамувел 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("۲ Şamuwel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("۲ Шамувел 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("۲. Şamuwel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("۲. Шамувел 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tuk)", () => {
		expect(p.parse("1Şam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Шам 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tuk)", () => {
		expect(p.parse("2Şam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Шам 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tuk)", () => {
		expect(p.parse("1 Patyşalar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Патышалар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Patyşalar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Патышалар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("۱ Patyşalar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("۱ Патышалар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("۱. Patyşalar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("۱. Патышалар 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tuk)", () => {
		expect(p.parse("2 Patyşalar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Патышалар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Patyşalar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Патышалар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("۲ Patyşalar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("۲ Патышалар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("۲. Patyşalar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("۲. Патышалар 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tuk)", () => {
		expect(p.parse("1Pat 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Пат 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tuk)", () => {
		expect(p.parse("2Pat 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Пат 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tuk)", () => {
		expect(p.parse("1 Ýyl ýazgylary 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Йыл язгылары 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ýyl ýazgylary 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Йыл язгылары 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("۱ Ýyl ýazgylary 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("۱ Йыл язгылары 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("۱. Ýyl ýazgylary 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("۱. Йыл язгылары 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tuk)", () => {
		expect(p.parse("2 Ýyl ýazgylary 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Йыл язгылары 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ýyl ýazgylary 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Йыл язгылары 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("۲ Ýyl ýazgylary 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("۲ Йыл язгылары 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("۲. Ýyl ýazgylary 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("۲. Йыл язгылары 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tuk)", () => {
		expect(p.parse("1Ýý 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tuk)", () => {
		expect(p.parse("2Ýý 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tuk)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Эзра 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Эзр 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tuk)", () => {
		expect(p.parse("Nehemýa 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нехемя 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нех 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tuk)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эстер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эст 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tuk)", () => {
		expect(p.parse("Eýýup 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Эйюп 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Eýp 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Эйп 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tuk)", () => {
		expect(p.parse("Zebur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Зебур 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zeb 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Зеб 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tuk)", () => {
		expect(p.parse("Süleýmanyň pähimleri 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Сүлейманың пәхимлери 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Sül 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Сүл 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tuk)", () => {
		expect(p.parse("Wagyz 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Вагыз 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Wag 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ваг 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tuk)", () => {
		expect(p.parse("Nagmalar 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Нагмалар 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Nag 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Наг 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tuk)", () => {
		expect(p.parse("Ýermeýa 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ермея 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ýrm 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ерм 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tuk)", () => {
		expect(p.parse("Ezekiýel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Эзекиел 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Эзк 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tuk)", () => {
		expect(p.parse("Danyýel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Даныел 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tuk)", () => {
		expect(p.parse("Hoşeýa 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Хошея 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoş 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Хош 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tuk)", () => {
		expect(p.parse("Ýowel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ёвел 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ýow 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ёвл 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tuk)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амо 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tuk)", () => {
		expect(p.parse("Abadýa 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Абадя 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Абд 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tuk)", () => {
		expect(p.parse("Ýunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юнус 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ýun 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юнс 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tuk)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мика 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мик 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tuk)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Нахум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Нах 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tuk)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хабакук 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хаб 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tuk)", () => {
		expect(p.parse("Sepanýa 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Сепаня 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sep 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Сеп 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tuk)", () => {
		expect(p.parse("Hagaý 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хагай 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хаг 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tuk)", () => {
		expect(p.parse("Zakarýa 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Закаря 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зак 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tuk)", () => {
		expect(p.parse("Malaky 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малакы 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tuk)", () => {
		expect(p.parse("متی دن یازلن انجیل 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("مَتّیٰ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матта 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("متی 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tuk)", () => {
		expect(p.parse("مَرقُس 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мар 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tuk)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("لوقا 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лук 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tuk)", () => {
		expect(p.parse("1Ýoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tuk)", () => {
		expect(p.parse("2Ýoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tuk)", () => {
		expect(p.parse("3 Ýohanna 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ёханна 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("۳ یوحنا 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ýoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tuk)", () => {
		expect(p.parse("1 Ýohanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ёханна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ýohanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ёханна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱ Ýohanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱ Ёханна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱ یوحنا 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱. Ýohanna 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱. Ёханна 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("۱. یوحنا 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tuk)", () => {
		expect(p.parse("2 Ýohanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ёханна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ýohanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ёханна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲ Ýohanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲ Ёханна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲ یوحنا 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲. Ýohanna 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲. Ёханна 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("۲. یوحنا 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tuk)", () => {
		expect(p.parse("Ýohanna 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ёханна 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("یوحنا 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ýoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tuk)", () => {
		expect(p.parse("رِسول‍لار 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Resul 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ресул 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Res 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Рес 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tuk)", () => {
		expect(p.parse("Rimliler 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римлилер 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("رومیلار 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rim 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tuk)", () => {
		expect(p.parse("1 Korintoslylar 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринтослылар 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 قُرِنتُس‌لار 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintoslylar 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринтослылар 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. قُرِنتُس‌لار 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱ Korintoslylar 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱ Коринтослылар 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱ قُرِنتُس‌لار 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱. Korintoslylar 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱. Коринтослылар 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("۱. قُرِنتُس‌لار 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tuk)", () => {
		expect(p.parse("2 Korintoslylar 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринтослылар 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 قُرِنتُس‌لار 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintoslylar 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринтослылар 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. قُرِنتُس‌لار 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲ Korintoslylar 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲ Коринтослылар 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲ قُرِنتُس‌لار 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲. Korintoslylar 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲. Коринтослылар 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("۲. قُرِنتُس‌لار 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tuk)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tuk)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tuk)", () => {
		expect(p.parse("Kolosiýalylar 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колосиялылар 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("کولُسیلِر 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tuk)", () => {
		expect(p.parse("Galatýalylar 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатялылар 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("غَلاطیه‌لِر 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tuk)", () => {
		expect(p.parse("اِفِسُسلار 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesliler 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфеслилер 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфе 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tuk)", () => {
		expect(p.parse("Filipililer 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филипилилер 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("فیلیپیلِر 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tuk)", () => {
		expect(p.parse("1 تِسالونیکیلِر 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Salonikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Салониклилер 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. تِسالونیکیلِر 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Salonikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Салониклилер 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱ تِسالونیکیلِر 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱ Salonikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱ Салониклилер 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱. تِسالونیکیلِر 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱. Salonikliler 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("۱. Салониклилер 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tuk)", () => {
		expect(p.parse("2 تِسالونیکیلِر 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Salonikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Салониклилер 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. تِسالونیکیلِر 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Salonikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Салониклилер 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲ تِسالونیکیلِر 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲ Salonikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲ Салониклилер 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲. تِسالونیکیلِر 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲. Salonikliler 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("۲. Салониклилер 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tuk)", () => {
		expect(p.parse("1Sal 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Сал 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tuk)", () => {
		expect(p.parse("2Sal 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Сал 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tuk)", () => {
		expect(p.parse("1 Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимотеос 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 تیموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимотеос 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. تیموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱ Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱ Тимотеос 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱ تیموتاوس 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱. Тимотеос 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("۱. تیموتاوس 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tuk)", () => {
		expect(p.parse("2 Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимотеос 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 تیموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимотеос 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. تیموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲ Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲ Тимотеос 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲ تیموتاوس 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲. Тимотеос 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("۲. تیموتاوس 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tuk)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tuk)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tuk)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Титус 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("تیتوس 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tuk)", () => {
		expect(p.parse("Filimun 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимун 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("فیلیمون 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tuk)", () => {
		expect(p.parse("عِبرانیلار 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ýewreýler 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Еврейлер 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ýew 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tuk)", () => {
		expect(p.parse("Ýakup 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("یعقوب 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Якуп 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ýak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tuk)", () => {
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петрус 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 پِطرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петрус 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. پِطرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱ Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱ Петрус 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱ پِطرُس 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱. Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱. Петрус 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("۱. پِطرُس 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tuk)", () => {
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петрус 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 پِطرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петрус 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. پِطرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲ Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲ Петрус 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲ پِطرُس 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲. Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲. Петрус 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("۲. پِطرُس 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tuk)", () => {
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Пет 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tuk)", () => {
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Пет 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tuk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tuk)", () => {
		expect(p.parse("Ýahuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Яхуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("یهودا 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ýhd 1:1").osis()).toEqual("Jude.1.1");
	});
});

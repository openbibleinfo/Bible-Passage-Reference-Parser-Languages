"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tyv.js";

describe("Localized book Gen (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tyv)", () => {
		expect(p.parse("Эге дөс 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Э. д. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tyv)", () => {
		expect(p.parse("Хосталыышкын 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Хост. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tyv)", () => {
		expect(p.parse("Левит 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tyv)", () => {
		expect(p.parse("Саннар 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Сан. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tyv)", () => {
		expect(p.parse("Ыы-сыы 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ыы. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tyv)", () => {
		expect(p.parse("Ажыдыышкын 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ажыд. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tyv)", () => {
		expect(p.parse("Ы. х. к. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tyv)", () => {
		expect(p.parse("Иисус 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Иис. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tyv)", () => {
		expect(p.parse("Баштыңчылар 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Башт. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tyv)", () => {
		expect(p.parse("Руф 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tyv)", () => {
		expect(p.parse("Исайя 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Иса. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tyv)", () => {
		expect(p.parse("3 Хааннар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Хаан. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tyv)", () => {
		expect(p.parse("4 Хааннар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Хаан. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tyv)", () => {
		expect(p.parse("1 Хааннар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Хаан. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Хааннар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Хаан. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tyv)", () => {
		expect(p.parse("2 Хааннар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Хаан. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Хааннар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Хаан. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tyv)", () => {
		expect(p.parse("1 Чылдар 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Чыл. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Чылдар 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Чыл. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tyv)", () => {
		expect(p.parse("2 Чылдар 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Чыл. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Чылдар 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Чыл. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tyv)", () => {
		expect(p.parse("Эзра 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tyv)", () => {
		expect(p.parse("Неемия 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неем. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tyv)", () => {
		expect(p.parse("Эсфир 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эсф. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tyv)", () => {
		expect(p.parse("Иов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tyv)", () => {
		expect(p.parse("Ыд. ыр. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ырлар 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tyv)", () => {
		expect(p.parse("Чугаалар 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("У. ч. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tyv)", () => {
		expect(p.parse("Экклесиаст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Эккл. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tyv)", () => {
		expect(p.parse("Сол. ыр. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ыры 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tyv)", () => {
		expect(p.parse("Иеремия 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Иер. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tyv)", () => {
		expect(p.parse("Иезекиил 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Иез. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tyv)", () => {
		expect(p.parse("Даниил 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tyv)", () => {
		expect(p.parse("Осия 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ос. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tyv)", () => {
		expect(p.parse("Иоил 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tyv)", () => {
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ам. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tyv)", () => {
		expect(p.parse("Авдий 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авд. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tyv)", () => {
		expect(p.parse("Иона 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tyv)", () => {
		expect(p.parse("Михей 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мих. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tyv)", () => {
		expect(p.parse("Наум 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tyv)", () => {
		expect(p.parse("Аввакум 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авв. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tyv)", () => {
		expect(p.parse("Софония 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Соф. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tyv)", () => {
		expect(p.parse("Аггей 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Агг. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tyv)", () => {
		expect(p.parse("Захария 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зах. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tyv)", () => {
		expect(p.parse("Малахия 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tyv)", () => {
		expect(p.parse("Матфей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мф. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tyv)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tyv)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tyv)", () => {
		expect(p.parse("1 Иоанн 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ин. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иоанн 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ин. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tyv)", () => {
		expect(p.parse("2 Иоанн 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ин. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иоанн 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ин. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tyv)", () => {
		expect(p.parse("3 Иоанн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ин. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Иоанн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ин. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tyv)", () => {
		expect(p.parse("Иоанн 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ин. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tyv)", () => {
		expect(p.parse("Ажыл-чорудулга 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Аж.-ч. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tyv)", () => {
		expect(p.parse("Римчилерге 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tyv)", () => {
		expect(p.parse("1 Коринфичилерге 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Кор. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфичилерге 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Кор. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tyv)", () => {
		expect(p.parse("2 Коринфичилерге 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Кор. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфичилерге 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Кор. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tyv)", () => {
		expect(p.parse("Колосчуларга 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tyv)", () => {
		expect(p.parse("Галатчыларга 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tyv)", () => {
		expect(p.parse("Эфесчилерге 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tyv)", () => {
		expect(p.parse("Филипчилерге 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tyv)", () => {
		expect(p.parse("1 Фессалоникчилерге 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Фес. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фессалоникчилерге 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фес. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tyv)", () => {
		expect(p.parse("2 Фессалоникчилерге 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Фес. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фессалоникчилерге 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фес. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tyv)", () => {
		expect(p.parse("1 Тимофейге 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофейге 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tyv)", () => {
		expect(p.parse("2 Тимофейге 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофейге 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tyv)", () => {
		expect(p.parse("Титке 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tyv)", () => {
		expect(p.parse("Филимонга 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tyv)", () => {
		expect(p.parse("Еврейлерге 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tyv)", () => {
		expect(p.parse("Иаков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Иак. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tyv)", () => {
		expect(p.parse("1 Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пётр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пётр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tyv)", () => {
		expect(p.parse("2 Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пётр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пётр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tyv)", () => {
		expect(p.parse("Иуда 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (tyv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (tyv)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Иоанн - 3 Иоанн").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Иоанн – 3 Иоанн").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Иоанн — 3 Иоанн").osis()).toEqual("1John.1-3John.1");
	});
});

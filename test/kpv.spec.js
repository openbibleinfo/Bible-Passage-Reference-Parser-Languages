"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kpv.js";

describe("Localized book Gen (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kpv)", () => {
		expect(p.parse("Олӧм 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ол. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kpv)", () => {
		expect(p.parse("Петӧм 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Пет. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kpv)", () => {
		expect(p.parse("Левит 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kpv)", () => {
		expect(p.parse("Лыд 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kpv)", () => {
		expect(p.parse("Бӧрданкыв 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Бӧрд. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kpv)", () => {
		expect(p.parse("Восьтӧм 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Восьт. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kpv)", () => {
		expect(p.parse("Индӧд 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Инд. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kpv)", () => {
		expect(p.parse("Нав Исус 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Нав Ис. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kpv)", () => {
		expect(p.parse("Ёрдысьяс 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ёрд. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kpv)", () => {
		expect(p.parse("Руфа 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kpv)", () => {
		expect(p.parse("Исай 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ис. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kpv)", () => {
		expect(p.parse("1 1 небӧг 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. 1 небӧг 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ӧксыяслӧн 1 небӧг 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ӧксыяслӧн. 1 небӧг 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 1Sam (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kpv)", () => {
		expect(p.parse("1Ӧкс. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kpv)", () => {
		expect(p.parse("2 2 небӧг 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. 2 небӧг 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ӧксыяслӧн 2 небӧг 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ӧксыяслӧн. 2 небӧг 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Sam (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kpv)", () => {
		expect(p.parse("2Ӧкс. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kpv)", () => {
		expect(p.parse("1 3 небӧг 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. 3 небӧг 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ӧксыяслӧн 3 небӧг 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ӧксыяслӧн. 3 небӧг 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 1Kgs (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kpv)", () => {
		expect(p.parse("3Ӧкс. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kpv)", () => {
		expect(p.parse("2 4 небӧг 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. 4 небӧг 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ӧксыяслӧн 4 небӧг 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ӧксыяслӧн. 4 небӧг 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kpv)", () => {
		expect(p.parse("4Ӧкс. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kpv)", () => {
		expect(p.parse("1 Каднебӧг 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Каднебӧг 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ӧксыяслӧн Каднебӧг 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ӧксыяслӧн. Каднебӧг 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kpv)", () => {
		expect(p.parse("2 Каднебӧг 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Каднебӧг 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ӧксыяслӧн Каднебӧг 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ӧксыяслӧн. Каднебӧг 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kpv)", () => {
		expect(p.parse("1Кад. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kpv)", () => {
		expect(p.parse("2Кад. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kpv)", () => {
		expect(p.parse("Ездра 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езд. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kpv)", () => {
		expect(p.parse("Неемий 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неем. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kpv)", () => {
		expect(p.parse("Эсфир 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эсф. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kpv)", () => {
		expect(p.parse("Иов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kpv)", () => {
		expect(p.parse("Псалтыр 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Пс. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kpv)", () => {
		expect(p.parse("Шусьӧгъяс 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Шусь. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kpv)", () => {
		expect(p.parse("Еклесиаст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Екл. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kpv)", () => {
		expect(p.parse("Сьылан 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Сьыл. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kpv)", () => {
		expect(p.parse("Еремей 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ерем. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kpv)", () => {
		expect(p.parse("Езекиль 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езек. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kpv)", () => {
		expect(p.parse("Даниил 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kpv)", () => {
		expect(p.parse("Осий 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ос. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kpv)", () => {
		expect(p.parse("Йоиль 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kpv)", () => {
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ам. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kpv)", () => {
		expect(p.parse("Авдий 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авд. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kpv)", () => {
		expect(p.parse("Иона 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kpv)", () => {
		expect(p.parse("Микей 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мик. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kpv)", () => {
		expect(p.parse("Наум 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kpv)", () => {
		expect(p.parse("Аввакум 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авв. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kpv)", () => {
		expect(p.parse("Софоний 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Соф. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kpv)", () => {
		expect(p.parse("Аггей 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Агг. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kpv)", () => {
		expect(p.parse("Закар 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зак. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kpv)", () => {
		expect(p.parse("Малакий 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kpv)", () => {
		expect(p.parse("Матвей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мт. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kpv)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kpv)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kpv)", () => {
		expect(p.parse("1Ин. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kpv)", () => {
		expect(p.parse("2Ин. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kpv)", () => {
		expect(p.parse("3 Иоан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ин. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kpv)", () => {
		expect(p.parse("1 Иоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ӧксыяслӧн Иоан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ӧксыяслӧн. Иоан 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kpv)", () => {
		expect(p.parse("2 Иоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ӧксыяслӧн Иоан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ӧксыяслӧн. Иоан 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kpv)", () => {
		expect(p.parse("Иоан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ин. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kpv)", () => {
		expect(p.parse("Ап. уджъяс 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ап.удж. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kpv)", () => {
		expect(p.parse("Рим. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римӧ 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kpv)", () => {
		expect(p.parse("1 Коринфӧ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфӧ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ӧксыяслӧн Коринфӧ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ӧксыяслӧн. Коринфӧ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kpv)", () => {
		expect(p.parse("2 Коринфӧ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфӧ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ӧксыяслӧн Коринфӧ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ӧксыяслӧн. Коринфӧ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kpv)", () => {
		expect(p.parse("1Кор. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kpv)", () => {
		expect(p.parse("2Кор. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kpv)", () => {
		expect(p.parse("Колосӧ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kpv)", () => {
		expect(p.parse("Галатӧ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kpv)", () => {
		expect(p.parse("Ефесӧ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kpv)", () => {
		expect(p.parse("Филипӧ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kpv)", () => {
		expect(p.parse("1 Фессалоникаӧ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фессалоникаӧ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ӧксыяслӧн Фессалоникаӧ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ӧксыяслӧн. Фессалоникаӧ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kpv)", () => {
		expect(p.parse("2 Фессалоникаӧ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фессалоникаӧ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ӧксыяслӧн Фессалоникаӧ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ӧксыяслӧн. Фессалоникаӧ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kpv)", () => {
		expect(p.parse("1Фесс. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kpv)", () => {
		expect(p.parse("2Фесс. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kpv)", () => {
		expect(p.parse("1 Тимофейлы 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофейлы 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ӧксыяслӧн Тимофейлы 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ӧксыяслӧн. Тимофейлы 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kpv)", () => {
		expect(p.parse("2 Тимофейлы 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофейлы 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ӧксыяслӧн Тимофейлы 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ӧксыяслӧн. Тимофейлы 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kpv)", () => {
		expect(p.parse("1Тим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kpv)", () => {
		expect(p.parse("2Тим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kpv)", () => {
		expect(p.parse("Титлы 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kpv)", () => {
		expect(p.parse("Филимонлы 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kpv)", () => {
		expect(p.parse("Еврейяслы 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kpv)", () => {
		expect(p.parse("Яков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Як. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kpv)", () => {
		expect(p.parse("1 Петыр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петыр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ӧксыяслӧн Петыр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ӧксыяслӧн. Петыр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kpv)", () => {
		expect(p.parse("2 Петыр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петыр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ӧксыяслӧн Петыр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ӧксыяслӧн. Петыр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kpv)", () => {
		expect(p.parse("1Пет. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kpv)", () => {
		expect(p.parse("2Пет. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kpv)", () => {
		expect(p.parse("Иуда 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (kpv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kpv)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Ин. - 3 Иоан").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Ин. – 3 Иоан").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Ин. — 3 Иоан").osis()).toEqual("1John.1-3John.1");
	});
});

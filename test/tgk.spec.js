"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tgk.js";

describe("Localized book Gen (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tgk)", () => {
		expect(p.parse("Ҳастӣ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ҳас. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tgk)", () => {
		expect(p.parse("Хуруҷ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Хур. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tgk)", () => {
		expect(p.parse("Ибодат 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Иб. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tgk)", () => {
		expect(p.parse("Ададҳо 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ад. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tgk)", () => {
		expect(p.parse("Навҳаҳои Ирмиё 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Нав. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tgk)", () => {
		expect(p.parse("Ваҳй Юҳанно 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ошкорсозӣ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ваҳй 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ошк 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tgk)", () => {
		expect(p.parse("Такрори Шариат 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Так. Шар. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tgk)", () => {
		expect(p.parse("Еҳушаъ ибни Нун 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Еҳ. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tgk)", () => {
		expect(p.parse("Доварон 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Дов. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tgk)", () => {
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tgk)", () => {
		expect(p.parse("Ишаъё 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Иш. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Kgs (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tgk)", () => {
		expect(p.parse("3 Подшоҳон 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Подш. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tgk)", () => {
		expect(p.parse("4 Подшоҳон 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Подш. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tgk)", () => {
		expect(p.parse("1 Подшоҳон 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Подш. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Подшоҳон 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Подш. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tgk)", () => {
		expect(p.parse("2 Подшоҳон 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Подш. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Подшоҳон 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Подш. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tgk)", () => {
		expect(p.parse("1 Вақоеънома 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Вақ. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Вақоеънома 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Вақ. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tgk)", () => {
		expect(p.parse("2 Вақоеънома 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Вак. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Вақоеънома 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Вак. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tgk)", () => {
		expect(p.parse("Эзр. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Эзро 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tgk)", () => {
		expect(p.parse("Наҳемьё 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Наҳ. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tgk)", () => {
		expect(p.parse("Эстер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эст. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tgk)", () => {
		expect(p.parse("Айюб 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tgk)", () => {
		expect(p.parse("Забур 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Заб. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tgk)", () => {
		expect(p.parse("Масалҳо 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Мас. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tgk)", () => {
		expect(p.parse("Воиз 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tgk)", () => {
		expect(p.parse("Суруди Сурудҳо 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Сур. Сур. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tgk)", () => {
		expect(p.parse("Ирмиё 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ирм. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tgk)", () => {
		expect(p.parse("Ҳизқиёл 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ҳиз. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tgk)", () => {
		expect(p.parse("Дониёл 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дон. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tgk)", () => {
		expect(p.parse("Ҳушаъ 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ҳуш. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tgk)", () => {
		expect(p.parse("Юил 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tgk)", () => {
		expect(p.parse("Омӯс 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ом. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tgk)", () => {
		expect(p.parse("Убадьё 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Уб. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tgk)", () => {
		expect(p.parse("Юнус 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юн. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tgk)", () => {
		expect(p.parse("Мик. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мико 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tgk)", () => {
		expect(p.parse("Наҳум 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tgk)", () => {
		expect(p.parse("Ҳабаққуқ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ҳаб. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tgk)", () => {
		expect(p.parse("Сафаниё 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Саф. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tgk)", () => {
		expect(p.parse("Ҳаҷҷай 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ҳаҷ. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tgk)", () => {
		expect(p.parse("Закариё 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зак. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tgk)", () => {
		expect(p.parse("Малокӣ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tgk)", () => {
		expect(p.parse("Инҷили Матто 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матто 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tgk)", () => {
		expect(p.parse("Инҷили Марқӯс 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марқӯс 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марқ. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марқ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tgk)", () => {
		expect(p.parse("Инҷили Луқо 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Луқ. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Луқо 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Луқ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tgk)", () => {
		expect(p.parse("1Юҳ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tgk)", () => {
		expect(p.parse("2Юҳ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tgk)", () => {
		expect(p.parse("3 Юҳанно 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Юҳ. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Юҳ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tgk)", () => {
		expect(p.parse("Инҷили Юҳанно 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Юҳанно 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Юҳ. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Юҳ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tgk)", () => {
		expect(p.parse("1 Юҳанно 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Юҳ. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Юҳанно 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Юҳ. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tgk)", () => {
		expect(p.parse("2 Юҳанно 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Юҳ. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Юҳанно 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Юҳ. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tgk)", () => {
		expect(p.parse("Аъмоли Ҳаввориён 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Корнома 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Аъм. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kop 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Кф 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tgk)", () => {
		expect(p.parse("Нома ба Румиён 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Румиён 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рум. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рум 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tgk)", () => {
		expect(p.parse("1 ба Қӯринтиён 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Қӯринтиён 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Қӯр. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ба Қӯринтиён 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Қӯринтиён 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Қӯр. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tgk)", () => {
		expect(p.parse("2 ба Қӯринтиён 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Қӯринтиён 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Қӯр. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ба Қӯринтиён 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Қӯринтиён 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Қӯр. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tgk)", () => {
		expect(p.parse("1Қӯр 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tgk)", () => {
		expect(p.parse("2Қӯр 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tgk)", () => {
		expect(p.parse("Нома ба Қӯлассиён 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Қӯлассиён 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Қӯл. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Қӯл 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tgk)", () => {
		expect(p.parse("Нома ба Ғалотиён 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ғалотиён 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ғал. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ғал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tgk)", () => {
		expect(p.parse("Нома ба Эфсӯсиён 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфсӯсиён 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфс. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эф 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tgk)", () => {
		expect(p.parse("Нома ба Филиппиён 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филиппиён 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tgk)", () => {
		expect(p.parse("1 ба Таслӯникиён 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Таслӯникиён 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Тас. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ба Таслӯникиён 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Таслӯникиён 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Тас. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tgk)", () => {
		expect(p.parse("2 ба Таслӯникиён 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Таслӯникиён 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Тас. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ба Таслӯникиён 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Таслӯникиён 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Тас. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tgk)", () => {
		expect(p.parse("1Тас 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tgk)", () => {
		expect(p.parse("2Тас 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tgk)", () => {
		expect(p.parse("1 ба Тимотиюс 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимотиюс 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тим. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ба Тимотиюс 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимотиюс 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tgk)", () => {
		expect(p.parse("2 ба Тимотиюс 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимотиюс 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тим. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ба Тимотиюс 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимотиюс 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tgk)", () => {
		expect(p.parse("1Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tgk)", () => {
		expect(p.parse("2Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tgk)", () => {
		expect(p.parse("Нома ба Титус 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Титус 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tgk)", () => {
		expect(p.parse("Нома ба Филемӯн 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филемӯн 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филем. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Фм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tgk)", () => {
		expect(p.parse("ба Ибриён 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ибриён 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ибр. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ибр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tgk)", () => {
		expect(p.parse("Яъқуб 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Яъқ. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Яъқ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tgk)", () => {
		expect(p.parse("1 Петрус 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Пет. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петрус 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Пет. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tgk)", () => {
		expect(p.parse("2 Петрус 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Пет. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петрус 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Пет. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tgk)", () => {
		expect(p.parse("1Пет 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tgk)", () => {
		expect(p.parse("2Пет 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tgk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tgk)", () => {
		expect(p.parse("Яҳудо 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Яҳ. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Яҳ 1:1").osis()).toEqual("Jude.1.1");
	});
});

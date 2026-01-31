"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/udm.js";

describe("Localized book Gen (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (udm)", () => {
		expect(p.parse("Улон-вылон 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ул.-выл. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (udm)", () => {
		expect(p.parse("Потон 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Пот. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (udm)", () => {
		expect(p.parse("Левит 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (udm)", () => {
		expect(p.parse("Лыдпусъёс 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Лыд. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (udm)", () => {
		expect(p.parse("Сӥрах 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Сӥр. 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (udm)", () => {
		expect(p.parse("Соломонлэн Визьлык книгаез 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Визьл. 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (udm)", () => {
		expect(p.parse("Иеремиялэн бӧрдонэз 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Бӧрд. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (udm)", () => {
		expect(p.parse("Иеремиялэн ыстэм гожтэтэз 1:1").osis()).toEqual("EpJer.1.1");
		expect(p.parse("И.гож. 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (udm)", () => {
		expect(p.parse("Усьтӥськон 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Усьт. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (udm)", () => {
		expect(p.parse("Кыкетӥ Закон 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("2Зак. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (udm)", () => {
		expect(p.parse("Иисус Навин 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Нав. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (udm)", () => {
		expect(p.parse("Судьяос 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Суд. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (udm)", () => {
		expect(p.parse("Руф. 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Руфь 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book 1Esd (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Esd (udm)", () => {
		expect(p.parse("Ездралэн 2-тӥ книгаез 1:1").osis()).toEqual("1Esd.1.1");
		expect(p.parse("2Езд. 1:1").osis()).toEqual("1Esd.1.1");
	});
});
describe("Localized book 2Esd (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Esd (udm)", () => {
		expect(p.parse("Ездралэн 3-тӥ книгаез 1:1").osis()).toEqual("2Esd.1.1");
		expect(p.parse("3Езд. 1:1").osis()).toEqual("2Esd.1.1");
	});
});
describe("Localized book Isa (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (udm)", () => {
		expect(p.parse("Исаия 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ис. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (udm)", () => {
		expect(p.parse("1Экс. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (udm)", () => {
		expect(p.parse("2Экс. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (udm)", () => {
		expect(p.parse("3Экс. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (udm)", () => {
		expect(p.parse("2 4-тӥ книгазы 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. 4-тӥ книгазы 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Экс. 4-тӥ книгазы 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (udm)", () => {
		expect(p.parse("4Экс. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (udm)", () => {
		expect(p.parse("1 Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Экс. Паралипоменон 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (udm)", () => {
		expect(p.parse("2 Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Экс. Паралипоменон 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (udm)", () => {
		expect(p.parse("1Пар. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (udm)", () => {
		expect(p.parse("2Пар. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (udm)", () => {
		expect(p.parse("Ездра 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Езд. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (udm)", () => {
		expect(p.parse("Неемия 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Неем. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (udm)", () => {
		expect(p.parse("Есфирь 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Есф. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (udm)", () => {
		expect(p.parse("Иов 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (udm)", () => {
		expect(p.parse("Псалтирь 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Пс. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (udm)", () => {
		expect(p.parse("Мадёнъёс 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Мад. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (udm)", () => {
		expect(p.parse("Екклесиаст 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Еккл. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (udm)", () => {
		expect(p.parse("Кырӟанъёс пӧлысь кырӟан 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Кырӟ. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (udm)", () => {
		expect(p.parse("Иеремия 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Иер. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (udm)", () => {
		expect(p.parse("Иезекииль 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Иез. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (udm)", () => {
		expect(p.parse("Даниил 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (udm)", () => {
		expect(p.parse("Осия 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ос. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (udm)", () => {
		expect(p.parse("Иоил. 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Иоиль 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (udm)", () => {
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ам. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (udm)", () => {
		expect(p.parse("Авдия 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Авд. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (udm)", () => {
		expect(p.parse("Ион. 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Иона 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (udm)", () => {
		expect(p.parse("Михей 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мих. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (udm)", () => {
		expect(p.parse("Наум 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (udm)", () => {
		expect(p.parse("Аввакум 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Авв. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (udm)", () => {
		expect(p.parse("Софония 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Соф. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (udm)", () => {
		expect(p.parse("Аггей 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Агг. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (udm)", () => {
		expect(p.parse("Захария 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зах. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (udm)", () => {
		expect(p.parse("Малакия 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (udm)", () => {
		expect(p.parse("Матфей 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мф. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (udm)", () => {
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мк. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (udm)", () => {
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (udm)", () => {
		expect(p.parse("1Ин. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (udm)", () => {
		expect(p.parse("2Ин. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (udm)", () => {
		expect(p.parse("3 Иоанн 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ин. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (udm)", () => {
		expect(p.parse("1 Иоанн 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Иоанн 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Экс. Иоанн 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (udm)", () => {
		expect(p.parse("2 Иоанн 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Иоанн 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Экс. Иоанн 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (udm)", () => {
		expect(p.parse("Иоанн 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ин. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (udm)", () => {
		expect(p.parse("Апостолъёслэн ужъёссы 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ап.уж. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (udm)", () => {
		expect(p.parse("Римын улӥсьёслы 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (udm)", () => {
		expect(p.parse("1 Коринфын улӥсьёслы 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфын улӥсьёслы 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Экс. Коринфын улӥсьёслы 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (udm)", () => {
		expect(p.parse("2 Коринфын улӥсьёслы 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфын улӥсьёслы 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Экс. Коринфын улӥсьёслы 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (udm)", () => {
		expect(p.parse("1Кор. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (udm)", () => {
		expect(p.parse("2Кор. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (udm)", () => {
		expect(p.parse("Колоссыын улӥсьёслы 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (udm)", () => {
		expect(p.parse("Галатияын улӥсьёслы 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (udm)", () => {
		expect(p.parse("Ефесын улӥсьёслы 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Еф. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (udm)", () => {
		expect(p.parse("Филиппыын улӥсьёслы 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (udm)", () => {
		expect(p.parse("1 Фессалоникаын улӥсьёслы 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Фессалоникаын улӥсьёслы 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Экс. Фессалоникаын улӥсьёслы 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (udm)", () => {
		expect(p.parse("2 Фессалоникаын улӥсьёслы 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Фессалоникаын улӥсьёслы 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Экс. Фессалоникаын улӥсьёслы 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (udm)", () => {
		expect(p.parse("1Фес. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (udm)", () => {
		expect(p.parse("2Фес. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (udm)", () => {
		expect(p.parse("1 Тимофейлы 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофейлы 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Экс. Тимофейлы 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (udm)", () => {
		expect(p.parse("2 Тимофейлы 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофейлы 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Экс. Тимофейлы 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (udm)", () => {
		expect(p.parse("1Тим. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (udm)", () => {
		expect(p.parse("2Тим. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (udm)", () => {
		expect(p.parse("Титлы 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (udm)", () => {
		expect(p.parse("Филимонлы 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филим. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (udm)", () => {
		expect(p.parse("Еврейёслы 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (udm)", () => {
		expect(p.parse("Иаков 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Иак. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (udm)", () => {
		expect(p.parse("1 Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Экс. Петр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (udm)", () => {
		expect(p.parse("2 Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Экс. Петр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (udm)", () => {
		expect(p.parse("1Пет. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (udm)", () => {
		expect(p.parse("2Пет. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (udm)", () => {
		expect(p.parse("Иуд. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Иуда 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (udm)", () => {
		expect(p.parse("Товит 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Тов. 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (udm)", () => {
		expect(p.parse("Иудифь 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("И-фь 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (udm)", () => {
		expect(p.parse("Варух 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Вар. 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (udm)", () => {
		expect(p.parse("Маккавейёслэн 1-тӥ книгазы 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1Макк. 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 1Sam (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (udm)", () => {
		expect(p.parse("1 1-тӥ книгазы 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. 1-тӥ книгазы 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Экс. 1-тӥ книгазы 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Macc (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (udm)", () => {
		expect(p.parse("Маккавейёслэн 2-тӥ книгазы 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2Макк. 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book 2Sam (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (udm)", () => {
		expect(p.parse("2 2-тӥ книгазы 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. 2-тӥ книгазы 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Экс. 2-тӥ книгазы 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 3Macc (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3Macc (udm)", () => {
		expect(p.parse("Маккавейёслэн 3-тӥ книгазы 1:1").osis()).toEqual("3Macc.1.1");
		expect(p.parse("3Макк. 1:1").osis()).toEqual("3Macc.1.1");
	});
});
describe("Localized book 1Kgs (udm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (udm)", () => {
		expect(p.parse("1 3-тӥ книгазы 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. 3-тӥ книгазы 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Экс. 3-тӥ книгазы 1:1").osis()).toEqual("1Kgs.1.1");
	});
});

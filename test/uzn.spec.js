"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/uzn.js";

describe("Localized book Gen (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (uzn)", () => {
		expect(p.parse("Ibtido 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ибтидо 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ibt 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ибт 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (uzn)", () => {
		expect(p.parse("Chiqish 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Чиқиш 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Chq 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Чқш 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (uzn)", () => {
		expect(p.parse("Levilar 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Левилар 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лев 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (uzn)", () => {
		expect(p.parse("Sahroda 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Саҳрода 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Sah 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Саҳ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (uzn)", () => {
		expect(p.parse("Marsiya 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Марсия 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mrs 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Мрс 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (uzn)", () => {
		expect(p.parse("Vahiy 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ваҳий 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Vah 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ваҳ 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (uzn)", () => {
		expect(p.parse("Qonunlar 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Қонунлар 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Qnlr 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Қнлр 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (uzn)", () => {
		expect(p.parse("Yoshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ysha 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ёшуа 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (uzn)", () => {
		expect(p.parse("Hakamlar 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ҳакамлар 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Hak 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ҳак 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (uzn)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (uzn)", () => {
		expect(p.parse("Ishayo 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isha 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ишаё 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Иша 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (uzn)", () => {
		expect(p.parse("1Sh 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Шҳ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (uzn)", () => {
		expect(p.parse("2Sh 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Шҳ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (uzn)", () => {
		expect(p.parse("3 Shohlar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Шоҳлар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3Sh 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3Шҳ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (uzn)", () => {
		expect(p.parse("4 Shohlar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Шоҳлар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4Sh 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4Шҳ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (uzn)", () => {
		expect(p.parse("1 Shohlar 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Шоҳлар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Shohlar 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Шоҳлар 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (uzn)", () => {
		expect(p.parse("2 Shohlar 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Шоҳлар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Shohlar 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Шоҳлар 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (uzn)", () => {
		expect(p.parse("1 Solnomalar 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Солномалар 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Solnomalar 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Солномалар 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (uzn)", () => {
		expect(p.parse("2 Solnomalar 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Солномалар 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Solnomalar 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Солномалар 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (uzn)", () => {
		expect(p.parse("1Sol 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Сол 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (uzn)", () => {
		expect(p.parse("2Sol 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Сол 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (uzn)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Эзра 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (uzn)", () => {
		expect(p.parse("Naximiyo 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нахимиё 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nax 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нах 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (uzn)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эстер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эст 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (uzn)", () => {
		expect(p.parse("Ayub 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Аюб 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (uzn)", () => {
		expect(p.parse("Zabur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Забур 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zab 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Заб 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (uzn)", () => {
		expect(p.parse("Hikmatlar 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ҳикматлар 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Hik 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ҳик 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (uzn)", () => {
		expect(p.parse("Voiz 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Воиз 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (uzn)", () => {
		expect(p.parse("Qoʻshiq 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Қўшиқ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Qshq 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Қшқ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (uzn)", () => {
		expect(p.parse("Yeremiyo 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Еремиё 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yerm 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ерм 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (uzn)", () => {
		expect(p.parse("Hizqiyol 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ҳизқиёл 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hiz 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ҳиз 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (uzn)", () => {
		expect(p.parse("Doniyor 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дониёр 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dnr 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Днр 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (uzn)", () => {
		expect(p.parse("Xoʻsheya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Хўшея 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Xsha 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Хшя 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (uzn)", () => {
		expect(p.parse("Yoʻel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Йўэл 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (uzn)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (uzn)", () => {
		expect(p.parse("Obodiyo 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ободиё 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Обд 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (uzn)", () => {
		expect(p.parse("Yunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юнус 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юнс 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (uzn)", () => {
		expect(p.parse("Mixo 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Михо 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (uzn)", () => {
		expect(p.parse("Noxum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Нохум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nox 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Нох 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (uzn)", () => {
		expect(p.parse("Xabaqquq 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хабаққуқ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Xbq 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хбқ 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (uzn)", () => {
		expect(p.parse("Zafaniyo 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Зафаниё 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zfn 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Зфн 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (uzn)", () => {
		expect(p.parse("Xaggey 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хаггей 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Xag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хаг 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (uzn)", () => {
		expect(p.parse("Zakariyo 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Закариё 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zkr 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зкр 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (uzn)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малаки 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (uzn)", () => {
		expect(p.parse("Matto 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матто 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (uzn)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (uzn)", () => {
		expect(p.parse("Luqo 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Луқо 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (uzn)", () => {
		expect(p.parse("1Yuh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Юҳ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (uzn)", () => {
		expect(p.parse("2Yuh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Юҳ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (uzn)", () => {
		expect(p.parse("3 Yuhanno 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Юҳанно 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yuh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Юҳ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (uzn)", () => {
		expect(p.parse("1 Yuhanno 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Юҳанно 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuhanno 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Юҳанно 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (uzn)", () => {
		expect(p.parse("2 Yuhanno 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Юҳанно 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuhanno 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Юҳанно 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (uzn)", () => {
		expect(p.parse("Yuhanno 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Юҳанно 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuhn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Юҳн 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (uzn)", () => {
		expect(p.parse("Havoriylar 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ҳаворийлар 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hav 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ҳав 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (uzn)", () => {
		expect(p.parse("Rimliklar 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римликлар 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rim 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (uzn)", () => {
		expect(p.parse("1 Korinfliklar 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринфликлар 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinfliklar 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфликлар 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (uzn)", () => {
		expect(p.parse("2 Korinfliklar 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринфликлар 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinfliklar 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфликлар 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (uzn)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (uzn)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (uzn)", () => {
		expect(p.parse("Kolosaliklar 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колосаликлар 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (uzn)", () => {
		expect(p.parse("Galatiyaliklar 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатияликлар 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (uzn)", () => {
		expect(p.parse("Efesliklar 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфесликлар 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфс 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (uzn)", () => {
		expect(p.parse("Filippiliklar 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филиппиликлар 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Флп 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (uzn)", () => {
		expect(p.parse("1 Salonikaliklar 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Салоникаликлар 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Salonikaliklar 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Салоникаликлар 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (uzn)", () => {
		expect(p.parse("2 Salonikaliklar 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Салоникаликлар 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Salonikaliklar 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Салоникаликлар 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (uzn)", () => {
		expect(p.parse("1Sal 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Сал 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (uzn)", () => {
		expect(p.parse("2Sal 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Сал 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (uzn)", () => {
		expect(p.parse("1 Timoʻtiy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимўтий 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoʻtiy 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимўтий 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (uzn)", () => {
		expect(p.parse("2 Timoʻtiy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимўтий 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoʻtiy 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимўтий 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (uzn)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (uzn)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (uzn)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Титус 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (uzn)", () => {
		expect(p.parse("Filimoʻn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимўн 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (uzn)", () => {
		expect(p.parse("Ibroniylar 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ибронийлар 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ибр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (uzn)", () => {
		expect(p.parse("Yoqub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yoqb 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ёқуб 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (uzn)", () => {
		expect(p.parse("1 Butrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Бутрус 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Butrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Бутрус 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (uzn)", () => {
		expect(p.parse("2 Butrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Бутрус 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Butrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Бутрус 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (uzn)", () => {
		expect(p.parse("1Btr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Бтр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (uzn)", () => {
		expect(p.parse("2Btr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Бтр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (uzn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (uzn)", () => {
		expect(p.parse("Yahudo 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Яҳудо 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yahd 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Яҳд 1:1").osis()).toEqual("Jude.1.1");
	});
});

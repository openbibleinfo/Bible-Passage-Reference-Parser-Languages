"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kaa.js";

describe("Localized book Gen (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kaa)", () => {
		expect(p.parse("Jaratılıs 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Жаратылыс 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jar 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Жар 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kaa)", () => {
		expect(p.parse("Shıǵıw 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Шығыў 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Shıǵ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Шығ 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kaa)", () => {
		expect(p.parse("Lebiyliler 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Лебийлилер 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leb 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Леб 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kaa)", () => {
		expect(p.parse("Sanlar 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Санлар 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("San 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Сан 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kaa)", () => {
		expect(p.parse("Joqlaw 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Жоқлаў 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Joq 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Жоқ 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kaa)", () => {
		expect(p.parse("Ayan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Аян 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kaa)", () => {
		expect(p.parse("Nızamnıń qaytalanıwı 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Нызамның қайталаныўы 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Nzm 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Нзм 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kaa)", () => {
		expect(p.parse("Eshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Eshu 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ешуа 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ешу 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kaa)", () => {
		expect(p.parse("Biyler 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Бийлер 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Biy 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Бий 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kaa)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kaa)", () => {
		expect(p.parse("Iyshaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ийшая 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Iysh 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ийш 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kaa)", () => {
		expect(p.parse("1Pat 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Пат 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kaa)", () => {
		expect(p.parse("2Pat 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Пат 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kaa)", () => {
		expect(p.parse("3 Patshalar 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3 Патшалар 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3Pat 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("3Пат 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kaa)", () => {
		expect(p.parse("4 Patshalar 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4 Патшалар 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4Pat 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("4Пат 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Sam (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kaa)", () => {
		expect(p.parse("1 Patshalar 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Патшалар 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Patshalar 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Патшалар 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kaa)", () => {
		expect(p.parse("2 Patshalar 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Патшалар 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Patshalar 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Патшалар 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Chr (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kaa)", () => {
		expect(p.parse("1 Jılnama 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Жылнама 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Jılnama 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Жылнама 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kaa)", () => {
		expect(p.parse("2 Jılnama 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Жылнама 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Jılnama 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Жылнама 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kaa)", () => {
		expect(p.parse("1Jln 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Жлн 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kaa)", () => {
		expect(p.parse("2Jln 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Жлн 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kaa)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Эзра 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Эзр 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kaa)", () => {
		expect(p.parse("Nexemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нехемия 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nxm 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Нхм 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kaa)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эстер 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Эст 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kaa)", () => {
		expect(p.parse("Ayup 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Аюп 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kaa)", () => {
		expect(p.parse("Zabur 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Забур 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Zab 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Заб 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kaa)", () => {
		expect(p.parse("Hikmetler 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ҳикметлер 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Hkm 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ҳкм 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kaa)", () => {
		expect(p.parse("Wazshı 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ўазшы 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Waz 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ўаз 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kaa)", () => {
		expect(p.parse("Qosıqlar qosıǵı 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Қосықлар қосығы 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Qsq 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Қсқ 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kaa)", () => {
		expect(p.parse("Eremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Еремия 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Erm 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ерм 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kaa)", () => {
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езекиел 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Езк 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kaa)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Даниел 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Дан 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kaa)", () => {
		expect(p.parse("Hoshea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ҳошеа 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosh 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ҳош 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kaa)", () => {
		expect(p.parse("Ioel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Иоел 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Iol 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Иол 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kaa)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амос 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Амо 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kaa)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Обадия 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Обд 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kaa)", () => {
		expect(p.parse("Yunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yuns 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юнус 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Юнс 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kaa)", () => {
		expect(p.parse("Mixa 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Миха 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mix 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Мих 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kaa)", () => {
		expect(p.parse("Naxum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Нахум 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nax 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Нах 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kaa)", () => {
		expect(p.parse("Xabaqquq 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хабаққуқ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Xab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Хаб 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kaa)", () => {
		expect(p.parse("Sefaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Сефания 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Сеф 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kaa)", () => {
		expect(p.parse("Xaggay 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хаггай 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Xag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Хаг 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kaa)", () => {
		expect(p.parse("Zexariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зехария 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zxr 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Зхр 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kaa)", () => {
		expect(p.parse("Malaxiya 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Малахия 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Мал 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kaa)", () => {
		expect(p.parse("Matta 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Матта 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Мат 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kaa)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Марк 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Мрк 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kaa)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лука 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лук 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kaa)", () => {
		expect(p.parse("Юх. 1-х. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yuxn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Юхн 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kaa)", () => {
		expect(p.parse("Юх. 2-х. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yuxn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Юхн 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kaa)", () => {
		expect(p.parse("Юх. 3-х. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yuxan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Юхан 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yuxn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Юхн 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kaa)", () => {
		expect(p.parse("1 Yuxan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Юхан 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yuxan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Юхан 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kaa)", () => {
		expect(p.parse("2 Yuxan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Юхан 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yuxan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Юхан 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kaa)", () => {
		expect(p.parse("Yuxan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yuxn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Юхан 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Юхн 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kaa)", () => {
		expect(p.parse("Elshiler 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Елшилер 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Elsh 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Елш 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kaa)", () => {
		expect(p.parse("Rimliler 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Римлилер 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rim 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Рим 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kaa)", () => {
		expect(p.parse("1 Korinfliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Коринфлилер 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinfliler 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Коринфлилер 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kaa)", () => {
		expect(p.parse("2 Korinfliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Коринфлилер 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinfliler 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Коринфлилер 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kaa)", () => {
		expect(p.parse("Кор. 1-х. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Кор 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kaa)", () => {
		expect(p.parse("Кор. 2-х. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Кор 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kaa)", () => {
		expect(p.parse("Kolosalılar 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колосалылар 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Колоса. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Кол 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kaa)", () => {
		expect(p.parse("Galatiyalılar 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галатиялылар 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Галат 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Гал 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kaa)", () => {
		expect(p.parse("Efesliler 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфеслилер 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ефес. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Эфс 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kaa)", () => {
		expect(p.parse("Filipliler 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филиплилер 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Филип. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Фил 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kaa)", () => {
		expect(p.parse("1 Salonikalılar 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Салоникалылар 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Salonikalılar 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Салоникалылар 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kaa)", () => {
		expect(p.parse("2 Salonikalılar 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Салоникалылар 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Salonikalılar 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Салоникалылар 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kaa)", () => {
		expect(p.parse("Сал. 1-х. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Sal 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Сал 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kaa)", () => {
		expect(p.parse("Сал. 2-х. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Sal 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Сал 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kaa)", () => {
		expect(p.parse("1 Timofey 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Тимофей 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timofey 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Тимофей 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kaa)", () => {
		expect(p.parse("2 Timofey 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Тимофей 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timofey 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Тимофей 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kaa)", () => {
		expect(p.parse("Тимоф. 1-х. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Тим 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kaa)", () => {
		expect(p.parse("Тимоф. 2-х. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Тим 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kaa)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Титус 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Тит 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kaa)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филимон 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Филим. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Флм 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kaa)", () => {
		expect(p.parse("Evreyler 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Еврейлер 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Еврей. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Evr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Евр 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kaa)", () => {
		expect(p.parse("Yaqıp 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaqp 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Яқып 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Яқп 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kaa)", () => {
		expect(p.parse("Петр 1-х. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Пет 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kaa)", () => {
		expect(p.parse("Петр 2-х. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Пет 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kaa)", () => {
		expect(p.parse("1 Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Петр 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Петр 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kaa)", () => {
		expect(p.parse("2 Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Петр 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Петр 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kaa)", () => {
		expect(p.parse("Yahuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Яҳуда 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yahu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Яҳу 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (kaa)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (kaa)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle book ranges (kaa)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kaa)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Юх. 1-х. - Юх. 3-х.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Юх. 1-х. – Юх. 3-х.").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("Юх. 1-х. — Юх. 3-х.").osis()).toEqual("1John.1-3John.1");
	});
});

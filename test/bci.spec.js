"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bci.js";

describe("Localized book Gen (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bci)", () => {
		expect(p.parse("Bo Bolɛ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Bob 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bci)", () => {
		expect(p.parse("Ezipt Lɔ Tulɛ'n 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Tul 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bci)", () => {
		expect(p.parse("Saun Yolɛ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Sau 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bci)", () => {
		expect(p.parse("Kalɛ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bci)", () => {
		expect(p.parse("Ngwlɛ Yilɛ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ngw 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bci)", () => {
		expect(p.parse("Sa nglô yile 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sa Nglo Yilɛ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Snyil 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ngl 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bci)", () => {
		expect(p.parse("Mmla'n 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Mml 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bci)", () => {
		expect(p.parse("Zozie 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Zoz 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bci)", () => {
		expect(p.parse("Jɔlɛ Difuɛ Mun 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jɔl 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bci)", () => {
		expect(p.parse("Rit 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bci)", () => {
		expect(p.parse("Ezai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Eza 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bci)", () => {
		expect(p.parse("1 Samiɛl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samiɛl 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bci)", () => {
		expect(p.parse("2 Samiɛl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samiɛl 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bci)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bci)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bci)", () => {
		expect(p.parse("1 Famiɛn Mun 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Famiɛn Mun 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bci)", () => {
		expect(p.parse("2 Famiɛn Mun 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Famiɛn Mun 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bci)", () => {
		expect(p.parse("1Fam 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bci)", () => {
		expect(p.parse("2Fam 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bci)", () => {
		expect(p.parse("1 Be Nyoliɛ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Be Nyoliɛ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bci)", () => {
		expect(p.parse("2 Be Nyoliɛ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Be Nyoliɛ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bci)", () => {
		expect(p.parse("1Nyo 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bci)", () => {
		expect(p.parse("2Nyo 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bci)", () => {
		expect(p.parse("Ɛsdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛsd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bci)", () => {
		expect(p.parse("Neemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nee 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bci)", () => {
		expect(p.parse("Ɛstɛr 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ɛst 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bci)", () => {
		expect(p.parse("Zɔb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bci)", () => {
		expect(p.parse("Jue Mun 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Jue 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bci)", () => {
		expect(p.parse("Nyanndra Mun 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Nya 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bci)", () => {
		expect(p.parse("Akunndanfuɛ'n 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Aku 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bci)", () => {
		expect(p.parse("Ngɔjue Fɛfɛ Kpa'n 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Fɛf 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bci)", () => {
		expect(p.parse("Zeremi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Zer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bci)", () => {
		expect(p.parse("Ezekiɛl 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bci)", () => {
		expect(p.parse("Daniɛl 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bci)", () => {
		expect(p.parse("Oze 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bci)", () => {
		expect(p.parse("Zoɛl 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Zoɛ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bci)", () => {
		expect(p.parse("Amɔs 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amɔ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bci)", () => {
		expect(p.parse("Abdias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bci)", () => {
		expect(p.parse("Zonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Zon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bci)", () => {
		expect(p.parse("Mise 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mis 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bci)", () => {
		expect(p.parse("Naɔm 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naɔ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bci)", () => {
		expect(p.parse("Abakik 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Aba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bci)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bci)", () => {
		expect(p.parse("Aze 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bci)", () => {
		expect(p.parse("Zakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zkr 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bci)", () => {
		expect(p.parse("Malasi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bci)", () => {
		expect(p.parse("Matthieu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matie 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matt 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bci)", () => {
		expect(p.parse("Marc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bci)", () => {
		expect(p.parse("Lik 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bci)", () => {
		expect(p.parse("1Zan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bci)", () => {
		expect(p.parse("2Zan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bci)", () => {
		expect(p.parse("3 Jean 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Zan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Zan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bci)", () => {
		expect(p.parse("1 Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Zan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jean 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Zan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bci)", () => {
		expect(p.parse("2 Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Zan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jean 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Zan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bci)", () => {
		expect(p.parse("Jean 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Zan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bci)", () => {
		expect(p.parse("Sa Nga Be Yoli'n 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Sa nga bé yôli'n 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Sa nga 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Yol 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bci)", () => {
		expect(p.parse("Romefue mun 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rɔmfuɛ Mun 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rɔm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bci)", () => {
		expect(p.parse("1 Corinthefue mun 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korɛntfuɛ Mun 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinthefue mun 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korɛntfuɛ Mun 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bci)", () => {
		expect(p.parse("2 Corinthefue mun 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korɛntfuɛ Mun 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinthefue mun 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korɛntfuɛ Mun 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bci)", () => {
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bci)", () => {
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bci)", () => {
		expect(p.parse("Colossesfue mun 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolɔsfuɛ Mun 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bci)", () => {
		expect(p.parse("Galatiefue mun 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galasifuɛ Mun 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bci)", () => {
		expect(p.parse("ÉphÈsefue mun 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛzfuɛ Mun 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efɛ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Éph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bci)", () => {
		expect(p.parse("Philippesfue mun 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipfuɛ Mun 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bci)", () => {
		expect(p.parse("1 Thessaloniquefue mun 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tɛsalonikfuɛ Mun 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Th 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessaloniquefue mun 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tɛsalonikfuɛ Mun 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bci)", () => {
		expect(p.parse("2 Thessaloniquefue mun 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tɛsalonikfuɛ Mun 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Th 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessaloniquefue mun 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tɛsalonikfuɛ Mun 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bci)", () => {
		expect(p.parse("1Tɛs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bci)", () => {
		expect(p.parse("2Tɛs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bci)", () => {
		expect(p.parse("1 Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothée 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bci)", () => {
		expect(p.parse("2 Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothée 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bci)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bci)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bci)", () => {
		expect(p.parse("Tite 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bci)", () => {
		expect(p.parse("Philémon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bci)", () => {
		expect(p.parse("Ebre Mun 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hébreu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Héb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bci)", () => {
		expect(p.parse("Jacques 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jacq 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bci)", () => {
		expect(p.parse("1 Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Piɛr 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pierre 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piɛr 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bci)", () => {
		expect(p.parse("2 Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Piɛr 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pierre 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piɛr 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bci)", () => {
		expect(p.parse("1Piɛ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bci)", () => {
		expect(p.parse("2Piɛ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bci)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bci)", () => {
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Zid 1:1").osis()).toEqual("Jude.1.1");
	});
});
